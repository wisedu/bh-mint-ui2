<template>
  <div style="margin-top:45px;" id="singleSelect">
    <mt-cell-group>
        <mt-tree-selector label="树形选择器" :options="options" v-model="value" defName=""  @selector-click="loadOptions" displayType="-" required parentSelectable direction="vertical"></mt-tree-selector>
        <mt-tree-selector label="树形多选择器" multiple :options="options" v-model="multiValue" defName="MMM"  displayType="-" @selector-click="loadOptions" required></mt-tree-selector>
        <mt-tree-selector label="树形多选择器（父级可选）" multiple parentSelectable :options="options" v-model="multiValue"  @selector-click="loadOptions" required></mt-tree-selector>
        <mt-tree-selector label="树形多选择器" multiple :options="options" v-model="multiValue"  @selector-click="loadMultiOptionsEmap" disabled></mt-tree-selector>
    </mt-cell-group>
  </div>
</template>

<style>
  @component-namespace page {
    @component select {
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
      loadOptions (pId,vm) {
        axios.get('/mock/tree.json?pId=' + pId).then(resp => {
          let respData = resp.data;
          if (respData.code == '0') {
            if (pId === 'custom' || pId.length === 0) {
              this.options = respData.datas ? respData.datas.code.rows : []
            } else {
              let options = this.options
              options.filter(item => item.id === pId)[0].children = respData.datas ? respData.datas.code.rows : []
              this.$set(this, 'options', [])
              this.$nextTick(_ => {
                this.$set(this, 'options', options);
              })
            }
          }
        })
      },
      loadOptionsEmap (id,e) {
        console.log("单选",id,e)
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
      loadMultiOptionsEmap (pid,e) {
        console.log("多选",pid,e)
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
        multiValue: '000010,800',
        multiOptions: []
      };
    },

    watch:{
      multiValue:function(e){
        console.log(e)
      },
      value:function(val){
        console.log(val)
      }
    },
    mounted() {
        //this.loadOptions();
    }
  };
</script>