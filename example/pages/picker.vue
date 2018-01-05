<template>
  <div class="page-picker" style="margin-top:45px;">
    <div class="page-picker-wrapper">
      <mt-picker :columns="column1" @change="onChange1" confirmText="反馈"  showToolbar />
    </div>

    <div class="page-picker-wrapper">
      <mt-picker :columns="column2" :title="title2" showToolbar @confirm="onConfirm" @cancel="onCancel"/>
    </div>
    <div style="padding:10px" @click="changeData">点我切换数据</div>
    <div class="page-picker-wrapper">
      <mt-picker
        :columns="column1"
        @cancel="onCancel"
        @confirm="onConfirm" 
        :title="title3" showToolbar/>
    </div>
    
    <!-- defaultIndex 参数变化 -->
    <div class="page-picker-wrapper">
      <mt-picker :columns="columns" @change="onChange2" :title="title4" showToolbar @confirm="onConfirm" @cancel="onCancel"/>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component picker {
      padding: 0 0 20px;
      @descendent wrapper {
        text-align: center;
        margin-bottom: 24px;
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
import { Toast } from 'src/index';
import axios from 'axios'
export default {
  data() {
    return {
      year: new Date(),
      area: '标题',
      title2: '禁用选项',
      title3: '展示顶部栏',
      title4: '多列联动',
      column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      column2:[{
        values:[{text:'杭州',disabled:true}, '宁波', '温州', '嘉兴', '湖州'],
        className:'className',
        defaultIndex: 2
      }],
      column3: {
        浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州']
      },
      toastContent: (value, index) => `当前值：${value}, 当前索引：${index}`
    }
  },
  computed: {
    columns() {
      const column = this.column3;
      return [
        {
          values: Object.keys(column),
          className: 'column1'
        },
        {
          values: column[Object.keys(column)[0]],
          className: 'column2',
          defaultIndex: 2
        }
      ];
    }
  },
  methods: {
    onChange1(picker, value, index) {
      console.log(value, index);
    },
    onChange2(picker, values) {
      picker.setColumnValues(1, this.column3[values[0]]);
    },
    onConfirm(index,value) {
      console.log(index,value);
      //Toast(index,value);
    },
    onCancel(value) {
      console.log(value);
      //Toast(this.cancel);
    },
    changeData(){
      axios.get('./mock/picker.json').then(resp => {
        let respData = resp.data
        if (respData.code == '0') {
          this.column1=respData.data;
        }
      })
    }
  }
};
</script>