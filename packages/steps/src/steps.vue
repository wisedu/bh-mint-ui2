<template>
  <div :class="['mint-steps', `mint-steps--${direction}`]">
    <div class="mint-steps__status" v-if="title || description">
      <div class="mint-steps__icon" v-if="icon || $slots.icon">
        <slot name="icon">
          <!-- <mint-icon :name="icon" :class="iconClass"></mint-icon> -->
        </slot>
      </div>
      <div class="mint-steps__message">
        <div class="mint-steps__message-wrapper">
          <div class="mint-steps__title" v-text="title"></div>
          <div class="mint-steps__desc" v-text="description"></div>
        </div>
      </div>
      <slot name="message-extra">
      </slot>
    </div>
    <div class="mint-steps__items" :class="{
        'mint-steps__items--alone': !title && !description
      }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import Icon from '../icon';
export default {
  name: "mint-steps",
  components: {
    // [Icon.name]: Icon
  },
  props: {
    active: Number,
    icon: String,
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
    activeColor: {
      type: String,
      default: "#06bf04"
    }
  },
  data() {
    return {
      steps: []
    };
  }
};
</script>
<style>
.mint-steps {
  overflow: hidden;
  background-color: #fff;
}

.mint-steps--horizontal {
  padding: 0 10px;
}

.mint-steps--horizontal .mint-steps__items {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  margin: 0 0 10px;
  overflow: hidden;
  position: relative;
  padding-bottom: 22px;
}

.mint-steps--horizontal .mint-steps__items.mint-steps__items--alone {
  padding-top: 10px;
}

.mint-steps--vertical {
  padding: 0 0 0 35px;
}

.mint-steps__icon {
  float: left;
  margin-right: 10px;
}

.mint-steps .mint-icon {
  font-size: 40px;
  line-height: 1;
}

.mint-steps__message {
  display: table;
  height: 40px;
  margin: 15px 0;
}

.mint-steps__message .mint-steps__message-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.mint-steps__title {
  font-size: 14px;
  color: #333;
}

.mint-steps__desc {
  font-size: 12px;
  line-height: 1.5;
  color: #999;
  max-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>