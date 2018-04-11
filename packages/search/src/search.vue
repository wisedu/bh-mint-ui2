<template>
  <form onsubmit="" action="#">
    <div class="mint-search mt-bColor-grey-lv5">
      <div class="mint-searchbar mt-bg-lv1">
        <div class="mint-searchbar-inner mt-bColor-grey-lv5 mt-bg-lv3">
          <i class="iconfont icon-search mt-color-grey-lv4"></i>
          <input
          ref="input"
          @click="visible = true"
          @focus="handleFocus"
          @blur="handleBlur"
          type="search"
          v-model="currentValue"
          :placeholder="placeholder"
          @keypress.enter.prevent="onSearch"
          class="mint-searchbar-core mt-color-grey mt-bg-transparent">
        </div>
        <div
          @click="handleClear"
          class="mint-searchbar-clear mt-color-grey"
          v-show="currentValue" >
          <i class="iconfont icon-weiwancheng"></i>
        </div>
        <a
          class="mint-searchbar-cancel mt-color-theme"
          @click="handleCancel"
          v-show="visible"
          v-text="cancelText">
        </a>
      </div>
      <div class="mint-search-list" v-show="show || currentValue" :style="{'margin-top':margintop}">
        <div class="mint-search-list-warp">
          <slot>
            <mt-cell-group>
              <x-cell v-for="(item, index) in result" :key="index" :title="item"></x-cell>
            </mt-cell-group>
          </slot>
        </div>
      </div>
    </div>
  </form>
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
    margintop:{
      type:String,
      default:"43px"
    },
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
    if(this.autofocus) this.visible=true;
  },

  methods: {
    onSearch(e) {
      e.preventDefault();
      this.$emit('search', this.value);
      return false;
    },
    handleCancel(evt) {
      this.visible = false;
      this.currentValue = '';
      this.$emit('canceled', evt);
    },
    handleClear() {
      this.currentValue = '';
    },
    handleFocus(e){
      e.preventDefault();
      this.$emit('onFocus', this.value);
      return false;
    },
    handleBlur(e){
      e.preventDefault();
      this.$emit('onBlur', this.value);
      return false;
    }
  }
};
</script>

<style lang="css">
  @component-namespace mint {
    @component search {
      height: 100%;
      height: 44px;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      overflow: hidden;
    }

    @component searchbar {
      position: relative;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      padding: 7px 10px;
      z-index: 1;

      @descendent inner {
        position: relative;
        align-items: center;
        border-radius: 5px;
        display: flex;
        flex: 1;
        height: 29px;
        border-width: 1px;
        border-style: solid;
        .icon-search {
          margin:4px 0 0 7px;
        }
      }

      @descendent clear{
        position: absolute;
        top:14px;
        right: 67px;
        opacity: 0.2;
        line-height: 1;
      }

      @descendent core {
        appearance: none;
        border: 0;
        box-sizing: border-box;
        width: calc(100% - 24px);
        height: calc(100% - 1px);
        font-size: 14px;
        outline: 0;
        padding-left: 7px;
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
        margin: 0 5px 0 15px;
        text-decoration: none;
        font-size: 15px;
      }
    }

    @component search-list {
      overflow: auto;
      /* padding-top: 44px; */
      /* margin-top:44px;  与下拉菜单配合使用时存在，下拉菜单被遮住的问题。2017-12-14 需求来源张毅学工 。修改人徐佳宾 */
      position: absolute 0 0 0 0;
    }
  }
  input::-webkit-search-cancel-button {
    display: none;
  }
</style>
