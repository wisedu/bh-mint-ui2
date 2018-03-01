<template>
  <div @click="handleClick" class="mint-fixed-button mt-color-white" :class="['mint-fixed-button--' + position, 'mint-fixed-button--' + type,'mt-bg-'+type]" :style="computeStyle">
    <div class="mint-fixed-button--plus" :style="computePlusStyle">
      <div class="mint-fixed-button--plus_h" :style="computePlusItemStyle"></div>
      <div class="mint-fixed-button--plus_v" :style="computePlusItemStyle"></div>
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
      buttonSize: String,
      contentSize: String,
      color: String,
      backgroundColor: String,
      left: String,
      right: String,
      top: String,
      bottom: String
    },
      computed: {
          computeStyle: function() {
              let left = this.left;
              let right = this.right;
              let top = this.top;
              let bottom = this.bottom;
              let backgroundColor = this.backgroundColor;
              let buttonSize = this.buttonSize;
              let color = this.color;
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

              if (backgroundColor) {
                  _style += 'background-color:' + backgroundColor + ';';
              }
              if (buttonSize) {
                  _style += 'width:' + buttonSize + ';';
                  _style += 'height:' + buttonSize + ';';
              }

              return _style;
          },
          computePlusStyle: function() {
              let contentSize = this.contentSize;
              let color = this.color;
              let plusStyle = '';
              if (contentSize) {
                  plusStyle += 'width:' + contentSize + ';';
                  plusStyle += 'height:' + contentSize + ';';
              }

              return plusStyle;
          },
          computePlusItemStyle: function() {
              let color = this.color;
              let plusStyle = '';
              if(color){
                  plusStyle += 'background-color:' + color + ';';
              }

              return plusStyle;
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
    }
  }

  .mint-fixed-button--plus{
    position: relative;
    width: 24px;
    height: 24px;
  }
  .mint-fixed-button--plus_h,
  .mint-fixed-button--plus_v{
    position: absolute;
    background-color: #fff;
  }
  .mint-fixed-button--plus_h{
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    height: 2px;
  }
  .mint-fixed-button--plus_v{
    top: 0;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
  }
</style>
