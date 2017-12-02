<template>
  <x-cell @cell-click="handleRadioClick">
    <label class="mint-radiobox-row" slot="title">
      <span :class="{'is-right': align === 'right'}" class="mint-radiobox">
        <input :value="name" v-model="currentValue" type="radio" class="mint-radiobox-input" :disabled="isDisabled"/>
        <span class="mint-radiobox-core"></span>
      </span>
      <span class="mint-radiobox-label" @click="handleLabelClick">
        <slot></slot>
      </span>
      <slot name="newline" :disabled="isDisabled" :checked="currentValue === name"></slot>
    </label>
  </x-cell>
</template>

<script>
import XCell from 'bh-mint-ui2/packages/cell/index.js';

export default {
  name: 'mt-radiobox',
  props: {
    value: {},
    disabled: Boolean,
    align: String,
    name: [String, Number]
  },
  components: { XCell },

  computed: {
    // whether is in mint-checkbox-group
    isGroup() {
      return !!this.findParentByName('mt-box-group');
    },

    currentValue: {
      get() {
        return this.isGroup && this.parentGroup ? this.parentGroup.value : this.value;
      },
      set(val) {
        if (this.isGroup && this.parentGroup) {
          this.parentGroup.$emit('input', val);
        } else {
          this.$emit('input', val);
        }
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
    handleLabelClick() {
      // debugger;
      if (!this.isDisabled) {
        this.currentValue = !this.currentValue;
      }
    },
    handleRadioClick() {
      this.$emit('click');
    },
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
  @import "../../../src/style/var.css";
  
  @component-namespace mint {
    @component radiobox-row {
      display: block;
      padding: 10px 0;
      text-align: left;
    }


    @component radiobox {
      @when right {
        float: right;
      }

      @descendent label {
        vertical-align: middle;
        margin-left: 6px;
      }

      @descendent input {
        display: none;

        &:checked {
          + .mint-radiobox-core {
            background-color: $color-green;
            border-color: $color-green;

            &::after {
              background-color: $color-white;
              transform: scale(1);
            }
          }
        }

        &[disabled] + .mint-radiobox-core {
          background-color: $color-grey;
          border-color: #ccc;
        }

        &:checked {
          + .mint-radiobox-hook {

            &::after {
              content: "\00a0";
              display: inline-block;
              border: 2px solid #38cdc1;
              border-top-width: 0;
              border-right-width: 0;
              width: 12px;
              height: 6px;
              -webkit-transform: rotate(-50deg);
              position: absolute;
              top: 4px;
              left: -16px;  
            }
          }
        }

        &[disabled] + .mint-radiobox-hook {
          background-color: $color-grey;
          border-color: #ccc;
        }
      }

      @descendent core {
        box-sizing: border-box;
        display: inline-block;
        background-color: $color-white;
        border-radius: 100%;
        border: 1px solid #ccc;
        position: relative;
        size: 20px;
        vertical-align: middle;

        &::after {
          content: " ";
          border-radius: 100%;
          position: absolute 5px * * 5px;
          size: 8px;
          transition: transform .2s;
          transform: scale(0);
        }
      }
      @descendent hook {
        width: 16px;
        height: 16px;
        position: relative;
        &::after {
          
        }
      }
    }
  }
</style>