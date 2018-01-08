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
      'is-nolabel': !label
    }]">
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
    <span class="mint-textarea-state" v-if="state" :class="['is-' + state]">
      <i class="mintui" :class="['mt-color-' + state]"></i>
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
    easycheck:true
  },

  components: { XCell },

  methods: {
    doCloseActive() {
      this.active = false;
    }
  },
  computed:{
    limitCount(){
      let n=Number(this.maxlength);
      if(isNaN(n)){
        return ""
      }
      return n;
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      if (this.easycheck) {
        this.count = val.length;
      } else {
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
      }
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
        margin-left: 20px;

        .mintui {
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
</style>
