<template>
  <div @click="handleClick" class="mint-hr" :background="background" :height="height" :margin="margin" :style="computeStyle">
  </div>
</template>
<script>
    export default {
        name: 'mt-hr',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },
        props: {
            background: String,
            margin: String,
            height: String
        },
        computed: {
            computeStyle: function() {
                let _style = '';
                let background = this.background;
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
      margin: 2px;
      background: #ddd;
    }
  }

</style>
