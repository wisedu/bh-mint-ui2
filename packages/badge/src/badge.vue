<template>
  <span
    class="mint-badge"
    :style="[{'background-color': color,'color':fontColor,'font-size':fontSize,'padding':padding,'border-radius':radius,'border-color':bColor}]"
    :class="[type?'mt-color-white mt-bg-'+type:type, 'is-size-' + size]">
    <slot></slot>
  </span>
</template>

<script>
/**
 * mt-badge
 * @module components/badge
 * @desc 徽章
 * @param {string} [type=primary] 组件样式，可选 primary, error, success, warning
 * @param {string} [color] - 传入颜色值
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 *
 * @example
 * <mt-badge color="error">错误</mt-badge>
 * <mt-badge color="#333">30</mt-badge>
 */

/**
 * @name Badge
 * @tagName mt-badge
 * @desc 徽章
 * @wrapClassName mint-badge
 * @display inline
 * @noteType component
 * @html
 * <mt-badge color="#333">{{text}}</mt-badge>
 */
export default {
  name: 'mt-badge',

    /**
     * @noteType prop
     * @field text
     * @desc 内容
     * @type input
     * @value 30
     */
  props: {
    fontColor: String,
    fontSize: String,
    padding: String,
    radius: String,
    bColor: String,
    /**
     * @noteType prop
     * @field color
     * @desc 颜色值
     * @type input
     * @placeholder #333
     */
    color: String,
    /**
     * @noteType prop
     * @field type
     * @desc 样式类型
     * @type select
     * @value primary
     * @option
     [{
       "text": "default",
        "value": "default"
      },{
        "text": "primary",
        "value": "primary"
      },{
        "text": "danger",
        "value": "danger"
      },{
        "text": "warning",
        "value": "warning"
      }]
      */
    type: {
      type: String,
      default: 'primary'
    },
    /**
     * @noteType prop
     * @field size
     * @desc 文字大小
     * @type select
     * @value small
     * @option
     [{
       "text": "正常",
        "value": "normal"
      },{
        "text": "小",
        "value": "small"
      },{
        "text": "大",
        "value": "large"
      }]
      */
    size: {
      type: String,
      default: 'normal'
    }
  }
};

/**
 * @noteType external
 * @content
 {
    "bindField":"text",
    "textField": {
        "field": "text",
        "className": "mint-badge"
      }
 }
 */
</script>
<style lang="css">

  @component-namespace mint {
    @component badge {
      text-align: center;
      display: inline-block;
      border: 1px solid transparent;

      @when size-normal {
        border-radius: 12px;
        font-size: 15px;
        padding: 2px 8px;
      }

      @when size-small {
        border-radius: 9px;
        font-size: 11px;
        padding: 2px 6px;
      }

      @when size-large {
        border-radius: 14px;
        font-size: 18px;
        padding: 2px 10px;
      }
    }
  }

</style>
