<template>
  <div @click="handleClick" class="mint-fixed-button mt-color-white" :class="['mint-fixed-button--' + position, 'mint-fixed-button--' + type,'mt-bg-'+type]" :style="computeStyle">
    <div class="mint-fixed-button--content" :style="computeContentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mt-fixed-button',
      methods: {
          handleClick(evt) {
              this.$emit('click', evt);
          }
      },
    props: {
      position: {
        type: String,
        default: 'bottom-right'
      },
      type: {
          type: String,
          default: 'primary'
      },
      size: String,
      borderradius: String,
      color: String,
      background: String,
      width: String,
      height: String,
      left: String,
      right: String,
      top: String,
      bottom: String,
      contentmargintop: String
    },
      computed: {
          computeStyle: function() {
              let left = this.left;
              let right = this.right;
              let top = this.top;
              let bottom = this.bottom;
              let color = this.color;
              let background = this.background;
              let width = this.width;
              let height = this.height;
              let borderRadius = this.borderradius;
              let size = this.size;
              let _style = '';
              if (left) {
                  _style += 'left:' + left + ';';
              }
              if (right) {
                  _style += 'right:' + right + ';';
              }
              if (top) {
                  _style += 'top:' + top + ';';
              }
              if (bottom) {
                  _style += 'bottom:' + bottom + ';';
              }

              if (color) {
                  _style += 'color:' + color + ';';
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
              if (borderRadius) {
                  _style += 'border-radius:' + borderRadius + ';';
              }
              if (size) {
                  _style += 'font-size:' + size + ';';
              }
              return _style;
          },
          computeContentStyle: function() {
              let _style = '';
              let contentMarginTop = this.contentmargintop;
              if (contentMarginTop) {
                  _style += 'margin-top:' + contentMarginTop + ';';
              }
              return _style;
          }
      }
  };
</script>

<style>

  @component-namespace mint {
    @component fixed-button {
      position: fixed;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 46px;
      height: 46px;
      font-size: 18px;

      @modifier top-left {
        top: 20px;
        left: 16px;
      }

      @modifier top-right {
        top: 20px;
        right: 16px;
      }

      @modifier bottom-left {
        bottom: 20px;
        left: 16px;
      }

      @modifier bottom-right {
        bottom: 20px;
        right: 16px;
      }

      @modifier content {
        position: relative;
        font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
      }
    }
  }
</style>
