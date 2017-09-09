<template>
  <div class="mint-bread">
    <span v-for="item in data" :key="item.id" :class="{active: activeId === item.id}" @click="handleClick(item.id)">{{item.name}} </span>
  </div>  
</template>
<script>
export default {
  props: {
    data: { type: Array, default() { return []; } },
    activeId: ''
  },
  methods: {
    handleClick(id) {
      this.$emit('item-click', id);
    }
  }
};
</script>
<style>
@import "../../../src/style/var.css";
.mint-bread {
  background: #fff;
  white-space: nowrap;
  font-size: 0;
  width: 100%;
  overflow: auto;
}
.mint-bread > span {
  line-height: 42px;
  display: inline-block;
  position: relative;
  font-size: 16px;
  padding: 0 16px;
  color: $grey-lv2;

  &.active {
    color: $theme-lv1;
    border-bottom: 2px solid $theme-lv1;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    right: -2px;
    top: 17px;
    border-style: solid;
    border-width: 4px;
    border-color: transparent transparent transparent $grey-lv2;

  }

}
.mint-bread > span:last-child:after {
  display: none;
}
</style>


