<template>
  <div class="mint-form">
    <slot></slot>
  </div>
</template>
<script>
    export default {
        name: 'mt-form',
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
    @component form {
      position: relative;
    }
  }

</style>
