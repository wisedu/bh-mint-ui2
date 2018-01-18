<template>
  <label class="mint-switch">
    <input class="mint-switch-input" :disabled="disabled" @change="$emit('change', currentValue, $event)" type="checkbox" v-model="currentValue">
    <span class="mint-switch-core mt-bg-before-white mt-bg-after-white" :class="[currentValue?'mt-bColor-theme-lv2 mt-bg-theme-lv2':'mt-bColor-grey-lv6 mt-bg-lv3']"></span>
    <div class="mint-switch-label"><slot></slot></div>
  </label>
</template>

<script>
/**
 * mt-switch
 * @module components/switch
 * @desc 切换按钮
 * @param {boolean} [value] - 绑定值，支持双向绑定
 * @param {slot} - 显示内容
 *
 * @example
 * <mt-switch v-model="value"></mt-switch>
 */
export default {
  name: 'mt-switch',

  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value ? 1 : 0;
      },
      set(val) {
        this.$emit('input', val ? 1 : 0);
      }
    }
  }
};
</script>

<style lang="css">

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
        size: 50px 30px;
        border-width: 1px;
        border-style: solid;
        border-radius: 16px;
        box-sizing: border-box;

        &::after, &::before {
          content: " ";
          position: absolute 0 * * 0;
          transition:transform .3s;
          border-radius: 15px;
        }

        &::after {
          size: 28px;
          box-shadow: 0 2px 7px rgba(0, 0, 0, .2);
        }

        &::before {
          size: 48px 28px;
        }
      }

      @descendent input {
        display: none;

        &:checked {
          + .mint-switch-core {
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
