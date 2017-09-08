<template>
  <div class="page-field">
    <div class="page-title">Datetime-Selector</div>
    <div class="page-part">
      <mt-datetime-selector label="日期时间" placeholder="请输入发生时间" type="datetime" value="2017-08-02 09:01:01"></mt-datetime-selector>
    </div>
    <div class="page-part">
      <mt-datetime-selector label="日期" placeholder="请输入生日" type="date"></mt-datetime-selector>
      <mt-datetime-selector label="时间" placeholder="请输入时间" type="time"></mt-datetime-selector>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-field'
};
</script>
