<template>
  <div class="page-msgbox">
    <div class="page-msgbox-wrapper">
      <mt-button @click.native="openAlert" size="large" type="primary">打开 alert 提示框</mt-button>
      <mt-button @click.native="openAlert1" size="large" type="primary">打开仅有标题 alert 提示框</mt-button>
      <mt-button @click.native="openConfirm" size="large" type="warning">打开 confirm 提示框</mt-button>
      <mt-button @click.native="openPrompt" size="large" type="danger">打开 prompt 提示框</mt-button>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component msgbox {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>

<script type="text/babel">
  import { MessageBox } from 'src/index';

  export default {
    methods: {
      openAlert() {
        MessageBox.alert('请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容请输入文本内容', '请输入标题提示语');
      },
      openAlert1() {
        MessageBox.alert('', '请输入标题提示语');
      },

      openConfirm() {
        console.log(MessageBox.confirm);
        MessageBox.confirm('确定执行此操作?', '提示','',function(val){
          console.log(val)
        });
      },

      openPrompt() {
        MessageBox.prompt('', '请输入姓名').then(({ value }) => {
          if (value) {
            MessageBox.alert(`你的名字是 ${ value }`, '输入成功');
          }
        });
      }
    }
  };
</script>
