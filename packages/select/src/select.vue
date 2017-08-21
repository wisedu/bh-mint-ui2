<template>
  <mt-cell :title="label" @click.native="handleDisplayClick">
    <div class="select-value" >
      <template v-if="type === 'select'">{{singleSelectDisplay()}}</template>
      <template v-if="type === 'multi-select'">{{scope.value.map(item => item.name).join(',')}}</template>
      <slot v-else  name="display" :options="options" :value="value"></slot>
    </div>
    <transition name="slide">
      <div class="select-container" v-show="selectorShow" @click.stop>
        <template v-if="type === 'select'">
          <mt-cell v-for="item in options" :class="{active: item.id === value }" :key="item.id" :title="item.name" @click.native.stop="handleClick_select(item)"></mt-cell>
        </template>
        <slot v-else name="selector" :options="options" :value="value"></slot>
      </div>
    </transition>
  </mt-cell>
</template>
<script>
/**
 * @event selector-click - 点击选择器触发的事件
 */
/* eslint-disable */
export default {
  name: 'mt-select',
  props: {
    value: { required: true },
    url: { type: String, default: '' },
    label: { type: String, required: true },
    placeholder: { type: String, default: '请选择' },
    options: { type: Array, required: true },
    type: ''
  },
  data() {
    return {
      selectorShow: false
    };
  },
  watch: {
    options() {
    }
  },
  methods: {
    singleSelectDisplay () {
      if (this.value === '') return this.placeholder
      if (this.options.length === 0) {
        this.$emit('selector-click', '')
        return ''
      }
      return this.options.filter(item => item.id.toString() === this.value.toString())[0].name
    },
    handleClick_select(item) {
      this.$emit('input', item.id)
      this.$emit('change', item.id)
      this.selectorShow = false
    },
    handleDisplayClick(e) {
      this.$emit('selector-click', '')
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
.slide-enter-active, .slide-leave-active {
  transition: transform .25s
}
.slide-enter, .slide-leave-to /* .slide-leave-active in below version 2.1.8 */ {
  transform: translateX(100%);
}
.select-value {
}
.select-container {
  position: fixed;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.4); */
  background: #fff;
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


