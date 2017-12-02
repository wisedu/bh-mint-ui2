<template>
  <div class="mint-box-group" :class="{ 'is-limit': isLimit}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mt-box-group',
  props: {
    value: {},
    disabled: Boolean,
    max: Number
  },
  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },
  computed:{
    isLimit(){
      if (this.max !== undefined) {
        if (this.max > this.value.length) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang="css">
  @import "../../../src/style/var.css";
  @component-namespace mint {
    @component box-group {

      @when limit {
        .mint-checkbox-new-input:not(:checked){
          display: none;
        }
        .mint-checkbox-new-input:not(:checked) + .mint-checkbox-new-core{
          background-color: $color-grey;
          border-color: $color-grey;
        }
      }
    }
  }
</style>