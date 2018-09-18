<template>
    <div class="page-calendar">
        <mt-calendar
            ref="calendar"
            :events="calendar.events" 
            :lunar="calendar.lunar" 
            :multi="calendar.multi"
            :value="calendar.value"
            :range="calendar.range" 
            :begin="calendar.begin" 
            :end="calendar.end" 
            :weeks="calendar.weeks" 
            :months="calendar.months" 
            @select="calendar.select"
            @selectMonth="calendar.selectMonth"
            @selectYear="calendar.selectYear"
            @eventTag="calendar.eventTag">
        </mt-calendar>
    </div>
</template>
<script>
export default {
    data(){
        return {
            calendar:{
                value: [], //默认日期
                multi: false,
                lunar: false, //显示农历
                range: false, //选中一段时间
                //weeks:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                //months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                events:{
                    '2018-9-5':'color:green',
                    '2018-9-6':'color:blue',
                    '2018-9-7':'color:yellow',
                    '2018-9-8':'color:red',
                    '2018-9-18':'标注',
                    '2018-9-19':'$666',
                },
                select(start,end){
                    console.log(start,end);
                },
                selectMonth(month,year){
                    console.log(year,month)
                },
                selectYear(year){
                    console.log(year)
                },
                eventTag(tag){
                    console.log(tag)
                },
                timestamp:Date.now()
            },
        }
    },
    methods: {
        
    }
};
</script>
<style lang="css">
@component-namespace page {
    @component calendar {
        margin-top: 45px;
    }
  }
</style>