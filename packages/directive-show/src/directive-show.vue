<template>
  <div @click="handleClick" class="mint-directive-show">
    <slot></slot>
  </div>
</template>
<script>
    /**
     * @noteType component
     * @name DirectiveShow
     * @tagName mt-directive-show
     * @desc show容器
     * @type container|directive
     * @directiveName v-show
     * @wrapClassName mint-directive-show
     * @html
     * <mt-directive-show></mt-directive-show>
     */
    export default {
        name: 'mt-directive-show',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },
        props: {}
    };

</script>
<style lang="css">
  @import "../../../src/style/var.css";
  @component-namespace mint {
    @component directive-show {
        position: relative;

        &:after{
          content: "";
          display: table;
          clear: both;
         }
    }
  }

</style>
