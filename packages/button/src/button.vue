<template>
  <button
    :type="nativeType"
    class="mint-button"
    :class="['mint-button--' + type, 'mint-button--' + size, {
      'is-disabled': disabled,
      'is-plain': plain
    }]"
    @click="handleClick"
    :disabled="disabled">
    <span class="mint-button-icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <i v-if="icon" class="mintui" :class="'mintui-' + icon"></i>
      </slot>
    </span>
    <label class="mint-button-text"><slot></slot></label>
  </button>
</template>

<script>
// if (process.env.NODE_ENV === 'component') {
//   require('bh-mint-ui2/packages/font/style.css');
// }

/**
 * @name Button
 * @tagName mt-button
 * @desc 按钮
 * @wrapClassName mint-button
 * @display inline
 * @noteType component
 * @html
 * <mt-button type="primary">{{text}}</mt-button>
 */
export default {
  name: 'mt-button',

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },

    /**
     * @noteType prop
     * @field text
     * @desc 文字
     * @type input
     * @value 按钮
     */
  props: {
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
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
      /**
       * @noteType prop
       * @field type
       * @desc 样式
       * @type select
       * @value primary
       * @option
       [
       {
         "text": "default",
         "value": "default"
       },
       {
         "text": "primary",
         "value": "primary"
       },
       {
         "text": "danger",
         "value": "danger"
       },
       {
         "text": "warning",
         "value": "warning"
       }
       ]
       */
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'danger',
          'warning',
          'primary'
        ].indexOf(value) > -1;
      }
    },
      /**
       * @noteType prop
       * @field size
       * @desc 大小
       * @type select
       * @value normal
       * @option
       [
       {
         "text": "normal",
         "value": "normal"
       },
       {
         "text": "small",
         "value": "small"
       },
       {
         "text": "large",
         "value": "large"
       }
       ]
       */
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1;
      }
    }
  }
};

/**
 * @noteType external
 * @content
 {
   "edit": [
   {
     "selector": "label",
     "forAttribute": "text"
   }
   ],
   "mock": {
            "text": "按钮"
          },
   "textField": {
            "field": "text",
            "className": "mint-button-text"
          },
   "bindField":"text"
 }
 */
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component button {
      appearance: none;
      border-radius: 5px;
      border: 0;
      box-sizing: border-box;
      color: inherit;
      display: block;
      font-size: 18px;
      height: 41px;
      outline: 0;
      overflow: hidden;
      position: relative;
      text-align: center;

      &::after {
        background-color: #000;
        content: " ";
        opacity: 0;
        position: absolute 0 0 0 0;
      }

      &:not(.is-disabled):active::after {
        opacity: .1;
      }

      @descendent icon {
        vertical-align: middle;
        display: inline-block;
      }

      @modifier default {
        color: $button-default-color;
        background-color: $button-default-background-color;
        box-shadow: $button-default-box-shadow;

        @when plain {
          border: 1px solid $button-default-plain-color;
          background-color: transparent;
          box-shadow: none;
          color: $button-default-plain-color;
        }
      }

      @modifier primary {
        color: $button-primary-color;
        background-color: $button-primary-background-color;

        @when plain {
          border: 1px solid $button-primary-background-color;
          background-color: transparent;
          color: $button-primary-background-color;
        }

      }

      @modifier warning {
        color: $button-warning-color;
        background-color: $button-warning-background-color;

        @when plain {
          border: 1px solid $button-warning-background-color;
          background-color: transparent;
          color: $button-warning-background-color;
        }
      }

      @modifier danger {
        color: $button-danger-color;
        background-color: $button-danger-background-color;

        @when plain {
          border: 1px solid $button-danger-background-color;
          background-color: transparent;
          color: $button-danger-background-color;
        }
      }

      @modifier large {
        display: block;
        width: 100%;
      }

      @modifier normal {
        display: inline-block;
        font-size: 12px;
        padding: 7px 10px;
        height: 28px;
        border-radius: 14px;
      }

      @modifier small {
        display: inline-block;
        font-size: 11px;
        padding: 0px 8px;
        height: 25px;
        line-height: 25px;
        border-radius: 12px;
      }

      @when disabled {
        opacity: .3;
      }
    }
  }
</style>
