<template>
  <transition :name="currentTransition">
    <!-- 修复popup一直显示不隐藏  王敏 2021-12-08-->
    <div v-show="currentValue"
      class="mint-popup mt-bg-white"
      :class="[position ? 'mint-popup-' + position : '']"
      :id="pid"
    >
    <slot></slot>
    </div>
  </transition>
</template>

<style>
@component-namespace mint {
  @component popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    backface-visibility: hidden;
    transition: 0.2s ease-out;

    @descendent top {
      top: 0;
      right: auto;
      bottom: auto;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
    }

    @descendent right {
      top: 50%;
      right: 0;
      bottom: auto;
      left: auto;
      transform: translate3d(0, -50%, 0);
    }

    @descendent bottom {
      top: auto;
      right: auto;
      bottom: 0;
      left: 50%;
      width: 100%;
      transform: translate3d(-50%, 0, 0);
    }

    @descendent left {
      top: 50%;
      right: auto;
      bottom: auto;
      left: 0;
      transform: translate3d(0, -50%, 0);
    }
  }
}

.popup-slide-top-enter,
.popup-slide-top-leave-active {
  transform: translate3d(-50%, -100%, 0);
}

.popup-slide-right-enter,
.popup-slide-right-leave-active {
  transform: translate3d(100%, -50%, 0);
}

.popup-slide-bottom-enter,
.popup-slide-bottom-leave-active {
  transform: translate3d(-50%, 100%, 0);
}

.popup-slide-left-enter,
.popup-slide-left-leave-active {
  transform: translate3d(-100%, -50%, 0);
}

.popup-fade-enter,
.popup-fade-leave-active {
  opacity: 0;
}
</style>

<script type="text/babel">
import Popup from "bh-mint-ui2/src/utils/popup";
import Vue from "vue";
if (!Vue.prototype.$isServer) {
  require("bh-mint-ui2/src/style/popup.css");
}

export default {
  name: "mt-popup",

  mixins: [Popup],

  props: {
    popupTransition: {
      type: String,
      default: "popup-slide",
    },

    position: {
      type: String,
      default: "",
    },

    pid: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      currentValue: false,

      currentTransition: this.popupTransition,
    };
  },
  beforeDestroy(){
    //页面跳转时移除节点  王敏 2021-12-24
    this.$el.remove();
  },
  watch: {
    currentValue(val) {
      if (!val) {
        this.$emit("maskCallback");
        if (this.pid) {
          document.getElementById(this.pid).style.overflow = null;
          document.getElementById(this.pid).style.height = null;
        }
      }
      this.$emit("input", val);
    },

    value(val) {
      this.currentValue = val;
    },
  },
  beforeMount() {
    if (this.popupTransition !== "popup-fade") {
      this.currentTransition = `popup-slide-${this.position}`;
    }
  },

  mounted() {
    //将popup组件默认添加到body中，解决ios中组件pop组件不渲染问题 王敏   YJS-6563
    this.$nextTick(() => {
      const body = document.querySelector("body");
      if (body.append) {
        body.append(this.$el);
      } else {
        body.appendChild(this.$el);
      }
    });
    //-------------
    if (this.value) {
      this.rendered = true;
      this.currentValue = true;
      this.open();
    }
  },
};
</script>