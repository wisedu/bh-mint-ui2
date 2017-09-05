<template>
  <div class="page-select">
    <h1 class="page-title">TextSelect</h1>
    <div class="">
      <mt-text-select label="抄送人员" placeholder="aaa" :options="dicSlot" v-model="singleSelectValue" @selector-click="singleSelectClick">
      </mt-text-select>
      <p>{{singleSelectValue}}</p>
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
      selectClick (item) {
        this.value = item
        if (window.location.hash.indexOf('smile-select') > -1) {
          history.back()
        }
      },
      handleDicSelectorClick () {
        axios.get('/mock/userdata.json').then(resp => {
          let respData = resp.data
          if (respData.code == '0') {
            // this.$set(this.asyncDicSlot[0], 'values', respData.data)
            this.asyncDicSlot = respData.data
          }
          console.log(resp)
        })
      },
      singleSelectClick () {
        axios.get('/mock/userdata.json').then(resp => {
          let respData = resp.data
          if (respData.code == '0') {
            // this.$set(this.asyncDicSlot[0], 'values', respData.data)
            this.singleSelectOptions = respData.datas.code.rows
          }
        })
      },
      multiSelectClick () {
        axios.get('/mock/userdata.json').then(resp => {
          let respData = resp.data
          if (respData.code == '0') {
            this.multiSelectOptions = respData.datas.code.rows
          }
        })
      }
    },

    data() {
      return {
        singleSelectValue: '',
        singleSelectOptions: [],

        multiSelectValue: '',
        multiSelectOptions: [],

        value: '1984',
        multiValue: [],
        dicValue: [],
        asynvDicValue: [],
        year: '1984',
        number: 0,
        yearSlot: [ '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995' ],
        dicSlot: [
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
        ],
        asyncDicSlot: [],
        numberSlot: [ 0, 1, 2, 3, 4, 5, 6 ],
        addressCity: '北京'
      }
    },

    mounted() {
    }
  };
</script>