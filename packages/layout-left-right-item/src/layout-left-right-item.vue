<template>
  <div @click="handleClick" class="mint-layout-lr-item mint-layout-container" :position="position" :style="{ flex: percentageWidth}">
      <slot></slot>
  </div>
</template>
<script>
    /**
     * @noteType component
     * @name LayoutLeftRightItem
     * @tagName mt-layout-left-right-item
     * @desc 左右布局容器节点
     * @type container
     * @wrapClassName mint-layout-lr-item
     * @noDisplayInComponents true
     * @html
     * <mt-layout-left-right-item slot="left" position="left"></mt-layout-left-right-item>
     */
export default {
  name: 'mt-layout-left-right-item',
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    },
  props: {
      position: String,
      percentage: String
  },
    computed: {
        percentageWidth: function() {
            let percentage = this.percentage;
            if (typeof percentage === 'undefined' || percentage === null) {
                percentage = '';
            }
            if(/^\d+%$/.test(percentage)){

                return percentage + '%';
            }else{
              console.log(percentage)
                return percentage;
            }
        }
    }
};
</script>
<style lang="css">
  @component-namespace mint {
    @component layout-lr-item {
      position: relative;
      flex: 1;
      align-self: center;
    }
  }
</style>
