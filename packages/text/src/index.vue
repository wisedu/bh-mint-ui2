<template>
  <div @click="handleClick" class="mint-text" :class="['mint-text--' + type]" :style="computeStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mt-text',
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    },
  props: {
      size: String,
      type: {
        type: String,
        default: 'default'
      },
      color: String
  },
    computed: {
        computeStyle: function() {
            let _style = '';
            let size = this.size;
            let color = this.color;
            if (size) {
                _style += `font-size: ${size};`;
            }

            if (color) {
                _style += `color: ${color};`;
            }

            return _style;
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
