<template>
  <div class="page-textarea">
    <div class="page-title">textarea</div>
    <div class="page-part">
      <mt-textarea label="全宽度" placeholder="全宽度" rows="4"></mt-textarea>
      <mt-textarea label="success" placeholder="success" rows="4" state="success"></mt-textarea>
      <mt-textarea label="error" placeholder="error" rows="4" state="error"></mt-textarea>
      <mt-textarea label="warning" placeholder="warning" rows="4" state="warning"></mt-textarea>
    </div>

    <div class="page-part">
      <mt-textarea label="验证码" placeholder="输入验证码">
        <img src="../assets/100x100.png" height="48px" width="100px">
      </mt-textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-textarea'
};
</script>
