<template>
  <div @click="handleClick" class="mint-hr" :background="background" :height="height" :margin="margin" :style="computeStyle">
  </div>
</template>
<script>
    /**
     * @noteType component
     * @name Hr
     * @tagName mt-hr
     * @desc 分隔线
     * @wrapClassName mint-hr
     * @html
     * <mt-hr></mt-hr>
     */
    export default {
        name: 'mt-hr',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },
        props: {
            type: {
                type: String,
                default: 'default'
            },
            color: String,
            margin: String,
            /**
             * @noteType prop
             * @field height
             * @desc 线的粗细
             * @type input
             * @value
             */
            height: String
        },
        computed: {
            computeStyle: function() {
                let _style = '';
                let background = this.color;
                let height = this.height;
                let margin = this.margin;
                if (background) {
                    _style += `background: ${background};`;
                }

                if (height) {
                    _style += `height: ${height};`;
                }

                if (margin) {
                    _style += `margin: ${margin};`;
                }

                return _style;
            }
        }
    };
</script>
<style lang="css">
  @import "../../../src/style/var.css";
  @component-namespace mint {
    @component hr {
      position: relative;
      height: 1px;
      background: #ddd;
    }
  }

</style>
