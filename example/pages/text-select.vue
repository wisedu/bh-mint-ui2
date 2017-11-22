<template>
  <div class="page-select">
    <h1 class="page-title">TextSelect</h1>
    <div class="">
      <mt-text-select label="抄送人员" placeholder="aaa" rows="5" maxlength="100" :options="singleSelectOptions" v-model="singleSelectValue" @selector-click="singleSelectClick">
      </mt-text-select>
      <p>{{singleSelectValue}}</p>

      <mt-text-select label="禁用的" placeholder="aaa" rows="5" maxlength="100" :readonly="true" :options="singleSelectOptions" v-model="singleSelectValue" @selector-click="singleSelectClick"></mt-text-select>
      <mt-text-select label="禁用的" placeholder="aaa" rows="5" maxlength="100" :disabled="true" :options="singleSelectOptions" v-model="singleSelectValue" @selector-click="singleSelectClick"></mt-text-select>
    </div>
  </div>
</template>

<style>
  body {
    background: #ddd;
    padding: 0;
  }
  @component-namespace page {
    @component select {
      padding-top: 50px;
      @descendent wrapper {
        background-color: #fff;
      }

      @descendent desc {
        margin: 10px 0 50px;
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
        this.singleSelectOptions = [
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
        singleSelectOptions: []
      }
    }
  };
</script>