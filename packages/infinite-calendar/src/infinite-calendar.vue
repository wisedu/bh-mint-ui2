<template>
    <div class="calendar mt-bg-lv3">
        <div class=calendar-header>
            <div class="calendar-title mt-bg-lv3">
                <div class="control" style="float:left" @click="prevYear">&lt;</div> 
                <div class="control mt-color-grey-lv2">2017年</div> 
                <div class="control" style="float:right" @click="nextYear">&gt;</div>
            </div>
            <div class="week-number mt-bColor-grey-lv5 mt-color-grey-lv3 mt-bg-lv3">
                <span v-for='item in weekList' v-text="item" :key="item"></span>
            </div>
        </div>
        <div style="margin-top:69px">
            <div class="calendar-wrapper mt-color-grey" v-for='(item,index) in calendar' :key='index'>
                <h3 v-text="item.year + '年' + item.month + '月'" class="top-high mt-bg-lv2"></h3>
                <ul class=each-month>
                    <li class=each-day v-for='(day,index) in item.dayList' @click='chooseDate(day, item.month, item.year)' :key='index'>
                        <div :class="[addClassName(day.day, item.month, item.year), {'trip-time mt-color-white mt-bg-primary': day.selected}]"> {{ showDate(day.day, item.month, item.year) }} </div>
                        <span class="jia" :class="[day.selected?'mt-color-white':'mt-color-primary']" v-if='setFestival(day.day, item.month, item.year) !== 0'>假</span>
                        <!-- <span class="recent mt-color-primary" v-text='setTip(day.day, item.month, item.year)'></span> -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .calendar {
        position: relative;
        width: 100%;
        min-height: 100%;
    }

    .calendar .calendar-header {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 999
    }

    .calendar .calendar-header .calendar-title {
        padding: 15px 0;
        text-align: center;
    }

    .calendar .calendar-header .calendar-title .control{
        display: inline-block;
        font-size: 14px;
        line-height: 100%;
        padding: 0 16px;
    }

    .calendar .calendar-header .calendar-title.html-title {
        height: auto;
        line-height: 20px;
        padding-top: 5px;
        padding-bottom: 5px
    }

    .calendar .calendar-header .week-number {
        border-top-width: 0.5px;
        border-bottom-width: 0.5px;
        border-top-style: solid;
        border-bottom-style: solid;
    }

    .calendar .calendar-header .week-number span {
        display: inline-block;
        text-align: center;
        font-size: 20px;
        -webkit-transform: scale(.5);
        transform:scale(.5);
        line-height: 100%;
        padding:1px 0; 
        width: 14.2857143%
    }

/*    .calendar .calendar-header .week-number span:first-child,
    .calendar .calendar-header .week-number span:last-child {
        color: #06C0AE
    }*/

    .calendar .calendar-wrapper {
        position: relative;
    }

    .calendar .calendar-wrapper h3 {
        position: sticky;
        position: -webkit-sticky;
        z-index: 11;
        width: 100%;
        left: 0;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 34px;
        height: 34px;
    }

    .calendar .calendar-wrapper .each-month {
        display: inline-block;
        width: 98%;
        margin-left: 1%;
        padding-bottom: 10px;
        font-size: 0
    }

    .calendar .calendar-wrapper .each-month .each-day {
        position: relative;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        width: 14.2857143%;
        font-size: 14px;
        height: 50px;
        line-height: 50px
    }

    .calendar .calendar-wrapper .each-month .each-day div {
        display: inline-block;
        height: 36px;
        width: 36px;
        line-height: 32px
    }

    .calendar .calendar-wrapper .each-month .each-day .disabled{
        color: #BDC0C5!important
    }

    .calendar .calendar-wrapper .each-month .each-day .disabled+span{
        color: #BDC0C5!important
    }


    .calendar .calendar-wrapper .each-month .each-day .today{
        border-width: 1px;
        border-style: solid;
    }

