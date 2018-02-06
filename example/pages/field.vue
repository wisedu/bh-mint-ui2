<template>
  <div class="page-field" style="margin-top:60px">
    <mt-cell-group>
      <!--start
      @name normal
      -->
      <mt-field label="用户名" placeholder="请输入用户名" required></mt-field>
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
      <mt-field label="密码" placeholder="请输入密码" type="password" required></mt-field>
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
      <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" state="success" value="666666666666666666666aa66666666666666666666666666666666666666aa666666666666666666666666666666666666666666666666666666666666666666666666666666"></mt-field>
      <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" required :heightAuto="false"></mt-field>
      <!--end-->
    </mt-cell-group>
    <mt-hr height="15px" color="#e8e8e8"></mt-hr>

    <mt-cell-group>
      <!--start
      @name no-label-normal
      -->
      <mt-field placeholder="用户名"></mt-field>
      <!--end-->
      <mt-field placeholder="密码" type="password"></mt-field>
    </mt-cell-group>
    <mt-hr height="15px" color="#e8e8e8"></mt-hr>

    <mt-cell-group>
      <!--start
      @name normal-success
      -->
      <mt-field label="邮箱" placeholder="成功状态" value="禁用的内容" disabled state="default"></mt-field>
      <mt-field label="邮箱" placeholder="成功状态" value="只读的内容" readonly state="success"></mt-field>
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
    </mt-cell-group>
    <mt-hr height="15px" color="#e8e8e8"></mt-hr>

    <mt-cell-group>

      <!--start
      @name custom-image
      -->
      <mt-field label="验证码" placeholder="输入验证码">
        <mt-image src="/example/assets/100x100.png" height="48px" width="100px"></mt-image>
      </mt-field>
      <!--end-->
    </mt-cell-group>
  </div>
</template>

<script>
export default {
    name: 'page-field'
};
</script>