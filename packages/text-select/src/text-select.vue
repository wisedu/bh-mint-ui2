<template>
  <mt-cell :title="label" @click.native="handleDisplayClick" isLink :disabledcolor="readonly||disabled">
    <div class="select-value">
      <template>{{singleSelectDisplay()}}</template>
    </div>
    <transition name="slide">
      <div class="select-container mt-bg-lv1" :style="{height: cHeight + 'px'}" v-show="selectorShow" @click.stop>
        <template>
          <div class="select-container-title mt-color-grey-lv3">{{label+"："}}</div>
          <mt-textarea :placeholder="placeholder" v-model="currentValue" :rows="rows"  wrapperpaddingleft="15px" :readonly="true"></mt-textarea>
          <div class="select-container-buttons">
            <div class="select-container-button" :class="[opt.active?'mt-bColor-primary mt-color-primary mt-bg-primary-opacity1':'mt-bColor-grey-lv4 mt-color-grey-lv2 mt-bg-lv3']"  v-for="opt in options" @click="selectOption(opt)">{{opt.name}}
            </div>
          </div>
          <div class="select-container-confirm">
            <mt-button size="large" type="primary" @click.native="selectorShow=false">确定</mt-button>
          </div>
        </template>
      </div>
    </transition>
  </mt-cell>
</template>
<script>
/**
 * @event selector-click - 点击选择器触发的事件
 */
/* eslint-disable */

/**
 * @noteType component
 * @name TextSelect
 * @tagName mt-text-select
 * @desc 文本域(带选项)
 * @wrapClassName mint-text-select
 * @html
 * <mt-text-select label="标题文字"></mt-text-select>
 */
export default {
  name: 'mt-text-select',
  props: {
    value: { default: '' },
    // url: { type: String, default: '' },
    /**
       * @noteType prop
       * @field rows
       * @desc 行数
       * @type input
       * @value 4
       */
    rows: String,
    /**
       * @noteType prop
       * @field rows
       * @desc 行数
       * @type input
       * @value 100
       */
    maxlength: String,
    /**
     * @noteType prop
     * @field label
     * @desc 标题
     * @type input
     * @value 标题
     */
    label: { type: String, required: true },
    /**
     * @noteType prop
     * @field placeholder
     * @desc 占位文本
     * @type input
     * @value 请选择
     */
    placeholder: { type: String, default: '请选择' },
    /**
     * @noteType prop
     * @field options
     * @desc 选项字典数据
     * @type textarea
     * @value
     */
    options: { type: Array, required: true },
    disabled: Boolean,
    readonly: Boolean,
    attr: Object
  },
  data() {
    return {
      selectorShow: false,
      currentValue: ""
    };
  },
  watch: {
    attr: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const target = [this.$refs.input, this.$refs.textarea];
          target.forEach(el => {
            if (!el || !attrs) return;
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
          });
        });
      }
    }
  },
  computed: {
    cHeight () {
      return document.documentElement.clientHeight
    }
  },
  methods: {
    handleDisplayClick(e) {
      if (this.disabled || this.readonly) return;
      this.$emit('selector-click', e)
      history.pushState('', null, '#/smile-select');
      this.selectorShow = true;
    },
    historyChange(e) {
      this.selectorShow = false;
    },
    selectOption(opt){
      if(opt.active){
        opt.active = false;
        let currentValueArray = this.currentValue.split('，');
        let _index = currentValueArray.indexOf(opt.name);
        currentValueArray.splice(_index,1);
        if(currentValueArray.length){
          this.currentValue = currentValueArray.join("，");
        }else{
          this.currentValue = "";
        }
      }else{
        opt.active = true;
        this.currentValue += this.currentValue?"，" + opt.name:opt.name;
      }
      this.$emit('input', this.currentValue);
    },
    singleSelectDisplay () {
      if (this.value === ''){
        this.options.forEach(function(value){
          value.active=false;
        });
        return this.placeholder
      }else{
        let valueArray = this.value.split('，');
        for(let i=0;i<valueArray.length;i++){
          for(let j=0;j<this.options.length;j++){
            if(valueArray[i]===this.options[j].name){
              this.options[j].active=true;
            }
          }
        }
      }
      if (this.options.length === 0) {
        this.$emit('selector-click', e)
        return ''
      }
      return this.currentValue;
    }
  },
  mounted () {
    window.addEventListener("popstate", this.historyChange)
  },
  beforeDestroy () {
    window.removeEventListener("popstate", this.historyChange)
  }
};

/**
 * @noteType external
 * @content
{
   "mock": {
      "label": "文本域",
      "rows": "4",
      "maxlength": "100"
   },
   "xtype": [ "text-select" ],
   "bindField": "v-model"
}
 */
</script>
<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform .25s
}
.slide-enter, .slide-leave-to /* .slide-leave-active in below version 2.1.8 */ {
  transform: translateX(100%);
}

.select-container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 999;
  overflow: auto;
}

.select-container-title {
  padding:8px 0 7px 15px;
  font-size: 14px;
}

.select-container-buttons{
  padding: 12px 8px;
}

.select-container-button{
  display: inline-block;
  margin: 6px;
  border-width: 1px;
  border-style: solid;
  padding: 8px 14px;
  font-size: 12px;
  border-radius: 14px;

}

.select-container-confirm{
  padding: 0 15px;
}

.select-picker {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

</style>