/*    .calendar .calendar-wrapper .each-month .each-day .trip-time {
        border-radius: 5px
    }

    .calendar .calendar-wrapper .each-month .each-day .weekend {
        color: #06C0AE
    }*/

    .calendar .calendar-wrapper .each-month .each-day .jia,
    .calendar .calendar-wrapper .each-month .each-day .recent {
        position: absolute;
        line-height: 12px;
    }

    .calendar .calendar-wrapper .each-month .each-day .jia {
        font-size: 16px;
        top: 32px;
        right:22px;
        height: 16px;
        -webkit-transform: scale(.5);
        transform:scale(.5);

    }

    .calendar .calendar-wrapper .each-month .each-day .recent {
        font-size: 11px;
        width: 100%;
        text-align: center;
        bottom: -2px;
        left: 0
    }

/*    .calendar .calendar-wrapper .each-month .each-day .red {
        color: #ff3600
    }*/

    .calendar .calendar-wrapper .each-month .each-day .festival {
        font-size: 12px
    }

/*    .calendar .calendar-wrapper .each-month .each-day .holiday {
        color: #06C0AE
    }*/

    .calendar .calendar-wrapper .top-high {
        top: 69px
    }

</style>
<script>
export default {
    name: 'infinite-calendar',
    props: {
        today: {
            type: [String, Object, Date],
            default: function() {
                return new Date();
            }
        },
        mode: {
            type: [String, Object],
            default: function() {
                return 'rangeFrom';
            }
        },
        currentDate: {
            type: [String, Object],
            default: function() {
                return '';
            }
        },
        startDate: {
            type: [String, Object, Date],
            default: function() {
                return '';
            }
        },
        endDate: {
            type: [String, Object, Date],
            default: function() {
                return '';
            }
        },
        callback: {
            type: Function,
            default: function() {
                return function() {
                };
            }
        }
    },
    computed: {
    },
    data: function() {
        return {
            weekList: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            year: 0,
            month: 0,
            calendar: [],
            _startDate: null,
            _today: null,
            _endDate: null,
            _currentDate: null,
            festival: {
                '2017-10-1': '国庆',
                '2017-10-2': '假',
                '2017-10-3': '假',
                '2017-10-4': '中秋',
                '2017-10-5': '假',
                '2017-10-6': '假',
                '2017-10-7': '假',
                '2017-10-8': '假',
                '2017-12-30': '假',
                '2017-12-31': '假',
                '2018-1-1': '元旦',
                '2018-2-15': '除夕',
                '2018-2-16': '春节',
                '2018-2-17': '初二',
                '2018-2-18': '初三',
                '2018-2-19': '初四',
                '2018-2-20': '初五',
                '2018-2-21': '初六',
                '2018-4-5': '清明',
                '2018-4-6': '假',
                '2018-4-7': '假',
                '2018-4-29': '假',
                '2018-4-30': '假',
                '2018-5-1': '五一',
                '2018-6-16': '假',
                '2018-6-17': '假',
                '2018-6-18': '端午',
                '2018-9-22': '假',
                '2018-9-23': '假',
                '2018-9-24': '中秋',
                '2018-10-1': '国庆',
                '2018-10-2': '假',
                '2018-10-3': '假',
                '2018-10-4': '假',
                '2018-10-5': '假',
                '2018-10-6': '假',
                '2018-10-7': '假'
            }
        };
    },
    created: function() {
        this.init();
    },
    methods: {
        init: function() {
            
            if (this.startDate === '') {
                this._startDate = new Date(1 * this._today + 15552E6);
            } else {
                this._startDate = this.startDate;
                this._startDate = this.resetTime(new Date(this._startDate.replace(/-/g, '/')));
            }
            if (this.endDate === '') {
                this._endDate = new Date(1 * this._today + 15552E6);
            } else {
                this._endDate = this.endDate;
                this._endDate = this.resetTime(new Date(this._endDate.replace(/-/g, '/')));
            }
            if (this.currentDate === '') {
                this._currentDate = new Date(1 * this._today + 864E5);
            } else {
                this._currentDate = this.currentDate;
                this._currentDate = this.resetTime(new Date(this._currentDate.replace(/-/g, '/')));
            }
            if (this.today === '') {
                this._today = new Date(val.replace(/-/g, '/'));
            } else {
                this._today = this.today;
                this.resetTime(this._today);
            }

            this.year = this._startDate.getFullYear();
            this.month = this._startDate.getMonth() + 1;
            this.createClendar();
        },
        createDayList: function(month, year) {
            var daysInMonth = this.getDayNum(month, year);
            var padLength = (new Date(year + '/' + month + '/1')).getDay();
            var eventPath = [];
            for (var index = 1; index <= 28; index++) {
                eventPath.push({day:index, selected: false});
            }
            var cur = 29;
            for (; cur <= daysInMonth; cur++) {
                eventPath.push({
                    day:cur,
                    selected: false
                });
            }
            var i = 0;
            for (; i < padLength; i++) {
                eventPath.unshift({day:undefined, selected: false});
            }
            return eventPath;
        },
        getDayNum: function(n, d) {
            var a = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            (d % 4 === 0 && d % 100 !== 0 || d % 400 === 0) && (a[1] = 29);
            return a[n - 1];
        },
        createClendar: function() {
            var year_num = this._endDate.getFullYear();
            var month_num = this._endDate.getMonth() + 1;
            var end = 12 * (year_num - this.year) + month_num - this.month;
            for (var n = 0; n <= end; n++) {
                var month = this.month + n;
                var year = this.year;
                var retObj = {
                    dayList: [],
                    month: '',
                    year: ''
                };
                if (month > 12) {
                    month -= 12;
                    year += 1;
                }
                retObj.year = year;
                retObj.month = month;
                retObj.dayList = this.createDayList(month, year);
                this.calendar.push(retObj);
            }
        },
        addClassName: function(day, month, year) {
            if (day) {
                var d = new Date(year + '/' + month + '/' + day);
                var classes = [];
                var holiday = this.festival[year + '-' + month + '-' + day];
                d.getDay() !== 0 && d.getDay() !== 6 || classes.push('weekend');
                if(1 * d < 1 * this._today || (this.mode === 'rangeTo' && 1 * d < 1 * this._currentDate || 1 * d > 1 * this._endDate)){
                    classes.push('disabled mt-color-grey-lv4');
                }else{
                    1 * d === 1 * this._today && classes.push('today mt-bColor-primary');
                }
                if (holiday) {
                    holiday === '假' ? classes.push('holiday') : classes.push('festival holiday mt-color-primary');
                }
                return classes.join(' ');
            }
        },
        resetTime: function(date) {
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            date.setMilliseconds(0);
            return date;
        },
        setFestival: function(day, month, year) {
            var temp = this.festival[year + '-' + month + '-' + day];
            return temp ? temp !== '假' ? temp : 1 : 0;
        },
        setTip: function(day, month, year) {
            if (day) {
                var in_date = new Date(year + '/' + month + '/' + day);
                var expires = this.friendlyDayName(this._today, in_date);
                return expires;
            }
        },
        chooseDate: function(day, month, year,index) {
            if (day.day) {
                var in_date = new Date(year + '/' + month + '/' + day.day);
                var parts = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
                var week = parts[in_date.getDay()];
                if (!(1 * in_date < 1 * this._today || (this.mode === 'rangeTo' && 1 * in_date < 1 * this._currentDate || (1 * in_date > 1 * this._endDate)))) {
                    var data = {
                        week: week,
                        date: [year, month, day.day],
                        recent: this.friendlyDayName(in_date, this._today)
                    };
                    this._currentDate = in_date;
                    day.selected = !day.selected;
                    this.callback(data);
                }
            }
        },
        showDate: function(day, month, year) {
            var n = day;
            var step = this.festival[year + '-' + month + '-' + day];
            if (step) {
                if (step !== '假') {
                    n = step;
                }
            }
            return n;
        },
        prevYear: function() {
            console.log(1);
        },
        nextYear: function() {
            console.log(2);
        },
        friendlyDayName: function(today, in_date) {
            if (1 * today - 1 * in_date === 1728E5) {
                return '前天';
            }
            if (1 * today - 1 * in_date === 864E5) {
                return '昨天';
            }
            if (1 * in_date === 1 * today) {
                return '今天';
            }
            if (1 * in_date - 1 * today === 864E5) {
                return '明天';
            }
            if (1 * in_date - 1 * today === 1728E5) {
                return '后天';
            }
        }
    }
};
</script>
