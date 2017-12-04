<template>
  <div class="page-cell">
    <div class="page-title">Cell</div>
    <mt-cell-group title="cell组的标题">
      <mt-cell title="标题文字"></mt-cell>
      <mt-cell title="标题文字" value="说明文字"></mt-cell>
      <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
      <mt-cell title="标题文字" value="icon 是自定义图片">
        <mt-image slot="icon" src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" width="24px" height="24px" smile-display="inline-block"></mt-image>
      </mt-cell>
      <mt-cell title="标题文字" is-link value="带链接的">
        <i slot="arrow" class="iconfont icon-keyboardarrowright" style="font-size:24px;color:#bdc0c5;"></i>
      </mt-cell>
      <mt-cell title="标题文字" is-link>
        <span style="color: green">这里是元素</span>
      </mt-cell>
      <mt-cell title="标题文字" to="click" @cellClick="cellClick">
        <mt-button size="small" type="primary" icon="back">按钮</mt-button>
      </mt-cell>
      <mt-cell title="标题" label="描述信息" is-link></mt-cell>
      <mt-cell title="原生跳转" label="跳转到 https://bh-mint-ui2.github.io" is-link to="https://bh-mint-ui2.github.io"></mt-cell>
    </mt-cell-group>
  </div>
</template>
<script>
export default {
  methods:{
    cellClick(p1, p2){
      console.log(p1)
      console.log(p2)
    }
  }
}
</script>
<style lang="css">
 .page-title {
    margin-top: 40px;
  }
</style>
