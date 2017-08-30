<template>
  <div>
    <infinite-calendar :current-date="currentDate" :today="today" :end-date="endDate" 
        :callback="setTime"></infinite-calendar>
  </div>
</template>
<style>
  
</style>
<script type="text/babel">
  export default {
        data: function() {
            return {
                today: new Date(),
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