<template>
  <div>
    <h1 class="page-title bg-theme color-theme">Infinite Calendar</h1>
    <infinite-calendar :current-date="currentDate" :today="today" :end-date="endDate" 
       :start-date="startDate" mode="rangeTo" :callback="setTime"></infinite-calendar>
  </div>
</template>
<style>
  
</style>
<script type="text/babel">
  export default {
        data: function() {
            return {
                today: new Date(),
                startDate: '2017-4-10',
                endDate: '2018-11-9',
                currentDate: '2017-8-31'
            };
        },
        methods: {
            setTime: function(e) {
                console.log(e);
            }
        }
  };
</script>