<template>
  <x-cell @click.native.stop="handleRadioClick">
    <label class="mint-radiobox-row" slot="title">
      <span :class="{'is-right': align === 'right'}" class="mint-radiobox">
        <input :value="name" v-model="currentValue" type="radio" class="mint-radiobox-input" :disabled="isDisabled"/>
        <span class="mint-radiobox-core" :class="['mint-radiobox-core-'+iconpattern,{'mt-bg-after-white':iconpattern==='circle'},isDisabled?'mt-bg-grey-lv6 mt-bColor-grey-lv6 mt-bColor-after-white':(currentValue===name?'mt-bg-primary mt-bColor-primary mt-bColor-after-white':'mt-bColor-grey-lv3 mt-bg-lv3')]"></span>
      </span>
      <span class="mint-radiobox-label">
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
  data() {
    return {
      radioClass:''
    }
  },
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

  computed: {
    // whether is in mint-checkbox-group
    isGroup() {
      return !!this.findParentByName('mt-box-group');
    },
    currentValue: {
      get() {
        let currentValue=this.isGroup && this.parentGroup ? this.parentGroup.value : this.value;
        return currentValue;
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
    // handleLabelClick() {
    //   if (!this.isDisabled) {
    //     this.currentValue = !this.currentValue;
    //   }
    // },
    handleRadioClick() {
      if(!this.currentValue){
        this.$emit('click');
      }
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
  @component-namespace mint {
    @component radiobox-row {
      display: block;
      padding: 10px 0;
      text-align: left;

      & .mint-cell-newline {
        margin-bottom: 6px;
      }
    }


    @component radiobox {
      @when right {
        float: right;
        margin-top: -3px;
      }

      @descendent label {
        vertical-align: middle;
        margin-left: 6px;
      }

      @descendent input {
        display: none;

        &:checked {
          + .mint-radiobox-core-hook {
            &::after {
              transform: rotate(45deg) scale(1);
            }
          }
        }
        &:checked {
          + .mint-radiobox-core-circle {
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