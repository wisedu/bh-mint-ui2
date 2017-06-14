<template>
  <img :src="src" :style="computeStyle" />
</template>

<script>
export default {
  name: 'mt-image',

  props: {
      src: String,
      width: String,
      height: String
  },
    computed: {
        computeStyle: function() {
            let width = this.width;
            let height = this.height;
            let _style = '';
            if (width) {
                _style += 'width:' + width + ';';
            }
            if (height) {
                _style += 'height:' + height + ';';
            }
            return _style;
        }
    }
};
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component image {
      position: relative;
    }
  }
</style>
