<template>
  <div class="page-datetime-selector" style="padding-top:45px;">
    <mt-button @click="handlerClear">清空</mt-button>
    <mt-cell-group>
      <mt-datetime-selector label="日期时间" placeholder="请输入发生时间" type="datetime" value="2018-08-02 11:12" disableClear :maxHour="20" required></mt-datetime-selector>
      <mt-datetime-selector label="日期时间" placeholder="限制日期选择区间" type="datetime" v-model="current" :min-date="new Date()" :max-date="new Date()"></mt-datetime-selector>
      <mt-datetime-selector label="时间" placeholder="限制时间选择区间" type="time" :min-hour="10" :max-hour="15" ></mt-datetime-selector>
    </mt-cell-group>
    <mt-cell-group>
      <mt-datetime-selector label="日期" placeholder="请输入生日" type="date"></mt-datetime-selector>
      <mt-datetime-selector label="时间" placeholder="请输入时间" type="time"></mt-datetime-selector>
    </mt-cell-group>
    <mt-cell-group>
      <mt-datetime-selector label="日期" placeholder="只读" type="date" readonly></mt-datetime-selector>
      <mt-datetime-selector label="日期" placeholder="禁用" type="date" disabled></mt-datetime-selector>
      <mt-datetime-selector label="日期" placeholder="没有清除按钮" type="date" :disable-clear="true"></mt-datetime-selector>
      <mt-datetime-selector label="日期" placeholder="成功" type="date" state="success"></mt-datetime-selector>
      <mt-datetime-selector label="日期" placeholder="错误" type="date" state="error"></mt-datetime-selector>
      <mt-datetime-selector label="日期" placeholder="警告" type="date" state="warning"></mt-datetime-selector>
      <mt-datetime-selector label="日期时间右对齐" placeholder="请输入发生时间" type="datetime" value="2018-08-02 11:12" disableClear :maxHour="20" required value-align="right"></mt-datetime-selector>
    </mt-cell-group>
  </div>
</template>
<script>
export default {
  data(){
    return {
      current: "2017-11-22"
    }
  },
  methods:{
    handlerClear(){
      this.current = "";
    }
  }
}
</script>
<style type="text/css">
  .page-datetime-selector{
    padding-top: 45px;
  }
  .page-datetime-selector>div{
    margin-bottom: 20px;
  }
</style>