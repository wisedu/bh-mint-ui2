<template>
  <div @click="handleClick" class="mint-layout-spacing" :style="computeStyle">
  </div>
</template>
<script>
    /**
     * @noteType component
     * @name LayoutSpacing
     * @tagName mt-layout-spacing
     * @desc 间距
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
            background: {
                type:String,
                default:""
            },
            /**
             * @noteType prop
             * @field height
             * @desc 高度
             * @type input
             * @value
             */
            height: {
                type:String,
                default:"15px"
            },
            border: String,
            borderside: {
                type:Array,
                default: function(){
                    return []
                }
            }
        },
        computed: {
            computeStyle: function() {
                let _style = '';
                let background = this.background;
                let height = this.height;
                let border = this.border;
                if (background) {
                    _style += `background: ${background};`;
                }

                if (height) {
                    _style += `height: ${height};`;
                }

                if (border) {
                    if(!this.borderside.length){
                        _style += `border: ${border};`;
                    }else{
                        _style = this.borderside.indexOf('top')>-1?_style + `border-top: ${border};`:_style ;
                        _style = this.borderside.indexOf('right')>-1?_style + `border-right: ${border};`:_style ;
                        _style = this.borderside.indexOf('bottom')>-1?_style + `border-bottom: ${border};`:_style ;
                        _style = this.borderside.indexOf('left')>-1?_style + `border-left: ${border};`:_style ;
                    }
                }

                return _style;
            }
        }
    };
</script>
<style lang="css">
  @component-namespace mint {
    @component layout-spacing {
      position: relative;
    }
  }

</style>
