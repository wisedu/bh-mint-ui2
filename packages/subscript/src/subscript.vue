<template>
  <div
    class="mint-subscript mt-color-white"
    :style="computeStyle">
    {{label}}
  </div>
</template>

<script>

export default {
  name: 'mt-subscript',

    /**
     * @noteType prop
     * @field text
     * @desc 内容
     * @type input
     * @value 30
     */
  props: {
    label:String,
    background: String,
    rotate: {
      type: String
    },
    fontsize: {
      type: String
    },
    width:String,
    height:String
  },
  computed: {
          computeStyle: function() {
              let rotate = this.rotate;
              let background = this.background;
              let width = this.width;
              let height = this.height;
              let fontsize = this.fontsize;
              let _style = '';
              if (rotate) {
                  _style += 'transform:rotate(' + rotate + 'deg);';
              }
              if (background) {
                  _style += 'background:' + background + ';';
              }
              if (width) {
                  _style += 'width:' + width + ';';
              }
              if (height) {
                  _style += 'height:' + height + ';';
              }
              if (fontsize) {
                  _style += 'font-size:' + fontsize + ';';
              }
              return _style;
          }
      }
};

</script>
<style lang="css">
  @component-namespace mint {
    @component subscript {
      text-align: center;
      display: inline-block;

      position: absolute;
      top: 14px;
      right: -20px;
    }
  }

</style>
