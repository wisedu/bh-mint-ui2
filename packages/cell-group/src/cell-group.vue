<template>
  <div>
    <div v-if="title.length > 0" class="mint-cell-group-title">{{title}}</div>
    <div class="mint-cell-group mint-hairline--top-bottom">
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
    }
  }
};
</script>

<style lang="css">
@import "../../../src/style/var.css";
@import "../../../src/style/hairline.css";
.mint-cell-group{
    padding-left: 20px;
    background-color: #fff;
}

.mint-cell-group-title{
  margin: 20px 0 7px 20px;
  font-size: 14px;
  color: $grey-lv3;
}

.mint-cell-group .mint-cell:first-child .mint-cell-wrapper{
  border-top:none;
}
.mint-cell-group .mint-cell:last-child{
  background: none;
}

</style>