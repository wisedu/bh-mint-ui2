<template>
	<div class="calendar">
		<div class="calendar-tools">
			<div class="today" @click.stop="setToday()">{{i18n.today}}</div>
			<div class="action" @click.stop="actionEvent">
				 <slot name="action"></slot>
			</div>
			<div class="setIcon" @click.stop="setEvent" style="font-size:26px;">
				<slot name="set">
					<svg width="20" height="20" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
					<g class="transform-group">
						<g transform="scale(0.015625, 0.015625)">
							<path d="M128.194764 929.441442C85.742288 929.441442 51.2 894.408934 51.2 851.471951L51.2 151.063063 25.6 177.009009 896.131998 177.009009C938.35962 177.009009 972.8 211.994665 972.8 254.743324L972.8 838.63063C972.8 852.960181 984.26151 864.576576 998.4 864.576576 1012.53849 864.576576 1024 852.960181 1024 838.63063L1024 254.743324C1024 183.362078 966.662825 125.117117 896.131998 125.117117L25.6 125.117117C11.46151 125.117117 0 136.733513 0 151.063063L0 851.471951C0 923.060267 57.457637 981.333333 128.194764 981.333333L883.2 981.333333C897.33849 981.333333 908.8 969.716939 908.8 955.387388 908.8 941.057837 897.33849 929.441442 883.2 929.441442L128.194764 929.441442ZM281.6 254.846846C281.6 269.176397 293.06151 280.792794 307.2 280.792794 321.33849 280.792794 332.8 269.176397 332.8 254.846846L332.8 60.252252C332.8 45.922702 321.33849 34.306306 307.2 34.306306 293.06151 34.306306 281.6 45.922702 281.6 60.252252L281.6 254.846846ZM716.8 241.873873C716.8 256.203424 728.26151 267.819821 742.4 267.819821 756.53849 267.819821 768 256.203424 768 241.873873L768 47.279279C768 32.949729 756.53849 21.333333 742.4 21.333333 728.26151 21.333333 716.8 32.949729 716.8 47.279279L716.8 241.873873ZM332.8 410.522522C346.93849 410.522522 358.4 398.906127 358.4 384.576576 358.4 370.247027 346.93849 358.63063 332.8 358.63063L192 358.63063C177.86151 358.63063 166.4 370.247027 166.4 384.576576 166.4 398.906127 177.86151 410.522522 192 410.522522L332.8 410.522522ZM614.4 410.522522C628.53849 410.522522 640 398.906127 640 384.576576 640 370.247027 628.53849 358.63063 614.4 358.63063L473.6 358.63063C459.46151 358.63063 448 370.247027 448 384.576576 448 398.906127 459.46151 410.522522 473.6 410.522522L614.4 410.522522ZM870.4 410.522522C884.53849 410.522522 896 398.906127 896 384.576576 896 370.247027 884.53849 358.63063 870.4 358.63063L729.6 358.63063C715.46151 358.63063 704 370.247027 704 384.576576 704 398.906127 715.46151 410.522522 729.6 410.522522L870.4 410.522522ZM332.8 566.198197C346.93849 566.198197 358.4 554.581803 358.4 540.252252 358.4 525.922703 346.93849 514.306306 332.8 514.306306L192 514.306306C177.86151 514.306306 166.4 525.922703 166.4 540.252252 166.4 554.581803 177.86151 566.198197 192 566.198197L332.8 566.198197ZM614.4 566.198197C628.53849 566.198197 640 554.581803 640 540.252252 640 525.922703 628.53849 514.306306 614.4 514.306306L473.6 514.306306C459.46151 514.306306 448 525.922703 448 540.252252 448 554.581803 459.46151 566.198197 473.6 566.198197L614.4 566.198197ZM870.4 566.198197C884.53849 566.198197 896 554.581803 896 540.252252 896 525.922703 884.53849 514.306306 870.4 514.306306L729.6 514.306306C715.46151 514.306306 704 525.922703 704 540.252252 704 554.581803 715.46151 566.198197 729.6 566.198197L870.4 566.198197ZM332.8 721.873873C346.93849 721.873873 358.4 710.257478 358.4 695.927927 358.4 681.598379 346.93849 669.981982 332.8 669.981982L192 669.981982C177.86151 669.981982 166.4 681.598379 166.4 695.927927 166.4 710.257478 177.86151 721.873873 192 721.873873L332.8 721.873873ZM614.4 721.873873C628.53849 721.873873 640 710.257478 640 695.927927 640 681.598379 628.53849 669.981982 614.4 669.981982L473.6 669.981982C459.46151 669.981982 448 681.598379 448 695.927927 448 710.257478 459.46151 721.873873 473.6 721.873873L614.4 721.873873ZM870.4 721.873873C884.53849 721.873873 896 710.257478 896 695.927927 896 681.598379 884.53849 669.981982 870.4 669.981982L729.6 669.981982C715.46151 669.981982 704 681.598379 704 695.927927 704 710.257478 715.46151 721.873873 729.6 721.873873L870.4 721.873873Z" fill="#1E2329"></path>
						</g>
					</g>
					</svg>
				</slot>
			</div>
			<div class="calendar-info">
				<div class="year" @click.stop="changeYear">{{year}}{{i18n.year}}</div>
				<!-- {{monthString}} -->
				<div class="month" @click.stop="changeMonth">
					<div class="month-inner" :style="{'top':-(this.month*40)+'px'}" name="month">
						<span v-for="m in newMonths">{{m}}</span>
					</div>
				</div>

			</div>
		</div>
		<div class="calendar-content" ref="calendar-content">
			<span class="calendar-prev" @click="prev">
				<svg width="20" height="20" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g class="transform-group">
					<g transform="scale(0.015625, 0.015625)">
						<path d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z" fill="#5e7a88"></path>
					</g>
				</g>
				</svg>
			</span>
			<table cellpadding="5">
			<thead>
				<tr>
					<td v-for="week in newWeeks" class="week">{{week}}</td>
				</tr>
			</thead>
			<tbody>
			<tr v-for="(day,k1) in days" style="{'animation-delay',(k1*30)+'ms'}">
				<td v-for="(child,k2) in day" :class="{'selected':child.selected,'disabled':child.disabled}" @click="select(k1,k2,$event)">
					<span :class="[{'red':k2==0||k2==6||((child.isLunarFestival||child.isGregorianFestival) && lunar),'blue': newDate === [year,month,child.day].join('/')}]">{{child.day}}</span>
					<div class="text" v-if="child.eventName!=undefined &&child.eventName.indexOf('color:')==-1">{{child.eventName}}</div>
					<div class="text" :class="{'isLunarFestival':child.isLunarFestival,'isGregorianFestival':child.isGregorianFestival}" v-if="lunar">{{child.lunar}}</div>
					<div class="text tag" v-if="child.eventName&&child.eventName.indexOf('color:')>-1"><span :style="[{background: child.eventName.slice(6)}]" ></span></div>
				</td>
			</tr>
			</tbody>
			</table>
			<span class="calendar-next"  @click="next">
				<svg width="20" height="20" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g class="transform-group">
					<g transform="scale(0.015625, 0.015625)">
						<path d="M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z" fill="#5e7a88"></path>
					</g>
				</g>
				</svg>
			</span>
		</div>

		<div class="calendar-years" :class="[{'show':yearsShow}]">
			<span v-for="y in years" @click.stop="selectYear(y)" :class="[{'active':y==year}]">{{y}}</span>
		</div>
		<div class="calendar-months" :class="[{'show':monthsShow}]">
			<span v-for="m in newMonths" @click.stop="selectMonth(m)" :class="[{'active':newMonths.indexOf(m)==month}]">{{m}}</span>
		</div>
	</div>
