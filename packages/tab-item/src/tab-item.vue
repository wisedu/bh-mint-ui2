<template>
  <a class="mint-tab-item"
    @click="$parent.$emit('input', id)"
    :class="itemClassObject">
    <div class="mint-tab-item-icon"><slot name="icon"><i slot="icon" class="iconfont" :class="[$parent.value === id?'mt-color-theme':'mt-color-grey-lv3','icon-'+icontype]" v-if="icontype"></i></slot></div>
    <div class="mint-tab-item-label" :class="[$parent.value === id?'mt-color-theme':labelClassObject]"><slot></slot></div>
    <slot name="badge"></slot>
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
  data: function(){
    return {
      itemwidth:''
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
    componentname:{
      type:String,
      default:"tab"
    }
  },
  computed:{
    labelClassObject: function() {
      let _class='';
      switch(this.componentname){
        case 'tab': _class="mt-color-grey-lv3";break;
        case 'navbar': _class="mt-color-grey-lv2";break;
        case 'sidenavbar': _class="mt-color-grey";break;
        default:
          _class="mt-color-grey-lv3";break;
      }
      return _class;
    },
    itemClassObject: function() {
      let _class='';
      if(this.$parent.value === this.id){
        _class += 'is-selected ';
        _class += this.componentname === 'navbar'?'mt-bColor-theme ':'';
        _class += this.componentname === 'sidenavbar'?'mt-bg-lv3':'';
      }
      return _class;
    }
  },
  mounted() {
    this.navbarWidth();
  },
  methods: {
    navbarWidth: function() {
      this.$nextTick(function(){
        if(this.componentname === 'navbar'){
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
