<template>
  <mt-popup v-model="visible" position="bottom" class="mint-datetime" @maskCallback="maskCallback">
    <mt-picker
      ref="picker"
      showToolbar
      :columns="columns"
      :visibileColumnCount="visibileColumnCount"
      :cancelText="cancelText" :confirmText="confirmText"
      @change="onChange" @confirm="onConfirm" @cancel="visible = false;maskFunAvailable=false; $emit('cancel')">
    </mt-picker>
  </mt-popup>
</template>

<style lang="css">

  @component-namespace mint {
    @component datetime {
      width: 100%;
    }
  }
</style>

<script type="text/babel">
  import picker from 'bh-mint-ui2/packages/picker/index.js';
  import popup from 'bh-mint-ui2/packages/popup/index.js';
  if (process.env.NODE_ENV === 'component') {
    require('bh-mint-ui2/packages/picker/style.css');
    require('bh-mint-ui2/packages/popup/style.css');
  }

  const isValidDate = date => Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date.getTime());
  export default {
    name: 'mt-datetime-picker',
    components: {
      'mt-picker': picker,
      'mt-popup': popup
    },
    props: {
      type: {
        type: String,
        default: 'datetime'
      },
      format: {
        type: String,
        default: 'YYYY.MM.DD HH时 mm分'
      },
      visibileColumnCount: {
        type: Number,
        default: 5
      },
      minDate: {
        type: Date,
        default() {
          return new Date(new Date().getFullYear() - 10, 0, 1);
        },
        validator: isValidDate
      },
      maxDate: {
        type: Date,
        default() {
          return new Date(new Date().getFullYear() + 10, 11, 31);
        },
        validator: isValidDate
      },
      minHour: {
        type: Number,
        default: 0
      },
      maxHour: {
        type: Number,
        default: 23
      },
      value: {},
      cancelText: {
        type: String,
        default: ''
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      maskFun:{
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        innerValue: this.correctValue(this.value),
        visible: false,
        maskFunAvailable: false,
      };
    },
    watch: {
      value(val) {
        val = this.correctValue(val);
        const isEqual = this.type === 'time' ? val === this.innerValue : val.valueOf() === this.innerValue.valueOf();
        if (!isEqual) this.innerValue = val;
      },
      innerValue(val) {
        this.updateColumnValue(val);
        this.$emit('input', val);
      }
    },
    computed: {
      ranges() {
        if (this.type === 'time') {
          return [
            [this.minHour, this.maxHour],
            [0, 59]
          ];
        }
        const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = this.getBoundary('max', this.innerValue);
        const { minYear, minDate, minMonth, minHour, minMinute } = this.getBoundary('min', this.innerValue);
        const result = [
          [minYear, maxYear],
          [minMonth, maxMonth],
          [minDate, maxDate],
          [minHour, maxHour],
          [minMinute, maxMinute]
        ];
        if (this.type === 'date') result.splice(3, 2);
        return result;
      },
      columns() {
        const results = this.ranges.map(range => {
          const values = this.times(range[1] - range[0] + 1, index => {
            const value = range[0] + index;
            return value < 10 ? `0${value}` : `${value}`;
          });
          return {
            values
          };
        });
        return results;
      }
    },
    methods: {
      maskCallback() {
        if(this.maskFun&&this.maskFunAvailable) this.$emit('maskCallback','mask');
      },
      open() {
        this.maskFunAvailable = true;
        this.visible = true;
      },
      close() {
        this.visible = false;
      },
      correctValue(value) {
        // validate value
        const isDateType = this.type.indexOf('date') > -1;
        if (isDateType && !isValidDate(value)) {
          //qiyu 2017-12-14 对字符串日期类型进行解析
          let invaild = true;
          if (typeof value === "string") {
            //wangyongjian 2018-1-26 对字符串日期类型进行解析扩展到时分
            value = value.replace(/(^\s*)|(\s*$)/g,"");
            if(value.length === 10){
              let datepart = value.split("-");
              if (datepart.length === 3) {
                value = new Date(datepart[0], Number(datepart[1]) - 1, datepart[2]);
                invaild = false;
              }
            }else{
              let datepart = value.slice(0,10).split("-");
              let timepart = value.slice(-5).split(":");
              if(datepart.length === 3&&timepart.length === 2){
                value = new Date(datepart[0], Number(datepart[1]) - 1, datepart[2],timepart[0],timepart[1]);
                invaild = false;
              }
            }
          } 
          
          if (invaild === true) {
            value = new Date();
          }
        } else if (!value) {
          const { minHour } = this;
          value = `${minHour > 10 ? minHour : '0' + minHour}:00`;
        }
        // time type
        if (!isDateType) {
          const [hour, minute] = value.split(':');
          let correctedHour = Math.max(hour, this.minHour);
          correctedHour = Math.min(correctedHour, this.maxHour);
          return `${correctedHour}:${minute}`;
        }
        // date type
        const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = this.getBoundary('max', value);
        const { minYear, minDate, minMonth, minHour, minMinute } = this.getBoundary('min', value);
        const minDay = new Date(minYear, minMonth - 1, minDate, minHour, minMinute);
        const maxDay = new Date(maxYear, maxMonth - 1, maxDate, maxHour, maxMinute);
        value = Math.max(value, minDay);
        value = Math.min(value, maxDay);
        return new Date(value);
      },
      times(n, iteratee) {
        let index = -1;
        const result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      },
      getBoundary(type, value) {
        const boundary = this[`${type}Date`];
        const year = boundary.getFullYear();
        let month = 1;
        let date = 1;
        let hour = this.minHour;
        let minute = 0;
        if (type === 'max') {
          month = 12;
          date = this.getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
          hour = this.maxHour;
          minute = 59;
        }
        if (value.getFullYear() === year) {
          month = boundary.getMonth() + 1;
          if (value.getMonth() + 1 === month) {
            date = boundary.getDate();
            if (value.getDate() === date) {
              hour = boundary.getHours();
              if (value.getHours() === hour) {
                minute = boundary.getMinutes();
              }
            }
          }
        }
        return {
          [`${type}Year`]: year,
          [`${type}Month`]: month,
          [`${type}Date`]: date,
          [`${type}Hour`]: hour,
          [`${type}Minute`]: minute
        };
      },
      getTrueValue(formattedValue) {
        if (!formattedValue) return;
        while (isNaN(parseInt(formattedValue, 10))) {
          formattedValue = formattedValue.slice(1);
        }
        return parseInt(formattedValue, 10);
      },
      getMonthEndDay(year, month) {
        if (this.isShortMonth(month)) {
          return 30;
        } else if (month === 2) {
          return this.isLeapYear(year) ? 29 : 28;
        } else {
          return 31;
        }
      },
      isLeapYear(year) {
        return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
      },
      isShortMonth(month) {
        return [4, 6, 9, 11].indexOf(month) > -1;
      },
      onConfirm(val, index, picker) {
        this.visible = false;
        this.maskFunAvailable = false;
        this.$emit('confirm', this.innerValue, picker);
      },
      onChange(picker, org_value, index) {
        const values = picker.getValues();
        let value;
        if (this.type === 'time') {
          value = values.join(':');
        } else {
          const year = this.getTrueValue(values[0]);
          const month = this.getTrueValue(values[1]);
          const maxDate = this.getMonthEndDay(year, month);
          //wangyongjian 2018-1-26 校正月份对应的日期
          let mouthArray = [];
          for(let i=1;i<=maxDate;i++){
            i=i>9?i:"0"+i;
            mouthArray.push(String(i))
          }
          picker.setColumnValues(2,mouthArray);

          let date = this.getTrueValue(values[2]);
          date = date > maxDate ? maxDate : date;
          let hour = 0;
          let minute = 0;
          if (this.type === 'datetime') {
            hour = this.getTrueValue(values[3]);
            minute = this.getTrueValue(values[4]);
          }
          value = new Date(year, month - 1, date, hour, minute);
        }
        value = this.correctValue(value);
        this.innerValue = value;
        this.$emit('change', value, picker);
      },
      updateColumnValue(value) {
        let values = [];
        if (this.type === 'time') {
          const currentValue = value.split(':');
          values = [
            currentValue[0],
            currentValue[1]
          ];
        } else {
          values = [
            `${value.getFullYear()}`,
            `0${value.getMonth() + 1}`.slice(-2),
            `0${value.getDate()}`.slice(-2)
          ];
          if (this.type === 'datetime') {
            values.push(
              `0${value.getHours()}`.slice(-2),
              `0${value.getMinutes()}`.slice(-2)
            );
          }
        }
        this.setColumnByValues(values);
        // this.$nextTick(() => {
        //   this.setColumnByValues(values);
        // });
      },
      setColumnByValues(values) {
        if (!this.$refs.picker) {
          return;
        }
        this.$refs.picker.setValues(values);
      }
    },
    mounted() {
      this.updateColumnValue(this.innerValue);
    }
  };

</script>
