<template>
  <div class="page-select">
    <h1 class="page-select-title">PickerSelect</h1>
    <mt-cell-group>
      <mt-picker-select label="抄送人员" rows="5" maxlength="100" :options="singleSelectOptions" v-model="singleSelectValue">
      </mt-picker-select>

      <mt-picker-select label="只读的" placeholder="请选择" rows="5" maxlength="100" readonly :options="singleSelectOptions" v-model="singleSelectValue"></mt-picker-select>
      <mt-picker-select label="禁用的" placeholder="请选择" rows="5" maxlength="100" disabled :options="singleSelectOptions" v-model="singleSelectValue"></mt-picker-select>
    </mt-cell-group>
  </div>
</template>

<style>
  body {
    background: #ddd;
    padding: 0;
  }
  @component-namespace page {
    @component select {
      @descendent title {
        font-size: 20px;
        margin: 0 auto;
        padding: 20px 0;
        text-align: center;
        display: block;
        line-height: 1;
      }
      .mint-button {
        margin-top: 15px;
      }
    }
  }
</style>

<script type="text/babel">
  /* eslint-disable */
  import axios from 'axios'

  export default {
    methods: {
      singleSelectClick () {
        //可以在点击时，做数据的异步加载，该案例中，数据是默认加载
        // axios.get('/mock/userdata.json').then(resp => {
        //   let respData = resp.data
        //   if (respData.code == '0') {
        //     this.singleSelectOptions = respData.datas.code.rows
        //   }
        // })
      }
    },
    data: function() {
      return {
        singleSelectValue: '',
        singleSelectOptions: [
          { id: 1, name: '奔波儿灞' },
          { id: 2, name: '霸波尔奔' },
          { id: 3, name: '金角大王' },
          { id: 4, name: '银角大王' },
          { id: 5, name: '虎力大仙' },
          { id: 6, name: '鹿力大仙' },
          { id: 7, name: '羊力大仙' },
          { id: 8, name: '黄袍怪' },
          { id: 9, name: '白骨精' },
          { id: 10, name: '小钻风' }
        ]
      }
    }
  };
</script>