<template>
  <a class="mint-tab-item"
    @click="$parent.$emit('input', id)"
    :class="itemClassObject">
    <div class="mint-tab-item-icon">
      <slot name="icon"><i class="iconfont" :class="[$parent.value === id?'mt-color-theme':'mt-color-grey-lv3','icon-'+icontype]" v-if="icontype"></i></slot><slot name="badge" v-if="componentname==='mt-tabbar'"><mt-badge size="small" padding="3px" type="danger" class="dot" v-if="badge ==='dot'"></mt-badge><mt-badge size="small" type="danger" class="figure" v-if="badge ==='figure'">{{badgeValue}}</mt-badge></slot>
    </div>
    <div class="mint-tab-item-label" :class="[$parent.value === id?'mt-color-theme':labelClassObject]"><slot></slot></div>
    <slot name="badge" v-if="componentname==='mt-navbar'">
      <mt-badge size="small" padding="3px" type="danger" class="dot" v-if="badge === 'dot'"></mt-badge>
    </slot>
  </a>
</template>

<script>
/**
 * mt-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <mt-tab-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   订单
 * </mt-tab-item>
 */

/**
 * @noteType component
 * @name TabItem
 * @tagName mt-tab-item
 * @desc 选项卡头节点
 * @type tabItem
 * @wrapClassName mint-tab-item
 * @uniqueKey id
 * @noDisplayInComponents true
 * @html
 * <mt-tab-item id="1">{{space}}</mt-tab-item>
 */
export default {
  name: 'mt-tab-item',
  data(){
    return {
      itemwidth:'',
      componentname:this.$parent.$options.name
    }
  },

    /**
     * @noteType prop
     * @field id
     * @desc id
     * @type input
     * @value
     */
  props: {
    id:String,
    icontype:String,
    badge:String,
    badgeValue:[String,Number]
  },
  computed:{
    labelClassObject: function() {
      let _class='';
      switch(this.componentname){
        case 'mt-tabbar': _class="mt-color-grey-lv3";break;
        case 'mt-navbar': _class="mt-color-grey-lv2";break;
        case 'mt-side-navbar': _class="mt-color-grey";break;
        default:
          _class="mt-color-grey-lv3";break;
      }
      console.log(_class)
      return _class;
    },
    itemClassObject: function() {
      let _class='';
      if(this.$parent.value === this.id){
        _class += 'is-selected ';
        _class += this.componentname === 'mt-navbar'?'mt-bColor-theme ':'';
        _class += this.componentname === 'mt-side-navbar'?'mt-bg-lv3':'';
      }else{
        _class += this.componentname === 'mt-navbar'?'mt-color-grey-lv4':'';
      }
      return _class;
    }
  },
  mounted() {
    this.navbarWidth();
  },
  methods: {
    navbarWidth() {
      this.$nextTick(function(){
        if(this.componentname === 'mt-navbar'){
          let len = this.$parent.$el.querySelectorAll('.mint-tab-item').length;
          let width = this.$parent.$el.offsetWidth
          len=len>5?5.5:len;
          this.$el.style.minWidth = width/len+"px";
        }
      });
    }
  }
};

/**
 * @noteType external
 * @content
 {
   "mock": {
      "space": "tab"
    },
    "textField": {
      "field": "space",
      "className": "mint-tab-item-label"
    }
 }
 */
</script>

<style lang="css">
  @component-namespace mint {
    @component tab-item {
      position: relative;
      display: block;
      padding: 5px 0 3px 0;
      flex: 1;
      font-size: 10px;
      text-decoration: none;

      @descendent icon {
        position: relative;
        size: 26px;
        margin: 0 auto 3px;

        &:empty {
          display: none;
        }

        & > *:not(.mint-badge) {
          display: block;
          size: 100%;
          font-size: 26px;
        }

        & > .mint-badge {
          position: absolute;
          top: 0;
          right: 0;
        }

        & > .figure{
          transform: translate(60%,-25%) scale(0.8);
        }
      }

      @descendent label {
        line-height: 1;
      }

      & > span{
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
</style>
