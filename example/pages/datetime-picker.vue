<template>
  <div class="page-datetime">
    <div class="page-datetime-wrapper">
      <mt-button @click.native="open('picker1')" size="large">点击弹出 DateTime Picker</mt-button>
      <mt-button @click.native="open('picker2')" size="large">点击弹出 Date Picker</mt-button>
      <mt-button @click.native="open('picker3')" size="large">点击弹出 Time Picker</mt-button>
    </div>
    <mt-datetime-picker
      ref="picker1"
      :maskFun="true"
      v-model="currentDate1"
      type="datetime"
      :minHour="minHour"
      :maxHour="maxHour"
      :minDate="minDate"
      :maxDate="maxDate"
      @maskCallback="cancel"
      @confirm="handleChange"
      @cancel="cancel">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker2"
      type="date"
      :minDate="minDate"
      :maxDate="maxDate"
      v-model="currentDate2"
      @confirm="handleChange"
      @cancel="cancel">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker3"
      type="time"
      :minHour="minHour"
      :maxHour="maxHour"
      v-model="currentDate3"
      @confirm="handleChange"
      @cancel="cancel">
    </mt-datetime-picker>
  </div>
</template>

<style>
  @component-namespace page {
    @component datetime {
      margin-top: 45px;

      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);

        button:not:(last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
<script type="text/babel">
  import { Toast } from 'src/index';

  export default {
    data() {
      return {
        minHour: 10,
        maxHour: 20,
        minDate: new Date(2008,0,31),
        maxDate: new Date(2028, 10, 1),
        // currentDate1: new Date(2018, 5, 1,10,11),
        currentDate1:"2018-12-31 12:00",
        currentDate2: "2018-12-31",
        currentDate3: "12:00"
      };
    },

    methods: {
      open(picker) {
        this.$refs[picker].open();
      },

      handleChange(value) {
        Toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      },

      cancel(val){
        console.log(val);
        Toast({
          message: '取消',
          position: 'bottom'
        });
      }
    }
  };
</script>
