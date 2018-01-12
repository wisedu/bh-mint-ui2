<template>
  <div class="page-image">
    <div class="page-image-title">定宽定高</div>
    <!--start
      @name fixed-width-height
      -->
    <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/no_search_result2.png" width="200px" height="200px" :watermark="true"></mt-image>
    <!--end-->
    <div class="page-image-title">图片100%自适应</div>
    <!--start
      @name normal
      -->
    <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" @click="handleClick"></mt-image>
    <!--end-->
  </div>
</template>
<script>
export default {
  name: 'button',
  methods: {
      handleClick(e) {
        console.log("你点击我了")
      }
  }
};
</script>
<style>
  @component-namespace page {
    @component image {
      margin-top: 45px;
      padding: 0 10px;

      @descendent title {
        padding: 10px 0;
        text-align: center;
      }
    }
  }
</style>
