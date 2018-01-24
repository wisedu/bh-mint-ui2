<template>
  <div class="fixed-button">
    <mt-fixed-button @click="handleclick"><i class="iconfont icon-more plus"></i></mt-fixed-button>
    <mt-fixed-button background="yellow" size="20px" width="40px" height="40px" position="bottom-left" color="#000" contentmargintop="10px">+</mt-fixed-button>
    <mt-fixed-button :type="args.type" :size="args.size" :width="args.width" :height="args.height" position="top-left" top="60px">+</mt-fixed-button>
    <mt-fixed-button :type="args.type" :size="args.size" :width="args.width" :height="args.height" position="top-right" top="60px" borderradius="20%">+</mt-fixed-button>
  </div>
</template>

<script>
export default {
    name: 'button',
    data() {
      return {
        args: {
          type:"danger",
          size:"30px",
          width:"60px",
          height:"60px"
        }
      }
    },
    methods:{
      handleclick(){
        alert('click!')
      }
    }
};
</script>

<style lang="css" scoped>
  .plus{
    font-size: 24px;
  }
</style>
