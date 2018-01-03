<template>
  <div class="mint-box-group" :class="{ 'is-limit': isLimit}" ref="mtBoxGroup">
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
      if (this.max !== undefined && this.max !== -1) {
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
  @component-namespace mint {
    @component box-group {

      @when limit {
        .mint-checkbox-new-input:not(:checked){
          display: none;
        }
        .mint-checkbox-new-input:not(:checked) + .mint-checkbox-new-core{
          background-color: #EFEFEF;
          border-color: #EFEFEF;
        }
      }
    }
  }
</style>