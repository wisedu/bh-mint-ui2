<template>
  <x-cell
    class="mint-textarea"
    :title="label"
    v-clickoutside="doCloseActive"
    :titlePaddingTop="titlepaddingtop"
    :titlePaddingRight="titlepaddingright"
    :titlePaddingBottom="titlepaddingbottom"
    :titlePaddingLeft="titlepaddingleft"
    :wrapperpaddingleft="wrapperpaddingleft"
    :class="[{
      'is-textarea': true,
      'is-nolabel': !label,
      'is-autoheight': heightAuto
    }]">
    <div v-if="heightAuto" class="mint-textarea-height-auto">
      <pre  class="pre" ref="pre">{{currentValue}}</pre>
      <textarea
        @change="$emit('change', currentValue, $event)"
        ref="textarea"
        class="mint-textarea-core"
        :placeholder="placeholder"
        :rows="rows"
        :maxlength="maxlength"
        :disabled="disabled"
        :readonly="readonly"
        :style="{'padding-top':areapaddingtop,'padding-right':areapaddingright,'padding-bottom':areapaddingbottom,'padding-left':areapaddingleft}"
        v-model="currentValue">
      </textarea>
    </div>
    <textarea
      v-if="!heightAuto"
      @change="$emit('change', currentValue, $event)"
      ref="textarea"
      class="mint-textarea-core"
      :placeholder="placeholder"
      :rows="rows"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly"
      :style="{'padding-top':areapaddingtop,'padding-right':areapaddingright,'padding-bottom':areapaddingbottom,'padding-left':areapaddingleft}"
      v-model="currentValue">
    </textarea>
    <span class="mint-textarea-state" v-if="state!=='default'" :class="iconColor" >
      <i class="iconfont" :class="['icon-' + iconstate]"></i>
    </span>
    <div class="mint-textarea-other">
      <slot></slot>
    </div>
    <div slot="newline" class="mint-textarea-count mint-cell-newline mt-color-grey-lv3 mt-bg-lv3" v-if="limitCount"><span class="mt-color-grey">{{count}}</span>/{{limitCount}}</div>
  </x-cell>
</template>

<script>
import XCell from 'bh-mint-ui2/packages/cell/index.js';
import Clickoutside from 'bh-mint-ui2/src/utils/clickoutside';
if (process.env.NODE_ENV === 'component') {
  require('bh-mint-ui2/packages/cell/style.css');
}

/**
 * mt-textarea
 * @desc 编辑器，依赖 cell
 * @module components/field
 *
 * @param {string} [type=text] - field 类型，接受 text, textarea 等
 * @param {string} [label] - 标签
 * @param {string} [rows] - textarea 的 rows
 * @param {string} [placeholder] - placeholder
 * @param {string} [disabled] - disabled
 * @param {string} [readonly] - readonly
 * @param {string} [state] - 表单校验状态样式，接受 danger, warning, success
 *
 * @example
 * <mt-textarea v-model="value" label="自我介绍" placeholder="自我介绍" rows="4"></mt-textarea>
 */

/**
 * @noteType component
 * @name Textarea
 * @tagName mt-textarea
 * @desc 文本域
 * @wrapClassName mint-textarea
 * @html
 * <mt-textarea label="输入框"></mt-textarea>
 */
