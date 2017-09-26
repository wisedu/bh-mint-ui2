<template>
  <div style="margin-top: 60px;">
    <div style="margin-top: 20px;">
      <mt-layout-left-right>
        <mt-layout-left-right-item slot="left" position="left" percentage="30"><div class="aaa">111</div></mt-layout-left-right-item>
        <mt-layout-left-right-item slot="right" position="right" percentage="70"><div class="bbb">222</div></mt-layout-left-right-item>
      </mt-layout-left-right>
    </div>

    <div style="margin-top: 20px;">
      <mt-layout-left-right>
        <mt-layout-left-right-item slot="left" position="left" percentage="40px"><div>左侧40px</div></mt-layout-left-right-item>
        <mt-layout-left-right-item slot="right" position="right" percentage="calc(100% - 40px)"><div>右侧</div></mt-layout-left-right-item>
      </mt-layout-left-right>
    </div>
  </div>
</template>

<script>
export default {
    name: 'page-left-right-layout'
};
</script>

<style lang="css" scoped>
</style>
