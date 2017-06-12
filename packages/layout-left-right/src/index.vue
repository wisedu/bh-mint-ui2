<template>
  <div class="mint-layout-lr">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>
<script>
    export default {
        name: 'mt-layout-left-right'
    };
</script>
<style lang="css">
  @import "../../../src/style/var.css";
  @component-namespace mint {
    @component layout-lr {
        position: relative;
        display: table;
        width: 100%;
    }
  }

</style>
