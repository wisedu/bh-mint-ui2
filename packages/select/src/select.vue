<template>
  <mt-cell :title="label" @click.native="handleDisplayClick">
    <div class="select-value" >
      <slot name="display" :slots="slots" :value="value"></slot>
    </div>
    <div class="select-container" v-show="selectorShow" @click.stop>
      <slot name="selector" :slots="slots" :value="value"></slot>
    </div>
  </mt-cell>
</template>
<script>
/* eslint-disable */
export default {
  name: 'mt-select',
  props: {
    value: { required: true },
    label: { type: String, required: true },
    placeholder: { type: String, default: '请选择' },
    slots: { type: Array, required: true }
  },
  data() {
    return {
      selectorShow: false
    };
  },
  computed: {
    valueDiaplay() {

    }
  },
  methods: {
    handleDisplayClick() {
      this.$emit('selector-click')
      history.pushState('', null, '#/smile-select');
      this.selectorShow = true;
    },
    historyChange(e) {
      this.selectorShow = false;
    }
  },
  mounted () {
    window.addEventListener("popstate", this.historyChange)
  },
  beforeDestroy () {
    window.removeEventListener("popstate", this.historyChange)
  }
};
</script>
<style>
.select-value {
}
.select-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  z-index: 999;
}

.select-picker {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.mint-cell.active .mint-cell-title:after {
  content: '√';
  float: right;
}

.mint-cell.active {
  background: #e5e5e5;
}

</style>


