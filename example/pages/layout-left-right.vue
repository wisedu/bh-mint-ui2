<template>
  <div style="margin-top:45px;overflow:hidden">
    <div>
      <p style="padding:10px 0">左右布局（百分比）</p>
      <mt-layout-left-right>
        <mt-layout-left-right-item slot="left" position="left" percentage="30"><div class="mt-bg-primary mt-color-white">左30%</div></mt-layout-left-right-item>
        <mt-layout-left-right-item slot="right" position="right" percentage="70"><div class="mt-bg-warning mt-color-white">右70%</div></mt-layout-left-right-item>
      </mt-layout-left-right>
    </div>

    <div>
      <p style="padding:10px 0">左右布局（像素）</p>
      <mt-layout-left-right @click="handleclick">
        <mt-layout-left-right-item slot="left" position="left" percentage="60px"><div class="mt-bg-primary mt-color-white">左60px</div></mt-layout-left-right-item>
        <mt-layout-left-right-item slot="right" position="right" percentage="calc(100% - 40px)"><div class="mt-bg-warning mt-color-white">右(100%-40px)</div></mt-layout-left-right-item>
      </mt-layout-left-right>
    </div>
  </div>
</template>

<script>
export default {
    name: 'page-left-right-layout',
    methods:{
      handleclick(val){
        console.log(val);
      }
    }
};
</script>

<style lang="css" scoped>
</style>
