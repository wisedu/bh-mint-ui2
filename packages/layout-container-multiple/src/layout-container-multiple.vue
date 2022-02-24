<template>
  <div @click="handleClick" class="mint-layout-container-multiple">
    <slot></slot>
  </div>
</template>
<script>
    export default {
        name: 'mt-layout-container-multiple',
        methods: {
            handleClick(evt) {
                this.$emit('click',evt);
            }
        },
        props: {
        }
    };

</script>
<style lang="css">
  @component-namespace mint {
    @component layout-container-multiple {
        position: relative;
        width: 100%;
        box-sizing: border-box;
    }
  }
  /* 添加强制断行 2022-02-24 王敏 */
.mint-layout-container-multiple{
      word-break: break-all;
      white-space: pre-wrap;
}
  .mint-layout-container-multiple:after{
    content: "";
    display: table;
    clear: both;
  }


</style>
