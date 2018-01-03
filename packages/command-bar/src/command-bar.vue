<template>
  <div class="mint-command-bar">
    <div style="float:left">
        <mt-button style="margin:4px" v-if="moreButtons.length > 0" @click="showMoreAction">...</mt-button>
    </div>
    <div style="float:right">
        <mt-button v-for="(item, index) in buttons" :key="item.id" :type="item.type" @click="clickHandler(item, index, $event)" class="flow-button">{{item.name}}</mt-button>
    </div>
    <mt-actionsheet :actions="moreButtons" @click="clickHandler" v-model="sheetVisible"></mt-actionsheet>
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
    buttons: { 
      type: Array, 
      default: function () {
        return []
      }
    },
    /**
     * @noteType prop
     * @field moreButtons
     * @desc 更多按钮
     * @type textarea
      */
    moreButtons: { 
      type: Array, 
      default: function () {
        return []
      }
    }
  },
  data: function(){
    return {
      sheetVisible:false
    }
  },
  methods: {
    showMoreAction: function() {
      this.sheetVisible = true;
    },
    clickHandler: function(item,index,evt) {
      this.$emit('click', item, index, evt);
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

  @component-namespace mint {
    @component command-bar {
      .flow-button {
        margin:4px;
        width:82px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      &::after {
        clear: both;
        content: "";
        display: table;
      }
    }
  }
</style>
