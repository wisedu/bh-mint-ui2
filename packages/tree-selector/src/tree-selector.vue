<template>
  <mt-select :label="label" :options="activeOptions" v-model="currentValue" @selector-click="handleSelectorClick">
    <template scope="scope" slot="display">
      {{scope.value === '' ? placeholder : scope.value}}
      <!-- {{scope.value.join(',')}} -->
    </template>
    <template scope="scope" slot="selector">
      <bread :data="breadData" :active-id="(activePid.length ? activePid[activePid.length - 1] : '')" @item-click="handleBreadClick"></bread> 
      <p class="mint-tree-selector-loading" v-show="scope.options.length === 0">数据加载中</p>
      <template v-show="scope.options.length > 0">
        <mt-cell v-for="item in scope.options" :class="{active: scope.value.indexOf(item) > -1 }" :key="item" :title="item.name" @click.native.stop="handleItemClick(item)" :is-link="!!item.isParent"></mt-cell>
      </template>
    </template>
  </mt-select>
</template>

<script>
/**
 * mt-tree-selector
 * @module components/TreeSelector
 * @desc 树形选择器
 * @param {String} label - 字段中文名
 * @param {String} [value] - 绑定值，支持双向绑定
 * @param {Array} options - 格式化后的树形字典数据，请求和格式化的过程在组件外完成
 * @example
 */
// import MtSelect from 'bh-mint-ui2/packages/tree-selector/index.js';
import Bread from './bread.vue';
export default {
  name: 'mt-tree-selector',
  props: {
    value: [String, Number],
    display: { type: String, default: '' },
    label: String,
    placeholder: String,
    multiple: { type: Boolean, default: false },
    options: { type: Array, default() { return []; } }
  },
  data() {
    return {
      activePid: []
    };
  },
  watch: {
    // options: {
    //   deep: true,
    //   handler() {
    //     /* eslint-disable */
    //     debugger
    //     this.$forceUpdate();
    //   }
    // }
  },
  computed: {
    activeOptions() {
      if (this.activePid.length === 0) return this.options;
      // let resultOptions = [];
      for (let i = 0; i < this.activePid.length; i++) {
        let optionItem = this.options.filter(item => item.id === this.activePid[i])[0];
        if (optionItem) {
          return optionItem.children || [];
        } else {
          return [];
        }
      }
    },
    breadData() {
      if (this.activePid.length === 0) {
        return [];
      }
      let result = [];
      let activeOptions = this.options;
      this.activePid.map(item => {
        let activeItem = activeOptions.filter(o => o.id === item)[0];
        if (activeItem) {
          result.push(activeItem);
          activeOptions = activeItem.children || [];
        }
      });
      return result;
    },
    currentValue: {
      get() {
        if (this.multiple) {
          if (this.value === '') return [];
          return this.value.split(',');
        } else {
          return this.value;
        }
      },
      set(val) {
        if (this.multiple) {
          this.$emit('input', val.join(','));
        } else {
          this.$emit('input', val);
        }
        if (this.options.length > 0) {
          if (this.multiple) {
            let optionItems = this.options.filter(item => (val.indexOf(item.id.toString()) > -1));
            this.$emit('update:display', optionItems.map(item => item.name).join(','));
          } else {
            let optionItem = this.options.filter(item => item.id === val)[0];
            this.$emit('update:display', optionItem.name);
          }
        }
      }
    }
  },
  methods: {
    handleBreadClick(id) {
      console.log(id);
    },
    getType(id) {
      if (this.multiple) {
        return this.currentValue.indexOf(id.toString()) > -1 ? 'primary' : 'default';
      } else {
        return id === this.currentValue ? 'primary' : 'default';
      }
    },
    handleSelectorClick(pid) {
      this.$emit('selector-click', pid);
    },
    handleItemClick(item) {
      if (item.isParent) {
        // 是父节点则展开并进入下一级
        this.$emit('selector-click', item.id);
      }
      this.activePid.push(item.id);
    },
    handleClick(id) {
      if (this.multiple) {
        let index = this.currentValue.indexOf(id.toString());
        let currentValue = this.currentValue;
        if (index > -1) {
          currentValue.splice(index, 1);
        } else {
          currentValue.push(id.toString());
        }
        this.currentValue = currentValue;
      } else {
        if (this.currentValue === id) return;
        this.currentValue = id;
      }
      this.$emit('change', this.currentValue);
    }
  },
  components: { Bread }
};
</script>

<style lang="css">
@import "../../../src/style/var.css";

@component-namespace mint {
  @component tree-selector {
    @descendent loading {
      text-align: center;
      line-height: 80px;
    }
  }
}
</style>
