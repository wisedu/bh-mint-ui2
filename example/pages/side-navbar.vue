<template>
  <div class="page-navbar">
    <div class="page-title">Navbar</div>
    <div>
      <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
    </div>
    <mt-side-navbar class="page-part" v-model="selected">
      <div slot="nav">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </div>
      <mt-tab-container v-model="selected" slot="content">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </mt-side-navbar>
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

</style>
