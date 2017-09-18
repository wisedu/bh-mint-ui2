<template>
  <div class="part">
    <div class="item">
      <div>normal</div>
      <!--start
      @name normal
      -->
      <mt-hr></mt-hr>
      <!--end-->
    </div>

    <div class="item">
      <div>weight 4px</div>
      <!--start
      @name height-4px
      -->
      <mt-hr height="4px"></mt-hr>
      <!--end-->
    </div>

    <div class="item">
      <div>primary</div>
      <!--start
      @name primary
      -->
      <mt-hr background="#06c1ae"></mt-hr>
      <!--end-->
    </div>

    <div class="item">
      <div>warning</div>
      <!--start
      @name warning
      -->
      <mt-hr background="#ffb200"></mt-hr>
      <!--end-->
    </div>

    <div class="item">
      <div>danger</div>
      <!--start
      @name danger
      -->
      <mt-hr background="#ef4f4f"></mt-hr>
      <!--end-->
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
