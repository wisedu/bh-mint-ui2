<template>
  <div :class="['mint-steps','mt-bg-white', `mint-steps--${direction}`]">
    <div class="mint-steps__status mt-bColor-grey-lv5" v-if="title || description">
      <div class="mint-steps__icon" v-if="iconClass || $slots.icon">
        <slot name="icon">
          <mt-icon :class="iconClass"></mt-icon>
        </slot>
      </div>
      <div class="mint-steps__message">
        <div class="mint-steps__message-wrapper">
          <div class="mint-steps__title mt-color-grey" v-text="title"></div>
          <div class="mint-steps__desc mt-color-grey-lv3" v-text="description"></div>
        </div>
      </div>
      <slot name="message-extra">
      </slot>
    </div>
    <div class="mint-steps__items" :class="[{'mint-steps__items--alone': !title && !description}]" 
         :style="{'padding-left': direction === 'vertical' ? (paddingLeft + 'px') : ''}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mt-steps",
  props: {
    iconClass: {
      type: String,
      default: ""
    },
    title: String,
    description: String,
    direction: {
      type: String,
      default: "horizontal"
    },
    paddingLeft: {
      type: Number,
      default: 150
    }
  },
  data() {
    return {
      steps: []
    };
  }
};
</script>
<style lang="css">
.mint-steps {
  overflow: hidden;
  padding-left: 20px;
}

.mint-steps--horizontal .mint-steps__items {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  margin: 16px 10px 10px 0;
  overflow: hidden;
  position: relative;
  padding-bottom: 32px;
}

.mint-steps--horizontal .mint-steps__items.mint-steps__items--alone {
  padding-top: 10px;
}

.mint-steps__status{
  border-bottom-width:0.5px;
  border-bottom-style: solid;
}

.mint-steps__icon {
  float: left;
  margin-right: 10px;
}

.mint-steps .mint-icon {
  font-size: 23px;
  line-height: 1;
}

.mint-steps__message {
  display: table;
  height: 49px;
}

.mint-steps__message .mint-steps__message-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.mint-steps__title {
  font-size: 17px;
}

.mint-steps__desc {
  font-size: 12px;
  line-height: 1.5;
  max-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>