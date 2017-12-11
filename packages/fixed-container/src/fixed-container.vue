<template>
  <div @click="handleClick" class="mint-fixed-container" :class="['mint-fixed-container--' + position]">
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
      }
    }
  };
</script>

<style>
  @import "../../../src/style/var.css";

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
