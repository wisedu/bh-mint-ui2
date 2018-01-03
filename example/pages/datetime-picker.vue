<template>
  <div class="page-datetime">
    <div class="page-datetime-wrapper">
      <mt-button @click.native="open('picker1')" size="large">点击弹出 DateTime Picker</mt-button>
      <mt-button @click.native="open('picker2')" size="large">点击弹出 Date Picker</mt-button>
      <mt-button @click.native="open('picker3')" size="large">点击弹出 Time Picker</mt-button>
    </div>
    <mt-datetime-picker
      ref="picker1"
      v-model="currentDate1"
      type="datetime"
      :minHour="minHour"
      :maxHour="maxHour"
      :minDate="minDate"
      :maxDate="maxDate"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker2"
      type="date"
      :minHour="minHour"
      :maxHour="maxHour"
      :minDate="minDate"
      v-model="currentDate2"
      @confirm="handleChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker3"
      :minHour="minHour"
      :maxHour="maxHour"
      :minDate="minDate"
      v-model="currentDate3"
      @confirm="handleChange">
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
        minDate: new Date(),
        maxDate: new Date(2019, 10, 1),
        currentDate1: new Date(2018, 0, 1),
        currentDate2: "2017-12-31",
        currentDate3: null
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
      }
    }
  };
</script>
