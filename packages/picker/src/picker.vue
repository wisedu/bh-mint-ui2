<template>
  <div class="mint-picker">
    <div class="mint-picker__toolbar mint-hairline--top-bottom" v-if="showToolbar">
      <slot>
        <div class="mint-picker__cancel" @click="emit('cancel')">{{ cancelText }}</div>
        <div class="mint-picker__confirm" @click="emit('confirm')">{{ confirmText }}</div>
        <div class="mint-picker__title" v-if="title" v-text="title" />
      </slot>
    </div>
    <div class="mint-picker__columns">
      <mt-picker-column
        v-for="(item, index) in currentColumns"
        :key="index"
        :valueKey="valueKey"
        :options="item.values"
        :className="item.className"
        :defaultIndex="item.defaultIndex"
        :itemHeight="itemHeight"
        :visibileColumnCount="visibileColumnCount"
        @change="onChange(index)"
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
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    }
  },
  data() {
    return {
      children: [],
      currentColumns: []
    };
  },
  created() {
    this.initColumns();
  },
  watch: {
    columns() {
      this.initColumns();
    },
  },
  methods: {
    initColumns() {
      const columns = JSON.parse(JSON.stringify(this.columns));
      this.isSimpleColumn = columns.length && !columns[0].values;
      this.currentColumns = this.isSimpleColumn ? [{ values: columns }] : columns;
    },
    emit(event) {
      if (this.isSimpleColumn) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange(columnIndex) {
      if (this.isSimpleColumn) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
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
  @import "../../../src/style/var.css";

  .mint-picker {
    overflow: hidden;
    user-select: none;
    background-color: $color-white;

    &__toolbar {
      height: 40px;
      line-height: 40px;
      overflow: hidden;
    }

    &__cancel,
    &__confirm {
      color: $success-color;
      padding: 0 15px;

      &:active {
        background-color: $color-green;
      }
    }

    &__cancel {
      float: left;
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
        color: $grey-lv1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      li&--selected {
        color: $theme-lv1;
      }

      li&--disabled {
        opacity: .3;
      }

      &__frame {
        top: 50%;
        left: 0;
        width: 100%;
        z-index: 1;
        position: absolute;
        pointer-events: none;
        transform: translateY(-50%);
      }
    }
  }
</style>