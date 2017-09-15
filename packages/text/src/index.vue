<template>
  <div @click="handleClick" class="mint-text" :class="['mint-text--' + type]" :style="computeStyle">
    <slot></slot>
  </div>
</template>

<script>
    /**
     * @noteType component
     * @name Text
     * @tagName mt-text
     * @desc 文本
     * @wrapClassName mint-text
     * @html
     * <mt-text>{{text}}</mt-text>
     */
export default {
  name: 'mt-text',
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    },
        /**
         * @noteType prop
         * @field text
         * @desc 内容
         * @type input
         * @value 标题
         */
  props: {
      size: String,
      /**
       * @noteType prop
       * @field type
       * @desc 样式
       * @type select
       * @value default
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
         "text": "warning",
         "value": "warning"
       },
       {
         "text": "danger",
         "value": "danger"
       },
       {
         "text": "grey",
         "value": "grey"
       }
       ]
       */
      type: {
        type: String,
        default: 'default'
      },
      color: String
  },
    computed: {
        computeStyle: function() {
            let _style = '';
            let size = this.size;
            let color = this.color;
            if (size) {
                _style += `font-size: ${size};`;
            }

            if (color) {
                _style += `color: ${color};`;
            }

            return _style;
        }
    }
};

    /**
     * @noteType external
     * @content
     {
       "mock": {
          "text": "标题"
        },
        "bindField":"text"
     }
     */
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component text {
      position: relative;

      @modifier primary {
        color: $button-primary-background-color;
      }

      @modifier warning {
        color: $button-warning-background-color;
      }

      @modifier danger {
        color: $button-danger-background-color;
      }

      @modifier grey {
        color: #d9d9d9;
      }
    }
  }
</style>
