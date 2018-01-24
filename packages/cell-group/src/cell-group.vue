<template>
  <div class="mint-cell-group mt-bg-lv2">
    <div v-if="title.length > 0" class="mint-cell-group-title mt-color-grey-lv3">{{title}}</div>
    <div class="mint-cell-group-content mint-hairline--top-bottom mt-bg-white mt-bColor-after-grey-lv5" :style="{'padding-left':grouppaddingleft}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mt-cell-group',
  props: {
    title: {
      type:String,
      default: ""
    },
    grouppaddingleft: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="css">
@import "../../../src/style/hairline.css";

@component-namespace mint {
  @component cell {
    @descendent group{
      @descendent title{
        padding: 10px 20px 7px 20px;
        font-size: 14px;
        line-height: 20px;
      }
      @descendent content{
        padding-left: 20px;
      }
    }
  }
}
.mint-cell-group-content>.mint-cell:first-child>.mint-cell-wrapper{
  border-top:none;
}
.mint-cell-group .mint-cell:last-child{
  border-bottom: none;
}

</style>