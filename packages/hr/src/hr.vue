<template>
  <div class="mint-hr" :style="computeStyle" @click="handleClick"></div>
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
            background: {
                type:String,
                default:'#E8E8E8'
            },
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
                let background = this.background;
                let height = '';
                if(this.height){
                    height = this.height.replace(/(^\s*)|(\s*$)/g, "");
                    if(height.slice(-2) !== "px"){
                        height = '';
                    }else{
                        height = Number(height.slice(0,-2))*2+'px';
                    }
                }
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
  @component-namespace mint {
    @component hr {
      position: relative;
      height: 1px;
      -webkit-transform: scaleY(.5);
      transform:scaleY(.5);
    }
  }

</style>
