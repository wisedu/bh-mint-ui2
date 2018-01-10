<template>
  <div>
    <mt-header :title="routeName" backgroundColor="mt-bg-theme" color="mt-color-white" v-if="visible" fixed>
        <router-link to="/" slot="left">
          <span class="iconfont icon-keyboardarrowleft"></span>
        </router-link>
      </mt-header>
    <router-view></router-view>
  </div>
</template>

<style>
  @reset-global mobile;

  html, body {
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }

  a {
    color: inherit;
  }

  .page-back {
    display: inline-block;
    position: absolute 12px * * 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    i {
      font-size: 24px;
      line-height: 40px;
    }
  }
  .page-title {
    font-size: 20px;
    margin: 0 auto;
    padding: 20px 0;
    text-align: center;
    display: block;
    line-height: 1;
  }
</style>

<script type="text/babel">
  export default {
    computed: {
      visible() {
        return ['/', '/header', '/search', '/infinite-calendar'].indexOf(this.$route.path) < 0;
      },
      routeName() {
        return this.$route.name;
      }
    },
    mounted() {
      if (window.location.hash.indexOf('smile-select') > -1) {
        history.back();
      }
    }
  };
</script>
