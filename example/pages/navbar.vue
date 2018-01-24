<template>
  <div class="page-navbar" style="margin-top:45px">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1" componentname="navbar">
        选项一四
        <mt-badge size="normal" padding="3px" color="red" slot="badge" ></mt-badge>
      </mt-tab-item>
      <mt-tab-item id="2" componentname="navbar">选项二四</mt-tab-item>
      <mt-tab-item id="3" componentname="navbar">选项三四</mt-tab-item>
      <mt-tab-item id="4" componentname="navbar">选项四四</mt-tab-item>
      <mt-tab-item id="5" componentname="navbar">选项五四</mt-tab-item>
      <mt-tab-item id="6" componentname="navbar">选项六四</mt-tab-item>
    </mt-navbar>

    <div style="margin:15px 0;">
      <mt-cell title="当前选中"  wrapperpaddingleft="20px">{{ selected }}</mt-cell>
    </div>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell-group>
          <mt-cell v-for="n in 20" :key="n" :title="'内容 ' + n" wrapperpaddingleft="20px"/>
        </mt-cell-group>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell-group>
          <mt-cell v-for="n in 10" :key="n" :title="'测试 ' + n" wrapperpaddingleft="20px"/>
        </mt-cell-group>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell-group>
          <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" wrapperpaddingleft="20px"/>
        </mt-cell-group>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: 'page-navbar',

  data() {
    return {
      selected: '1'
    };
  }
};
</script>