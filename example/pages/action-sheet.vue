<template>
  <div class="page-actionsheet">
    <div class="page-actionsheet-wrapper">
      <mt-button @click.native="sheetVisible = true" size="large" type="primary">点击上拉 action sheet</mt-button>
      <mt-button @click.native="sheetVisible2 = true" size="large" type="default" plain>不带取消按钮的 action sheet</mt-button>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></mt-actionsheet>
  </div>
</template>

<style>
  @component-namespace page {
    @component actionsheet {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);

        button:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        sheetVisible: false,
        sheetVisible2: false,
        actions: [],
        actions2: []
      };
    },

    methods: {
      takePhoto() {
        console.log('taking photo');
      },

      openAlbum() {
        console.log('opening album');
      },

      empty() {
        console.log('clear content');
      },

      goBack() {
        history.go(-1);
      }
    },

    mounted() {
      this.actions = [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '从相册中选择',
        method: this.openAlbum
      }, {
        name: '清空已选图片',
        className: 'mt-color-danger',
        method: this.empty
      }];
      this.actions2 = [{
        name: '确定'
      }, {
        name: '返回上一步',
        method: this.goBack
      }];
    }
  };
</script>
