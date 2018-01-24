<template>
  <div @click="handleClick" class="mint-text" :class="[type?'mt-color-' + type:'mt-color-grey']" :style="computeStyle">
    <pre v-if="wordwrap"><slot></slot></pre>
    <slot v-else></slot>
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
      /**
       * @noteType prop
       * @field size
       * @desc 字体大小
       * @type input
       */
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
        default: ''
      },
      /**
       * @noteType prop
       * @field color
       * @desc 字体颜色
       * @type input
       */
      color: String,
      wordwrap: {
        type: Boolean,
        default: false
      }
  },
    computed: {
        computeStyle: function() {
            let _style = '';
            let size = this.size;
            let color = this.color;
            if (size) {
                _style += `font-size: ${size};`;
                _style += `line-height:1;`;
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
        "bindField":"text",
        "textField": {
            "field": "text",
            "className": "mint-text"
          }
     }
     */
</script>

<style lang="css">
  @component-namespace mint {
    @component text {
      position: relative;
      word-wrap: break-word;
    }
  }
  pre{
    margin:0;
    font-size: inherit;
    font-family: inherit;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
</style>
