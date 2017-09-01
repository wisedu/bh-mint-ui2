<template>
  <transition name="mint-indicator">
    <div class="mint-indicator" v-show="visible">
      <div class="mint-indicator-wrapper"
           :class="{'mint-indicator-top': !!text}"
           :style="{ 'padding': text ? '5px 10px' : '15px' }">
        <spinner class="mint-indicator-spin" :type="convertedSpinnerType" :size="!!text ? 20 : 32"></spinner>
        <span class="mint-indicator-text" :class="{'is-top': !!text}" v-show="text">{{ text }}</span>
      </div>
      <div class="mint-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<style>
@component-namespace mint {
  @component indicator {
    transition: opacity .2s linear;

    @descendent wrapper {
      position: fixed 50% * * 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      box-sizing: border-box;
      text-align: center;
    }
    @descendent top {
      position: fixed 10% * * 50%;
      display: flex;
      border-radius: 20px;
    }

    @descendent text {
      display: block;
      color: #fff;
      text-align: center;
      margin-top: 10px;
      font-size: 16px;
      @when top {
        font-size: 14px;
        height: 20px;
        line-height: 20px;
        margin-left: 6px;
        margin-top: 0px;
      }
    }

    @descendent spin {
      display: inline-block;
      text-align: center;
    }

    @descendent mask {
      position: fixed 0 * * 0;
      size: 100%;
      opacity: 0;
      background: transparent;
    }
  }
}

.mint-indicator-enter,
.mint-indicator-leave-active {
  opacity: 0;
}
</style>

<script type="text/babel">
  import Spinner from 'bh-mint-ui2/packages/spinner/index.js';
  if (process.env.NODE_ENV === 'component') {
    require('bh-mint-ui2/packages/spinner/style.css');
  }

  export default {
    data() {
      return {
        visible: false
      };
    },

    components: {
      Spinner
    },

    computed: {
      convertedSpinnerType() {
        switch (this.spinnerType) {
          case 'double-bounce':
            return 1;
          case 'triple-bounce':
            return 2;
          case 'fading-circle':
            return 3;
          default:
            return 0;
        }
      }
    },

    props: {
      text: String,
      spinnerType: {
        type: String,
        default: 'snake'
      }
    }
  };
</script>
