<template>
  <div @click="handleClick" class="mint-layout-list">
    <slot></slot>
  </div>
</template>
<script>
    /**
     * @noteType component
     * @name LayoutList
     * @tagName mt-layout-list
     * @desc 列表容器
     * @type containerWrap
     * @wrapClassName mint-layout-list
     * @html
     * <mt-layout-list></mt-layout-list>
     */
    export default {
        name: 'mt-layout-list',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        }
    };

    /**
     * @noteType external
     * @content
     {
       "containerItem": [
          {
            "tagName": "LayoutContainer"
          }
        ]
     }
     */
</script>
<style lang="css">
  @import "../../../src/style/var.css";
  @component-namespace mint {
    @component layout-list {
        position: relative;

        &:after{
          content: "";
          display: table;
          clear: both;
         }
    }
  }

</style>
