<template>
  <div class="layout-spacing">
    <div style="padding-top: 10px;">
      <div>默认15px高</div>
      <!--start
      @name normal
      -->
      <mt-layout-spacing></mt-layout-spacing>
      <!--end-->
    </div>

    <div style="padding-top: 10px;">
      <div>背景</div>
      <!--start
      @name background
      -->
      <mt-layout-spacing background="rgba(0,0,0,0.1)"></mt-layout-spacing>
      <!--end-->
    </div>

    <div style="padding-top: 10px;">
      <div>高度</div>
      <!--start
      @name background
      -->
      <mt-layout-spacing height="30px" background="grey"></mt-layout-spacing>
      <!--end-->
    </div>

    <div style="padding-top: 10px;">
      <div>自定义边框</div>
      <!--start
      @name normal
      -->
      <mt-layout-spacing border="0.5px solid #52C7CA" :borderside="borderside"></mt-layout-spacing>
      <!--end-->
    </div>
  </div>

</template>

<script>
export default {
    name: 'page-layout-spacing',
    data: function(){
      return {
        borderside:['top','right']
      }
    }
};
</script>

<style lang="css" scoped>
  .layout-spacing {
    margin-top: 45px;
  }
</style>