</template>

<script>
import calendar from './calendar.js'
export default {
	name: 'mt-calendar',
	props: {
		// 多选模式
		multi: {
			type: Boolean,
			default: true
		},
		// 范围模式
		range:{
			type: Boolean,
			default: false
		},
		// 默认日期
		value: {
			type: Array,
			default: function(){
				return this.setToday()
			}
		},
		// 开始选择日期
		begin:  {
			type: Array,
			default: function(){
				return []
			}
		},
		// 结束选择日期
		end:  {
			type: Array,
			default: function(){
				return []
			}
		},

		// 是否小于10补零
		zero:{
			type: Boolean,
			default: true
		},
		// 屏蔽的日期
		disabled:{
			type: Array,
			default: function(){
				return []
			}
		},
		// 是否显示农历
		lunar: {
			type: Boolean,
			default: false
		},

		// 自定义星期名称
		weeks: {
			type: Array,
			default:function(){
				return []
			}
		},
		// 自定义月份
		months:{
			type: Array,
			default:function(){
				return []
			}
		},
		// 自定义事件
		events:  Object,
		// 是否关闭年月选择
		shutYMOption: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			years:[],
			yearsShow:false,
			monthsShow:false,
			year: 0,
			month: 0,
			day: 0,
			days: [],
			multiDays:[],
			today: [],
			newWeeks:[],
			newMonths:[],
			festival:{
				lunar:{
					"1-1":"春节",
					"1-15":"元宵节",
					"2-2":"龙头节",
					"5-5":"端午节",
					"7-7":"七夕节",
					"7-15":"中元节",
					"8-15":"中秋节",
					"9-9":"重阳节",
					"10-1":"寒衣节",
					"10-15":"下元节",
					"12-8":"腊八节",
					"12-23":"祭灶节",
				},
				gregorian:{
					"1-1":"元旦",
					"2-14":"情人节",
					"3-8":"妇女节",
					"3-12":"植树节",
					"4-5":"清明节",
					"5-1":"劳动节",
					"5-4":"青年节",
					"6-1":"儿童节",
					"7-1":"建党节",
					"8-1":"建军节",
					"9-10":"教师节",
					"10-1":"国庆节",
					"12-24":"平安夜",
					"12-25":"圣诞节",
				},
			},
			rangeBegin:[],
			rangeEnd:[],
		}
	},
	watch:{
		events: {
			handler: function(news,olds){
				this.render(this.year,this.month)
			},
			deep: true
		},
		weeks:{
			handler: function(val=[]){
				 if(val&&val.length){
					 this.newWeeks=val
				 }else
				 {
					 this.newWeeks=[
						 this.i18n.xqyi,
						 this.i18n.xqer,
						 this.i18n.xqsan,
						 this.i18n.xqsi,
						 this.i18n.xqwu,
						 this.i18n.xqliu,
						 this.i18n.xqri
					 ]
				 }
			},
			immediate: true
		},
		months:{
			handler: function(val){
				 if(val&&val.length){
					 this.newMonths=val
				 }else
				 {
					 this.newMonths=[
						 this.i18n.yiyue,
						 this.i18n.eryue,
						 this.i18n.sanyue,
						 this.i18n.siyue,
						 this.i18n.wuyue,
						 this.i18n.liuyue,
						 this.i18n.qiyue,
						 this.i18n.bayue,
						 this.i18n.jiuyue,
						 this.i18n.shiyue,
						 this.i18n.shiyiyue,
						 this.i18n.shieryue,
					 ]
				 }
			},
			immediate: true
		},
		
		value(){
			this.init();
		}
	},
	computed: {
		newDate(){
			const now = new Date();
			const y = String(now.getFullYear());
			const m = String(now.getMonth());
			const d = String(now.getDate()); 
			return  y + "/" + m + "/" + d;
		},
		i18n(){
			return this.$t('message');
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		init(){
			let now = new Date();
			this.year = now.getFullYear()
			this.month = now.getMonth()
			this.day = now.getDate()
			if (this.value.length>0) {
				if (this.range) { //范围
					this.year = parseInt(this.value[0][0])
					this.month = parseInt(this.value[0][1]) - 1
					this.day = parseInt(this.value[0][2]) 

					let year2 = parseInt(this.value[1][0])
					let month2 = parseInt(this.value[1][1]) - 1
					let day2 = parseInt(this.value[1][2]) 

					this.rangeBegin = [this.year, this.month,this.day]
					this.rangeEnd = [year2, month2 , day2]
				}else if(this.multi){//多选
					this.multiDays=this.value;
					this.year = parseInt(this.value[0][0])
					this.month = parseInt(this.value[0][1]) - 1
					this.day = parseInt(this.value[0][2]) 
				}else{ //单选
					this.year = parseInt(this.value[0])
					this.month = parseInt(this.value[1]) - 1
					this.day = parseInt(this.value[2]) 
				}
			}
			this.render(this.year, this.month)
		},
		// 渲染日期
		render(y, m) {
			let firstDayOfMonth = new Date(y, m, 1).getDay()         //当月第一天
			let lastDateOfMonth = new Date(y, m + 1, 0).getDate()    //当月最后一天
			let lastDayOfLastMonth = new Date(y, m, 0).getDate()     //最后一月的最后一天
			this.year = y
			let seletSplit = this.value
			let i, line = 0,temp = [],nextMonthPushDays = 1
			for (i = 1; i <= lastDateOfMonth; i++) {
				let day = new Date(y, m, i).getDay() //返回星期几（0～6）
				let k
				// 第一行
				if (day == 0) {
					temp[line] = []
				} else if (i == 1) {
					temp[line] = []
					k = lastDayOfLastMonth - firstDayOfMonth + 1
					for (let j = 0; j < firstDayOfMonth; j++) {
						// console.log("第一行",lunarYear,lunarMonth,lunarValue,lunarInfo)
						temp[line].push(Object.assign(
							{day: k,disabled: true},
							this.getLunarInfo(this.computedPrevYear(),this.computedPrevMonth(true),k),
							this.getEvents(this.computedPrevYear(),this.computedPrevMonth(true),k)
						))
						k++;
					}
				}
				
				if (this.range) { // 范围
					// console.log("日期范围",this.getLunarInfo(this.year,this.month+1,i))
					let options = Object.assign(
						{day: i},
						this.getLunarInfo(this.year,this.month+1,i),
						this.getEvents(this.year,this.month+1,i)
					 )
					if (this.rangeBegin.length > 0) {
						let beginTime = Number(new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2]))
						let endTime = Number(new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]))
						let stepTime = Number(new Date(this.year, this.month, i))
						if (beginTime <= stepTime && endTime >= stepTime) {
							options.selected = true
						}
					}
					if (this.begin.length>0) {
						let beginTime = Number(new Date(parseInt(this.begin[0]),parseInt(this.begin[1]) - 1,parseInt(this.begin[2])))
						if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
					}
					if (this.end.length>0){
						let endTime = Number(new Date(parseInt(this.end[0]),parseInt(this.end[1]) - 1,parseInt(this.end[2])))
						if (endTime <  Number(new Date(this.year, this.month, i))) options.disabled = true
					}
					if (this.disabled.length>0){
						if (this.disabled.filter(v => {return this.year === v[0] && this.month === v[1]-1 && i === v[2] }).length>0) {
							options.disabled = true
						}
					}
					temp[line].push(options)
				}else if(this.multi){//多选
					let options
					// 判断是否选中
					if(this.value.filter(v => {return this.year === v[0] && this.month === v[1]-1 && i === v[2] }).length>0 ){
						options = Object.assign({day: i,selected:true},this.getLunarInfo(this.year,this.month+1,i),this.getEvents(this.year,this.month+1,i))
					}else{
						options = Object.assign({day: i,selected:false},this.getLunarInfo(this.year,this.month+1,i),this.getEvents(this.year,this.month+1,i))
						if (this.begin.length>0) {
							let beginTime = Number(new Date(parseInt(this.begin[0]),parseInt(this.begin[1]) - 1,parseInt(this.begin[2])))
							if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
						}
						if (this.end.length>0){
							let endTime = Number(new Date(parseInt(this.end[0]),parseInt(this.end[1]) - 1,parseInt(this.end[2])))
							if (endTime <  Number(new Date(this.year, this.month, i))) options.disabled = true
						}
						if (this.disabled.length>0){
							if (this.disabled.filter(v => {return this.year === v[0] && this.month === v[1]-1 && i === v[2] }).length>0) {
								options.disabled = true
							}
						}
					}
					
					temp[line].push(options)
				} else { // 单选
					 // console.log(this.lunar(this.year,this.month,i));
					let chk = new Date()
					let chkY = chk.getFullYear()
					let chkM = chk.getMonth()
					// 匹配上次选中的日期
					if (parseInt(seletSplit[0]) == this.year && parseInt(seletSplit[1]) - 1 == this.month && parseInt(seletSplit[2]) == i) {
						// console.log("匹配上次选中的日期",lunarYear,lunarMonth,lunarValue,lunarInfo)
						temp[line].push(Object.assign(
							{day: i,selected: true},
							this.getLunarInfo(this.year,this.month+1,i),
							this.getEvents(this.year,this.month+1,i)
						))
						this.today = [line, temp[line].length - 1]
					}
					 // 没有默认值的时候显示选中今天日期
					else if (chkY == this.year && chkM == this.month && i == this.day && this.value == "") {

						// console.log("今天",lunarYear,lunarMonth,lunarValue,lunarInfo)
						temp[line].push(Object.assign(
							{day: i,selected: true},
							this.getLunarInfo(this.year,this.month+1,i),
							this.getEvents(this.year,this.month+1,i)
						))
						this.today = [line, temp[line].length - 1]
					}else{
						// 普通日期
						// console.log("设置可选范围",i,lunarYear,lunarMonth,lunarValue,lunarInfo)
						let options = Object.assign(
							{day: i,selected:false},
							this.getLunarInfo(this.year,this.month+1,i),
							this.getEvents(this.year,this.month+1,i)
						)
						if (this.begin.length>0) {
							let beginTime = Number(new Date(parseInt(this.begin[0]),parseInt(this.begin[1]) - 1,parseInt(this.begin[2])))
							if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
						}
						if (this.end.length>0){
							let endTime = Number(new Date(parseInt(this.end[0]),parseInt(this.end[1]) - 1,parseInt(this.end[2])))
							if (endTime <  Number(new Date(this.year, this.month, i))) options.disabled = true
						}
						if (this.disabled.length>0){
							if (this.disabled.filter(v => {return this.year === v[0] && this.month === v[1]-1 && i === v[2] }).length>0) {
								options.disabled = true
							}
						}
						temp[line].push(options)
					}
				}
				// 到周六换行
				if (day == 6 && i < lastDateOfMonth) {
					line++
				}else if (i == lastDateOfMonth) {
					// line++
					let k = 1
					for (let d=day; d < 6; d++) {
						 // console.log(this.computedNextYear()+"-"+this.computedNextMonth(true)+"-"+k)
						temp[line].push(Object.assign(
							{day: k,disabled: true},
							this.getLunarInfo(this.computedNextYear(),this.computedNextMonth(true),k),
							this.getEvents(this.computedNextYear(),this.computedNextMonth(true),k)
						))
						k++
					}
					// 下个月除了补充的前几天开始的日期
					nextMonthPushDays=k
				}
			} //end for

			// console.log(this.year+"/"+this.month+"/"+this.day+":"+line)
			// 补充第六行让视觉稳定
			if(line<=5 && nextMonthPushDays>0){
				// console.log({nextMonthPushDays:nextMonthPushDays,line:line})
				for (let i = line+1; i<=5; i++) {
					temp[i] = []
					let start=nextMonthPushDays+(i-line-1)*7
					for (let d=start; d <= start+6; d++) {
						temp[i].push(Object.assign(
							{day: d,disabled: true},
							this.getLunarInfo(this.computedNextYear(),this.computedNextMonth(true),d),
							this.getEvents(this.computedNextYear(),this.computedNextMonth(true),d)
						))
					}  
				}
			}
			this.days = temp
		},
		computedPrevYear(){
			let value=this.year
			if(this.month-1<0){
				value--
			}
			return value
		},
		computedPrevMonth(isString){
			let value=this.month
			if(this.month-1<0){
				value=11
			}else{
				value--
			}
			// 用于显示目的（一般月份是从0开始的）
			if(isString){
				return value+1
			}
			return value
		},
		computedNextYear(){
			let value=this.year
			if(this.month+1>11){
				value++
			}
			return value
		},
		computedNextMonth(isString){
			let value=this.month
			if(this.month+1>11){
				value=0
			}else{
				value++
			}
			// 用于显示目的（一般月份是从0开始的）
			if(isString){
				return value+1
			}
			return value
		},
		// 获取农历信息
		getLunarInfo(y,m,d){
			let lunarInfo=calendar.solar2lunar(y,m,d)
			let lunarValue=lunarInfo.IDayCn
			// console.log(lunarInfo)
			let isLunarFestival=false
			let isGregorianFestival=false
			if(this.festival.lunar[lunarInfo.lMonth+"-"+lunarInfo.lDay]!=undefined){
				lunarValue=this.festival.lunar[lunarInfo.lMonth+"-"+lunarInfo.lDay]
				isLunarFestival=true
			}else if(this.festival.gregorian[m+"-"+d]!=undefined){
				lunarValue=this.festival.gregorian[m+"-"+d]
				isGregorianFestival=true
			}
			return {
				lunar:lunarValue,
				isLunarFestival:isLunarFestival,
				isGregorianFestival:isGregorianFestival,
			}
		},
		// 获取自定义事件
		getEvents(y,m,d){
			if(Object.keys(this.events).length==0)return false;
			let eventName=this.events[y+"-"+m+"-"+d]
			let data={}
			if(eventName!=undefined){
				data.eventName=eventName
			}
			return data
		},
		// 上月
		prev(e) {
			e.stopPropagation()
			if (this.month == 0) {
				this.month = 11
				this.year = parseInt(this.year) - 1
			} else {
				this.month = parseInt(this.month) - 1
			}
			this.day = 1;
			this.render(this.year, this.month)
			this.locateSelectDate();
			this.$emit('selectMonth',this.year,this.month+1,this.day)
			this.$emit('prev',this.year,this.month+1,this.day);
		},
		//  下月
		next(e) {
			e.stopPropagation()
			if (this.month == 11) {
				this.month = 0
				this.year = parseInt(this.year) + 1
			} else {
				this.month = parseInt(this.month) + 1
			}
			this.day = 1;
			this.render(this.year, this.month);
			this.locateSelectDate();
			this.$emit('selectMonth',this.year,this.month+1,this.day)
			this.$emit('next',this.year,this.month+1,this.day);
		},
		// 选中日期
		select(k1, k2, e) {
			if (e != undefined) e.stopPropagation()
				// 日期范围
			if (this.range) {
				if (this.rangeBegin.length == 0 || this.rangeEndTemp != 0) {
					this.rangeBegin = [this.year, this.month,this.days[k1][k2].day]
					this.rangeBeginTemp = this.rangeBegin
					this.rangeEnd = [this.year, this.month, this.days[k1][k2].day]
					this.rangeEndTemp = 0
					
				} else {
					this.rangeEnd = [this.year, this.month,this.days[k1][k2].day]
					this.rangeEndTemp = 1
						// 判断结束日期小于开始日期则自动颠倒过来
					if (+new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]) < +new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2])) {
						this.rangeBegin = this.rangeEnd
						this.rangeEnd = this.rangeBeginTemp
					}
					// 小于10左边打补丁
					let begin=[]
					let end=[]
					if(this.zero){
						this.rangeBegin.forEach((v,k)=>{
							if(k==1)v=v+1
							begin.push(this.zeroPad(v))
						})
						this.rangeEnd.forEach((v,k)=>{
							if(k==1)v=v+1
							end.push(this.zeroPad(v))
						})
					}else{
						begin=this.rangeBegin
						end=this.rangeEnd
					}
					// console.log("选中日期",begin,end)
					this.$emit('select',begin,end)
				}
				this.render(this.year, this.month)
			}else if (this.multi) {
				// 如果已经选过则过滤掉
				let filterDay=this.multiDays.filter(v => {
				  return this.year === v[0] && this.month === v[1]-1 && this.days[k1][k2].day === v[2]
				})
				if( filterDay.length>0 ){
					this.multiDays=this.multiDays.filter(v=> {
					  return this.year !== v[0] || this.month !== v[1]-1 || this.days[k1][k2].day !== v[2]
					})
				}else{
					this.multiDays.push([this.year,this.month+1,this.days[k1][k2].day]);
				}
				this.days[k1][k2].selected = !this.days[k1][k2].selected
				this.$emit('select',this.multiDays)
			} else {
				// 取消上次选中
				if (this.today.length > 0) {
					this.days.forEach(v=>{
						v.forEach(vv=>{
							vv.selected= false
						})
					})
				}
				// 设置当前选中天
				this.days[k1][k2].selected = true
				this.day = this.days[k1][k2].day
				this.today = [k1, k2]
				this.$emit('select',[this.year,this.zero?this.zeroPad(this.month + 1):this.month + 1,this.zero?this.zeroPad(this.days[k1][k2].day):this.days[k1][k2].day])
			}
		},
		changeYear(){
			if(this.shutYMOption) return;
			if(this.monthsShow) this.monthsShow=false;
			if(this.yearsShow){
				this.yearsShow=false
				return false
			}
			this.yearsShow=true
			this.years=[];
			for(let i=~~this.year-10;i<~~this.year+10;i++){
				this.years.push(i)
			}
		},
		changeMonth(){
			if(this.shutYMOption) return;
			if(this.yearsShow) this.yearsShow=false;
			if(this.monthsShow){
				this.monthsShow=false
				return false
			}
			this.monthsShow=true;
		},
		selectYear(value){
			this.yearsShow=false
			this.year=value
			this.day = 1;
			this.render(this.year,this.month)
			this.locateSelectDate();
			this.$emit('selectYear',value,this.month+1,this.day)
		},
		selectMonth(value){
			this.monthsShow=false;
			this.month = this.newMonths.indexOf(value);
			this.day = 1;
			this.render(this.year, this.month);
			this.locateSelectDate();
			this.$emit('selectMonth',this.year,this.month+1,this.day)
		},
		// 返回今天
		setToday(){
			this.yearsShow=false;
			this.monthsShow=false;
			let now = new Date();
			this.year = now.getFullYear()
			this.month = now.getMonth()
			this.day = now.getDate()
			this.render(this.year,this.month)
			this.locateSelectDate();
			this.$emit("select",[this.year,this.zero?this.zeroPad(this.month + 1):this.month + 1,this.zero?this.zeroPad(this.day):this.day]);
		},
		// 遍历当前日找到选中
		locateSelectDate(){
			this.days.forEach(v => {
				let day=v.find(vv => {
					return vv.day==this.day && !vv.disabled
				})
				if(day!=undefined ){
					day.selected=true  
				} 
			});
		},
		// 日期补零
		zeroPad(n){
			return String(n < 10 ? '0' + n : n)
		},
		// 时间标识点
		eventsTag(child){
			return child
		},
		// 自定义图标事件
		setEvent(){
			this.$emit('set')
		},
		// 自定义事件2
		actionEvent(){
			this.$emit('action')
		}
	}   
}