export default {
  name: 'mt-textarea',

  data() {
    return {
      active: false,
      currentValue: this.value,
      count:0
    };
  },

  directives: {
    Clickoutside
  },

  props: {
    wrapperpaddingleft:String,
    /**
       * @noteType prop
       * @field rows
       * @desc 行数
       * @type input
       * @value 4
       */
    rows: String,
    /**
       * @noteType prop
       * @field maxlength
       * @desc 最大长度
       * @type input
       * @value 100
       */
    maxlength: String,
      /**
       * @noteType prop
       * @field label
       * @desc 内容
       * @type input
       * @value 100
       */
    label: String,
      /**
       * @noteType prop
       * @field placeholder
       * @desc placeholder
       * @type input
       * @value
       */
    placeholder: String,
      /**
       * @field readonly
       * @desc 是否只读
       * @valueType boolean
       * @type radio
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
    readonly: Boolean,
      /**
       * @field disabled
       * @desc 是否disabled
       * @valueType boolean
       * @type radio
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
    disabled: Boolean,
    disableclear: Boolean,
      /**
       * @noteType prop
       * @field state
       * @desc 校验样式
       * @type select
       * @option
       [
       {
         "text": "默认",
         "value": ""
       },
       {
         "text": "成功",
         "value": "success"
       },
       {
         "text": "失败",
         "value": "error"
       },
       {
         "text": "警告",
         "value": "warning"
       }
       ]
       */
    state: {
      default: 'default'
    },
    /**
     * @noteType prop
     * @field value
     * @desc 默认值
     * @type textarea
      */
    value: {},
    attr: Object,
    //textarea 的padding设置
    areapaddingtop:String,
    areapaddingright:String,
    areapaddingbottom:String,
    areapaddingleft:String,
    //title 的padding设置
    titlepaddingtop:String,
    titlepaddingright:String,
    titlepaddingbottom:String,
    titlepaddingleft:String,
    //简单校验长度，不区分中文
    easycheck:true,
    //textarea内容不自适应
    heightAuto: {
      type:Boolean,
      default:true
    }
  },

  components: { XCell },

  methods: {
    doCloseActive() {
      this.active = false;
    },
    checkCount(val){
      if(val===undefined){
        this.count=0;
        return
      }
      if (this.easycheck === false) {
        let reg = /[^\x00-\xff]/ig;
        let count = 0;
        val.split('').forEach(function(code){
          if (code.match(reg) !== null) {
            count += 3;
          } else {
            count ++;
          }
        });
        this.count = count;
      } else {
        this.count = val.length;
      }
    }
  },
  computed:{
    limitCount(){
      let n=Number(this.maxlength);
      if(isNaN(n)){
        return ""
      }
      return n;
    },
    iconstate:function(){
      let iconstate="default";
      switch(this.state){
        case "success":iconstate="wancheng";break;
        case "warning":iconstate="yuqiweiwancheng";break;
        case "danger":iconstate="weiwancheng";break;
        default:
          break;
      }
      return iconstate;
    },
    iconColor:function(){
      let iconColor="default";
      switch(this.state){
        case "success":iconColor="mt-color-primary";break;
        case "warning":iconColor="mt-color-warning";break;
        case "danger":iconColor="mt-color-danger";break;
        default:
          break;
      }
      return iconColor;
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.checkCount(val);
      this.$emit('input', val);
    },

    attr: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const target = [this.$refs.textarea];
          target.forEach(el => {
            if (!el || !attrs) return;
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
          });
        });
      }
    }
  },
  created(){
    this.checkCount(this.value);
  }
};
/**
 * @noteType external
 * @content
 {
   "mock": {
      "label": "文本域",
      "rows": "4",
      "maxlength": "100"
   },
   "xtype": [ "text", "textarea" ],
   "bindField": "v-model"
 }
 */
</script>

<style lang="css">

  @component-namespace mint {
    @component textarea {
      @when autoheight{
        .mint-cell-value textarea{
          position: absolute;
          top: 0px;
          left: 0;
          height: 100%;
        }
      }

      .mint-cell-title {
        padding: 10px 0;
      }
      .mint-cell-value {
        padding-top: 5px;
      }

      .mint-cell-title {
        width: 105px;
        flex: none;
      }

      .mint-cell-value {
        flex: 1;
        color: inherit;
        display: flex;
      }

      .mint-cell-wrapper{
        border-bottom: none;
      }

      @descendent height-auto{
         position:relative;
         width: 100%;
      }

      @descendent count {
        text-align:right;
        padding: 8px 20px 0 0;
      }

      @descendent core {
        appearance: none;
        border-radius: 0;
        border: 0;
        flex: 1;
        outline: 0;
        line-height: 1.6;
        font-size: inherit;
        width: 100%;
      }

      @descendent clear {
        opacity: .2;
      }

      @descendent state {

        .iconfont {
          font-size: 20px;
        }
      }

      @descendent other {
        position: relative 0 0 * *;
      }

      @when nolabel {
        .mint-cell-title {
          display: none;
        }
      }
    }
  }
  /*新增texterea高度功能功能专用样式 2018-1-22 王永建*/
  .pre{
    margin:0;
    font-size: inherit;
    font-family: inherit;
    visibility:hidden;
    min-height: 79px;
    line-height: 1.6;
    width: 100%;
    word-break:break-all;
    white-space: pre-wrap;
    padding: 0;
  }
  textarea{
    padding:0;
  }
</style>
