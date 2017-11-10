<template>
  <div @click="handleClick" class="mint-layout-container" :background="background" :margin="margin" :padding="padding" :style="computeStyle">
    <slot></slot>
  </div>
</template>
<script>
    /**
     * @noteType component
     * @name LayoutContainer
     * @tagName mt-layout-container
     * @desc 普通容器
     * @type container
     * @wrapClassName mint-layout-container
     * @html
     * <mt-layout-container></mt-layout-container>
     */
    export default {
        name: 'mt-layout-container',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },
        props: {
            background: String,
            padding: String,
            margin: String
        },
        computed: {
            computeStyle: function() {
                let _style = '';
                let background = this.background;
                let padding = this.padding;
                let margin = this.margin;
                if (background) {
                    let bgColor = '';
                    switch (background) {
                        case 'gray':
                            bgColor = 'rgba(0,0,0,0.1)';
                            break;
                        default:
                            bgColor += background;
                            break;
                    }
                    _style += `background: ${bgColor};`;
                }

                if (padding) {
                    _style += `padding: ${padding};`;
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
    @component layout-container {
        position: relative;

        &:after{
          content: "";
          display: table;
          clear: both;
         }
    }
  }

  .mint-layout-container:after{
    content: "";
    display: table;
    clear: both;
  }

</style>
