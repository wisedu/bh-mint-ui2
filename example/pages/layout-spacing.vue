<template>
  <div style="margin-top: 60px;">
    <div style="margin-top: 20px;">
      <div>普通的</div>
      <!--start
      @name normal
      -->
      <mt-layout-spacing></mt-layout-spacing>
      <!--end-->
    </div>

    <div style="margin-top: 20px;">
      <div>自定义背景色</div>
      <!--start
      @name background
      -->
      <mt-layout-spacing background="rgba(0,0,0,0.1)"></mt-layout-spacing>
      <!--end-->
    </div>
  </div>

</template>

<script>
export default {
    name: 'page-layout-spacing'
};
</script>

<style lang="css" scoped>
</style>
