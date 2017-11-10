<template>
  <div @click="handleClick" class="mint-layout-container-multiple-item">
    <slot></slot>
  </div>
</template>
<script>
    export default {
        name: 'mt-layout-container-multiple-item',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },
        props: {}
    };
</script>
<style lang="css">
  @import "../../../src/style/var.css";
  @component-namespace mint {
    @component layout-container-multiple-item {
      position: relative;
      float: left;
      box-sizing: border-box;
    }
  }

  .mint-layout-container-multiple-item:after{
    content: "";
    display: table;
    clear: both;
  }

</style>
