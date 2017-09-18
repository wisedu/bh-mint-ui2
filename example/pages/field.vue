<template>
  <div class="page-field">
    <div class="page-title">Field</div>
    <div class="page-part">
      <!--start
      @name normal
      -->
      <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
      <!--end-->

      <!--start
      @name normal-max-length
      -->
      <mt-field label="用户名" placeholder="请输入用户名，长度限制为10" :attr="{ maxlength: 10 }"></mt-field>
      <!--end-->

      <!--start
      @name email
      -->
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
      <!--end-->

      <!--start
      @name password
      -->
      <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
      <!--end-->

      <!--start
      @name tel
      -->
      <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
      <!--end-->

      <!--start
      @name url
      -->
      <mt-field label="网站" placeholder="请输入网址" type="url"></mt-field>
      <!--end-->

      <!--start
      @name number
      -->
      <mt-field label="数字" placeholder="请输入数字" type="number"></mt-field>
      <!--end-->

      <!--start
      @name date
      -->
      <mt-field label="生日" placeholder="请输入生日" type="date"></mt-field>
      <!--end-->

      <!--start
      @name textarea
      -->
      <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
      <!--end-->
    </div>

    <div class="page-part">
      <!--start
      @name no-label-normal
      -->
      <mt-field placeholder="用户名"></mt-field>
      <!--end-->
      <mt-field placeholder="密码" type="password"></mt-field>
    </div>

    <div class="page-part">
      <!--start
      @name normal-success
      -->
      <mt-field label="邮箱" placeholder="成功状态" state="success"></mt-field>
      <!--end-->

      <!--start
      @name normal-error
      -->
      <mt-field label="邮箱" placeholder="失败状态" state="error"></mt-field>
      <!--end-->

      <!--start
      @name normal-warning
      -->
      <mt-field label="邮箱" placeholder="警告状态" state="warning"></mt-field>
      <!--end-->
    </div>

    <div class="page-part">

      <!--start
      @name custom-image
      -->
      <mt-field label="验证码" placeholder="输入验证码">
        <mt-image src="../assets/100x100.png" height="48px" width="100px"></mt-image>
      </mt-field>
      <!--end-->
    </div>
  </div>
</template>

<script>
    import MtImage from "../../packages/image/src/index";
export default {
    components: {MtImage},
    name: 'page-field'
};
</script>
