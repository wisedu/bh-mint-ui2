<template>
  <div class="mint-loadmore">
    <div class="mint-loadmore-content" :class="[{ 'is-dropped': topDropped || bottomDropped}]" :style="[{ 'transform': transform }]">
      <slot name="top">
        <div class="mint-loadmore-top" v-if="topMethod">
          <spinner v-if="topStatus === 'loading'" class="mint-loadmore-spinner" :size="20" type="fading-circle"></spinner>
          <span class="mint-loadmore-text">{{ topText }}</span>
        </div>
      </slot>
      <slot></slot>
      <slot name="bottom">
        <div class="mint-loadmore-bottom" v-if="bottomMethod">
          <spinner v-if="bottomStatus === 'loading'" class="mint-loadmore-spinner" :size="20" type="fading-circle"></spinner>
          <span class="mint-loadmore-text">{{ bottomText }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script type="text/babel">
  import spinner from 'bh-mint-ui2/packages/spinner/src/spinner/fading-circle.vue';
  import Locale from 'bh-mint-ui2/src/mixins/locale';
  export default {
    name: 'mt-loadmore',
    components: {
      'spinner': spinner
    },
    mixins: [Locale],
    props: {
      maxDistance: {
        type: Number,
        default: 0
      },
      autoFill: {
        type: Boolean,
        default: true
      },
      distanceIndex: {
        type: Number,
        default: 2
      },
      topPullText: {
        type: String,
        default: 'textPullDownRefresh' // 下拉刷新
      },
      topDropText: {
        type: String,
        default: 'textReleaseUpdate' // 释放更新
      },
      topLoadingText: {
        type: String,
        default: 'textLoading' // 加载中
      },
      topDistance: {
        type: Number,
        default: 70
      },
      topMethod: {
        type: Function
      },
      bottomPullText: {
        type: String,
        default: 'textPullUpRefresh' // 上拉刷新
      },
      bottomDropText: {
        type: String,
        default: 'textReleaseUpdate' // 释放更新
      },
      bottomLoadingText: {
        type: String,
        default: 'textLoading' // 加载中
      },
      bottomDistance: {
        type: Number,
        default: 70
      },
      bottomMethod: {
        type: Function
      },
      bottomAllLoaded: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        translate: 0,
        scrollEventTarget: null,
        containerFilled: false,
        topText: '',
        topDropped: false,
        bottomText: '',
        bottomDropped: false,
        bottomReached: false,
        direction: '',
        startY: 0,
        startScrollTop: 0,
        currentY: 0,
        topStatus: '',
        bottomStatus: ''
      };
    },

    computed: {
      transform() {
        return this.translate === 0 ? null : 'translate3d(0, ' + this.translate + 'px, 0)';
      },
      i18n(){
          return this.t('mint');
      },
      // 下拉刷新文字国际化
      computedTopPullText(){
          return this.i18n[this.topPullText] || this.topPullText;
      },
      // 下拉释放更新文字国际化
      computedTopDropText(){
          return this.i18n[this.topDropText] || this.topDropText;
      },
      // 下拉加载中文字国际化
      computedTopLoadingText(){
          return this.i18n[this.topLoadingText] || this.topLoadingText;
      },
      // 上拉刷新文字国际化
      computedBottomPullText(){
          return this.i18n[this.bottomPullText] || this.bottomPullText;
      },
      // 上拉释放更新文字国际化
      computedBottomDropText(){
          return this.i18n[this.bottomDropText] || this.bottomDropText;
      },
      // 上拉加载中文字国际化
      computedBottomLoadingText(){
          return this.i18n[this.bottomLoadingText] || this.bottomLoadingText;
      }
    },

    watch: {
      topStatus(val) {
        this.$emit('top-status-change', val);
        switch (val) {
          case 'pull':
            this.topText = this.computedTopPullText;
            break;
          case 'drop':
            this.topText = this.computedTopDropText;
            break;
          case 'loading':
            this.topText = this.computedTopLoadingText;
            break;
        }
      },

      bottomStatus(val) {
        this.$emit('bottom-status-change', val);
        switch (val) {
          case 'pull':
            this.bottomText = this.computedBottomPullText;
            break;
          case 'drop':
            this.bottomText = this.computedBottomDropText;
            break;
          case 'loading':
            this.bottomText = this.computedBottomLoadingText;
            break;
        }
      }
    },

    methods: {
      onTopLoaded() {
        this.translate = 0;
        setTimeout(() => {
          this.topStatus = 'pull';
        }, 200);
      },

      onBottomLoaded() {
        this.bottomStatus = 'pull';
        this.bottomDropped = false;
        this.$nextTick(() => {
          if (this.scrollEventTarget === window) {
            document.body.scrollTop += 50;
          } else {
            this.scrollEventTarget.scrollTop += 50;
          }
          this.translate = 0;
        });
        if (!this.bottomAllLoaded && !this.containerFilled) {
          this.fillContainer();
        }
      },

      getScrollEventTarget(element) {
        let currentNode = element;
        while (currentNode && currentNode.tagName !== 'HTML' &&
          currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
          let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
          if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode;
          }
          currentNode = currentNode.parentNode;
        }
        return window;
      },

      getScrollTop(element) {
        if (element === window) {
          return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
        } else {
          return element.scrollTop;
        }
      },

      bindTouchEvents() {
        this.$el.addEventListener('touchstart', this.handleTouchStart);
        this.$el.addEventListener('touchmove', this.handleTouchMove);
        this.$el.addEventListener('touchend', this.handleTouchEnd);
      },

      init() {
        this.topStatus = 'pull';
        this.bottomStatus = 'pull';
        this.topText = this.computedTopPullText;
        this.scrollEventTarget = this.getScrollEventTarget(this.$el);
        if (typeof this.bottomMethod === 'function') {
          this.fillContainer();
          this.bindTouchEvents();
        }
        if (typeof this.topMethod === 'function') {
          this.bindTouchEvents();
        }
      },

      fillContainer() {
        if (this.autoFill) {
          this.$nextTick(() => {
            if (this.scrollEventTarget === window) {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >=
                document.documentElement.getBoundingClientRect().bottom;
            } else {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >=
                this.scrollEventTarget.getBoundingClientRect().bottom;
            }
            if (!this.containerFilled) {
              this.bottomStatus = 'loading';
              this.bottomMethod();
            }
          });
        }
      },

      checkBottomReached() {
        if (this.scrollEventTarget === window) {
          return document.documentElement.scrollTop || document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight;
          //return document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight;
        } else {
          return parseInt(this.$el.getBoundingClientRect().bottom) <= parseInt(this.scrollEventTarget.getBoundingClientRect().bottom) + 1;//修复使用rem布局checkBottomReached不能正确校验单个列表元素小数高度而导致的不能上拉问题
        }
      },

      handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
        this.startScrollTop = this.getScrollTop(this.scrollEventTarget);
        this.bottomReached = false;
        if (this.topStatus !== 'loading') {
          this.topStatus = 'pull';
          this.topDropped = false;
        }
        if (this.bottomStatus !== 'loading') {
          this.bottomStatus = 'pull';
          this.bottomDropped = false;
        }
      },

      handleTouchMove(event) {
        if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
          return;
        }
        this.currentY = event.touches[0].clientY;
        let distance = (this.currentY - this.startY) / this.distanceIndex;
        this.direction = distance > 0 ? 'down' : 'up';
        if (typeof this.topMethod === 'function' && this.direction === 'down' &&
          this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== 'loading') {
          event.preventDefault();
          event.stopPropagation();
          if (this.maxDistance > 0) {
            this.translate = distance <= this.maxDistance ? distance - this.startScrollTop : this.translate;
          } else {
            this.translate = distance - this.startScrollTop;
          }
          if (this.translate < 0) {
            this.translate = 0;
          }
          this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
        }

        if (this.direction === 'up') {
          this.bottomReached = this.bottomReached || this.checkBottomReached();
        }
        if (typeof this.bottomMethod === 'function' && this.direction === 'up' &&
          this.bottomReached && this.bottomStatus !== 'loading' && !this.bottomAllLoaded) {
          event.preventDefault();
          event.stopPropagation();
          if (this.maxDistance > 0) {
            this.translate = Math.abs(distance) <= this.maxDistance
              ? this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance : this.translate;
          } else {
            this.translate = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance;
          }
          if (this.translate > 0) {
            this.translate = 0;
          }
          this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
        }
        this.$emit('translate-change', this.translate);
      },

      handleTouchEnd(event) {
        if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
          this.topDropped = true;
          if (this.topStatus === 'drop') {
            this.translate = '50';
            this.topStatus = 'loading';
            this.topMethod();
          } else {
            this.translate = '0';
            this.topStatus = 'pull';
          }
        }
        if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
          this.bottomDropped = true;
          this.bottomReached = false;
          if (this.bottomStatus === 'drop') {
            this.translate = '-50';
            this.bottomStatus = 'loading';
            this.bottomMethod();
          } else {
            this.translate = '0';
            this.bottomStatus = 'pull';
          }
        }
        this.$emit('translate-change', this.translate);
        this.direction = '';
      }
    },

    mounted() {
      this.init();
    }
  };
</script>

<style>
  @component-namespace mint {
    @component loadmore {
      overflow: hidden;

      @descendent content {
        @when dropped {
          transition: .2s;
        }
      }

      @descendent top, bottom {
        text-align: center;
        height: 50px;
        line-height: 50px;
      }

      @descendent top {
        margin-top: -50px;
      }

      @descendent bottom {
        margin-bottom: -50px;
      }

      @descendent spinner {
        display: inline-block;
        margin-right: 5px;
        vertical-align: middle;
      }

      @descendent text {
        vertical-align: middle;
      }
    }
  }
</style>
