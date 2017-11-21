<template>
  <div class="page-field">
    <div class="page-title">Datetime-Selector</div>
    <div class="page-part">
      <mt-datetime-selector label="日期时间" placeholder="请输入发生时间" type="datetime" value="2017-08-02 09:01:01"></mt-datetime-selector>
      <mt-datetime-selector label="日期时间" placeholder="限制日期选择区间" type="datetime" :start-date="new Date()" :end-date="new Date()"></mt-datetime-selector>
      <mt-datetime-selector label="时间" placeholder="限制时间选择区间" type="time" :start-hour="10" :end-hour="15"></mt-datetime-selector>
    </div>
    <div class="page-part">
      <mt-datetime-selector label="日期" placeholder="请输入生日" type="date"></mt-datetime-selector>
      <mt-datetime-selector label="时间" placeholder="请输入时间" type="time"></mt-datetime-selector>
    </div>
    <div class="page-part">
      <mt-datetime-selector label="日期" placeholder="只读" type="date" :readonly="true"></mt-datetime-selector>
      <mt-datetime-selector label="日期" placeholder="禁用" type="date" :disabled="true"></mt-datetime-selector>
      <mt-datetime-selector label="日期" placeholder="没有清除按钮" type="date" :disable-clear="true"></mt-datetime-selector>
      <mt-datetime-selector label="日期" placeholder="成功" type="date" state="success"></mt-datetime-selector>
      <mt-datetime-selector label="日期" placeholder="错误" type="date" state="error"></mt-datetime-selector>
      <mt-datetime-selector label="日期" placeholder="警告" type="date" state="warning"></mt-datetime-selector>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-field',
};
</script>
