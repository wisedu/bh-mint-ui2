<template>
  <x-cell >
    <label class="mint-checkbox-new-row" slot="title">
      <span :class="{'is-right': align === 'right'}" class="mint-checkbox-new">
        <input v-model="currentValue" type="checkbox" class="mint-checkbox-new-input" :disabled="isDisabled"/>
        <span class="mint-checkbox-new-core"></span>
      </span>
      <span class="mint-checkbox-new-label" :class='{"disabled":isDisabled}'>
        <slot></slot>
      </span>
      <slot name="newline" :checked="isChecked" :disabled="isDisabled"></slot>
    </label>
  </x-cell>
</template>

<script>
import XCell from 'bh-mint-ui2/packages/cell/index.js';

export default {
  name: 'mt-checkbox',
  props: {
    value: {},
    disabled: Boolean,
    align: String,
    name: [String, Number]
  },
  components: { XCell },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },

  computed: {
    // whether is in mint-checkbox-group
    isGroup() {
      return !!this.findParentByName('mt-box-group');
    },

    currentValue: {
      get() {
        return this.isGroup && this.parentGroup ? this.parentGroup.value.indexOf(this.name) !== -1 : this.value;
      },

      set(val) {
        if (this.isGroup && this.parentGroup) {
          const parentValue = this.parentGroup.value.slice();
          if (val) {
            /* istanbul ignore else */
            if (parentValue.indexOf(this.name) === -1) {
              if(this.parentGroup.isLimit === false){
                parentValue.push(this.name);
              }
              this.parentGroup.$emit('input', parentValue);
            }
          } else {
            const index = parentValue.indexOf(this.name);
            /* istanbul ignore else */
            if (index !== -1) {
              parentValue.splice(index, 1);
              this.parentGroup.$emit('input', parentValue);
            }
          }
        } else {
          this.$emit('input', val);
        }
      }
    },

    isChecked() {
      const { currentValue } = this;
      if ({}.toString.call(currentValue) === '[object Boolean]') {
        return currentValue;
      } else if (currentValue !== null && currentValue !== undefined) {
        return currentValue === this.name;
      }
    },

    isDisabled() {
      if (this.isGroup && this.parentGroup) {
        return this.parentGroup.disabled || this.disabled;
      } else {
        return this.disabled;
      }
    }
  },

  methods: {
    // onClickLabel() {
    //   if (!this.isDisabled) {
    //     this.currentValue = !this.currentValue;
    //   }
    // },
    findParentByName(name) {
      if (!this.parentGroup) {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.name === name) {
            this.parentGroup = parent;
            break;
          }
          parent = parent.$parent;
        }
      }

      return this.parentGroup;
    }
  }
};
</script>
<style>
@import "../../../src/style/var.css";
@component-namespace mint {
  @component checkbox-new-row {
    display: block;
    padding: 10px 0;
    text-align: left;
  }

  @component checkbox-new {
    @when right {
      float: right;
    }

    @descendent label {
      vertical-align: middle;
      margin-left: 6px;
      color:$grey-lv1;
    }

    @descendent input {
      display: none;

      &:checked {
        + .mint-checkbox-new-core {
          background-color: $color-blue;
          border-color: $color-blue;

          &::after {
            border-color: $color-white;
            transform: rotate(45deg) scale(1);
          }
        }
      }

      &[disabled] + .mint-checkbox-new-core {
        background-color: $color-grey;
        border-color: #ccc;
      }
    }

    @descendent core {
      display: inline-block;
      background-color: $color-white;
      border-radius: 100%;
      border: 1px solid #ccc;
      position: relative;
      size: 20px;
      vertical-align: middle;

      &::after {
        border: 2px solid transparent;
        border-left: 0;
        border-top: 0;
        content: " ";
        position: absolute 3px * * 6px;
        size: 4px 8px;
        transform: rotate(45deg) scale(0);
        transition: transform .2s;
      }
    }
  }
}
.disabled{
    color:$grey-lv2;
}
</style>