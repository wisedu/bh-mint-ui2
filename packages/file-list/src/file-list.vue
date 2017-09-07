<template>
  <div class="mint-file-list">
    <h4 class="mint-file-list-title" v-if="label !== ''">{{label}}</h4>
    <mt-cell v-for="item in fileList" :key="item.id" :title="item.name" is-link></mt-cell>
  </div>
</template>
<script>
/**
 * mt-field
 * @desc 编辑器，依赖 cell
 * @module components/file-list
 * @param {string} [type=text] - field 类型，接受 text, textarea 等
 */

/**
 * @noteType component
 * @name FileList
 * @tagName mt-file-list
 * @desc 文件列表
 * @wrapClassName mint-file-list
 * @html
 * <mt-file-list label="标题文字" :file-list="[]"></mt-file-list>
 */
export default {
  name: 'mt-file-list',
  props: {
    /**
     * @noteType prop
     * @field label
     * @desc 标题
     * @type input
     * @value 标题
     */
    label: { type: String, default: '' },
    /**
     * @noteType prop
     * @field token
     * @desc token
     * @type input
     * @value token
     */
    token: { type: String, default: '' },
    /**
     * @noteType prop
     * @field label
     * @desc 文件列表数据
     * @type textarea
     * @value
     */
    fileList: { type: Array, default() { return []; } }
  },

  data() {
    return {
      active: false,
      currentValue: this.value
    };
  },

  watch: {
    token (val) {
      this.$emit('token-change', val)
    }
  },

  mounted() {
    if (this.token !== undefined && this.token !== '') {
      this.$emit('token-change', this.token)
    }
  }

};
/**
 * @noteType external
 * @content
{
   "xtype": "uploadfile",
   "bindField": ":token",
   "mock": {
      "fileList": [{
        "id": "att1", "name": "附件1"
      },{
        "id": "att2", "name": "附件2"
      },{
        "id": "att3", "name": "附件3"
      }]
   }
}
 */
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

  .mint-file-list-title {
    font-size: 14px;
    padding: 0 12px;
    color: $grey-lv3;
  }
</style>
