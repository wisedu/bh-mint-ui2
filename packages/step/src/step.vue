<template>
  <div class="mint-step" :class="stepClass">
    <div class="mint-step__circle-container mt-bg-lv3">
      <i class="mint-icon mint-icon-checked iconfont icon-wancheng mt-color-primary" v-if="status === 'finish'"></i>
      <i class="mint-icon mint-icon-checked iconfont icon-weiwancheng mt-color-danger" v-else-if="status === 'error'"></i>
      <i class="mint-icon mint-icon-checked iconfont icon-jijiangdaoqi mt-color-warning" v-else-if="status === 'process'"></i>
      <i class="mint-step__circle mt-bg-grey-lv5" v-else></i>
    </div>
    <div class="mint-step__time mt-color-grey-lv4">
      <slot name="left"></slot>
    </div>
    <div class="mint-step__title">
      <slot></slot>
    </div>
    <div class="mint-step__line mt-bg-grey-lv6"></div>
  </div>
</template>

<script>
export default {
  name: "mt-step",
  props: {
    status: String
  },
  data() {
    return {
    };
  },
  beforeCreate() {
    this.$parent.steps.push(this);
  },
  computed: {
    stepClass() {
      const status = this.status;
      const statusClass = status ? "mint-step--" + status : "";
      const stepClass = status==='finish'?"mt-color-grey-lv4":"mt-color-grey";
      const directionClass = `mint-step--${this.$parent.direction}`;
      return [directionClass, statusClass,stepClass];
    }
  }
};
</script>
<style lang="css">

.mint-step {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  font-size: 14px;
  position: relative;
}

.mint-step--horizontal {
  float: left;
}

.mint-step--horizontal:first-child .mint-step__title {
  -webkit-transform: none;
  transform: none;
  margin-left: 0;
}

.mint-step--horizontal:last-child {
  position: absolute;
  right: 10px;
  width: auto;
}

.mint-step--horizontal:last-child .mint-step__title {
  -webkit-transform: none;
  transform: none;
  margin-left: 0;
}

.mint-step--horizontal:last-child .mint-step__circle-container {
  left: auto;
  right: -9px;
}

.mint-step--horizontal:last-child .mint-step__line {
  width: 0;
}

.mint-step--horizontal .mint-step__circle-container {
  position: absolute;
  top: 30px;
  left: -6px;
  height: 23px;
  padding: 0 8px;
  z-index: 1;
}

.mint-step--horizontal .mint-step__title {
  font-size: 14px;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
  display: inline-block;
  margin-left: 3px;
}

.mint-step--horizontal .mint-step__line {
  position: absolute;
  left: 0px;
  top: 34px;
  width: 100%;
  height: 1px;
}



.mint-step--horizontal.mint-step--process .mint-step__circle-container,
.mint-step--horizontal.mint-step--error .mint-step__circle-container,
.mint-step--horizontal.mint-step--finish .mint-step__circle-container {
  top: 24px;
}

.mint-step--process .mint-icon {
  font-size: 23px;
  line-height: 23px;
}

.mint-step--finish .mint-icon {
  font-size: 23px;
  line-height: 23px;
}

.mint-step--error .mint-icon {
  font-size: 23px;
  line-height: 23px;
}

.mint-step .mint-step__circle {
  display: block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.mint-step--vertical {
  float: none;
  display: block;
  font-size: 14px;
  line-height: 23px;
  padding: 10px 10px 20px 0;
}

.mint-step--vertical .mint-step__time{
    left: -132px;
    width: 80px;
    text-align: right;
    position: absolute;
}

.mint-step--vertical:not(:last-child)::after {
  border-bottom-width: 1px;
}


.mint-step--vertical .mint-step__circle-container > i {
  position: absolute;
  z-index: 2;
}

.mint-step--vertical .mint-icon-checked {
  top: 12px;
  left: -37px;
  height: 23px;
  font-size: 23px;
}

.mint-step--vertical .mint-step__circle {
  top: 16px;
  left: -30px;
}

.mint-step--vertical .mint-step__line {
  position: absolute;
  top: 0;
  left: -26px;
  width: 1px;
  height: 100%;
}
.mint-step--vertical:first-child .mint-step__line{
  top: 16px;
  height: calc(100% - 16px);
}

.mint-step--vertical:last-child .mint-step__line {
  height: 16px;
}
</style>