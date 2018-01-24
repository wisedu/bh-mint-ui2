<template>
  <div class="page-navbar">
    <mt-cell title="当前选中" wrapperpaddingleft="20px">{{ selected }}</mt-cell>
    <mt-side-navbar v-model="selected"> 
      <div slot="nav">
        <mt-tab-item id="1" componentname="sidenavbar">选项一</mt-tab-item>
        <mt-tab-item id="2" componentname="sidenavbar">选项二</mt-tab-item>
        <mt-tab-item id="3" componentname="sidenavbar">选项三</mt-tab-item>
      </div>
      <mt-tab-container v-model="selected" slot="content">
        <mt-tab-container-item id="1">
          <mt-cell-group>
            <mt-cell v-for="n in 40" :key="n" :title="'内容 ' + n" cellheight="44px"/>
          </mt-cell-group>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell-group>
            <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" cellheight="44px"/>
          </mt-cell-group>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell-group>
            <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" cellheight="44px"/>
          </mt-cell-group>
        </mt-tab-container-item>
      </mt-tab-container>
    </mt-side-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-side-navbar',

  data() {
    return {
      selected: '1'
    };
  }
};
</script>

<style>
  .page-navbar{
    margin-top: 45px;
  }
</style>
