<template>
  <div class="mint-form">
    <slot></slot>
  </div>
</template>
<script>
    /**
     * @noteType component
     * @name Form
     * @tagName mt-form
     * @desc 表单容器
     * @type container
     * @wrapClassName mint-form
     * @html
     * <mt-form></mt-form>
     */
    export default {
        name: 'mt-form',
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
    @component form {
      position: relative;
    }
  }

</style>
