<template>
  <div style="margin-top:45px;">
    <div style="margin-left:10px">默认背景色gray</div>
    <!--start
      @name gray
      -->
    <mt-layout-container background="gray" padding="30px" margin="10px">margin (10px)+padding(30px)</mt-layout-container>

    <mt-layout-container background="#52C7CA" class="layout-container" margin="10px">
      Hello World!!!
      <mt-subscript label="成功" fontsize="12px" background="red" width="90px" height="16px" rotate="45"></mt-subscript>
    </mt-layout-container>
    <!--end-->
    <!--普通的-->
    <mt-layout-container margin="10px">
      <mt-button type="primary">按钮1</mt-button>
      <mt-button type="primary">按钮2</mt-button>
    </mt-layout-container>
  </div>
</template>

<script>
export default {
    name: 'page-layout-container'
};
</script>

<style lang="css" scoped>
  .layout-container{
    position: relative;
    overflow: hidden;
    height: 70px;
  }
</style>
