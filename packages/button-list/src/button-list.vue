<template>
  <div>
    <h4 class="mint-button-list-title mt-color-grey-lv3">{{label}}</h4>
    <div class="mint-button-list-button-container mt-bg-lv3">
      <template v-for="item in options">
        <mt-button class="mint-button-list-btn" @click="handleClick(item.id, $event)" :key="item.id" :plain="plain" size="normal" :type="getType(item.id)" >{{item.name}}</mt-button>
      </template>
    </div>
  </div>

  <!-- <mt-cell :title="label">
      <template v-for="item in options">
        <mt-button class="mint-button-list-btn" @click="handleClick(item.id)" :key="item.id" plain size="small" :type="getType(item.id)" >{{item.name}}</mt-button>
      </template>
  </mt-cell> -->
</template>

<script>
/**
 * mt-buttton-list
 * @module components/ButtonList
 * @desc 按钮组
 * @param {String} label - 字段中文名
 * @param {String} [value] - 绑定值，支持双向绑定
 * @param {Array} options - 选项数据
 * @example
 */
import MtCell from 'bh-mint-ui2/packages/cell/index.js';
export default {
  name: 'mt-button-list',
  props: {
    value: [ String, Number ],
    display: { type: String, default: '' },
    label: String,
    multiple: { type: Boolean, default: false },
    options: { type: Array, default: [] },
    plain:Boolean
  },
  computed: {
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
    getType(id) {
      if (this.multiple) {
        return this.currentValue.indexOf(id.toString()) > -1 ? 'primary' : 'default';
      } else {
        return id === this.currentValue ? 'primary' : 'default';
      }
    },
    handleClick(id, evt) {
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
      this.$emit('change', this.currentValue, evt);
    }
  },
  components: { MtCell }
};
</script>

<style lang="css">

  @component-namespace mint {
    @component button-list {
      @descendent btn {
        margin-left: 8px;
      }
    }
  }

  .mint-button-list-title {
    font-size: 14px;
    padding: 0 12px;
  }

  .mint-button-list-button-container {
    padding: 8px;
  }
</style>
