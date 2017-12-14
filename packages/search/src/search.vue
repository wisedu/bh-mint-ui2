<template>
  <div class="mint-search">
    <div class="mint-searchbar">
      <div class="mint-searchbar-inner">
        <i class="mintui mintui-search"></i>
        <input
        ref="input"
        @click="visible = true"
        type="search"
        v-model="currentValue"
        :placeholder="placeholder"
        class="mint-searchbar-core">
      </div>
      <a
        class="mint-searchbar-cancel"
        @click="handleCancel"
        v-show="visible"
        v-text="cancelText">
      </a>
    </div>
    <div class="mint-search-list" v-show="show || currentValue">
      <div class="mint-search-list-warp">
        <slot>
          <x-cell v-for="(item, index) in result" :key="index" :title="item"></x-cell>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import XCell from 'bh-mint-ui2/packages/cell/index.js';
if (process.env.NODE_ENV === 'component') {
  require('bh-mint-ui2/packages/cell/style.css');
}

/**
 * mt-search
 * @module components/search
 * @desc 搜索框
 * @param {string} value - 绑定值
 * @param {string} [cancel-text=取消] - 取消按钮文字
 * @param {string} [placeholder=取消] - 搜索框占位内容
 * @param {boolean} [autofocus=false] - 自动 focus
 * @param {boolean} [show=false] - 始终显示列表
 * @param {string[]} [result] - 结果列表
 * @param {slot} 结果列表
 *
 * @example
 * <mt-search :value.sync="value" :result.sync="result"></mt-search>
 * <mt-search :value.sync="value">
 *   <mt-cell v-for="item in result" :title="item"></mt-cell>
 * </mt-search>
 */
export default {
  name: 'mt-search',

  data() {
    return {
      visible: false,
      currentValue: this.value
    };
  },

  components: { XCell },

  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },

    value(val) {
      this.currentValue = val;
    }
  },

  props: {
    value: String,
    autofocus: Boolean,
    show: Boolean,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    },
    result: Array
  },

  mounted() {
    this.autofocus && this.$refs.input.focus();
  },

  methods: {
    handleCancel(evt) {
      this.visible = false;
      this.currentValue = '';
      this.$emit('canceled', evt);
    }
  }
};
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component search {
      height: 100%;
      height: 44px;
      border-bottom: 0.5px solid $grey-lv4;
      overflow: hidden;
    }

    @component searchbar {
      position: relative;
      align-items: center;
      background-color: $bg-lv1;
      box-sizing: border-box;
      display: flex;
      padding: 8px 10px;
      z-index: 1;

      @descendent inner {
        align-items: center;
        background-color: $color-white;
        border-radius: 5px;
        display: flex;
        flex: 1;
        height: 29px;
        padding: 4px 6px;
        border: 0.5px solid $grey-lv5;

        .mintui-search {
          font-size: 13px;
          color: $color-grey;
        }
      }

      @descendent core {
        appearance: none;
        border: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        font-size: 14px;
        outline: 0;
        padding-left: 8px;
        color: #bdc0c5;
      }

      @descendent placeholder {
        align-items: center;
        color: #9b9b9b;
        display: flex;
        font-size: 14px;
        justify-content: center;
        position: absolute 0 0 0 0;

        .mintui-search {
          font-size: 14px;
        }
      }
      @descendent cancel {
        color: $theme-lv1;
        margin-left: 10px;
        text-decoration: none;
        font-size: 15px;
      }
    }

    @component search-list {
      overflow: auto;
      /* padding-top: 44px; */
      margin-top:44px; /* 与下拉菜单配合使用时存在，下拉菜单被遮住的问题。2017-12-14 需求来源张毅学工 。修改人徐佳宾 */
      position: absolute 0 0 0 0;
    }
  }
</style>
