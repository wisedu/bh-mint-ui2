<template>
  <div>
    <mt-cell :title="label" @click.native="popupVisible = (disabled||readonly)?false:true" arrowdefined :disabledcolor="disabled||readonly">
      <i slot="arrowdefined" class="iconfont icon-keyboardarrowright mt-color-grey-lv3"></i>
      <div class="select-value">
        <template>{{singleSelectDisplay()}}</template>
      </div>
    </mt-cell>
    <mt-popup v-model="popupVisible" position="bottom">
      <mt-picker :columns="options" @change="onChange" :visible-item-count="1" :show-toolbar="true" @confirm="onConfirm" @cancel="onCancel"></mt-picker>
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
 * @name MintPickerSelect
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
    readonly: Boolean
  },
  data() {
    return {
      popupVisible: false
    };
  },
  methods: {
    singleSelectDisplay () {
      if (this.value === '') return this.placeholder
      if (this.options.length === 0) {
        this.$emit('selector-click', e)
        return ''
      }
      return this.value;
    },
    onChange() {
      //
    },
    onConfirm(value,index) {
      this.$emit('input', value);
      this.popupVisible=false;
    },
    onCancel(value) {
      console.log(value)
      this.popupVisible=false;
    }
  }
};

</script>
<style></style>