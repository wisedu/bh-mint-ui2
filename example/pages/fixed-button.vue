<template>
  <div class="fixed-button">
    <mt-fixed-button :size="args.size">+</mt-fixed-button>
    <mt-fixed-button background="yellow" size="20px" width="40px" height="40px" position="bottom-left" color="pink" contentmargintop="10px">+</mt-fixed-button>
    <mt-fixed-button :type="args.type" :size="args.size" :width="args.width" :height="args.height" position="top-left" top="60px">+</mt-fixed-button>
    <mt-fixed-button :type="args.type" :size="args.size" :width="args.width" :height="args.height" position="top-right" top="4rem">+</mt-fixed-button>
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
    }
};
</script>

<style lang="css">
</style>
