<template>
  <div @click="handleClick" class="mint-directive-else-if">
    <slot></slot>
  </div>
</template>
<script>
    /**
     * @noteType component
     * @name DirectiveElseIf
     * @tagName mt-directive-else-if
     * @desc else-if容器
     * @type container|directive
     * @directiveName v-else-if
     * @wrapClassName mint-directive-else-if
     * @html
     * <mt-directive-else-if></mt-directive-else-if>
     */
    export default {
        name: 'mt-directive-else-if',
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        },
        props: {}
    };

</script>
<style lang="css">
  @component-namespace mint {
    @component directive-else-if {
        position: relative;

        &:after{
          content: "";
          display: table;
          clear: both;
         }
    }
  }

</style>
