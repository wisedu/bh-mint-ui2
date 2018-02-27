<template>
  <div style="margin-top:45px;"> 
    <mt-cell-group>
      <mt-picker-select label="抄送人员" rows="5" maxlength="100" :options="singleSelectOptions" v-model="singleSelectValue" required>
      </mt-picker-select>

      <mt-picker-select label="只读的" placeholder="请选择" rows="5" maxlength="100" readonly :options="singleSelectOptions" v-model="singleSelectValue1" required></mt-picker-select>
      <mt-picker-select label="禁用的" placeholder="请选择" rows="5" maxlength="100" disabled :options="singleSelectOptions"></mt-picker-select>
    </mt-cell-group>
  </div>
</template>


<script type="text/babel">
  /* eslint-disable */
  import axios from 'axios'

  export default {
    methods: {
      change1(){
        this.readonly=!this.readonly
      },
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
        singleSelectOptions: [          
          '奔波儿灞',
          '霸波尔奔',
          '金角大王',
          '银角大王',
          '虎力大仙',
          '鹿力大仙',
          '羊力大仙',
          '黄袍怪',
          '白骨精',
          '小钻风'
        ],
        singleSelectValue:'',
        singleSelectValue1:'鹿力大仙'
      }
    }
  };
</script>