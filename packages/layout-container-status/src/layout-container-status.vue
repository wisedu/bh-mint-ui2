<template>
  <div @click="handleClick" class="mint-layout-container">
    <slot></slot>
  </div>
</template>
<script>
    /**
     * @noteType component
     * @name LayoutContainer
     * @tagName mt-layout-container
     * @desc 普通容器
     * @type container
     * @wrapClassName mint-layout-container
     * @html
     * <mt-layout-container></mt-layout-container>
     */
    export default {
        name: 'mt-layout-container-status',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },
        props: {
        }
    };
</script>
<style lang="css">
/* 添加强制断行 2022-02-24 王敏 */
.mint-layout-container{
    word-break: break-all;
      white-space: pre-wrap;
  }
</style>
