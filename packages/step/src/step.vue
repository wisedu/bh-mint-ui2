<template>
  <div class="mint-step mint-hairline" :class="stepClass">
    <div class="mint-step__circle-container">
      <i class="mint-step__circle" v-if="status !== 'process'"></i>
      <i class="mint-icon mint-icon-checked" :style="{ color: $parent.activeColor }" v-else></i>
    </div>
    <div class="mint-step__title" :style="titleStyle">
      <slot></slot>
    </div>
    <div class="mint-step__line"></div>
  </div>
</template>

<script>
export default {
  name: "mint-step",
  beforeCreate() {
    this.$parent.steps.push(this);
  },
  computed: {
    status() {
      const index = this.$parent.steps.indexOf(this);
      const active = this.$parent.active;
      if (index < active) {
        return "finish";
      } else if (index === active) {
        return "process";
      }
    },
    stepClass() {
      const status = this.status;
      const statusClass = status ? "mint-step--" + status : "";
      const directionClass = `mint-step--${this.$parent.direction}`;
      return [directionClass, statusClass];
    },
    titleStyle() {
      if (this.status === "process") {
        return {
          color: this.$parent.activeColor
        };
      }
    }
  }
};
</script>
<style>
.mint-step {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  font-size: 14px;
  position: relative;
  color: #999;
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
  top: 28px;
  left: -8px;
  padding: 0 8px;
  background-color: #fff;
  z-index: 1;
}

.mint-step--horizontal .mint-step__title {
  font-size: 12px;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
  display: inline-block;
  margin-left: 3px;
}

.mint-step--horizontal .mint-step__line {
  position: absolute;
  left: 0px;
  top: 30px;
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
}

.mint-step--horizontal.mint-step--finish {
  color: #333;
}

.mint-step--horizontal.mint-step--finish .mint-step__circle,
.mint-step--horizontal.mint-step--finish .mint-step__line {
  background-color: #06bf04;
}

.mint-step--horizontal.mint-step--process {
  color: #333;
}

.mint-step--horizontal.mint-step--process .mint-step__circle-container {
  top: 24px;
}

.mint-step--horizontal.mint-step--process .mint-icon {
  font-size: 12px;
  color: #06bf04;
  line-height: 1;
  display: block;
}

.mint-step .mint-step__circle {
  display: block;
  width: 5px;
  height: 5px;
  background-color: #888;
  border-radius: 50%;
}

.mint-step--vertical {
  float: none;
  display: block;
  font-size: 14px;
  line-height: 18px;
  padding: 10px 10px 10px 0;
}

.mint-step--vertical:not(:last-child)::after {
  border-bottom-width: 1px;
}

.mint-step--vertical:first-child::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 20px;
  background-color: #fff;
  top: 0;
  left: -15px;
  z-index: 1;
}

.mint-step--vertical .mint-step__circle-container > i {
  position: absolute;
  z-index: 2;
}

.mint-step--vertical .mint-icon-checked {
  top: 12px;
  left: -20px;
  line-height: 1;
  font-size: 12px;
}

.mint-step--vertical .mint-step__circle {
  top: 16px;
  left: -17px;
}

.mint-step--vertical .mint-step__line {
  position: absolute;
  top: 0;
  left: -15px;
  width: 1px;
  height: 100%;
  background-color: #e5e5e5;
}
</style>