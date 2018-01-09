<template>
  <div class="mint-bread mt-bg-lv3">
    <span v-for="item in data" :key="item.id" :class="[activeId === item.id?'active mt-color-theme mt-bColor-theme':'mt-color-grey-lv2 mt-bColor-after-triangle-right']" @click="handleClick(item.id)">{{item.name}} </span>
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
.mint-bread {
  white-space: nowrap;
  font-size: 0;
  width: 100%;
  overflow: auto;
}
.mint-bread > span {
  line-height: 42px;
  display: inline-block;
  position: relative;
  font-size: 14px;
  padding: 0 28px;

  &.active {
    border-bottom-width: 1px;
    border-bottom-style: solid;
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
  }

}
.mint-bread > span:last-child:after {
  display: none;
}
</style>


