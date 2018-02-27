<template>
  <x-cell
    class="mint-field"
    :title="label"
    v-clickoutside="doCloseActive"
    :wrapperpaddingright="state!=='default'?'15px':'20px'"
    :disabledcolor="readonly||disabled"
    :titlewidth="titlewidth"
    :required="required"
    :class="[{
      'is-textarea': type === 'textarea',
      'is-nolabel': !label,
      'is-autoheight': heightAuto
    }]">
    <pre v-if="type === 'textarea'&&heightAuto" class="pre" :style="{width:preWidth}">{{currentValue}}</pre>
    <textarea
      @change="$emit('change', currentValue, $event)"
      ref="textarea"
      class="mint-field-core"
      :placeholder="placeholder"
      v-if="type === 'textarea'"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      v-model="currentValue"
      :style="{width:preWidth}">
    </textarea>
    <input
      @change=" $emit('change', currentValue, $event)"
      ref="input"
      class="mint-field-core"
      :placeholder="placeholder"
      :number="type === 'number'"
      v-else
      :type="type"
      @focus="active = true"
      :disabled="disabled"
      :readonly="readonly"
      :value="currentValue"
      @input="handleInput">
    <div
      @click="handleClear"
      class="mint-field-clear"
      v-if="!disableClear"
      v-show="currentValue && type !== 'textarea' && active &&!readonly" >
      <i class="iconfont icon-weiwancheng"></i>
    </div>
    <span class="mint-field-state" v-if="state" :class="iconColor">
      <i class="iconfont" :class="['icon-' + iconstate]"></i>
    </span>
    <div class="mint-field-other">
      <slot></slot>
    </div>
  </x-cell>
</template>

<script>
import XCell from 'bh-mint-ui2/packages/cell/index.js';
import Clickoutside from 'bh-mint-ui2/src/utils/clickoutside';
if (process.env.NODE_ENV === 'component') {
  require('bh-mint-ui2/packages/cell/style.css');
}

/**
 * mt-field
 * @desc 编辑器，依赖 cell
 * @module components/field
 *
 * @param {string} [type=text] - field 类型，接受 text, textarea 等
 * @param {string} [label] - 标签
 * @param {string} [rows] - textarea 的 rows
 * @param {string} [placeholder] - placeholder
 * @param {string} [disabled] - disabled
 * @param {string} [readonly] - readonly
 * @param {string} [state] - 表单校验状态样式，接受 error, warning, success
 *
 * @example
 * <mt-field v-model="value" label="用户名"></mt-field>
 * <mt-field v-model="value" label="密码" placeholder="请输入密码"></mt-field>
 * <mt-field v-model="value" label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
 * <mt-field v-model="value" label="邮箱" placeholder="成功状态" state="success"></mt-field>
 */

/**
 * @noteType component
 * @name Field
 * @tagName mt-field
 * @desc 输入框
 * @wrapClassName mint-field
 * @html
 * <mt-field label="输入框"></mt-field>
 */
export default {
  name: 'mt-field',

  data() {
    return {
      active: false,
      currentValue: this.value
    };
  },

  directives: {
    Clickoutside
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    rows: String,
    label: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    disableClear: Boolean,
    state: {
      type: String,
      default: ''
    },
    value: {},
    attr: Object,
    heightAuto: {
      type: Boolean,
      default: true
    },
    titlewidth: String,
    required:Boolean,
  },

  components: { XCell },


  methods: {
    doCloseActive() {
      this.active = false;
    },

    handleInput(evt) {
      this.currentValue = evt.target.value;
    },

    handleClear() {
      if (this.disabled || this.readonly) return;
      this.currentValue = '';
    }
  },
  computed:{
    iconstate:function(){
      let iconstate="default";
      switch(this.state){
        case "success":iconstate="wancheng";break;
        case "warning":iconstate="yuqiweiwancheng";break;
        case "error":iconstate="weiwancheng";break;
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
        case "error":iconColor="mt-color-danger";break;
        default:
          break;
      }
      return iconColor;
    },
    preWidth:function(){
      if(!this.heightAuto) return
      let width="100%";
      if(this.state){
        width="calc(100% - 40px)";
      }
      return width
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit('input', val);
    },

    attr: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const target = [this.$refs.input, this.$refs.textarea];
          target.forEach(el => {
            if (!el || !attrs) return;
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
          });
        });
      }
    }
  }
};
</script>

<style lang="css">
  textarea:disabled, input:not([type]):disabled, input[type="color" i]:disabled, input[type="date" i]:disabled, input[type="datetime" i]:disabled, input[type="datetime-local" i]:disabled, input[type="email" i]:disabled, input[type="month" i]:disabled, input[type="password" i]:disabled, input[type="number" i]:disabled, input[type="search" i]:disabled, input[type="tel" i]:disabled, input[type="text" i]:disabled, input[type="time" i]:disabled, input[type="url" i]:disabled, input[type="week" i]:disabled {
    background-color: transparent;
  }

  @component-namespace mint {
    @component field {
      display: flex;

      @when autoheight{
        .mint-cell-value{
          position: relative;
        }

        .mint-cell-value textarea{
          position: absolute;
          top: 5px;
          left: 0;
          height: calc(100% - 10px);
        }
      }

      @when textarea {
        align-items: inherit;

        .mint-cell-title,.mint-cell-require{
          padding: 10px 0;
        }

        .mint-cell-value {
          padding: 5px 0;
        }
      }

      .mint-cell-title {
        width: 20%;
        flex: none;
      }

      .mint-cell-value {
        flex: 1;
        display: flex;
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
    min-height: 54px;
    line-height: 1.6;
    width: 100%;
    word-break:break-all
  }
  textarea{
    padding:0;
  }
</style>
