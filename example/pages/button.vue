<template>
  <div class="page-button">
    <div class="page-button-swapper">
        <!--primary按钮-->
      <div class="page-button-group">
        <!--**************small*************-->
        <!--start
        @name small-primary
        -->
        <mt-button size="small" type="primary">primary</mt-button>
        <!--end-->

        <!--start
        @name small-primary-disabled
        -->
        <mt-button disabled size="small" type="primary">primary</mt-button>
        <!--end-->

        <!--start
        @name small-primary-plain
        -->
        <mt-button plain size="small" type="primary">primary</mt-button>
        <!--end-->

        <!--start
        @name small-primary-icon-back
        -->
        <mt-button icon="back" size="small" type="primary">primary</mt-button>
        <!--end-->

        <!--start
        @name small-primary-icon-more
        -->
        <mt-button icon="more" size="small" type="primary">primary</mt-button>
        <!--end-->

        <!--start
        @name small-primary-icon-custom
        -->
        <mt-button size="small" type="primary">
          <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" height="13px" width="13px" slot="icon"></mt-image>自定义图标
        </mt-button>
        <!--end-->


        <!--**************normal*************-->


        <!--start
       @name primary
       -->
        <mt-button type="primary">primary</mt-button>
        <!--end-->

        <!--start
        @name primary-disabled
        -->
        <mt-button disabled type="primary">primary</mt-button>
        <!--end-->

        <!--start
        @name primary-plain
        -->
        <mt-button plain type="primary">primary</mt-button>
        <!--end-->

        <!--start
        @name primary-icon-back
        -->
        <mt-button icon="back" type="primary">primary</mt-button>
        <!--end-->

        <!--start
        @name primary-icon-more
        -->
        <mt-button icon="more"  type="primary">primary</mt-button>
        <!--end-->

        <!--start
        @name primary-icon-custom
        -->
        <mt-button type="primary">
          <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" height="14px" width="14px" slot="icon"></mt-image>自定义图标
        </mt-button>
        <!--end-->



        <!--**************large*************-->

        <!--start
        @name large-primary
        -->
        <mt-button size="large" type="primary">primary</mt-button>
        <!--end-->

        <!--start
        @name large-primary-disabled
        -->
        <mt-button disabled size="large" type="primary">primary</mt-button>
        <!--end-->

        <!--start
        @name large-primary-plain
        -->
        <mt-button plain size="large" type="primary">primary</mt-button>
        <!--end-->

        <!--start
        @name large-primary-icon-back
        -->
        <mt-button size="large" icon="back" type="primary" iconSize="24px" >primary</mt-button>
        <!--end-->

        <!--start
        @name large-primary-icon-more
        -->
        <mt-button size="large" icon="more" type="primary" iconSize="24px" >primary</mt-button>
        <!--end-->

        <!--start
        @name large-primary-icon-custom
        -->
        <mt-button size="large" type="primary">
          <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" height="20px" width="20px" slot="icon"></mt-image>自定义图标
        </mt-button>
        <!--end-->
      </div>

      <!--default按钮-->
      <div class="page-button-group">
        <!--**************small*************-->
        <!--start
        @name small
        -->
        <mt-button size="small" type="default">default</mt-button>
        <!--end-->

        <!--start
        @name small-disabled
        -->
        <mt-button disabled size="small" type="default">default</mt-button>
        <!--end-->

        <!--start
        @name small-plain
        -->
        <mt-button plain size="small" type="default">default</mt-button>
        <!--end-->

        <!--start
        @name small-icon-back
        -->
        <mt-button icon="back" size="small" type="default">default</mt-button>
        <!--end-->

        <!--start
        @name small-icon-more
        -->
        <mt-button icon="more" size="small" type="default">default</mt-button>
        <!--end-->

        <!--start
        @name small-icon-custom
        -->
        <mt-button size="small" type="default">
          <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" height="13px" width="13px" slot="icon"></mt-image>自定义图标
        </mt-button>
        <!--end-->





        <!--**************normal*************-->


        <!--start
       @name normal
       -->
        <mt-button type="default">default</mt-button>
        <!--end-->

        <!--start
        @name normal-disabled
        -->
        <mt-button disabled type="default">default</mt-button>
        <!--end-->

        <!--start
        @name normal-plain
        -->
        <mt-button plain type="default">default</mt-button>
        <!--end-->

        <!--start
        @name normal-icon-back
        -->
        <mt-button icon="back" type="default">default</mt-button>
        <!--end-->

        <!--start
        @name normal-icon-more
        -->
        <mt-button icon="more" type="default">default</mt-button>
        <!--end-->

        <!--start
        @name normal-icon-custom
        -->
        <mt-button type="default">
          <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" height="14px" width="14px" slot="icon"></mt-image>自定义图标
        </mt-button>
        <!--end-->






        <!--**************large*************-->

        <!--start
        @name large
        -->
        <mt-button size="large" type="default">default</mt-button>
        <!--end-->

        <!--start
        @name large-disabled
        -->
        <mt-button disabled size="large" type="default">default</mt-button>
        <!--end-->

        <!--start
        @name large-plain
        -->
        <mt-button plain size="large" type="default">default</mt-button>
        <!--end-->

        <!--start
        @name large-icon-back
        -->
        <mt-button size="large" icon="back" type="default">default</mt-button>
        <!--end-->

        <!--start
        @name large-icon-more
        -->
        <mt-button size="large" icon="more" type="default">default</mt-button>
        <!--end-->

        <!--start
        @name large-icon-custom
        -->
        <mt-button size="large" type="default">
          <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" height="20px" width="20px" slot="icon"></mt-image>自定义图标
        </mt-button>
        <!--end-->
      </div>

      <!--**************warning按钮*************-->
      <div class="page-button-group">
        <!--**************small*************-->
        <!--start
        @name small-warning
        -->
        <mt-button size="small" type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name small-warning-disabled
        -->
        <mt-button disabled size="small" type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name small-warning-plain
        -->
        <mt-button plain size="small" type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name small-warning-icon-back
        -->
        <mt-button icon="back" size="small" type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name small-warning-icon-more
        -->
        <mt-button icon="more" size="small" type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name small-warning-icon-custom
        -->
        <mt-button size="small" type="warning">
          <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" height="13px" width="13px" slot="icon"></mt-image>自定义图标
        </mt-button>
        <!--end-->





        <!--**************normal*************-->


        <!--start
       @name warning
       -->
        <mt-button type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name warning-disabled
        -->
        <mt-button disabled type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name warning-plain
        -->
        <mt-button plain type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name warning-icon-back
        -->
        <mt-button icon="back" type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name warning-icon-more
        -->
        <mt-button icon="more" type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name warning-icon-custom
        -->
        <mt-button type="warning">
          <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" height="14px" width="14px" slot="icon"></mt-image>自定义图标
        </mt-button>
        <!--end-->



        <!--**************large*************-->

        <!--start
        @name large-warning
        -->
        <mt-button size="large" type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name large-warning-disabled
        -->
        <mt-button disabled size="large" type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name large-warning-plain
        -->
        <mt-button plain size="large" type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name large-warning-icon-back
        -->
        <mt-button size="large" icon="back" type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name large-warning-icon-more
        -->
        <mt-button size="large" icon="more" type="warning">warning</mt-button>
        <!--end-->

        <!--start
        @name large-warning-icon-custom
        -->
        <mt-button size="large" type="warning">
          <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" height="20px" width="20px" slot="icon"></mt-image>自定义图标
        </mt-button>
        <!--end-->

      </div>

      <!--**************danger按钮*************-->
      <div class="page-button-group">
        <!--**************small*************-->
        <!--start
        @name small-danger
        -->
        <mt-button size="small" type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name small-danger-disabled
        -->
        <mt-button disabled size="small" type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name small-danger-plain
        -->
        <mt-button plain size="small" type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name small-danger-icon-back
        -->
        <mt-button icon="back" size="small" type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name small-danger-icon-more
        -->
        <mt-button icon="more" size="small" type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name small-danger-icon-custom
        -->
        <mt-button size="small" type="danger">
          <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" height="13px" width="13px" slot="icon"></mt-image>自定义图标
        </mt-button>
        <!--end-->





        <!--**************normal*************-->


        <!--start
       @name danger
       -->
        <mt-button type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name danger-disabled
        -->
        <mt-button disabled type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name danger-plain
        -->
        <mt-button plain type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name danger-icon-back
        -->
        <mt-button icon="back" type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name danger-icon-more
        -->
        <mt-button icon="more" type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name danger-icon-custom
        -->
        <mt-button type="danger">
          <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" height="14px" width="14px" slot="icon"></mt-image>自定义图标
        </mt-button>
        <!--end-->



        <!--**************large*************-->

        <!--start
        @name large-danger
        -->
        <mt-button size="large" type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name large-danger-disabled
        -->
        <mt-button disabled size="large" type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name large-danger-plain
        -->
        <mt-button plain size="large" type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name large-danger-icon-back
        -->
        <mt-button size="large" icon="back" type="danger">danger</mt-button>
        <!--end-->

        <!--start
        @name large-danger-icon-more
        -->
        <mt-button size="large" icon="more" type="danger" @click="handleClick">danger</mt-button>
        <!--end-->

        <!--start
        @name large-danger-icon-custom
        -->
        <mt-button size="large" type="danger">
          <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" height="20px" width="20px" slot="icon"></mt-image>自定义图标
        </mt-button>
        <!--end-->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button',
  methods: {
    handleClick:function(){
        console.log(0)
    }
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component button {
      @descendent swapper{
        margin-top: 60px;
        padding: 10px;
      }

      @descendent group {
        margin-bottom: 15px;

        & > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
