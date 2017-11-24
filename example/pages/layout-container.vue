<template>
  <div style="margin-top: 60px;">
    <div>带背景色</div>
    <!--start
      @name gray
      -->
    <mt-layout-container background="gray"></mt-layout-container>

    <mt-layout-container background="gray" class="layout-container">
      <mt-subscript label="成功" fontsize="12px" background="red" width="90px" height="16px" rotate="45"></mt-subscript>
    </mt-layout-container>
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
  .layout-container{
    margin-top: 16px;
    position: relative;
    overflow: hidden;
    height: 70px;
  }
</style>
