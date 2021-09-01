<template>
  <div>
    <mt-cell :title="label" @click.native="popupVisible = (disabled||readonly)?false:true" arrowdefined :disabled="disabled" :readonly="readonly" :titlewidth="titlewidth" :value-align="valueAlign" :required="required">
      <i slot="arrowdefined" class="iconfont icon-keyboardarrowright mt-color-grey-lv3"></i>
      <div class="select-value">
        <template><span :class="[{'mt-color-grey-lv3': singleSelectDisplay()=== this.computedPlaceholder}]">{{singleSelectDisplay()}}</span></template>
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
import Locale from 'bh-mint-ui2/src/mixins/locale';
export default {
  name: 'mt-picker-select',
  mixins: [Locale],
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
    placeholder: { type: String, default: 'pleaseSelect' }, // 请选择
    /**
     * @noteType prop
     * @field options
     * @desc 选项字典数据
     * @type textarea
     * @value
     */
    options: { type: Array, required: true },
    required: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    titlewidth: String,
    valueAlign:String
  },
  data() {
    return {
      popupVisible: false
    };
  },
  computed:{
      i18n(){
          return this.t('mint');
      },
    //   placeholder文字国际化,没传则显示默认请选择
      computedPlaceholder(){
          return this.i18n[this.placeholder] || this.placeholder;
      }
  },
  methods: {
    singleSelectDisplay () {
      if (this.value === '') return this.computedPlaceholder
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