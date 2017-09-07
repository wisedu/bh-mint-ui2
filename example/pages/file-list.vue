<template>
  <div class="page-field">
    <div class="page-title">Field</div>
    <div class="page-part">
      <!-- <mt-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></mt-field> -->
      <mt-file-list :file-list="fileList" label="这里是传进来的标题"></mt-file-list>
    </div>

    <!-- <div class="page-part">
      <mt-field placeholder="登录邮箱" type="email"></mt-field>
      <mt-field placeholder="密码" type="password"></mt-field>
    </div>

    <div class="page-part">
      <mt-field label="邮箱" placeholder="成功状态" state="success"></mt-field>
      <mt-field label="邮箱" placeholder="失败状态" state="error"></mt-field>
      <mt-field label="邮箱" placeholder="警告状态" state="warning"></mt-field>
    </div>

    <div class="page-part">
      <mt-field label="验证码" placeholder="输入验证码">
        <img src="../assets/100x100.png" height="48px" width="100px">
      </mt-field>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'page-field',
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    getFileList() {
      axios.get('/mock/fileList.json').then(resp => {
        let respData = resp.data;
        if (respData.success === true) {
          this.fileList = respData.items;
        }
      });
    }
  },
  mounted() {
    this.getFileList();
  }
};
</script>
