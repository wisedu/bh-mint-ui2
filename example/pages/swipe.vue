<template>
  <div class="page-swipe">
    <p class="page-swipe-desc">基础用法</p>
    <mt-swipe  class="swipe">
      <mt-swipe-item class="slide1"><img src="../assets/1.jpg"/></mt-swipe-item>
      <mt-swipe-item class="slide2"><img src="../assets/2.jpg"/></mt-swipe-item>
      <mt-swipe-item class="slide3"><img src="../assets/3.jpg"/></mt-swipe-item>
    </mt-swipe>

    <p class="page-swipe-desc">隐藏 indicators</p>
    <mt-swipe :show-indicators="false" :auto="0">
      <mt-swipe-item class="slide1">1</mt-swipe-item>
      <mt-swipe-item class="slide2">2</mt-swipe-item>
      <mt-swipe-item class="slide3">3</mt-swipe-item>
    </mt-swipe>

    <p class="page-swipe-desc">取消自动播放</p>
    <mt-swipe :auto="0">
      <mt-swipe-item class="slide1 swipe"><img src="../assets/1.jpg"/></mt-swipe-item>
      <mt-swipe-item class="slide2 swipe"><img src="../assets/2.jpg"/></mt-swipe-item>
      <mt-swipe-item class="slide3 swipe"><img src="../assets/3.jpg"/></mt-swipe-item>
    </mt-swipe>

    <p class="page-swipe-desc">设置默认显示页</p>
    <mt-swipe :auto="0" :defaultIndex="1">
      <mt-swipe-item class="slide1">1</mt-swipe-item>
      <mt-swipe-item class="slide2">2</mt-swipe-item>
      <mt-swipe-item class="slide3">3</mt-swipe-item>
    </mt-swipe>

    <p class="page-swipe-desc">单个幻灯片</p>
    <mt-swipe :show-indicators="false">
      <mt-swipe-item class="slide1">SINGLE SLIDE</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<style>
  @component-namespace page {
    @component swipe {
      margin-top: 60px;
      @descendent desc {
        text-align: center;
        color: #1E2329;
        margin-bottom: 5px;
      }
      .mint-swipe {
        height: 200px;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

      .mint-swipe-item {
        line-height: 200px;
      }

      .slide1 {
        background-color: #D8D8D8;
        color: #fff;
      }

      .slide2 {
        background-color: #D8D8D8;
        color: #000;
      }

      .slide3 {
        background-color: #D8D8D8;
        color: #fff;
      }
    }
  }
</style>
