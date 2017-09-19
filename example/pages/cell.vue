<template>
  <div class="page-cell">
    <div class="page-title">Cell</div>
    <!--start
     @name title
     -->
    <mt-cell title="标题文字"></mt-cell>
    <!--end-->

    <!--start
     @name title-value
     -->
    <mt-cell title="标题文字" value="说明文字"></mt-cell>
    <!--end-->

    <!--start
     @name title-value-icon-more
     -->
    <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
    <!--end-->

    <!--start
     @name title-value-icon-custom-img
     -->
    <mt-cell title="标题文字" value="icon 是自定义图片">
      <mt-image slot="icon" src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" width="24px" height="24px" smile-display="inline-block"></mt-image>
    </mt-cell>
    <!--end-->

    <!--start
     @name title-value-link
     -->
    <mt-cell title="标题文字" is-link value="带链接"></mt-cell>
    <!--end-->

    <!--start
     @name title-value-custom-link
     -->
    <mt-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </mt-cell>
    <!--end-->

    <!--start
     @name title-value-icon-custom-btn
     -->
    <mt-cell title="标题文字">
      <mt-button size="small" type="primary" icon="back">按钮</mt-button>
    </mt-cell>
    <!--end-->

    <!--start
     @name title-label-link
     -->
    <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    <!--end-->

    <!--start
     @name title-label-link-to
     -->
    <mt-cell title="原生跳转" label="跳转到 https://bh-mint-ui2.github.io" is-link to="https://bh-mint-ui2.github.io"></mt-cell>
    <!--end-->
  </div>
</template>
