<template>
  <div @click="handleClick" class="mint-layout-spacing" :background="background" :height="height" :style="computeStyle">
  </div>
</template>
<script>
    export default {
        name: 'mt-layout-spacing',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },
        props: {
            background: String,
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
