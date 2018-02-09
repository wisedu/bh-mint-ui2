<template>
  <div style="margin-top:45px;overflow:hidden">
    <div>
      <p style="padding:10px 0">flex左右布局（百分比）</p>
      <mt-layout-left-right>
        <mt-layout-left-right-item slot="left" percentage="30"><div class="mt-bg-primary mt-color-white">左30%</div></mt-layout-left-right-item>
        <mt-layout-left-right-item slot="right"  percentage="70"><div class="mt-bg-warning mt-color-white">右70%</div></mt-layout-left-right-item>
      </mt-layout-left-right>
    </div>

    <div>
      <p style="padding:10px 0">flex左右布局（像素）</p>
      <mt-layout-left-right @click="handleclick">
        <mt-layout-left-right-item slot="left"  percentage="100px"><div class="mt-bg-primary mt-color-white">左100px</div></mt-layout-left-right-item>
        <mt-layout-left-right-item slot="right" percentage="calc(100% - 100px)"><div class="mt-bg-warning mt-color-white">右(100%-100px)</div></mt-layout-left-right-item>
      </mt-layout-left-right>
    </div>

    <div>
      <p style="padding:10px 0">flex左右布局子元素比例分配</p>
      <mt-layout-left-right @click="handleclick">
        <mt-layout-left-right-item slot="left"  percentage="2"><div class="mt-bg-primary mt-color-white">左2</div></mt-layout-left-right-item>
        <mt-layout-left-right-item slot="right" percentage="1"><div class="mt-bg-warning mt-color-white">右1</div></mt-layout-left-right-item>
      </mt-layout-left-right>
    </div>
    <div>
      <p style="padding:10px 0">flex默认等分</p>
      <mt-layout-left-right @click="handleclick">
        <mt-layout-left-right-item slot="left" class="bh-str-cut"><div class="mt-bg-primary mt-color-white bh-str-cut">左1左1左1左1左1左1左1左1左1左1左1左1左1左1左1左1</div></mt-layout-left-right-item>
        <mt-layout-left-right-item slot="right"><div class="mt-bg-warning mt-color-white">右1</div></mt-layout-left-right-item>
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
  .bh-str-cut{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
