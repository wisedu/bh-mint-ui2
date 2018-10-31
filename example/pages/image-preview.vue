<template>
  <div class="page-image">
     <mt-button @click.native="isVisible = true" size="large" type="primary">点击展开</mt-button>
    <mt-image-preview
      v-model="isVisible"
      :initialIndex='1'
      :imgs="imgs"
      :preventDefault="false">
    </mt-image-preview>
  </div>
</template>
<script>
export default {
  name: 'image-preview',
  data(){
    return {
      isVisible:false,
      imgs: [
        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',
        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
        'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg'
      ]
    }
  },
  methods: {
      handleClick(e) {
        //
      }
  }
};
</script>
<style>
  @component-namespace page {
    @component image {
      margin-top: 45px;
      padding: 0 10px;

      @descendent title {
        padding: 10px 0;
        text-align: center;
      }
    }
  }
</style>
