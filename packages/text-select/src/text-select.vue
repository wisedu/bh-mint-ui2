<template>
  <mt-cell :title="label" @click.native="handleDisplayClick">
    <div class="select-value">
      <template>{{singleSelectDisplay()}}</template>
    </div>
    <transition name="slide">
      <div class="select-container" :style="{height: cHeight + 'px'}" v-show="selectorShow" @click.stop>
        <template>
          <div style="padding:8px 12px;">
            <mt-text type="primary">{{label}}</mt-text>
          </div>
          <mt-textarea :placeholder="placeholder" v-model="currentValue" :rows="rows" :maxlength="maxlength"></mt-textarea>
          <div style="padding:8px">
            <div style="margin:4px 8px;display:inline-block" v-for="opt in options">
              <mt-button size="normal" @click="selectOption(opt.name)">{{opt.name}}</mt-button>
            </div>
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
    options: { type: Array, required: true }
  },
  data() {
    return {
      selectorShow: false,
      currentValue: ""
    };
  },
  computed: {
    cHeight () {
      return document.documentElement.clientHeight
    }
  },
  methods: {
    handleDisplayClick(e) {
      this.$emit('selector-click', '')
      history.pushState('', null, '#/smile-select');
      this.selectorShow = true;
    },
    historyChange(e) {
      this.selectorShow = false;
    },
    selectOption(content){
      this.currentValue += " " + content;
      this.$emit('input', this.currentValue);
    },
    singleSelectDisplay () {
      if (this.value === '') return this.placeholder
      if (this.options.length === 0) {
        this.$emit('selector-click', '')
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
@import "../../../src/style/var.css";
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
  /* background: rgba(0, 0, 0, 0.4); */
  background: $bg-lv2;
  left: 0;
  top: 0;
  z-index: 999;
  overflow: auto;
}

.select-picker {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

</style>


