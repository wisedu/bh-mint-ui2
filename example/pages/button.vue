<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <div class="page-button-group">
      <!--start
      @name large
      -->
      <mt-button size="large">default</mt-button>
      <!--end-->

      <!--start
      @name large-primary
      -->
      <mt-button size="large" type="primary">primary</mt-button>
      <!--end-->

      <!--start
      @name large-warning
      -->
      <mt-button size="large" type="warning">warning</mt-button>
      <!--end-->

      <!--start
      @name large-danger
      -->
      <mt-button size="large" type="danger">danger</mt-button>
      <!--end-->
    </div>

    <div class="page-button-group">

      <!--start
      @name default
      -->
      <mt-button>default</mt-button>
      <!--end-->

      <!--start
      @name primary
      -->
      <mt-button type="primary">primary</mt-button>
      <!--end-->

      <!--start
      @name danger
      -->
      <mt-button type="danger">danger</mt-button>
      <!--end-->

      <!--start
      @name warning
      -->
      <mt-button type="warning">warning</mt-button>
      <!--end-->
    </div>

    <div class="page-button-group">
      <!--start
      @name small
      -->
      <mt-button size="small">default</mt-button>
      <!--end-->

      <!--start
      @name small-primary
      -->
      <mt-button size="small" type="primary">primary</mt-button>
      <!--end-->

      <!--start
      @name small-danger
      -->
      <mt-button size="small" type="danger">danger</mt-button>
      <!--end-->

      <!--start
      @name small-warning
      -->
      <mt-button size="small" type="warning">warning</mt-button>
      <!--end-->
    </div>

    <div class="page-button-group">
      <!--start
      @name disabled-large
      -->
      <mt-button disabled size="large">default</mt-button>
      <!--end-->

      <!--start
      @name disabled-large-primary
      -->
      <mt-button disabled size="large" type="primary">primary</mt-button>
      <!--end-->

      <!--start
      @name disabled-large-danger
      -->
      <mt-button disabled size="large" type="danger">danger</mt-button>
      <!--end-->

      <!--start
      @name disabled-large-warning
      -->
      <mt-button disabled size="large" type="warning">warning</mt-button>
      <!--end-->

    </div>

    <div class="page-button-group">
      <!-- 幽灵按钮 -->

      <!--start
      @name plain-large
      -->
      <mt-button plain size="large">default</mt-button>
      <!--end-->

      <!--start
      @name plain-large-primary
      -->
      <mt-button plain size="large" type="primary">primary</mt-button>
      <!--end-->

      <!--start
      @name plain-large-danger
      -->
      <mt-button plain size="large" type="danger">danger</mt-button>
      <!--end-->

      <!--start
      @name plain-large-warning
      -->
      <mt-button plain size="large" type="warning">warning</mt-button>
      <!--end-->

    </div>

    <div class="page-button-group">
      <mt-button size="large" type="danger">
        <img src="../assets/100x100.png" height="20" width="20" slot="icon">
        带自定义图标
      </mt-button>
    </div>

    <div class="page-button-group">
      <!-- 小号幽灵按钮 -->
      <!-- <mt-button plain size="large">default</mt-button> -->
      <mt-button plain size="large" type="primary">large</mt-button>
      <mt-button plain size="normal" type="primary">normal</mt-button>
      <mt-button plain size="small" type="primary">small</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button'
};
</script>

<style lang="css">
  @component-namespace page {
    @component button {
      padding: 0 15px 15px;

      @descendent group {
        margin-bottom: 15px;

        & > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
