<template>
  <div @click="handleClick" class="mint-directive-for">
    <slot></slot>
  </div>
</template>
<script>
    /**
     * @noteType component
     * @name DirectiveFor
     * @tagName mt-directive-for
     * @desc 列表容器
     * @type list|directive
     * @directiveName v-for
     * @wrapClassName mint-directive-for
     * @html
     * <mt-directive-for></mt-directive-for>
     */
    export default {
        name: 'mt-directive-for',
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
            "tagName": "LayoutContainer",
            "attrs": {
              "v-for": "n in 3"
            }
          }
        ]
     }
     */
</script>
<style lang="css">
  @import "../../../src/style/var.css";
  @component-namespace mint {
    @component directive-for {
        position: relative;

        &:after{
          content: "";
          display: table;
          clear: both;
         }
    }
  }

</style>
