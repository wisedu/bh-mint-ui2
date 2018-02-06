<template>
  <div>
    <mt-header fixed title="默认标题+固定置顶" router leftIcontext="返回">
      <span class="iconfont icon-gengduo" slot="right"></span>
    </mt-header>
    <div class="page-header-main">
      <mt-header title="背景色" backgroundColor="mt-bg-theme">
        <router-link to="/" slot="left">
          <span class="iconfont icon-keyboardarrowleft"></span>
        </router-link>
      </mt-header>
      <mt-header title="多个按钮" backgroundColor="mt-bg-warning">
        <router-link to="/" slot="left">
          <span><i class="iconfont icon-keyboardarrowleft"></i>返回</span>
        </router-link>
        <span @click="handleClose" slot="left" class="iconfont icon-close">关闭</span>
        <span class="iconfont icon-zhuantui" slot="right" @click="alert"></span>
      </mt-header>

      <mt-header title="左侧仅文字" backgroundColor="mt-bg-danger">
        <router-link to="/" slot="left">
            <span>返回</span>
          </router-link>
      </mt-header>

      <mt-header title="字体16px,高度50px" fontSize="16px" height="50px" backgroundColor="mt-bg-purple">
        <router-link to="/" slot="right">
          <span>分享</span>
        </router-link>
      </mt-header>

      <mt-header title="返回跳转" backgroundColor="mt-bg-primary" to="/cell" router leftIcontext="To Cell组件">
        <span class="iconfont icon-touxiang" slot="right"></span>
      </mt-header>
    </div>

  </div>
</template>

<script>
export default {
  name: 'header',

  data() {
    return {

    };
  },

  methods: {
    handleClose() {
      alert('close this page');
    },
    alert() {
      alert('分享');
    }
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component header {
      @descendent main {
        margin-top: 60px;

        > * {
          margin-bottom: 15px;
        }
      }
    }
  }
  .mt-btn-default:not(.is-disabled):active {
    background-color: transparent;
  }
</style>
