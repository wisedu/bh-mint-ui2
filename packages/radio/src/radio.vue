<template>
  <div class="mint-radiolist" @change="$emit('change', currentValue)">
    <label class="mint-radiolist-title" v-text="title"></label>
    <x-cell v-for="option in options" :class="{'mint-radiolist-inline':inline}">
      <label class="mint-radiolist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="mint-radio">
          <input
            class="mint-radio-input"
            type="radio"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span :class="{'mint-radio-core':!type,'mint-radio-hook':type}"></span>
        </span>
        <span class="mint-radio-label" v-text="option.label || option"></span>
      </label>
    </x-cell>
    <slot name="textarea"></slot>
  </div>
</template>

<script>
import XCell from 'bh-mint-ui2/packages/cell/index.js';
if (process.env.NODE_ENV === 'component') {
  require('bh-mint-ui2/packages/cell/style.css');
}
/**
 * mt-radio
 * @module components/radio
 * @desc 单选框列表，依赖 cell 组件
 *
 * @param {string[], object[]} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string} value - 选中值
 * @param {string} title - 标题
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 * @example
 * <mt-radio v-model="value"></mt-radio>
 */

/**
 * @noteType component
 * @name Radio
 * @tagName mt-radio
 * @desc 单选列表
 * @wrapClassName mint-radio
 * @html
 * <mt-radio v-model="value" title="" :options="['a', 'b', 'c']"></mt-radio>
 */
export default {
  name: 'mt-radio',

  props: {
    /**
     * @noteType prop
     * @field title
     * @desc 标题
     * @type input
     */
    title: String,
    /**
     * @noteType prop
     * @field align
     * @desc 对其位置
     * @type select
     * @option
     [{
        "text": "left",
         "value": "left"
      },{
        "text": "right",
         "value": "right"
      }]
      */
    align: String,
    /**
     * @noteType prop
     * @field options
     * @desc 选择项
     * @type textarea
     * @valueType object
      */
    options: {
      type: Array,
      required: true
    },
    /**
     * @noteType prop
     * @field value
     * @desc 绑定值
     * @type textarea
     * @valueType object
      */
    value: String,
    //radio类型,hook类型
    type:{
      type:String,
      default:''
    },
    inline:Boolean,
    others:{
      type:Boolean,
      default:false
    }
  },

  data() {
    return {
      currentValue: this.value
    };
  },
  created(){
    if(this.others){
        if (this.options[0].label) {
          this.options.push({
            label:'其他',
            value:'others'
          })
        }else {
          this.options.push('其他');
        }
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit('input', val);
    }
  },

  components: {
    XCell
  }
};
/**
 * @noteType external
 * @content
 {
   "mock": {
      "title": "单选列表",
      "options": [{"label":"选项A","value":"A"}, {"label":"选项B","value":"B"}],
      "value": []
   },
   "xtype": [ "radiolist" ],
   "modelName": "value",
   "bindField": "v-model"
 }
 */
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component radiolist {

      .mint-cell {
        padding: 0;
      }

      @descendent inline {
        display: inline-block !important;
        & .mint-radio.is-right {
          position: relative;
          right: -8px;
          top: -2px;
        }
        & .mint-cell-wrapper {
          border-top: none;
        }
      }

      @descendent label {
        display: block;
        padding: 0 10px;
      }

      @descendent title {
        font-size: 12px;
        margin: 8px 8px 8px 20px;
        display: block;
        color: $radio-title-color;
      }
    }

    @component radio {
      @when right {
        float: right;
      }

      @descendent label {
        vertical-align: middle;
        margin-left: 6px;
      }

      @descendent input {
        display: none;

        &:checked {
          + .mint-radio-core {
            background-color: $color-green;
            border-color: $color-green;

            &::after {
              background-color: $color-white;
              transform: scale(1);
            }
          }
        }

        &[disabled] + .mint-radio-core {
          background-color: $color-grey;
          border-color: #ccc;
        }

        &:checked {
          + .mint-radio-hook {

            &::after {
              content: "\00a0";
              display: inline-block;
              border: 2px solid #38cdc1;
              border-top-width: 0;
              border-right-width: 0;
              width: 12px;
              height: 6px;
              -webkit-transform: rotate(-50deg);
              position: absolute;
              top: 4px;
              left: -16px;  
            }
          }
        }

        &[disabled] + .mint-radio-hook {
          background-color: $color-grey;
          border-color: #ccc;
        }
      }

      @descendent core {
        box-sizing: border-box;
        display: inline-block;
        background-color: $color-white;
        border-radius: 100%;
        border: 1px solid #ccc;
        position: relative;
        size: 20px;
        vertical-align: middle;

        &::after {
          content: " ";
          border-radius: 100%;
          position: absolute 5px * * 5px;
          size: 8px;
          transition: transform .2s;
          transform: scale(0);
        }
      }
      @descendent hook {
        width: 16px;
        height: 16px;
        position: relative;
        &::after {
          
        }
      }
    }
  }
</style>
