<template>
  <div class="fixed-button">
    <mt-fixed-button :type="args.type" :size="args.size" position="top-left" top="60px"></mt-fixed-button>
    <mt-fixed-button contentSize="16px" position="top-right" top="60px"></mt-fixed-button>
    <mt-fixed-button backgroundColor="yellow" size="20px" position="bottom-left" color="#000"></mt-fixed-button>
    <mt-fixed-button @click="handleclick"></mt-fixed-button>
  </div>
</template>

<script>
export default {
    name: 'button',
    data() {
      return {
        args: {
          type:"danger",
          size:"30px"
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
