<template>
  <div>
    <!-- <div class="page-select">
      <mt-tree-selector label="树形选择器" :options="options" v-model="value" placeholder="请选择" @selector-click="loadOptions"></mt-tree-selector> -->
    <!-- </div> -->
    <div class="page-select">
      <mt-tree-selector label="树形选择器" :options="options" v-model="value" placeholder="请选择" @selector-click="loadOptionsEmap"></mt-tree-selector>
    </div>
    <div class="page-select">
      <mt-tree-selector label="树形多选择器" :options="multiOptions" v-model="multiValue" placeholder="请选择" @selector-click="loadMultiOptionsEmap"></mt-tree-selector>
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
      loadOptions (pId) {
        axios.get('/mock/tree.json?pId=' + pId).then(resp => {
          let respData = resp.data
          if (respData.code == '0') {
            if (pId === '' || pId.length === 0) {
              this.options = respData.datas ? respData.datas.code.rows : []
            } else {
              let options = this.options
              options.filter(item => item.id === pId)[0].children = respData.datas ? respData.datas.code.rows : []
              this.$set(this, 'options', [])
              this.$nextTick(_ => {
                this.$set(this, 'options', options)
              })
            }
          }
        })
      },
      loadOptionsEmap (pId) {
        if (this.options.filter(item => item.pId === pId).length > 0) return
        axios.get('http://localhost:8080/emap/code/c9fe4e9d-5460-4372-87ca-437d373c2531.do?pId=' + pId).then(resp => {
          let respData = resp.data
          if (respData.code == '0') {
            let options = this.options
            if (respData.datas) {
              options = options.concat(respData.datas.code.rows)
            }
            this.$set(this, 'options', options)
          }
        })
      },
      loadMultiOptionsEmap (pId) {
        if (this.multiOptions.filter(item => item.pId === pId).length > 0) return
        axios.get('http://localhost:8080/emap/code/c9fe4e9d-5460-4372-87ca-437d373c2531.do?pId=' + pId).then(resp => {
          let respData = resp.data
          if (respData.code == '0') {
            let options = this.multiOptions
            if (respData.datas) {
              options = options.concat(respData.datas.code.rows)
            }
            this.$set(this, 'multiOptions', options)
          }
        })
      }
    },

    data() {
      return {
        value: '',
        options: [],
        multiValue: '',
        multiOptions: []
      };
    },

    mounted() {
    }
  };
</script>