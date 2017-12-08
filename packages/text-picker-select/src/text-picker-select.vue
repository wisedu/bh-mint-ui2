<template>
  <div>
    <mt-cell :title="label" @click.native="popupVisible = true" arrowdefined :disabledcolor="disabled||readonly">
      <i slot="arrowdefined" class="icon iconfont icon-keyboardarrowright"></i>
      <div class="select-value">
        <template>{{singleSelectDisplay()}}</template>
      </div>
    </mt-cell>
    <mt-popup v-model="popupVisible" position="bottom">
      <mt-picker :columns="dateSlots" @change="onChange" :visible-item-count="1" :show-toolbar="true"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
/**
 * @event selector-click - 点击选择器触发的事件
 */
/* eslint-disable */

/**
 * @noteType component
 * @name TextPickerSelect
 * @tagName mt-picker-select
 * @desc 文本域(带选项)
 * @wrapClassName mint-picker-select
 * @html
 * <mt-text-select label="标题文字"></mt-text-select>
 */
export default {
  name: 'mt-picker-select',
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
      currentValue: "",
      dateSlots: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      popupVisible: false
    };
  },
  watch: {
    //
  },
  methods: {
    singleSelectDisplay () {
      if (this.value === '') return this.placeholder
      if (this.options.length === 0) {
        this.$emit('selector-click', e)
        return ''
      }
      return this.currentValue;
    },
    onChange() {
      //
    }
  }
};

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
.select-value{
  color:$grey-lv3;
}

</style>


