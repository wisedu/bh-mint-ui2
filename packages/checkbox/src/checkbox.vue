<template>
  <x-cell >
    <label class="mint-checkbox-new-row" slot="title">
      <span :class="{'is-right': align === 'right'}" class="mint-checkbox-new">
        <input v-model="currentValue" type="checkbox" class="mint-checkbox-new-input" :disabled="isDisabled"/>
        <span class="mint-checkbox-new-core" :class="['mint-checkbox-new-core-'+iconpattern,{'mt-bg-after-white':iconpattern==='circle'},isDisabled?'mt-bg-grey-lv6 mt-bColor-grey-lv6 mt-bColor-after-white':(currentValue?'mt-bg-primary mt-bColor-primary mt-bColor-after-white':'mt-bColor-grey-lv3 mt-bg-lv3')]"></span>
      </span>
      <span class="mint-checkbox-new-label" :class="[isDisabled?'mt-color-grey-lv3':'mt-color-grey']">
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
    name: [String, Number],
    iconpattern:{
      type:String,
      default:"circle"
    }
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
    isLimit(){
      if(this.isGroup){

      }
    },

    currentValue: {
      get() {
        console.log(this);
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
@component-namespace mint {
  @component checkbox-new-row {
    display: block;
    padding: 10px 0;
    text-align: left;

    & .mint-cell-newline {
      margin-bottom: 6px;
    }
  }

  @component checkbox-new {
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
        + .mint-checkbox-new-core-hook {
          &::after {
            transform: rotate(45deg) scale(1);
          }
        }
      }
      &:checked {
        + .mint-checkbox-new-core-circle {
          &::after {
            transform: scale(1);
          }
        }
      }
    }

    @descendent core {
      display: inline-block;
      border-radius: 100%;
      border-width: 1px;
      border-style: solid;
      position: relative;
      size: 23px;
      vertical-align: middle;
      @descendent hook {
        &::after {
          border-width: 2px;
          border-style: solid;
          border-left: 0;
          border-top: 0;
          content: " ";
          position: absolute 2px * * 7px;
          size: 6px 12px;
          transform: rotate(45deg) scale(0);
          transition: transform .2s;
        }
      }
      @descendent circle {
        &::after {
          content: " ";
          border-radius: 100%;
          position: absolute 6px * * 6px;
          size: 9px;
          transition: transform .2s;
          transform: scale(0);
        }
      }
    }
  }
}
</style>