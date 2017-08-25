<template>
  <mt-cell :title="label" @click.native="handleDisplayClick">
    <div class="select-value" >
      <!-- select 模板 -->
      <template v-if="type === 'select'">{{singleSelectDisplay()}}</template>
      <!-- multi-select 模板 -->
      <template v-if="type === 'multi-select'">{{multiSelectDisplay()}}</template>
      <!-- 自定义 -->
      <slot v-else  name="display" :options="options" :value="value"></slot>
    </div>
    <transition name="slide">
      <div class="select-container" v-show="selectorShow" @click.stop>
        <!-- select 模板 -->
        <template v-if="type === 'select'">
          <mt-radio v-model="currentValue" :options="getOptions_select(options)" @change="handleClick_select"></mt-radio>
        </template>
        <!-- multi-select 模板 -->
        <template v-if="type === 'multi-select'">
          <mt-checklist v-model="currentValue" :options="getOptions_select(options)" @change="handleClick_multiSelect"></mt-checklist>
          <selected-footer :options="options" v-model="currentValue" @confirm-click="selectorShow = false"></selected-footer>
        </template>
        <!-- 自定义 -->
        <slot v-else name="selector" :options="options" :value="value"></slot>
      </div>
    </transition>
  </mt-cell>
</template>
<script>
import SelectedFooter from './selected-footer.vue';
/**
 * @event selector-click - 点击选择器触发的事件
 */
/* eslint-disable */
export default {
  name: 'mt-select',
  components: { SelectedFooter },
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
  computed: {
    /***** select 专有属性 *****/
    currentValue: {
      get () {
        if (this.type === 'select') {
          return this.value;
        } else if (this.type === 'multi-select') {
          if (this.value === '') return []
          return this.value.split(',')
        }
      }, 
      set (val) {
        if (this.type === 'select') {
          this.$emit('input', val.toString());
        } else if (this.type === 'multi-select') {
          this.$emit('input', val.join(','))
        }
      }
    }
    /***** select 专有属性 end *****/
  },
  methods: {
    handleDisplayClick(e) {
      this.$emit('selector-click', '')
      history.pushState('', null, '#/smile-select');
      this.selectorShow = true;
    },
    historyChange(e) {
      this.selectorShow = false;
    },
    /***** select 专有方法 *****/
    getOptions_select (options) {
      if (!options || options.length === 0) {
        return []
      }
      return options.map(item => {
        return {
          value: item.id,
          label: item.name
        }
      })
    },
    singleSelectDisplay () {
      if (this.value === '') return this.placeholder
      if (this.options.length === 0) {
        this.$emit('selector-click', '')
        return ''
      }
      return this.options.filter(item => item.id.toString() === this.value.toString())[0].name
    },
    handleClick_select(val) {
      this.$emit('change', val)
      this.selectorShow = false
      history.back()
    },
    /***** select 专有方法 end *****/

    /***** multi-select 专有方法 *****/
    multiSelectDisplay () {
      if (this.value === '') return this.placeholder
      if (this.options.length === 0) {
        this.$emit('selector-click', '')
        return ''
      }
      return this.options.filter(item => this.currentValue.indexOf(item.id.toString()) > -1).map(item => item.name).join(',')
    },
    handleClick_multiSelect (val) {
      this.$emit('change', this.currentValue)
    }
    /***** multi-select 专有方法 end *****/
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
@import "../../../src/style/var.css";
.slide-enter-active, .slide-leave-active {
  transition: transform .25s
}
.slide-enter, .slide-leave-to /* .slide-leave-active in below version 2.1.8 */ {
  transform: translateX(100%);
}
.select-container {
  position: fixed;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.4); */
  background: $bg-lv2;
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

</style>


