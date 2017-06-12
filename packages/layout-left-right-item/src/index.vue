<template>
  <div class="mint-layout-lr-item" :position="position" :style="{ width: percentageWidth}">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'mt-layout-left-right-item',
  props: {
      position: String,
      percentage: String
  },
    computed: {
        percentageWidth: function() {
            return this.percentage + '%';
        }
    }
};
</script>
<style lang="css">
  @import "../../../src/style/var.css";
  @component-namespace mint {
    @component layout-lr-item {
      position: relative;
      display: table-cell;
      vertical-align: middle;
    }
  }

</style>
