<template>
  <div>
    <mt-fixed-button :type="args.type" :size="args.size" :width="args.width" :height="args.height">+</mt-fixed-button>
  </div>
</template>

<script>
export default {
    name: 'button',
    data() {
      return {
        args: {
          type:"danger"
        }
      }
    }
};
</script>

<style lang="css">
</style>
