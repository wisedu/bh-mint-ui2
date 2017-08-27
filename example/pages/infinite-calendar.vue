<template>
  <div>
    <infinite-calendar :leave-date="currentDate" :today="today" :title="title" :end-date="endDate" 
        :callback="setTime" :is-html-title="true"></infinite-calendar>
  </div>
</template>
<style>
  
</style>
<script type="text/babel">
  export default {
        data: function() {
            return {
                title: 'abc',
                today: new Date(),
                name: '',
                endDate: '2017-11-9',
                currentDate: '2017-8-29'
            };
        },
        methods: {
            setTime: function(e) {
                console.log(e);
            }
        }
  };
</script>