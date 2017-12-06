<template>
  <div>
    <div class="page-title">textarea</div>
    <mt-cell-group>
      <mt-textarea label="有标题" placeholder="全宽度" rows=3 maxlength=100></mt-textarea>
      <mt-textarea placeholder="全宽度" rows=3 maxlength=100 ></mt-textarea>
      <mt-textarea label="success" placeholder="success" rows=3 maxlength=50 state="success"></mt-textarea>
      <mt-textarea label="error" placeholder="error" rows=3 maxlength=20 state="error"></mt-textarea>
      <mt-textarea label="warning" placeholder="warning" rows=3 maxlength=10 state="warning"></mt-textarea>
      <mt-textarea placeholder="右侧自定义内容" rows=3 maxlength=50>自定义</mt-textarea>
      <mt-textarea placeholder="同时出现" rows=3 maxlength=20 state="error">
        <mt-icon type="icon-wifi"></mt-icon>
      </mt-textarea>
    </mt-cell-group>

    <mt-cell-group>
      <mt-textarea label="验证码" placeholder="输入验证码">
        <img src="../assets/100x100.png" height="48px" width="100px">
      </mt-textarea>
    </mt-cell-group>
  </div>
</template>

<script>
export default {
  name: 'page-textarea',
  methods: {
    handleChange(val){
      console.log(val)
    }
  }
};
</script>
