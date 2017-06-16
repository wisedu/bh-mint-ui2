<template>
  <div @click="handleClick" class="mint-layout-lr">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>
<script>
    export default {
        name: 'mt-layout-left-right',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        }
    };
</script>
<style lang="css">
  @import "../../../src/style/var.css";
  @component-namespace mint {
    @component layout-lr {
        position: relative;
        display: table;
        width: 100%;
        box-sizing: border-box;
    }
  }

</style>
