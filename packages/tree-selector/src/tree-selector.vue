<template>
  <mt-select :label="label" :options="activeOptions" v-model="currentValue" @selector-click="handleSelectorClick">
    <template scope="scope" slot="display">
      {{scope.value === '' ? placeholder : getDisplay(scope.value)}}
      <!-- {{scope.value.join(',')}} -->
    </template>
    <template scope="scope" slot="selector">
      <bread :data="breadData" :active-id="(activePids.length ? activePids[activePids.length - 1] : '')" @item-click="handleBreadClick"></bread> 
      <p class="mint-tree-selector-loading" v-show="scope.options.length === 0">数据加载中</p>
      <template v-if="!multiple" v-show="scope.options.length > 0">
        <mt-cell v-for="item in scope.options" :class="{active: scope.value.indexOf(item) > -1 }" :key="item" :title="item.name" @click.native.stop="handleItemClick(item)" :is-link="!!item.isParent"></mt-cell>
      </template>
      <template v-else-if="multiple" v-show="scope.options.length > 0">
        <!-- <div v-for="item in scope.options" :class="{active: scope.value.indexOf(item) > -1 }" :key="item" :title="item.name" @click.native.stop="handleItemClick(item)" :is-link="!!item.isParent"></div> -->
        <tree-checkbox-list class="mint-tree-selector-multi-list" :options="scope.options" @item-click="handleItemClick" v-model="currentValue"></tree-checkbox-list>
      </template>
      <selected-footer v-if="multiple" :options="footerOptions" v-model="currentValue" @confirm-click="handleConfirmClick"></selected-footer>
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
 * @param {Array} options - 格式化后的树形字典数据，结构平铺， 不需要格式化
 * @example
 */
// import MtSelect from 'bh-mint-ui2/packages/tree-selector/index.js';
import Bread from './bread.vue';
import SelectedFooter from '../../select/src/selected-footer.vue';
import TreeCheckboxList from './tree-checkbox-list';
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
      activePids: []
    };
  },
  watch: {
    options (val) {
    }
  },
  computed: {
    activeOptions() {
      let pid = this.activePids[this.activePids.length - 1]
      if (pid === undefined) pid = ''
      if (pid !== '') {
        let activeItem = this.options.filter(item => item.id === pid)[0]
        // 已经选择到叶子节点时，使用父节点作为pId
        if (activeItem && activeItem.isParent === 0) {
          pid = this.activePids[this.activePids.length - 2]
        }
      }
      return this.options.filter(item => item.pId === pid)
    },
    breadData() {
      if (this.activePids.length === 0) {
        return [{ name: '全部', id: ''}]
      }
      let result = [{ name: '全部', id: ''}]
      let options = this.options;
      this.activePids.map(item => {
        let activeItem = options.filter(o => o.id === item)[0];
        if (activeItem) {
          result.push(activeItem);
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
        if (val === '' || val.length === 0) this.$emit('input', '')
        if (this.multiple) {
          this.$emit('input', val.join(','));
        } else {
          this.$emit('input', val);
        }
      }
    },
    footerOptions () {
      if (this.currentValue.length === 0) return []
      return this.currentValue.map(item => {
        return {
          name: this.getItemDisplay(item),
          id: item
        }
      })
    }
  },
  methods: {
    handleBreadClick(id) {
      // 点击顶部面包屑导航的节点
      console.log(id)
      let activePids = this.activePids
      let index = activePids.indexOf(id) + 1
      activePids.splice(index, activePids.length)
      this.$set(this, 'activePids', activePids)
    },
    handleSelectorClick(pid) {
      this.$emit('selector-click', pid);
    },
    handleItemClick(item) {
      // 点击节点
      if (item.isParent) {
        // 是父节点则展开并进入下一级
        this.activePids.push(item.id);
        this.$emit('selector-click', item.id);
      } else {
        // 叶子节点
        if (this.multiple) {

        } else {
          // 末位的pId验证，防止重复pId
          if (item.pId === this.activePids[this.activePids.length - 1]) {
            this.activePids.push(item.id)
          } else {
            let activePids = this.activePids
            activePids.splice(activePids.length - 1, 1, item.id)
            this.$set(this, 'activePids', activePids)
          }
          this.currentValue = this.activePids[this.activePids.length - 1]
          window.history.back()
        }
      }
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
    },
    getDisplay (value) {
      if (this.multiple === true) {
        if (value.length  === 0) return ''
        return value.map(item => this.getItemDisplay(item)).join(',')
      } else {
        // 单选
        return this.getItemDisplay(value)
      }
    },
    getItemDisplay (value) {
      let result = ''
      let options = this.options
      let optionItem = options.filter(item => item.id === value)[0]
      result += optionItem.name
      if (optionItem.pId !== undefined && optionItem.pId !== '') {
        result = this.getItemDisplay(optionItem.pId) + result
      }
      return result
    },
    // 多选树点击footer确认按钮
    handleConfirmClick () {
      window.history.back()
    }
  },
  components: { Bread, SelectedFooter, TreeCheckboxList }
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

.mint-tree-selector-multi-list {
  padding-bottom: 60px;
}
</style>
