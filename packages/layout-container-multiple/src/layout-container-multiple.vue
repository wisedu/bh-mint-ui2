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

  .mint-layout-container-multiple:after{
    content: "";
    display: table;
    clear: both;
  }


</style>
