<template>
  <a class="mint-cell mt-bg-white mt-bColor-grey-lv5" :href="href" :style="{'min-height':cellheight}" :class="[{'is-require':required}]">
    <span class="mint-cell-mask mt-bg-after-grey" v-if="isLink"></span>
    <div class="mint-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="mint-cell-wrapper mt-bColor-grey-lv5" :class="[{'mint-cell-no-top-line':isCell},{'mint-cell-no-bottom-line':isGroupCell}]" :style="{'padding-left':wrapperpaddingleft,'padding-right':wrapperpaddingright?wrapperpaddingright:wrapperpaddingrightdefined}">
      <i class="mint-cell-require" v-if="required"></i>
      <div class="mint-cell-title" :style="{'flex':titlewidth,'padding-top':titlepaddingtop,'padding-right':titlepaddingright,'padding-bottom':titlepaddingbottom,'padding-left':titlepaddingleft}">
        <slot name="icon">
          <i v-if="icon" class="iconfont" :class="'icon-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="mint-cell-text" :class="[disabledcolor?'mt-color-grey-lv3':'mt-color-grey']" v-html="title"></span>
          <span v-if="label" class="mint-cell-label mt-color-grey-lv3" v-html="label"></span>
        </slot>
      </div>
      <div class="mint-cell-value" :class="[{'is-link' : isLink },disabledcolor?'mt-color-grey-lv3':'mt-color-grey']" ref="cellValue" :style="{'flex':titlewidth?'calc(100% - '+titlewidth+')':'','justify-content':valueAlign}">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
      <slot v-if="isLink||arrowdefined" name="arrowdefined">
        <i class="mint-cell-icon mt-color-grey-lv3 iconfont icon-keyboardarrowright" v-if="!arrowdefined"></i>
      </slot>
    </div>
    <div class="mint-cell-right">
      <slot name="right"></slot>
    </div>
    <slot name="newline"></slot>
  </a>
</template>

<script>


/**
 * mt-cell
 * @module components/cell
 * @desc 单元格
 * @param {string|Object} [to] - 跳转链接，使用 vue-router 的情况下 to 会传递给 router.push，否则作为 a 标签的 href 属性处理
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {boolean} [arrowdefined=false] - 不使用自定义图标slot，默认不使用自定义
 * @param {boolean} [disabledcolor=false] - 标题启用readonly或disabled样式，默认不启用
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <mt-cell title="标题文字" icon="back" is-link value="描述文字"></mt-cell>
 * <mt-cell title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </mt-cell>
 */

/**
 * @noteType component
 * @name Cell
 * @tagName mt-cell
 * @desc 单元格
 * @wrapClassName mint-cell
 * @html
 * <mt-cell title="标题文字"></mt-cell>
 */
