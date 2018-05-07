<template>
  <img @click="handleClick" class="mint-image" :watermark="watermark" :src="src" :style="computeStyle" />
</template>

<script>
    /**
     * @noteType component
     * @name Image
     * @tagName mt-image
     * @desc 图片
     * @wrapClassName mint-image
     * @html
     * <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png"></mt-image>
     */
export default {
  name: 'mt-image',
  methods: {
      handleClick(evt) {
          this.$emit('click', evt);
      }
  },
  props: {
      /**
       * @noteType prop
       * @field src
       * @desc 地址
       * @type input
       * @value http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png
       */
      src: String,
      /**
       * @noteType prop
       * @field width
       * @desc 宽度
       * @type input
       * @value
       */
      width: String,
      /**
       * @noteType prop
       * @field height
       * @desc 高度
       * @type input
       * @value
       */
      height: String,
      /**
       * @noteType prop
       * @field watermark
       * @desc 生成水印
       * @valueType boolean
       * @type radio
       * @value false
       * @option
       [
       {
           "text": "否",
           "value": false
       },
       {
           "text": "是",
           "value": true
       }
       ]
       */
      watermark: Boolean,
      /**
       * @noteType prop
       * @field top
       * @desc top
       * @type input
       * @value
       */
      top: String,
      /**
       * @noteType prop
       * @field left
       * @desc left
       * @type input
       * @value
       */
      left: String
  },
    computed: {
        computeStyle: function() {
            let width = this.width;
            let height = this.height;
            let top = this.top;
            let left = this.left;
            // let watermark = this.watermark;
            let _style = '';
            if (width) {
                _style += 'width:' + width + ';';
            }
            if (height) {
                _style += 'height:' + height + ';';
            }
            // if (watermark === true || watermark === 'true') {
            //     _style += 'position: fixed;';
            // }
            if (top) {
                _style += 'top:' + top + ';';
            }
            if (left) {
                _style += 'left:' + left + ';';
            }

            return _style;
        }
    }
};
</script>

<style lang="css">

  @component-namespace mint {
    @component image {
      position:relative;
    }
  }
</style>
