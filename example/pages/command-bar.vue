<template>
  <div class="page-button">
    <h1 class="page-title">CommandBar</h1>
    全按钮
    <mt-command-bar :buttons="buttons" :moreButtons="moreButtons"></mt-command-bar>
    
    没有更多按钮
    <mt-command-bar :buttons="buttons"></mt-command-bar>
  </div>
</template>

<script>
export default {
  name: 'button',
  data() {
    return {
      buttons: [
          {name:"退回",id:"tuihui", type:"default", com_type:"chooseNode", method:""},
          {name:"提交",id:"tijiao", type:"default", com_type:"none", method:""},
          {name:"启动",id:"qidong", type:"primary", com_type:"none", method:""}
      ],
      moreButtons: [
          {name:"同意",id:"tongyi", type:"primary", com_type:"none", method:""},
          {name:"终止",id:"tongyi", type:"primary", com_type:"none", method:""},
          {name:"流程状态",id:"tongyi", type:"primary", com_type:"openurl", method:""}
      ]
    };
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component button {
      padding: 0 15px 15px;

      @descendent group {
        margin-bottom: 15px;

        & > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
