<template>
  <div class="hr" style="margin-top:60px">
    <div class="item">
      <div>normal</div>
      <mt-hr></mt-hr>
    </div>

    <div class="item">
      <div>weight 4px</div>
      <mt-hr height="4px" margin="10px 0"></mt-hr>
    </div>

    <div class="item">
      <div>primary</div>
      <mt-hr color="#52C7CA"></mt-hr>
    </div>

    <div class="item">
      <div>warning</div>
      <mt-hr color="#FFB950"></mt-hr>
    </div>

    <div class="item">
      <div>danger</div>
      <mt-hr color="#F26666"></mt-hr>
    </div>
  </div>
</template>

<script>
export default {
    name: 'page-hr'
};
</script>

<style lang="css" scoped>
  .hr{
    margin-top: 45px;
    padding:0 20px;
  }
  .item{
    margin-top: 12px;
  }
</style>
