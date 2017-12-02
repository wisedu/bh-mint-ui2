<template>
  <div>
    <mt-cell v-for="option in options" :key="option" @click.native="handleClick(option)">
      <div class="mint-checklist-label" slot="title">
        <label @click.stop>
          <span  class="mint-checkbox" v-if="!option.isParent || parentSelectable">
            <input class="mint-checkbox-input" type="checkbox" v-model="currentValue" :disabled="option.disabled" :value="option.id !== undefined ? option.id : option">
            <span class="mint-checkbox-core"></span>
          </span>
          <span class="mint-checkbox-label" v-text="option.name || option"></span>
        </label>
      </div>
      <i v-if="option.isParent" class="mint-cell-allow-right"></i>
    </mt-cell>
  </div>  
</template>
<script>
export default {
  props: {
    options: { type: Array, default () { return [] } },
    value: { type: Array, default () { return [] } },
    // 是否允许父节点被选中
    parentSelectable: { type: Boolean, default: false }
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
      console.log(111)
      this.$emit('item-click', item)
    }
  }
}
</script>
<style>

</style>


