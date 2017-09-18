<template>
  <div style="margin-top: 60px;">
    <div>带背景色</div>
    <!--start
      @name gray
      -->
    <mt-layout-container background="gray"></mt-layout-container>
    <!--end-->

    <div style="margin-top: 20px;">
      <!--普通的-->
      <mt-layout-container>
        <mt-button type="primary">按钮</mt-button>
        <mt-button type="primary">按钮222</mt-button>
      </mt-layout-container>
    </div>
  </div>
</template>

<script>
export default {
    name: 'page-layout-container'
};
</script>

<style lang="css" scoped>
  .mint-layout-container{
    height: 24px;
  }
</style>
