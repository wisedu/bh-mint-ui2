<template>
  <div class="mint-navbar mt-bg-lv3 mt-bColor-grey-lv4" :class="{ 'is-fixed': fixed }">
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

</script>

<style lang="css">
  @component-namespace mint {
    @component navbar {
      display: flex;
      text-align: center;
      width: 100%;
      overflow-x: auto;

      @when fixed {
        position: fixed 0 0 * 0;
        z-index: 1001;
      }

      .mint-tab-item {
        padding: 14px 0 13px;
        font-size: 14px;
        border-bottom-width: 1px;
        border-bottom-style: solid;

        &:last-child {
          border-right: 0;
        }

        &.is-selected {
          border-bottom-width: 2px;
        }
      }
    }
  }
</style>