</script>


<style scoped>
.calendar {
	position: relative;
	margin:auto;
	width: 100%;
	min-width:300px;
	background: #fff;
	font-family: "PingFang SC","Hiragino Sans GB","STHeiti","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
	user-select:none;
}

.calendar-tools{
	height:40px;
	font-size: 20px;
	line-height: 40px;
	color:#1E2329;
}
.calendar-tools span{
	cursor: pointer;
}
.calendar-info{
	display: flex;
	font-size:16px;
	text-align: center;
	position: relative;
}
.calendar-info>div.month{
	flex: 1;
	margin-left:2px;
	height:40px;
	width:100px;
	text-align: center;
	color:#1E2329;
	overflow: hidden;
	position: relative;
}
.calendar-info>div.month .month-inner{
	position: absolute;
	left:0;
	top:0;
	height:480px;
	transition:top .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.calendar-info>div.month .month-inner>span{
	display: block;
	font-size: 14px;
	height:40px;
	width:100px;
	overflow: hidden;
	text-align: left;
}
.calendar-info>div.year{
	flex: 1;
	text-align: right;
	margin-right: 2px;
}
.calendar-tools>.today {
	font-size: 16px;
	width: 14.28571429%;
	float: left;
	color: #52C7CA;
	text-align: center;
}
.calendar-tools>.action {
	font-size:12px;
	float: right;
	text-align: center;
	width: 14.28571429%;
}
.calendar-tools>.setIcon {
	width: 40px;
	float: right;
	text-align: center;
}
.calendar-prev{
	font-size: 24px;
	position: absolute;
	top: 50%;
	left: 0;
	padding: 0 2px;
	transform: translateY(-50%);
}
.calendar-next{
	font-size: 24px;
	position: absolute;
	top: 50%;
	right: 0;
	padding: 0 2px;
	transform: translateY(-50%);
}
.calendar-content {
	position: relative;
	padding: 0 24px;
}
.calendar table {
	clear: both;
	width: 100%;
	border-collapse: collapse;
	color: #1E2329;
}
.calendar td {
	margin:2px !important;
	padding:0px 0;
	width: 14.28571429%;
	height:44px;
	text-align: center;
	vertical-align: middle;
	font-size:14px;
	line-height: 125%;
	cursor: pointer;
	position: relative;
	vertical-align: top;
}
.calendar td.week{
	font-size:12px;
	pointer-events:none !important;
	cursor: default !important;    
}
.calendar td.disabled {
	color: #BDC0C5;
	pointer-events:none !important;
	cursor: default !important;
}
.calendar td.disabled div{
	color: #BDC0C5;
}
.calendar td span{
	display:block;
	max-width:40px;
	height:26px;
	font-size: 16px;
	line-height:26px;
	margin:0px auto;
	border-radius:20px;
}
.calendar td:not(.selected) span:not(.red):hover{
	background:#f3f8fa;
	color: #1E2329;
}
.calendar td:not(.selected) span.red:hover{
	background:#f9efef;
}

.calendar td:not(.disabled) span.red{
	color:#F26666;
}
.calendar td:not(.disabled) span.blue{
	border: 1px solid #52C7CA;
}
.calendar td.selected span{
	background-color: #52C7CA;
	color: #fff;
}
.calendar td .text{
	position: absolute;
	top:28px;
	left:0;
	right:0;
	text-align: center;
	
	padding:2px;
	font-size:8px;
	line-height: 1.2;
	color:#2F343B;
}
.calendar td .tag span{
	position: absolute;
	top: 5px;
	left: calc(50% - 3px);
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: #92969C;
}
.calendar td .isGregorianFestival,
.calendar td .isLunarFestival{
	color:#F26666;
}
.calendar td.selected span.red{
	background-color: #F26666;
	color: #fff;
}
.calendar td.selected span.red:hover{
	background-color: #F26666;
	color: #fff;
}
.calendar thead td {
  text-transform: uppercase;
  height:38px;
  vertical-align: middle;
}
.calendar-button{
	text-align: center;
}
.calendar-button span{
	cursor: pointer;
	display: inline-block;
	min-height: 1em;
	min-width: 5em;
	vertical-align: baseline;
	background:#5e7a88;
	color:#fff;
	margin: 0 .25em 0 0;
	padding: .6em 2em;
	font-size: 1em;
	line-height: 1em;
	text-align: center;
	border-radius: .3em;
}
.calendar-button span.cancel{
	background:#efefef;
	color:#666;
}
.calendar-years,.calendar-months{
	position: absolute;
	left:0px;
	top:40px;
	right:0px;
	bottom:0px;
	background:#fff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap:wrap;
	overflow: auto;
	transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
	opacity: 0;
	pointer-events: none;
	transform: translateY(-10px);
}
.calendar-years.show, .calendar-months.show{
	opacity: 1;
	pointer-events: auto;
	transform: translateY(0px);
}
.calendar-years>span{
	margin:1px 5px;
	display: inline-block;
	width:60px;
	line-height: 30px;
	border-radius: 20px;
	text-align:center;
	border:1px solid #fbfbfb;
	color: #1E2329;
}
.calendar-months>span {
	margin:1px 5px;
	display: inline-block;
	width: 20%;
	line-height: 30px;
	border-radius: 20px;
	text-align:center;
	border:1px solid #fbfbfb;
	color: #1E2329;
}
.calendar-years>span.active, .calendar-months>span.active{
	border:1px solid #52C7CA;
	background-color: #52C7CA;
	color:#fff; 
}
</style>