<template>
  <div class="icon">
    <div class="page-title bg-theme color-theme">Icon</div>
    <div class="item">
      <div class="title">normal</div>
      <!--start
      @name normal
      -->
      <mt-icon  name="icon-pinglun"></mt-icon>
      <!--end-->
    </div>

    <div class="item">
      <div class="title">size</div>
      <!--start
      @name height-4px
      -->
      <mt-icon name="icon-pinglun" size="30px"></mt-icon>
      <!--end-->
    </div>

    <div class="item">
      <div class="title">padding</div>
      <!--start
      @name primary
      -->
      <mt-icon name="icon-pinglun" padding="20px 20px 20px 20px"></mt-icon>
      <!--end-->
    </div>

    <div class="item">
      <div class="title">color</div>
      <!--start
      @name warning
      -->
      <mt-icon name="icon-pinglun" color="green"></mt-icon>
      <!--end-->
    </div>

    <div class="item">
      <div class="title">click</div>
      <!--start
      @name danger
      -->
      <mt-icon name="icon-pinglun" @click="doSome"></mt-icon>
      <!--end-->
    </div>
    <div class="item">
      <div class="title">click-colorChange</div>
      <!--start
      @name danger
      -->
      <mt-icon name="icon-wifi" changecolor="red"></mt-icon>
      <!--end-->
    </div>
    <div class="item">
      <div class="title">animate</div>
      <!--start
      @name danger
      -->
      <mt-icon name="icon-pinglun" animate="animated shake"></mt-icon>
      <!--end-->
    </div>

    <p class="link"><a class="mt-bg-link" href="http://res.wisedu.com/fe_components/iconfont_mobile/demo_fontclass.html" target="_blank">点击查看所有字体图标</a></p>
  </div>
</template>
<script>
export default {
    name: 'icon',
    methods:{
      doSome () {
        alert('you are clcik');
      }
    }
};
</script>

<style lang="css" scoped>
  .part{
    margin-top: 60px;
  }
  .title{
    margin:5px 0;
  }
  .item{
    margin-top: 12px;
    text-align: center;
  }
  .link{
    text-align: center;
    height: 30px;
    line-height: 30px;
  }
</style>
