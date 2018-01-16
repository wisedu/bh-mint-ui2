<template>
  <div class="mint-side-navbar" :style="{height:sideNavbarHeight}">
<!--     <div class="side-nav" v-bind:style="{width:width}"> -->
      <div class="navbar mt-bg-lv1" :class="{ 'is-fixed': fixed }" v-bind:style="{width:width,top:top}">
        <slot name="nav"></slot>
      </div>
<!--     </div> -->
    <div class="nav-content" :style="{marginLeft:marginLeft}">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
/**
 * mt-side-navbar
 * @module components/side-navbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <mt-side-navbar :selected.sync="selected">
 *   <div slot="nav">
 *     <mt-tab-item value="订单">
 *       <span slot="label">订单</span>
 *     </mt-tab-item>
 *   </div>
 * </mt-side-navbar>
 *
 * <mt-side-navbar :selected.sync="selected" fixed>
 *   <div slot="nav">
 *     <mt-tab-item :value="['传入数组', '也是可以的']">
 *       <span slot="label">订单</span>
 *     </mt-tab-item>
 *   </div>
 * </mt-side-navbar>
 *
 */
export default {
  name: 'mt-side-navbar',
  data(){
    return {
      marginLeft:"",
      sideNavbarHeight:""
    }
  },
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    value: {},
    width: {
      type: String,
      default: '108px'
    },
    top: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '0'
    }
  },
  mounted() {
    this.resetPosition();
  },
  methods: {
    resetPosition() {
      let elem = this.$el;
      console.log(elem.offsetHeight)
      let obj = {
        "top":elem.offsetTop
      };
      while(elem != document.body){
        elem = elem.offsetParent ;
        obj.top += elem.offsetTop ;
      }
      if(this.height === '0'){
        this.sideNavbarHeight = window.screen.height-obj.top;
        this.sideNavbarHeight = (this.sideNavbarHeight > elem.offsetHeight?elem.offsetHeight:this.sideNavbarHeight)+"px";
      }else{
        this.sideNavbarHeight = this.height;
      }
      if (this.fixed){
        this.marginLeft=this.width;
        if(this.top === ''){
          this.$el.querySelector('.navbar').style.top = obj.top + 'px';
        }else{
          this.$el.querySelector('.navbar').style.top = this.top;
        }
      }
    }
  }
};
</script>

<style lang="css">

  @component-namespace mint {
    @component side-navbar {
      overflow:auto;
      display: flex;
      .navbar{
        display: block;
        @when fixed {
          position: fixed;
          top: 0;
          bottom: 0;
          z-index: 999;
        }

        .mint-tab-item {
          display: flex;
          justify-content:center;
          align-items: center;
          padding: 0px ;
          height: 44px;
          font-size: 14px;
          box-shadow: inset 0px -1px 1px -1px #FFFFFF;
          .mint-tab-item-icon {
            margin: 0 5px 0 0;
          }
        }
      }

      .nav-content{
        flex: 1
      }
    }
  }
</style>
