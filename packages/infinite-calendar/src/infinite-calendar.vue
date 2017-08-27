<template>
    <div class=calendar>
        <div class=calendar-header>
            <p class=calendar-title :class="{'html-title': isHtmlTitle}" v-html=title v-show="title !== ''"></p>
            <div class=week-number>
                <span v-for='item in weekList' v-text=item :key='item'></span>
            </div>
        </div>
        <div :style="{marginTop: title === '' ? '33px': isHtmlTitle ? '85px': '65px'}">
            <div class=calendar-wrapper v-for='item in calendar' :key='item'>
                <h3 v-text="item.year + '年' + item.month + '月'" :class="this.title == '' ? 'top-low': isHtmlTitle ? 'top-high-html': 'top-high'"></h3>
                <ul class=each-month>
                    <li class=each-day track-by=$index v-for='day in item.dayList' @click='chooseDate(day, item.month, item.year)' :key='day'>
                        <div :class="[addClassName(day, item.month, item.year), {'trip-time': isCurrent(day, item.month, item.year)}]"> {{ showDate(day, item.month, item.year) }} </div>
                        <span class=jia v-if='setFestival(day, item.month, item.year) !== 0'>假</span>
                        <span class=recent v-text='setTip(day, item.month, item.year)'></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
.calendar {
    width: 100%;
    min-height: 100%;
    background: #fff
}

.calendar .calendar-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 101
}

.calendar .calendar-header .calendar-title {
    height: 32px;
    line-height: 32px;
    background: #fff7dc;
    font-size: 12px;
    padding-left: 15px;
    color: #9e8052
}

.calendar .calendar-header .calendar-title.html-title {
    height: auto;
    line-height: 20px;
    padding-top: 5px;
    padding-bottom: 5px
}

.calendar .calendar-header .week-number {
    color: #ccc;
    border-top: 1px solid;
    border-bottom: 1px solid;
    background-color: #fff;
    padding: 0 1%
}

.calendar .calendar-header .week-number span {
    display: inline-block;
    text-align: center;
    height: 33px;
    line-height: 33px;
    width: 14.2857143%
}

.calendar .calendar-header .week-number span:first-child,
.calendar .calendar-header .week-number span:last-child {
    color: #06C0AE
}

.calendar .calendar-wrapper {
    position: relative;
    color: #000
}

.calendar .calendar-wrapper h3 {
    position: sticky;
    position: -webkit-sticky;
    z-index: 11;
    width: 100%;
    left: 0;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    height: 30px;
    background: #F4F4F4
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
    font-size: 16px;
    height: 50px;
    line-height: 50px
}

.calendar .calendar-wrapper .each-month .each-day div {
    display: inline-block;
    height: 28px;
    width: 28px;
    line-height: 28px
}

.calendar .calendar-wrapper .each-month .each-day .disabled {
    color: #ccc!important
}

.calendar .calendar-wrapper .each-month .each-day .today {
    background: #e7e7e7;
    border-radius: 5px
}

.calendar .calendar-wrapper .each-month .each-day .f12_2 {
    font-size: 12px;
    position: relative;
    top: -2px
}

.calendar .calendar-wrapper .each-month .each-day .trip-time {
    background: #06C0AE;
    color: #fff!important;
    border-radius: 5px
}

.calendar .calendar-wrapper .each-month .each-day .weekend {
    color: #06C0AE
}

.calendar .calendar-wrapper .each-month .each-day .jia,
.calendar .calendar-wrapper .each-month .each-day .recent {
    position: absolute;
    line-height: 12px;
    color: #06C0AE
}

.calendar .calendar-wrapper .each-month .each-day .jia {
    font-size: 10px;
    top: 6px;
    right: 0;
    height: 12px
}

.calendar .calendar-wrapper .each-month .each-day .recent {
    font-size: 11px;
    width: 100%;
    text-align: center;
    bottom: -2px;
    left: 0
}

.calendar .calendar-wrapper .each-month .each-day .red {
    color: #ff3600
}

.calendar .calendar-wrapper .each-month .each-day .festival {
    font-size: 12px
}

.calendar .calendar-wrapper .each-month .each-day .holiday {
    color: #06C0AE
}

.calendar .calendar-wrapper .top-high {
    top: 65px
}

.calendar .calendar-wrapper .top-high-html {
    top: 83px
}

