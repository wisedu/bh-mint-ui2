<template>
  <div style="margin-top:45px;">
    <div style="margin-left:10px">背景(gray):</div>
    <!--start
    @name gray
    -->
    <mt-layout-container background="gray">普通容器</mt-layout-container>


    <div style="margin-left:10px">padding(10px)</div>
    <mt-layout-container padding="10px" background="gray">普通容器</mt-layout-container>


    <div style="margin-left:10px">margin(10px)</div>
    <mt-layout-container margin="10px" background="gray">普通容器</mt-layout-container>

    <mt-layout-container background="#52C7CA" class="layout-container" margin="10px" @click="handleClick">
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
    name: 'page-layout-container',
    methods: {
      handleClick(evt) {
        console.log("您点击了！");
      }
    },
};
</script>

<style lang="css" scoped>
  .layout-container{
    position: relative;
    overflow: hidden;
    height: 70px;
  }
</style>
