<template>
  <div class="mint-navbar" :class="{ 'is-fixed': fixed }">
    <slot></slot>
  </div>
</template>

<script>
/**
 * mt-navbar
 * @module components/navbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <mt-navbar :selected.sync="selected">
 *   <mt-tab-item value="订单">
 *     <span slot="label">订单</span>
 *   </mt-tab-item>
 * </mt-navbar>
 *
 * <mt-navbar :selected.sync="selected" fixed>
 *   <mt-tab-item :value="['传入数组', '也是可以的']">
 *     <span slot="label">订单</span>
 *   </mt-tab-item>
 * </mt-navbar>
 *
 */

/**
 * @noteType component
 * @name Navbar
 * @tagName mt-navbar
 * @desc 选项卡
 * @type tab
 * @wrapClassName mint-navbar
 * @html
 * <mt-navbar v-model="selected"></mt-navbar>
 */
export default {
  name: 'mt-navbar',

  props: {
    fixed: Boolean,
    value: {}
  }
};

/**
 * @noteType external
 * @content
 {
    "item": {
      "componentName": "TabItem",
      "count": 2,
      "showProp": "space"
    },
    "mock": {
      "selected": "0"
    },
    "modelName": "selected",
    "relation": {
      "componentName": "TabContainer"
    }
 }
 */
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component navbar {
      background-color: $color-white;
      display: flex;
      text-align: center;

      @when fixed {
        position: fixed 0 0 * 0;
        z-index: $z-index-normal;
      }

      .mint-tab-item {
        padding: 17px 0;
        font-size: 15px;

        &:last-child {
          border-right: 0;
        }

        &.is-selected {
          border-bottom: 3px solid $color-green;
          color: $color-green;
          /* margin-bottom: -3px; */
        }
      }
    }
  }
</style>
