<template>
  <div class="page-msgbox">
    <div class="page-msgbox-wrapper">
      <mt-button @click.native="openAlert" size="large" type="primary">打开 alert 提示框</mt-button>
      <mt-button @click.native="openAlert1" size="large" type="primary">打开仅有标题 alert 提示框</mt-button>
      <mt-button @click.native="openConfirm" size="large" type="warning">打开 confirm 提示框</mt-button>
      <mt-button @click.native="openPrompt" size="large" type="danger">打开 prompt 提示框</mt-button>
      <mt-button @click.native="custom" size="large" type="default">custom</mt-button>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component msgbox {
      @descendent wrapper {
        padding: 0 20px;
        margin-top: 60px;
        position: absolute * * * *;
        width: 100%;
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
        MessageBox.alert('', '请输入标题提示语').then(action =>{
          console.log(action)
        });
      },

      openConfirm() {
        MessageBox.confirm('确定执行此操作?').then(action =>{
          console.log(action)
        });
      },

      openPrompt() {
        MessageBox.prompt('', '请输入姓名',{
          inputValue: '11111',
          inputValidator: function(value) {
            // value 为input的当前值
            // 该方法可以返回 false/true 或者字符串
            return false
          },
          inputErrorMessage: "错误提示信息"
        }).then(({ value }) => {
          if (value) {
            MessageBox.alert(`你的名字是 ${ value }`, '输入成功');
          }
        });
      },
      custom() {
        MessageBox({
          title: "this is a title",
          message: "it is messages",
          callback: function() {
            console.log('callback')
          }
        })
      }
    }
  };
</script>