.calendar .calendar-wrapper .top-low {
    top: 33px
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
        title: {
            type: [String],
            default: function() {
                return '';
            }
        },
        isAboard: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        mode: {
            type: [String, Object],
            default: function() {
                return 'rangeFrom';
            }
        },
        leaveDate: {
            type: [String, Object],
            default: function() {
                return '';
            }
        },
        backDate: {
            type: [String, Object],
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
        },
        isHtmlTitle: false,
        from: {
            type: [String],
            default: function() {
                return '';
            }
        }
    },
    data: function() {
        return {
            weekList: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            year: 0,
            month: 0,
            calendar: [],
            _today: new Date(),
            _endDate: new Date(),
            _leaveDate: new Date(),
            _backDate: new Date(),
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
            if (typeof this.today === 'string') {
                this._today = new Date(this.today.replace(/-/g, '/'));
            } else {
                this._today = this.today;
                this.resetTime(this._today);
            }
            if (this.endDate === '') {
                this._endDate = new Date(1 * this._today + 15552E6);
            } else {
                this._endDate = this.endDate;
                this._endDate = this.resetTime(new Date(this._endDate.replace(/-/g, '/')));
            }
            if (this.leaveDate === '') {
                this._leaveDate = new Date(1 * this._today + 864E5);
            } else {
                this._leaveDate = this.leaveDate;
                this._leaveDate = this.resetTime(new Date(this._leaveDate.replace(/-/g, '/')));
            }
            if (this.isAboard) {
                if (this.backDate !== '') {
                    this._backDate = this.backDate;
                    this._backDate = this.resetTime(new Date(this._backDate.replace(/-/g, '/')));
                }
            }
            this.year = this._today.getFullYear();
            this.month = this._today.getMonth() + 1;
            this.createClendar();
        },
        createDayList: function(month, year) {
            var daysInMonth = this.getDayNum(month, year);
            var padLength = (new Date(year + '/' + month + '/1')).getDay();
            var eventPath = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
            var cur = 29;
            for (; cur <= daysInMonth; cur++) {
                eventPath.push(cur);
            }
            var i = 0;
            for (; i < padLength; i++) {
                eventPath.unshift(null);
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
            var n = 0;
            for (; n <= end; n++) {
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
                1 * d < 1 * this._today || (this.mode === 'rangeTo' && 1 * d < 1 * this._leaveDate || 1 * d > 1 * this._endDate) ? classes.push('disabled') : 1 * d === 1 * this._today && classes.push('today');
                if (holiday) {
                    holiday === '假' ? classes.push('holiday') : classes.push('festival holiday');
                }
                if (this.from === 'flight') {
                    ['今天', '明天', '后天'].indexOf(this.showDate(day, month, year)) !== -1 && classes.push('f12_2');
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
                var against = new Date(year + '/' + month + '/' + day);
                var expires = void 0;
                1 * against === 1 * this._today ? expires = '今天' : 1 * against - 1 * this._today === 864E5 ? expires = '明天' : 1 * against - 1 * this._today === 1728E5 && (expires = '后天');
                this.from === 'flight' && (expires = '');
                if (this.isAboard) {
                    this.mode === 'rangeTo' ? 1 * against === 1 * this._leaveDate && 1 * against === 1 * this._backDate ? expires = '去/返' : 1 * against === 1 * this._backDate ? expires = '返程' : 1 * against === 1 * this._leaveDate && (expires = '去程') : 1 * against === 1 * this._leaveDate && (expires = '去程');
                }
                return expires;
            }
        },
        isCurrent: function(day, month, year) {
            if (!day) {
                return false;
            }
            var indate = new Date(year + '/' + month + '/' + day);
            return 1 * indate === 1 * this._leaveDate || (this.mode === 'rangeTo' && 1 * indate === 1 * this._backDate || void 0);
        },
        chooseDate: function(day, month, year) {
            if (day) {
                var d = new Date(year + '/' + month + '/' + day);
                var parts = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
                var week = parts[d.getDay()];
                if (!(1 * d < 1 * this._today || (this.mode === 'rangeTo' && 1 * d < 1 * this._leaveDate || (1 * d > 1 * this._endDate)))) {
                    var data = {
                        week: week,
                        date: [year, month, day],
                        recent: ''
                    };
                    if (1 * d === 1 * this._today) {
                        data.recent = '今天';
                    } else {
                        if (1 * d - 1 * this._today === 864E5) {
                            data.recent = '明天';
                        } else {
                            if (1 * d - 1 * this._today === 1728E5) {
                                data.recent = '后天';
                            }
                        }
                    }
                    if (this.from === 'flight' && this.mode === 'rangeTo') {
                        this._backDate = d;
                    } else {
                        this._leaveDate = d;
                    }
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
                if (this.from === 'flight') {
                    var a = (new Date(year + '/' + month + '/' + day)).getTime();
                    var b = this._today.getTime();
                    if (a === b) {
                        return '今天';
                    }
                    if (a === b + 864E5) {
                        return '明天';
                    }
                    if (a === b + 1728E5) {
                        return '后天';
                    }
                }
            }
            return n;
        }
    }
};
</script>
