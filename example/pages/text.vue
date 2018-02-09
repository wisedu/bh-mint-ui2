<template>
  <div class="text">
    <mt-cell-group title="文本颜色:">
      <mt-text wordwrap >{{text}}</mt-text>
      <mt-text type="grey">grey文本</mt-text>
      <mt-text type="primary">primary文本</mt-text>
      <mt-text type="warning">warning文本</mt-text>
      <mt-text type="danger">danger文本</mt-text>
      <mt-text type="white">white文本</mt-text>
      <mt-text type="red">red文本</mt-text>
      <mt-text type="orange">orange文本</mt-text>
      <mt-text type="yellow">yellow文本</mt-text>
      <mt-text type="green">green文本</mt-text>
      <mt-text type="blue">blue文本</mt-text>
      <mt-text type="indigo">indigo文本</mt-text>
      <mt-text type="purple">purple文本</mt-text>
    </mt-cell-group>
    <mt-cell-group title="自定义颜色:">
      <mt-text color="#F334AB">自定义颜色</mt-text>
    </mt-cell-group>
    <mt-cell-group title="字体大小:">
      <mt-text size="20px" @click="handleClick">20px</mt-text>
    </mt-cell-group>
  </div>
</template>
<script>
export default {
  name: 'button',
  data(){
    return {
      text:"aaaaaaaaaaaaa\naa"
    }
  },
  methods: {
      handleClick(evt) {
          console.log("您点击了！");
      }
  },
};
</script>
<style type="text/css">
  .text{
    margin-top:45px;
    overflow: hidden;
  }
</style>