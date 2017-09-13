<template>
  <div @click="handleClick" class="mint-directive-if">
    <slot></slot>
  </div>
</template>
<script>
    /**
     * @noteType component
     * @name DirectiveIf
     * @tagName mt-directive-if
     * @desc 列表容器
     * @type container|directive
     * @directiveName v-if
     * @wrapClassName mint-directive-if
     * @html
     * <mt-directive-if></mt-directive-if>
     */
    export default {
        name: 'mt-directive-if',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        }
    };

</script>
<style lang="css">
  @import "../../../src/style/var.css";
  @component-namespace mint {
    @component directive-if {
        position: relative;

        &:after{
          content: "";
          display: table;
          clear: both;
         }
    }
  }

</style>
