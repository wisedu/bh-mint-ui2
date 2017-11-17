<template>
    <span class="mint-icon" :class="animateClass">
        <i @click="handleClick" class="iconfont mint-icon-i" :style="computeStyle" :class="type">
        </i>
    </span>

</template>
<script>
    /**
     * @noteType component
     * @name Icon
     * @tagName mt-icon
     * @desc 分隔线
     * @wrapClassName mint-icon
     * @html
     * <mt-icon></mt-icon>
     */
    export default {
        name: 'mt-icon',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
                if(this.changeColor){
                    this.isAddbcColor = this.changeColor;
                }
                if(this.animate){
                    this.animateClass = this.animate;
                }
            }
        },
        props: {
            fontSize: String,
            animate: String,
            changeColor: String,
            type: String,
            color: String,
            /**
             * @type 图标样式
             * @fontSize 图标大小
             * @changeColor 点击之后颜色
             * @animate css动画
             * @color 图标颜色
             * @padding 图标间距
             */
            padding: String
        },
        data(){
            return {
                isAddbcColor:'',
                animateClass:''
            };
        },
        computed: {
            computeStyle: function() {
                let _style = '';
                let fontSize = this.fontSize;
                let padding = this.padding;
                let color = this.color;
                let isAddbcColor = this.isAddbcColor;
                if (fontSize) {
                    _style += `font-size: ${fontSize};`;
                }
                if (padding) {
                    _style += `padding: ${padding};`;
                }
                if (color) {
                    _style += `color: ${color};`;
                }
                if (isAddbcColor) {
                    _style += `color: ${isAddbcColor};`;
                }
                return _style;
            }
        }
    };
</script>
<style lang="css">
  @import "../../../src/style/var.css";
  @component-namespace mint {
    @component icon {
      position: relative;
      background: #ddd;
        display: inline-block;
        font-size: 16px;
    }
  }
    .mt-icon > i{
        font-size: inherit;
    }

    .mint-icon-i{
        display: inline-block;
    }
</style>
