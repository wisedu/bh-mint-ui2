<template>
  <div class="page-cell" >
    <mt-cell title="单一cell组件使用" wrapperpaddingleft="20px" is-link required></mt-cell>
    <mt-cell-group title="cell组的标题">
      <mt-cell title="标题文字" titlewidth="20%"></mt-cell>
      <mt-cell title="title内边距设置" titlepaddingtop="2px" titlepaddingright="2px" titlepaddingbottom="2px" titlepaddingleft="2px" titlewidth="72px"></mt-cell>
      <mt-cell title="标题文字" value="说明文字"></mt-cell>
      <mt-cell title="标题文字" to="//github.com/wisedu/bh-mint-ui2" is-link value="带链接 //github.com"></mt-cell>
      <mt-cell title="标题文字" icon="huifu" value="带 icon"></mt-cell>
      <mt-cell title="标题文字" value="左侧title图标icon 自定义图片">
        <mt-image slot="icon" src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png" width="24px" height="24px" smile-display="inline-block"></mt-image>
      </mt-cell>
      <mt-cell title="标题文字" value="右侧value默认图标" is-link></mt-cell>
      <mt-cell title="标题文字" is-link value="右侧value自定义图标" arrowdefined>
        <i slot="arrowdefined" class="icon iconfont icon-localgrocerystore" style="font-size:24px;color:#bdc0c5;"></i>
      </mt-cell>
    </mt-cell-group>
    <mt-cell-group title="cell组的标题">
      <mt-cell title="自定义左内边距30px" wrapperpaddingleft="30px" is-link></mt-cell>
      <mt-cell title="标题文字" is-link wrapperpaddingright="30px" value="自定义右内边距30px"></mt-cell>
      <mt-cell title="标题文字" is-link wrapperpaddingright="30px" value="自定义右内边距30px">
        <span style="color: green">自定义右内边距30px</span>
      </mt-cell>
      <mt-cell title="标题文字" to="click" @cellClick="cellClick" wrapperpaddingright="15px">
        <mt-button size="small" type="primary" icon="back">按钮</mt-button>
      </mt-cell>
      <mt-cell title="标题" label="描述信息" is-link></mt-cell>
      <mt-cell title="原生跳转" label="跳转到 https://bh-mint-ui2.github.io" is-link to="https://bh-mint-ui2.github.io" cellheight="60px" required></mt-cell>
      <mt-cell title="readonly状态" is-link value="内容" readonly></mt-cell>
      <mt-cell title="disabled状态" is-link value="内容" disabled></mt-cell>
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
<style>
  .page-cell{
    margin-top: 45px;
  }
</style>
