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
.mint-cell-group{
    padding-left: 15px;
    background-color: #fff;
}

.mint-cell-group-title{
  margin: 20px 0 7px 15px;
  font-size: 14px;
  color: $grey-lv3;
}

.mint-cell-group .mint-cell:first-child .mint-cell-wrapper{
  border-top:none;
}
.mint-cell-group .mint-cell:last-child{
  background: none;
}

.mint-hairline {
  &,
  &--top,
  &--left,
  &--right,
  &--bottom,
  &--top-bottom,
  &--surround {
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 200%;
        transform: scale(.5);
        transform-origin: 0 0;
        pointer-events: none;
        box-sizing: border-box;
        border: 0 solid $border-color;
    }
  }

  &--top::after {
    border-top-width: 1px;
  }

  &--left::after {
    border-left-width: 1px;
  }

  &--right::after {
    border-right-width: 1px;
  }

  &--bottom::after {
    border-bottom-width: 1px;
  }

  &--top-bottom::after {
    border-width: 1px 0;
  }

  &--surround::after {
    border-width: 1px;
  }
}
</style>