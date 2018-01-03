<template>
  <div class="palette-button" style="margin-top:45px;">
    <div class="page-paletteButton-wrapper">
      <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
        direction="rt" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
        style="left:30px;">
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
      </mt-palette-button>
      <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
        direction="t" :radius="80" ref="target_2" mainButtonStyle="color:yellow;background-color:#26a2ff;" :offset="Math.PI / 12"
        style="left:calc(50% - 30px);">
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(4)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(5)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(6)"></div>
      </mt-palette-button>
      <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
        direction="lt" :radius="100" ref="target_3">
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(4)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(5)"></div>
      </mt-palette-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      main_log(val) {
        console.log('main_log', val);
      },
      sub_log(val) {
        console.log('sub_log', val);
        this.$refs.target_1.collapse();
      }
    }
  };
</script>

<style>
  .my-icon-button{
    width:30px;
    height:30px;
    border-radius:50%;
    background-color:#26a2ff;
    color: #fff;
    line-height:30px;
    text-align:center;
  }
  .mint-main-button{
    color: #000;
    background-color:#26a2ff;
  }

  @component-namespace page {
    @component paletteButton {
      @descendent wrapper {
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);

        button:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
 