<template>
  <div class="page-picker">
    <h1 class="page-title">Picker</h1>
    <div class="page-picker-wrapper">
      <h2>基础使用方法</h2>
      <mt-picker :columns="column1" @change="onChange1" />
    </div>

    <div class="page-picker-wrapper">
      <h2>{{title2}}</h2>
      <mt-picker :columns="column2" />
    </div>

    <div class="page-picker-wrapper">
      <h2>{{title3}}</h2>
      <mt-picker
        showToolbar
        :title="area"
        :columns="column1"
        @cancel="onCancel"
        @confirm="onConfirm" />
    </div>
    
    <!-- defaultIndex 参数变化 -->
    <div class="page-picker-wrapper">
      <h2>{{title4}}</h2>
      <mt-picker :columns="columns" @change="onChange2" />
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component picker {
      padding: 0 10px 20px;
      @descendent wrapper {
        background-color: #fff;
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
export default {
  data() {
    return {
      year: new Date(),
      area: '标题',
      title2: '禁用选项',
      title3: '展示顶部栏',
      title4: '多列联动',
      column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      column2: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' }
      ],
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
      Toast(this.toastContent, value, index);
    },
    onChange2(picker, values) {
      picker.setColumnValues(1, this.column3[values[0]]);
    },
    onConfirm(value, index) {
      Toast(this.toastContent, value, index);
    },
    onCancel() {
      Toast(this.cancel);
    }
  }
};
</script>