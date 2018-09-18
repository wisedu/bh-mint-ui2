<template>
  <div>
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
                startDate: '2018-01-10',
                endDate: '2020-11-09',
                currentDate: '2018-8-31'
            };
        },
        methods: {
            setTime: function(e) {
                console.log(e);
            }
        }
  };
</script>