<template>
  <div class="mint-command-bar">
    <div style="float:left">
        <mt-button style="margin:4px" @click="showMoreAction">...</mt-button>
    </div>
    <div style="float:right">
        <mt-button v-for="item in buttons" :key="item.id" :type="item.type" class="flow-button">{{item.name}}</mt-button>
    </div>
    <mt-actionsheet :actions="moreButtons" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>

<script>
/**
 * mt-command-bar
 * @module components/CommandBar
 * @desc 操作栏
 * @wrapClassName mt-command-bar
 * @display block
 * @noteType component
 * @html
 * <mt-command-bar></mt-command-bar>
 * @example
 */
import Actionsheet from 'bh-mint-ui2/packages/actionsheet/index.js';
export default {
  name: 'mt-command-bar',
  props: {
    /**
     * @noteType prop
     * @field buttons
     * @desc 主要按钮
     * @type textarea
      */
    buttons: { type: Array, default: [] },
    /**
     * @noteType prop
     * @field moreButtons
     * @desc 更多按钮
     * @type textarea
      */
    moreButtons: { type: Array, default: [] }
  },
  data: function(){
    return {
      sheetVisible:false
    }
  },
  methods: {
    showMoreAction: function() {
      this.sheetVisible = true;
    }
  },
  components: { Actionsheet }
};

/**
 * @noteType external
 * @content
 {
    "mock": {
      "buttons": [
          {"name":"退回","id":"tuihui", "type":"default", "com_type":"chooseNode", "method":""},
          {"name":"提交","id":"tijiao", "type":"default", "com_type":"none", "method":""},
          {"name":"启动","id":"qidong", "type":"primary", "com_type":"none", "method":""}
      ],
      "moreButtons": [
          {"name":"同意","id":"tongyi", "type":"primary", "com_type":"none", "method":""},
          {"name":"终止","id":"tongyi", "type":"primary", "com_type":"none", "method":""},
          {"name":"流程状态","id":"tongyi", "type":"primary", "com_type":"openurl", "method":""}
      ]
    }
 }
 */
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component command-bar {
      .flow-button {
        margin:4px;
        width:82px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      & :after {
        clear: both;
      }
    }
  }
</style>
