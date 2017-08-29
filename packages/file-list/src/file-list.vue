<template>
  <div class="mint-file-list">
    <mt-cell v-for="item in fileList" :key="item.id" :title="item.name" is-link></mt-cell>
  </div>
</template>
<script>
/**
 * mt-field
 * @desc 编辑器，依赖 cell
 * @module components/file-list
 *
 * @param {string} [type=text] - field 类型，接受 text, textarea 等
 *
 * @example
 */
export default {
  name: 'mt-file-list',
  props: {
    label: { type: String, default: '' },
    fileList: { type: Array, default() { return []; } }
  },

  data() {
    return {
      active: false,
      currentValue: this.value
    };
  }

};
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component file-list {
    }
  }

  .mint-file-list .mint-cell-text {
    word-break: break-all;
  }
</style>
