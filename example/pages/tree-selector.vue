<template>
  <div class="page-select">
    <mt-tree-selector label="树形选择器" :options="options" v-model="value" placeholder="请选择" @selector-click="loadOptions"></mt-tree-selector>
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
      loadOptions (pId) {
        axios.get('/mock/tree.json?pId=' + pId).then(resp => {
          let respData = resp.data
          if (respData.code == '0') {
            if (pId === '' || pId.length === 0) {
              this.options = respData.datas ? respData.datas.code.rows : []
            }
          }
        })
      },
      handleDicSelectorClick () {
        axios.get('/mock/dic.json').then(resp => {
          let respData = resp.data
          if (respData.code == '0') {
            // this.$set(this.asyncDicSlot[0], 'values', respData.data)
            this.asyncDicSlot[0].values = respData.data
          }
          console.log(resp)
        })
      }
    },

    data() {
      return {
        value: '',
        options: []
      };
    },

    mounted() {
    }
  };
</script>