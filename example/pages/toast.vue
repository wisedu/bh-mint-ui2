<template>
  <div class="page-toast">
    <div class="page-toast-wrapper">
      <mt-button @click.native="openToast" size="large" type="primary">点击弹出 Toast</mt-button>
      <mt-button @click.native="openToastWithIcon" size="large" type="warning">点击弹出带有 icon 的 Toast</mt-button>
      <mt-button @click.native="openBottomToast" size="large" type="danger">自定义 Toast 位置</mt-button>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component toast {
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
  import { Toast } from 'src/index';

  export default {
    methods: {
      openToast() {
        Toast('提示信息');
      },

      openToastWithIcon() {
        Toast({
          message: '操作成功',
          iconClass: 'iconfont icon-wancheng'
        });
      },

      openBottomToast() {
        Toast({
          message: '提示信息',
          position: 'bottom'
        });
      }
    }
  };
</script>
