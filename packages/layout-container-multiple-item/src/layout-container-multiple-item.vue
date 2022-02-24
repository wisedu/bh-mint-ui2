<template>
  <div @click="handleClick" class="mint-layout-container-multiple-item" :style="styleComputed">
    <slot></slot>
  </div>
</template>
<script>
    export default {
        name: 'mt-layout-container-multiple-item',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },
        props: {
            width: String
        },
        computed: {
            styleComputed: function() {
                let _style = '';
                let width = this.width;
                if (width) {
                    _style += 'width:'+width;
                }
                return _style;
            }
        }
    };
</script>
<style lang="css">
  @component-namespace mint {
    @component layout-container-multiple-item {
      position: relative;
      float: left;
      box-sizing: border-box;
    }
  }
  /* 添加强制断行 2022-02-24 王敏 */
  .mint-layout-container-multiple-item{
    word-break: break-all;
      white-space: pre-wrap;
  }
  .mint-layout-container-multiple-item:after{
    content: "";
    display: table;
    clear: both;
  }

</style>
