<template>
  <mt-cell :title="label">
      <mt-switch v-model="currentValue" @change="handleChange"></mt-switch>
  </mt-cell>
</template>

<script>
/**
 * mt-switcher
 * @module components/switch
 * @desc 切换按钮
 * @param {boolean} [value] - 绑定值，支持双向绑定
 * @param {slot} - 显示内容
 *
 * @example
 * <mt-switch v-model="value"></mt-switch>
 */
import MtCell from 'mint-ui/packages/cell/index.js';
import MtSwitch from 'mint-ui/packages/switch/index.js';
export default {
  name: 'mt-switcher',

  props: {
    value: { default: 0 },
    label: String
  },
  computed: {
    currentValue: {
      get() {
        if (this.value === '0' || this.value === 0) {
          return false;
        } else {
          return true;
        }
      },
      set(val) {
        this.$emit('input', val ? 1 : 0);
      }
    }
  },
  methods: {
    handleChange() {}
  },
  components: { MtSwitch, MtCell }
};
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component switch {
      display: flex;
      align-items: center;
      position: relative;

      * {
        pointer-events: none;
      }

      @descendent label {
        margin-left: 10px;
        display: inline-block;

        &:empty {
          margin-left: 0;
        }
      }

      @descendent core {
        display: inline-block;
        position: relative;
        size: 52px 32px;
        border: 1px solid $color-grey;
        border-radius: 16px;
        box-sizing: border-box;
        background: $color-grey;

        &::after, &::before {
          content: " ";
          position: absolute 0 * * 0;
          transition:transform .3s;
          border-radius: 15px;
        }

        &::after {
          size: 30px;
          background-color: $color-white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
        }

        &::before {
          size: 50px 30px;
          background-color: #fdfdfd;
        }
      }

      @descendent input {
        display: none;

        &:checked {
          + .mint-switch-core {
            border-color: $color-green;
            background-color: $color-green;

            &::before {
              transform: scale(0);
            }

            &::after {
              transform: translateX(20px);
            }
          }
        }
      }
    }
  }
</style>
