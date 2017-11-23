<template>
  <div class="part">
    <div class="item">
      <div>normal</div>
      <mt-hr></mt-hr>
    </div>

    <div class="item">
      <div>weight 4px</div>
      <mt-hr height="4px"></mt-hr>
    </div>

    <div class="item">
      <div>primary</div>
      <mt-hr color="#06c1ae"></mt-hr>
    </div>

    <div class="item">
      <div>warning</div>
      <mt-hr color="#ffb200"></mt-hr>
    </div>

    <div class="item">
      <div>danger</div>
      <mt-hr color="#ef4f4f"></mt-hr>
    </div>
  </div>
</template>

<script>
export default {
    name: 'page-hr'
};
</script>

<style lang="css" scoped>
  .part{
    margin-top: 60px;
  }

  .item{
    margin-top: 12px;
  }
</style>
