<template>
  <mt-cell :title="label" @click.native="handleDisplayClick">
    <div class="select-value" >
      <template>{{singleSelectDisplay()}}</template>
    </div>
    <transition name="slide">
      <div class="select-container" :style="{height: cHeight + 'px'}" v-show="selectorShow" @click.stop>
        <template>
          <div style="padding:8px 12px;">
            <mt-text type="primary">{{label}}</mt-text>
          </div>
          <mt-field placeholder="自我介绍" type="textarea" v-model="currentValue" rows="4"></mt-field>
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
 * @name Select
 * @tagName mt-select
 * @desc 选择器
 * @wrapClassName mint-select
 * @html
 * <mt-select label="标题文字"></mt-select>
 */
export default {
  name: 'mt-text-select',
  props: {
    value: { default: '' },
    // url: { type: String, default: '' },

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
    /**
     * @noteType prop
     * @field type
     * @desc 选择器类型
     * @type select
     * @option 
      [
        {
          "text": "自定义",
          "value": ""
        },
        {
          "text": "单选",
          "value": "select"
        },
        {
          "text": "多选",
          "value": "multi-select"
        }
      ]
     */
    type: ''
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
    },
    singleSelectDisplay () {
      if (this.value === '') return this.placeholder
      if (this.options.length === 0) {
        this.$emit('selector-click', '')
        return ''
      }
      return this.options.filter(item => item.id.toString() === this.value.toString())[0].name
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
    "selected": ""
  },
  "modelName": "selected",
  "xtype": [ "select", "multi-select", "multi-select2" ]
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


