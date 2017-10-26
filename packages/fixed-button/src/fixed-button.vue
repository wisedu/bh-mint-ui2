<template>
  <div @click="handleClick" class="mint-fixed-button" :class="['mint-fixed-button--' + position, 'mint-fixed-button--' + type]" :style="computeStyle">
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
      borderRadius: String,
      color: String,
      background: String,
      width: String,
      height: String,
      left: String,
      right: String,
      top: String,
      bottom: String,
        contentMarginTop: String
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
              let borderRadius = this.borderRadius;
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
              let contentMarginTop = this.contentMarginTop;
              if (contentMarginTop) {
                  _style += 'margin-top:' + contentMarginTop + ';';
              }
              return _style;
          }
      }
  };
</script>

<style>
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component fixed-button {
      position: fixed;
      border-radius: 50%;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      font-size: 3rem;

      @modifier top-left {
        top: 1.5rem;
        left: 1.5rem;
      }

      @modifier top-right {
        top: 1.5rem;
        right: 1.5rem;
      }

      @modifier bottom-left {
        bottom: 1.5rem;
        left: 1.5rem;
      }

      @modifier bottom-right {
        bottom: 1.5rem;
        right: 1.5rem;
      }

      @modifier primary {
        background-color: $button-primary-background-color;
      }

      @modifier warning {
        background-color: $button-warning-background-color;
      }

      @modifier danger {
        background-color: $button-danger-background-color;
      }

      @modifier grey {
        background-color: #d9d9d9;
      }

      @modifier content {
        position: relative;
        color: inherit;
        font-size: inherit;
        margin-top: -0.7rem;
      }
    }
  }
</style>
