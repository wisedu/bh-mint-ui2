<template>
  <mt-cell :title="label" @click.native="handleDisplayClick">
    <div class="select-value" >
      <!-- <template v-if="type === 'select'">{{value.name}}</template>
      <template v-if="type === 'multi-select'">{{scope.value.map(item => item.name).join(',')}}</template> -->
      <slot  name="display" :options="options" :value="value"></slot>
    </div>
    <transition name="slide">
      <div class="select-container" v-show="selectorShow" @click.stop>
        <!-- <template v-if="type === 'select'">
          <mt-cell v-for="item in slots[0].values" :class="{active: scope.value.indexOf(item) > -1 }" :key="item.id" :title="item.name" @click.native.stop="dicValue.push(item)"></mt-cell>
        </template> -->
        <slot  name="selector" :options="options" :value="value"></slot>
      </div>
    </transition>
  </mt-cell>
</template>
<script>
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


