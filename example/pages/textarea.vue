<template>
  <div style="margin-top:45px;">
    <mt-textarea label="有标题" placeholder="全宽度" rows=3 maxlength=100 wrapperpaddingleft="20px"></mt-textarea>
    <br>
    <mt-cell-group>
      <mt-textarea placeholder="全宽度" rows=3 maxlength=100 ></mt-textarea>
      <mt-textarea label="success" placeholder="success" rows=3 maxlength=50 state="success"></mt-textarea>
      <mt-textarea label="danger" placeholder="danger" rows=3 maxlength=20 state="danger"></mt-textarea>
      <mt-textarea label="warning" placeholder="warning" rows=3 maxlength=10 state="warning"></mt-textarea>
      <mt-textarea placeholder="右侧自定义内容" rows=3 maxlength=50 >自定义</mt-textarea>
      <mt-textarea placeholder="同时出现" rows=3 maxlength=20 state="error">
          <mt-icon name="icon-wifi"></mt-icon>
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
