<template>
  <transition name="actionsheet-float">
    <div v-show="currentValue" class="mint-actionsheet">
      <ul class="mint-actionsheet-list" :style="{ 'margin-bottom': cancelText ? '4px' : '0' }">
        <li v-for="( item, index ) in actions" :class="item.className?'mint-actionsheet-'+item.className:''" class="mint-actionsheet-listitem" @click.stop="itemClick(item, index)">{{ item.name }}</li>
      </ul>
      <a class="mint-actionsheet-button" @click.stop="currentValue = false" v-if="cancelText">{{ cancelText }}</a>
    </div>
  </transition>
</template>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component actionsheet {
      position: fixed;
      background: $grey-lv5;
      width: 100%;
      text-align: center;
      bottom: 0;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      backface-visibility: hidden;
      transition: transform .3s ease-out;

      @descendent list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      @descendent listitem:not(:last-child) {
        border-bottom: solid 0.5px $grey-lv5;
      }

      @descendent listitem, button {
        display: block;
        width: 100%;
        height: 52px;
        line-height: 52px;
        font-size: 18px;
        color: $grey-lv1;
        background-color: $bg-lv3;
        &:active {
           background-color: #f0f0f0;
        }
      }

      @descendent primary {
        color:$danger-lv1;
      }
    }
  }

  .actionsheet-float-enter,
  .actionsheet-float-leave-active {
    transform: translate3d(-50%, 100%, 0);
  }
</style>

<script type="text/babel">
  import Popup from 'bh-mint-ui2/src/utils/popup';
  import 'bh-mint-ui2/src/style/popup.css';

  export default {
    name: 'mt-actionsheet',

    mixins: [Popup],

    props: {
      modal: {
        default: true
      },

      modalFade: {
        default: false
      },

      lockScroll: {
        default: false
      },

      closeOnClickModal: {
        default: true
      },

      cancelText: {
        type: String,
        default: '取消'
      },

      actions: {
        type: Array,
        default: () => []
      }
    },

    data() {
      return {
        currentValue: false
      };
    },

    watch: {
      currentValue(val) {
        this.$emit('input', val);
      },

      value(val) {
        this.currentValue = val;
      }
    },

    methods: {
      itemClick(item, index, evt) {
        if (item.method && typeof item.method === 'function') {
          item.method(item, index);
        }
        this.currentValue = false;
        this.$emit('click', item, index, evt);
      }
    },

    mounted() {
      if (this.value) {
        this.rendered = true;
        this.currentValue = true;
        this.open();
      }
    }
  };
</script>
