<template>
  <div class="mint-text" :class="['mint-text--' + type]" :style="{ fontSize: size}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mt-text',

  props: {
      size: String,
      type: {
        type: String,
        default: 'default',
        validator(value) {
          return [
            'default',
            'danger',
            'warning',
            'primary'
          ].indexOf(value) > -1;
        }
      }
  }
};
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component text {
      position: relative;

      @modifier primary {
        color: $button-primary-background-color;
      }

      @modifier warning {
        color: $button-warning-background-color;
      }

      @modifier danger {
        color: $button-danger-background-color;
      }

      @modifier grey {
        color: #d9d9d9;
      }
    }
  }
</style>
