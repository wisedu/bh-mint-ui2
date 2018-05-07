<template>
  <mt-cell-group>
    <mt-cell v-for="option in options" :key="option.id" @click.native="handleClick(option)" :is-link="!!option.isParent">
      <div class="mint-checklist-label" slot="title" @click.stop="handleClickGroup(option)" style="position:relative">
        <label style="display:flex;">
          <span  class="mint-checkbox" v-if="!option.isParent || parentSelectable" >
            <input class="mint-checkbox-input" type="checkbox" v-model="currentValue" :disabled="option.disabled" :value="option.id !== undefined ? option.id : option">
            <span class="mint-checkbox-core" :class="['mint-checkbox-core-'+iconpattern,{'mt-bg-after-white':iconpattern==='circle'},option.disabled?'mt-bg-grey-lv6 mt-bColor-grey-lv6 mt-bColor-after-white':(currentValue.indexOf(option.id)>-1?'mt-bg-primary mt-bColor-primary mt-bColor-after-white':'mt-bColor-grey-lv3 mt-bg-lv3')]"></span>
          </span><span class="mint-checkbox-label" v-text="option.name || option"></span>
        </label>
      </div>
    </mt-cell>
  </mt-cell-group>
</template>
<script>
export default {
  props: {
    options: { type: Array, default () { return [] } },
    value: { type: Array, default () { return [] } },
    // 是否允许父节点被选中
    parentSelectable: { type: Boolean, default: false },
    iconpattern: String
  },
  computed: {
    currentValue: {
      set (val) {
        this.$emit('input', val)
      },
      get () {
        return JSON.parse(JSON.stringify(this.value))
      }
    }
  },
  methods: {
    handleClick (item) {
      this.$emit('item-click', item);
    },
    handleClickGroup (item) {
      if(this.parentSelectable){
        return
      }
      this.$emit('item-click', item);
    }
  }
}
</script>
<style scoped>

@component-namespace mint {
  @component checkbox{
    flex: 35px;
    align-items: center;
    display: inline-flex;

    @descendent input {
      display: none;

      &:checked {
        + .mint-checkbox-core-hook {
          &::after {
            transform: rotate(45deg) scale(1);
          }
        }
      }
      &:checked {
        + .mint-checkbox-core-circle {
          &::after {
            transform: scale(1);
          }
        }
      }
    }

    @descendent label {
      flex: calc(100% - 35px);
      align-items: center;
      display: inline-flex;
    }

    @descendent core {
      display: inline-block;
      border-width: 1px;
      border-style: solid;
      position: relative;
      size: 23px;
      vertical-align: middle;
      margin-right: 12px;
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


