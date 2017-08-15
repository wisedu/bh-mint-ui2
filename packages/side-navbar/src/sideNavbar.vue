<template>
  <div class="mint-side-navbar">
    <div class="side-nav" v-bind:style="{width:width}">
      <div class="navbar" :class="{ 'is-fixed': fixed }" v-bind:style="{width:width,top:top}">
        <slot name="nav"></slot>
      </div>
    </div>
    <div class="nav-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
/**
 * mt-side-navbar
 * @module components/side-navbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <mt-side-navbar :selected.sync="selected">
 *   <div slot="nav">
 *     <mt-tab-item value="订单">
 *       <span slot="label">订单</span>
 *     </mt-tab-item>
 *   </div>
 * </mt-side-navbar>
 *
 * <mt-side-navbar :selected.sync="selected" fixed>
 *   <div slot="nav">
 *     <mt-tab-item :value="['传入数组', '也是可以的']">
 *       <span slot="label">订单</span>
 *     </mt-tab-item>
 *   </div>
 * </mt-side-navbar>
 *
 */
export default {
  name: 'mt-side-navbar',

  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    value: {},
    width: {
      type: String,
      default: '120px'
    },
    top: {
      type: String,
      default: '0'
    }
  },
  mounted() {
    this.resetPosition();
  },
  methods: {
    resetPosition() {
      if (this.top === '0') {
        this.$el.querySelector('.navbar').style.top = this.$el.offsetTop + 'px';
      }
    }
  }
};
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component side-navbar {
      display: flex;
      .navbar{
        background-color: $grey-lv5;
        display: block;
        @when fixed {
          position: fixed;
          bottom: 0;
          z-index: $z-index-normal;
        }

        .mint-tab-item {
          display: flex;
          align-items: center;
          padding: 8px ;
          font-size: 15px;
          box-shadow: inset 0px -1px 1px -1px $color-white;
          border-left: 3px solid $grey-lv5;

          .mint-tab-item-icon {
            margin-right: 5px;
          }

          &.is-selected {
            border-left: 3px solid $color-green;
            color: $color-green;
            background-color: $color-white;
          }
        }
      }

      .nav-content{
        flex: 1
      }
    }
  }
</style>
