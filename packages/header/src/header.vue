<template>
  <header
    class="mint-header mt-bColor-grey-lv5"
    :class="[backgroundColor,color,{ 'is-fixed': fixed }]"
    :style="{'font-size':fontSize,'height':height}">
    <div class="mint-header-button is-left">
      <slot name="left">
        <router-link :to="to" v-if="router">
          <span class="mint-header-button-left"><i class="iconfont icon-keyboardarrowleft"></i>{{leftIcontext}}</span>
        </router-link>
      </slot>
    </div>
    <h1 class="mint-header-title" v-text="title"></h1>
    <div class="mint-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
/**
 * mt-header
 * @module components/header
 * @desc 顶部导航
 * @param {boolean} [router] - 是否启动路由
 * @param {String} [to] - 该属性只有在启动自动路由时有效，设定左图标的路由地址
 * @param {String} [leftIcontext] - 该属性只有在启动自动路由时有效，设定左图标的关联文本
 * @param {String} [backgroundColor] - 设定header的背颜色
 * @param {String} [color] - 设定header的文本字体颜色
 * @param {String} [fontSize] - 设定header的文本字体大小
 * @param {String} [height] - 设定header的高度
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <mt-header title="我是标题" fixed>
 *   <mt-button slot="left" icon="back" @click="handleBack">返回</mt-button>
 *   <mt-button slot="right" icon="more"></mt-button>
 * </mt-header>
 */
export default {
  name: 'mt-header',

  props: {
    router:Boolean,
    to:{
      type:String,
      default:"/"
    },
    leftIcontext:{
      type:String,
      default:""
    },
    backgroundColor:{
      type:String,
      default:"mt-bg-lv2"
    },
    color:{
      type:String,
      default:"mt-color-grey"
    },
    fontSize:{
      type:String,
      default:"18px"
    },
    height:{
      type:String,
      default:"44px"
    },
    fixed: Boolean,
    title: String
  }
};
</script>

<style lang="css">

  @component-namespace mint {
    @component header {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      line-height: 1;
      padding: 0 10px;
      position: relative;
      text-align: center;
      white-space: nowrap;
      border-bottom-width: 0.5px;
      border-bottom-style: solid;

      @descendent button {
        flex: .5;

        > a {
          color: inherit;
        }

        @when left {
          text-align: left;
        }

        @when right {
          text-align: right;
        }

        @descendent left{
          font-size: 16px;
          line-height: 18px;
        }
      }

      @descendent title {
        @utils-ellipsis;
        font-size: inherit;
        font-weight: normal;
        flex: 1;
      }

      @when fixed {
        position: fixed 0 0 * 0;
        z-index: 999;
      }
    }
  }
</style>
