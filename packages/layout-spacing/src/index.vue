<template>
  <div @click="handleClick" class="mint-layout-spacing" :background="background" :height="height" :style="computeStyle">
  </div>
</template>
<script>
    /**
     * @noteType component
     * @name LayoutSpacing
     * @tagName mt-layout-spacing
     * @desc 间距
     * @type container
     * @wrapClassName mint-layout-spacing
     * @html
     * <mt-layout-spacing></mt-layout-spacing>
     */
    export default {
        name: 'mt-layout-spacing',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },
        props: {
            background: String,
            /**
             * @noteType prop
             * @field height
             * @desc 高度
             * @type input
             * @value
             */
            height: String
        },
        computed: {
            computeStyle: function() {
                let _style = '';
                let background = this.background;
                let height = this.height;
                if (background) {
                    _style += `background: ${background};`;
                }

                if (height) {
                    _style += `height: ${height};`;
                }

                return _style;
            }
        }
    };
</script>
<style lang="css">
  @import "../../../src/style/var.css";
  @component-namespace mint {
    @component layout-spacing {
      position: relative;
      height: 16px;
    }
  }

</style>
