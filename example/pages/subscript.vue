<template>
  <div class="page-subscript">
    <div class="page-subscript-part">
      <div class="page-subscript-container">
        <mt-subscript label="成功" fontsize="12px" background="red" width="90px" height="16px" rotate="45"></mt-subscript>
      </div>
        

    </div>
  </div>
</template>

<script>
export default {
  name: 'page-subscript'
};
</script>

<style lang="css">
  .page-subscript{
    margin-top: 45px;
    overflow: hidden;
  }
  .page-subscript-container {
    width: 200px;
    height:70px;
    border: solid 1px #ddd;
    margin: 32px;
    overflow: hidden;
    position: relative;

  }
</style>
