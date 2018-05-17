<template>
  <div class="mint-picker-column" :class="className">
    <div class="mint-picker-column__frame mint-hairline--top-bottom mt-bColor-after-grey-lv6" :style="frameStyle" />
    <ul
      :style="wrapperStyle"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
      ref="ul"
    >
      <li
        v-for="(option, index) in options"
        class="mt-picker-column-item"
        :class="[
          {'mint-picker-column--disabled': isDisabled(option)},
          {'mint-picker-column--selected': index === currentIndex},
          index === currentIndex?'mt-color-theme':'mt-color-grey'
        ]"
        @click="setIndex(index)"
        :style="frameStyle">
          <div>
            <span v-text="getOptionText(option)" :style="frameStyle"></span>
          </div>
        </li>
    </ul>
  </div>
</template>

<style>
  .mt-picker-column-item div{
    display: inline-block;
  }
  .mt-picker-column-item div span{
    display: table-cell;
    vertical-align: middle;
  }
  .mint-picker-column>ul {
    width: calc(100% + 7px);
  }
  .mint-picker-column>ul::-webkit-scrollbar {
    display:none;
  }
</style>
<script>
const DEFAULT_DURATION = 200;
const range = (num, arr) => Math.min(Math.max(num, arr[0]), arr[1]);
export default {
  name: 'mt-picker-column',
  props: {
    valueKey: String,
    columnIndex:Number,
    className: String,
    options: {
      type: Array,
      default: () => []
    },
    itemHeight: {
      type: Number,
      default: 44
    },
    visibileColumnCount: {
      type: Number,
      default: 5
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    isInterrelated:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      startY: 0,
      offset: 0,
      duration: 0,
      startOffset: 0,
      currentIndex: this.defaultIndex
    };
  },
  created() {
    this.$parent && this.$parent.children.push(this);
  },
  mounted() {
    this.setIndex(this.currentIndex);
  },
  destroyed() {
    this.$parent && this.$parent.children.splice(this.$parent.children.indexOf(this), 1);
    clearTimeout(this.visibleTimer);
    clearInterval(this.scrollEndInterval);
  },
  watch: {
    defaultIndex() {
      this.setIndex(this.defaultIndex);
    },
    options(next, prev) {
      if (JSON.stringify(next) !== JSON.stringify(prev)) {
        clearInterval(this.scrollEndInterval);
        this.setIndex(this.defaultIndex);
      }
    },
    currentIndex(index) {
      clearTimeout(this.visibleTimer);
      //判断元素是否隐藏
      if (this.$el.offsetParent) {
        this.$emit('change', this.columnIndex ,index);
      } else {
        //隐藏，启动定时器
        let timer = () => {
          clearTimeout(this.visibleTimer);
          if (this.$el.offsetParent) {
            this.$refs.ul.scrollTop = -this.offset;
            this.$emit('change', this.columnIndex ,index);
            return;
          }
          this.visibleTimer = setTimeout(timer, 30);
        }
        timer();
      }
    }
  },
  computed: {
    count() {
      return this.options.length;
    },
    wrapperStyle() {
      const { itemHeight, visibileColumnCount } = this;
      //lineHeight: itemHeight + 'px',
      return {
        // transition: `${this.duration}ms`,
        // transform: `translate3d(0, ${this.offset}px, 0)`,
        height: itemHeight * visibileColumnCount + 'px',
        overflow: 'auto',
        paddingTop: itemHeight * (visibileColumnCount - 1) / 2 + 'px',
        paddingBottom: itemHeight * (visibileColumnCount - 1) / 2 + 'px'
      };
    },
    frameStyle() {
      return {
        height: this.itemHeight + 'px'
      }
    },
    currentValue() {
      return this.options[this.currentIndex];
    }
  },
  methods: {
    onTouchStart(event) {
      clearInterval(this.scrollEndInterval);
      this.startY = event.touches[0].clientY;
      this.startOffset = this.offset;
      this.duration = 0;
    },
    onTouchMove(event) {
      // const deltaY = event.touches[0].clientY - this.startY;
      // this.offset = range(this.startOffset + deltaY, [
      //   -(this.count * this.itemHeight),
      //   this.itemHeight
      // ]);
    },
    onTouchEnd() {
      let scrollTop = this.$refs.ul.scrollTop;
      //启动定时器，判断滚动是否结束
      this.scrollEndInterval = setInterval(() => {
          let isHidden = !this.$el.offsetParent;
          if (this.$refs.ul.scrollTop === scrollTop || isHidden) {
            clearInterval(this.scrollEndInterval);
            if (!isHidden) {
              this.offset = -this.$refs.ul.scrollTop;
            } else {
              this.offset = -scrollTop;
            }
            if (this.offset !== this.startOffset) {
              this.duration = DEFAULT_DURATION;
              const index = range(Math.round(-this.offset / this.itemHeight), [
                0,
                this.count - 1
              ]);
              this.setIndex(index);
            }
          } else {
            scrollTop = this.$refs.ul.scrollTop;
          }
      }, 100);
    },
    adjustIndex(index) {
      index = range(index, [0, this.count]);
      for (let i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(this.options[i])) return i;
      }
    },
    isDisabled(option) {
      return typeof option === 'object' && option.disabled;
    },
    getOptionText(option) {
      return typeof option === 'object' && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex(index) {
      index = this.adjustIndex(index);
      this.offset = -index * this.itemHeight;
      this.currentIndex = index;
      this.$refs.ul.scrollTop = -this.offset;
    },
    setValue(value) {
      const { options, valueKey } = this;
      for (let i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          this.setIndex(i);
          return;
        }
      }
    }
  }
};
</script>