export default {
  name: 'mt-cell',

  props: {
    cellheight:{
      type:String,
      default:''
    },
    to: [String, Object],
      /**
       * @noteType prop
       * @field icon
       * @desc 图标
       * @type select
       * @option
       [
       {
         "text": "空",
         "value": ""
       },
       {
         "text": "返回",
         "value": "back"
       },
       {
         "text": "更多",
         "value": "more"
       }
       ]
       */
    icon: String,
      /**
       * @noteType prop
       * @field title
       * @desc 标题
       * @type input
       * @value 标题文字
       */
    title: String,
      /**
       * @noteType prop
       * @field label
       * @desc 备注
       * @type input
       * @value
       */
    label: String,
      /**
       * @noteType prop
       * @field isLink
       * @desc 可点击的链接
       * @type select
       * @valueType boolean
       * @value false
       * @option
       [
       {
         "text": "否",
         "value": false
       },
       {
         "text": "是",
         "value": true
       }
       ]
       */
    isLink: Boolean,
      /**
       * @noteType prop
       * @field value
       * @desc 右侧显示文字
       * @type input
       * @value
       */
    arrowdefined: Boolean,
    disabledcolor: Boolean,
    value: {},
    id:'',
    wrapperpaddingleft:{
      type:String,
      default:''
    },
    wrapperpaddingright:{
      type:String,
      default:''
    },
    titlewidth:{
      type:String,
      default:''
    },
    titlepaddingtop:String,
    titlepaddingright:String,
    titlepaddingbottom:String,
    titlepaddingleft:String,
    required:{
      type:Boolean,
      default:false
    },
    valueAlign:String
  },

  computed: {
    href() {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to);
        if (this.to === 'click') {
          this.$nextTick(() => {
            this.$el.addEventListener('click', this.handleClick);
          });
          return ''
        }
        if (!resolved.matched.length) return this.to;

        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick);
        });
        return resolved.fullPath || resolved.path;
      }
      
      return this.to;
    },
    isCell() {
      return false;
    },
    isGroupCell() {
      return !!this.findParentByName('mt-cell-group');
    },
    wrapperpaddingrightdefined() {
      return this.arrowdefined||this.isLink?"15px":"20px";
    }
  },

  methods: {
    handleClick($event) {
      $event.preventDefault();
      if (this.to != 'click') {
        this.$router.push(this.href);
      }else {
        this.$emit('cellClick',$event,this._props);
      }
    },
    findParentByName(name) {
      if (!this.parentGroup) {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.name === name) {
            this.parentGroup = parent;
            break;
          }
          parent = parent.$parent;
        }
      }

      return this.parentGroup;
    }
  },

  created:function(){
    this.$nextTick(function(){
      let targetDom=this.$refs.cellValue;
      if(targetDom.firstChild.className === "mint-textarea-height-auto"){
        targetDom.parentNode.style.alignItems="normal";
        return
      }
      for(let key in targetDom.children){
        if(targetDom.children[key].nodeName === "TEXTAREA"){   
          targetDom.parentNode.style.alignItems="normal";
          return
        }
      }
    })
  }
};

/**
 * @noteType external
 * @content
 {
   "slot": [
          {
            "field": "icon",
            "desc": "自定义图标",
            "caption": "",
            "option": [
              {
                "componentName": "Image",
                "attr": {
                  "height": "20px",
                  "width": "20px",
                  "smile-display": "inline-block"
                }
              }
            ]
          }
        ],
   "bindField": ":value"
 }
 */
</script>

<style lang="css">

  @component-namespace mint {
    @component cell {
      box-sizing: border-box;
      color: inherit;
      display: block;
      position: relative;
      text-decoration: none;
      min-height: 50px;

      &:first-child {
        .mint-cell-wrapper {
          background-origin: border-box;
        }
      }

      @when require{
        .mint-cell-require{
          margin-left:-10px;
        }
        .mint-cell-require:before{
          content: "*";
          color: red;
          position: relative;
          top: 4px;
          margin-right: 4px;
        };
      }
/*
      &:last-child {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: bottom;
      }*/

      @descendent wrapper {
        border-top-width: 1px;
        border-top-style: solid;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        background-size: 120% 1px;
        background-repeat: no-repeat;
        background-position: top left;
        background-origin: content-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 1;
        min-height: inherit;
        width: 100%;
      }

      @descendent mask {
        &::after {
          content: " ";
          opacity: 0;
          position: absolute 0;
        }

        &:active::after {
          opacity: .1;
        }
      }

      @descendent text {
        vertical-align: middle;
      }

      @descendent label {
        display: block;
        font-size: 12px;
        margin-top: 7px;
      }

      img {
        vertical-align: middle;
      }

      @descendent title {
        flex: 1;
        min-width: 68px;
        margin-right: 8px;
      }

      @descendent value {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
        @when link {
          margin-right: 1px;
        }
      }

      @descendent left {
        position: absolute;
        height: 100%;
        left: 0;
        transform: translate3d(-100%, 0, 0);
      }

      @descendent right {
        position: absolute;
        height: 100%;
        right: 0;
        top: 0;
        transform: translate3d(100%, 0, 0);
      }

      @descendent newline {
        margin-bottom: 16px;
      }

      @descendent no-top-line{
        border-top:none;
      }

      @descendent no-bottom-line{
        border-bottom: none;
      }

      @descendent icon{
        font-size: 20px;
      }
    }
  }
</style>
