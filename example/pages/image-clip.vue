<template>
  <div class="page-image">
    <div style="padding:10px 0">
     
      <mt-image-clip :src="file" v-model="value"></mt-image-clip>
      <!-- <mt-image-clip :src="file" v-model="value"><mt-button type="primary">点我裁剪图片</mt-button></mt-image-clip> -->
    </div>
    <div class="page-image-clip">
      <label>裁剪效果图：</label>
      <img :src="value">
      <label>裁剪图片数据: </label>
      <div contenteditable="true" id="clip-result">{{value}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      file: '',
      value: ''
    }
  },
  methods:{
    hanldeClick: function(){
      var file = this.$refs.camera.files[0]
      var reader = new FileReader();
      reader.readAsDataURL(file);
      var _that = this;
      reader.onload=function (oFREvent) {  
        console.log(oFREvent)
        _that.file = oFREvent.target.result; 
      };
    }
  }

};
</script>
<style>
  @component-namespace page {
    @component image {
      margin-top: 45px;
      padding: 0 10px;

      @descendent clip>label{
        display: block;
      }
    }
  }
  .crop{
    border: 1px solid #ccc;
  }
  #clip-result{
    padding: 3px 6px;
    border: 1px solid #ccc;
  }
</style>