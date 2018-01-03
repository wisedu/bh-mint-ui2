<template>
  <div @click="handleClick" class="mint-fixed-container" :class="['mint-fixed-container--' + position]" :style="computeStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mt-fixed-container',
      methods: {
          handleClick(evt) {
              this.$emit('click', evt);
          }
      },
    props: {
      position: {
        type: String,
        default: 'bottom'
      },
      top: String,
      left: String,
      bottom: String,
      right: String
    },
    computed: {
      computeStyle:function(){
        let _style = '';
        let top = this.top;
        let left = this.left;
        let bottom = this.bottom;
        let right = this.right;
        if (top) {
            _style += `top: ${top};`;
        }

        if (left) {
            _style += `left: ${left};`;
        }
        if (bottom) {
            _style += `bottom: ${bottom};`;
        }

        if (right) {
            _style += `right: ${right};`;
        }
        return _style;
      }
    }

  };
</script>

<style>

  @component-namespace mint {
    @component fixed-container {
      position: fixed;

      @modifier top {
        top: 0;
        left: 0;
      }

      @modifier bottom {
        bottom: 0;
        left: 0;
      }
    }
  }

  .mint-fixed-container:after{
    content: "";
    display: table;
    clear: both;
  }
</style>
