<template>
  <div class="page-badge">
    <div class="page-title">Badge</div>

    <div class="page-badge-container">
      <!--**************small*************-->
      <div class="page-part">
        <!--start
        @name small-primary
        -->
        <mt-badge type="primary" size="small">30</mt-badge>
        <!--end-->

        <!--start
        @name small-error
        -->
        <mt-badge type="error" size="small">30</mt-badge>
        <!--end-->

        <!--start
        @name small-success
        -->
        <mt-badge type="success" size="small">30</mt-badge>
        <!--end-->

        <!--start
        @name small-warning
        -->
        <mt-badge type="warning" size="small">30</mt-badge>
        <!--end-->

        <!--start
        @name small-custom
        -->
        <mt-badge size="small" color="#888">自定义颜色</mt-badge>
        <!--end-->
      </div>




      <!--**************normal*************-->
      <div class="page-part">
        <!--start
        @name normal-primary
        -->
        <mt-badge type="primary" size="normal">30</mt-badge>
        <!--end-->

        <!--start
        @name normal-error
        -->
        <mt-badge type="error" size="normal">30</mt-badge>
        <!--end-->

        <!--start
        @name normal-success
        -->
        <mt-badge type="success" size="normal">30</mt-badge>
        <!--end-->

        <!--start
        @name normal-warning
        -->
        <mt-badge type="warning" size="normal">30</mt-badge>
        <!--end-->

        <!--start
        @name normal-custom
        -->
        <mt-badge size="normal" color="#888">自定义颜色</mt-badge>
        <!--end-->
      </div>




      <!--**************normal*************-->
      <div class="page-part">
        <!--start
        @name large-primary
        -->
        <mt-badge type="primary" size="large">30</mt-badge>
        <!--end-->

        <!--start
        @name large-error
        -->
        <mt-badge type="error" size="large">30</mt-badge>
        <!--end-->

        <!--start
        @name large-success
        -->
        <mt-badge type="success" size="large">30</mt-badge>
        <!--end-->

        <!--start
        @name large-warning
        -->
        <mt-badge type="warning" size="large">30</mt-badge>
        <!--end-->

        <!--start
        @name large-custom
        -->
        <mt-badge size="large" color="#888">自定义颜色</mt-badge>
        <!--end-->
      </div>

    </div>

    <div class="page-part">
      <mt-cell title="徽章">
        <span style="margin-right: 5px;">未读消息</span>
        <mt-badge type="error" size="small">10</mt-badge>
      </mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-badge'
};
</script>

<style lang="css">
  .page-badge-container {
    padding: 0 10px;
  }
</style>
