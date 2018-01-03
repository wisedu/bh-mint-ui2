<template>
  <div class="page-badge" style="margin-top:45px">

    <div class="page-badge-container">
      <!--**************small*************-->
      <div class="page-badge-part">
        <!--start
        @name small-primary
        -->
        <mt-badge type="primary" size="small">8</mt-badge>
        <!--end-->

        <!--start
        @name small-danger
        -->
        <mt-badge type="danger" size="small">30</mt-badge>
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
        <mt-badge size="small" color="#888" fontColor="red" fontSize="18px">自定义颜色</mt-badge>
        <!--end-->
      </div>




      <!--**************normal*************-->
      <div class="page-badge-part">
        <!--start
        @name normal-primary
        -->
        <mt-badge type="primary" size="normal">30</mt-badge>
        <!--end-->

        <!--start
        @name normal-danger
        -->
        <mt-badge type="danger" size="normal">new</mt-badge>
        <!--end-->

        <!--start
        @name normal-success
        -->
        <mt-badge type="success" size="normal">100</mt-badge>
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
      <div class="page-badge-part">
        <!--start
        @name large-primary
        -->
        <mt-badge type="primary" size="large">30</mt-badge>
        <!--end-->

        <!--start
        @name large-danger
        -->
        <mt-badge type="danger" size="large">30</mt-badge>
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
    <mt-cell-group>
        <mt-cell title="徽章">
            <span style="margin-right: 5px;">未读消息</span>
            <mt-badge type="danger" size="small">10</mt-badge>
        </mt-cell>
        <mt-cell title="红点标识">
            <mt-badge size="normal" padding="3px" color="red"></mt-badge>
        </mt-cell>
        <mt-cell title="'卷'">
            <mt-badge size="normal" padding="3px" color="#FFB950" radius="2px">卷</mt-badge>
        </mt-cell>
        <mt-cell title="自动缴费">
            <mt-badge padding="4px" color="#FFF" fontColor="#FFB950" bColor="#FFB950" radius="2px">自动缴费</mt-badge>
        </mt-cell> 
    </mt-cell-group>
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
  .page-badge-part{
    height: 44px
  }
</style>
