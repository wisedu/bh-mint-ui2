<template>
  <div class="mint-picker mt-bg-lv3">
    <div class="mint-picker__toolbar mt-bColor-grey-lv6" v-if="showToolbar">
      <slot>
        <div class="mint-picker__cancel mt-color-grey" @click="emit('cancel')"><i v-if="!cancelText" class="iconfont icon-close"></i><span class="mt-color-theme">{{cancelText}}</span></div>
        <div class="mint-picker__confirm  mt-color-theme" @click="emit('confirm')">{{ confirmText }}</div>
        <div class="mint-picker__confirm  mt-color-theme" v-if="showClear" @click="$emit('clear')">{{clearText}}</div>
        <div class="mint-picker__title  mt-color-grey" v-if="title" v-text="title" />
      </slot>
    </div>
    <div class="mint-picker__columns">
      <mt-picker-column
        v-for="(item, index) in currentColumns"
        :key="index"
        :valueKey="valueKey"
        :columnIndex="index"
        :options="item.values"
        :className="item.className"
        :defaultIndex="item.defaultIndex"
        :itemHeight="itemHeight"
        :visibileColumnCount="visibileColumnCount"
        :isInterrelated="isInterrelated"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script>
import Column from './PickerColumn';
export default {
  name: 'mt-picker',
  components: {
    [Column.name]: Column
  },
  props: {
    title: String,
    valueKey: {
      type: String,
      default: 'text'
    },
    itemHeight: Number,
    showToolbar: Boolean,
    visibileColumnCount: Number,
    columns: {
      type: Array,
      default: () => []
    },
    cancelText: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    clearText: {
      type: String,
      default: ''
    },
    showClear: {
      type: Boolean,
      default: false
    },
    isInterrelated: Boolean
  },
  data() {
    return {
      children: [],
      currentColumns: []
    };
  },
  created() {
    this.initColumns();
    this.$nextTick(()=>{
      this.onChange(0);
    });
  },
  watch: {
    columns() {
      this.initColumns();
    },
  },
  methods: {
    initColumns() {
      const columns = JSON.parse(JSON.stringify(this.columns));
      if(columns.length){
        this.isSimpleColumn = columns.length && !columns[0].values;
        this.currentColumns = this.isSimpleColumn ? [{ values: columns }] : columns;
        if(this.isInterrelated){
          let showData = columns;
          let len = showData.length;
          //初始化各级选项列
          for(let i=0;i<len;i++){
            if(i>0){
              let id_pre = "id_"+(i-1);
              if(showData[i-1].defaultIndex){
                id_pre = showData[i-1].values[showData[i-1].defaultIndex].id;
              }else{
                id_pre = showData[i-1].values[0].id;
              }
              let currentColumn=[];
              for(let j=0;j<showData[i].values.length;j++){
                if(showData[i].values[j].pid === id_pre) currentColumn.push(showData[i].values[j]);
              }
              showData[i].values = currentColumn;
            }
          }
          this.currentColumns = showData;
        }
      }
    },
    emit(event) {
      if (this.isSimpleColumn) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0), this);
      } else {
        this.$emit(event, this.getValues(), this.getIndexes(), this);
      }
    },
    onChange(columnIndex,lineIndex) {
      if (this.isSimpleColumn) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        if(this.isInterrelated){
          const columns = JSON.parse(JSON.stringify(this.columns));
          if(columns&&!columns.length) return;
          const len = columns.length;
          var showData = columns;
          let id_1 = this.getValues()[0].id;
          let secondColumn=[];
          for(let i=0;i<showData[1].values.length;i++){
            if(showData[1].values[i].pid === id_1) secondColumn.push(showData[1].values[i]);
          }
          showData[1].values = secondColumn;
          if(showData.length === 3 ){
            let thirdColumn = [];
            if(secondColumn.length){
              let id_2;
              if(columnIndex === 0){
                id_2 = secondColumn[0].id;
              }else if(columnIndex === 1){
                id_2 = secondColumn[lineIndex].id;
              }else{
                return
              }
              for(let i=0;i<showData[2].values.length;i++){
                if(showData[2].values[i].pid === id_2) thirdColumn.push(showData[2].values[i]);
              }
            }
            if(thirdColumn.length){
              showData[2].values = thirdColumn;
            }else{
              showData.pop(showData[2]);
            }
          }
          this.currentColumns = showData;
        }else{
          this.$emit('change', this, this.getValues(),columnIndex,lineIndex);
        }
      }
    },
    // get column instance by index
    getColumn(index) {
      return this.children[index];
    },
    // get column value by index
    getColumnValue(index) {
      return (this.getColumn(index) || {}).currentValue;
    },
    // set column value by index
    setColumnValue(index, value) {
      const column = this.getColumn(index);
      column && column.setValue(value);
    },
    // get column option index by column index
    getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // set column option index by column index
    setColumnIndex(columnIndex, optionIndex) {
      const column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // get options of column by index
    getColumnValues(index) {
      return (this.currentColumns[index] || {}).values;
    },
    // set options of column by index
    setColumnValues(index, options) {
      const column = this.currentColumns[index];
      if (column) {
        column.values = options;
      }
    },
    // get values of all columns
    getValues() {
      return this.children.map(child => child.currentValue);
    },
    // set values of all columns
    setValues(values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value);
      });
    },
    // get indexes of all columns
    getIndexes() {
      return this.children.map(child => child.currentIndex);
    },
    // set indexes of all columns
    setIndexes(indexes) {
      indexes.forEach((optionIndex, columnIndex) => {
        this.setColumnIndex(columnIndex, optionIndex);
      });
    }
  }
};
</script>
<style lang="css">
  @import "../../../src/style/hairline.css";
  .mint-picker {
    overflow: hidden;
    user-select: none;

    &__toolbar {
      padding: 13px 0;
      font-size: 18px;
      line-height: 1;
      overflow: hidden;
      border-bottom-width: 1x;
      border-bottom-style: solid;
    }

    &__cancel,
    &__confirm {
      padding: 0 15px;

      &:active {
        opacity:0.6;
      }
    }

    &__cancel {
      float: left;
      height: 18px;
      .iconfont{
        font-size:30px;
        display:inline-block;
        margin-top:-4px;
      }
    }

    &__confirm {
      float: right;
    }

    &__title {
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &__columns {
      display: flex;
      position: relative;
    }

    &-column {
      flex: 1;
      overflow: hidden;
      font-size: 18px;
      position: relative;
      text-align: center;

      ul {
        box-sizing: border-box;
      }

      li {
        padding: 0 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      li&--disabled {
        opacity: .3;
      }

      &__frame {
        top: 50%;
        left: 0;
        width: 100%;
        z-index: 2002;
        position: absolute!important;
        pointer-events: none;
        transform: translate3d(0,-50%,0);
      }
    }
  }
</style>