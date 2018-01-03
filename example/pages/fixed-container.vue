<template>
  <div class="fixed-container" style="padding-top:60px;position:relative">
    <mt-fixed-container bottom="20px" left="20px">
      <mt-button>按钮3</mt-button>
      <mt-button>按钮4</mt-button>
    </mt-fixed-container>
    <mt-fixed-container position="top" top="100px" right="20px" left="inherit">
      <mt-button>按钮3</mt-button>
      <mt-button>按钮4</mt-button>
    </mt-fixed-container>
  </div>
</template>

<script>
export default {
    name: 'page-layout-container'
};
</script>

<style lang="css" scoped>

</style>
