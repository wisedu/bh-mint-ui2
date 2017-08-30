<template>
  <div
    v-show="$parent.swiping || id === $parent.currentActive"
    class="mint-tab-container-item">
    <slot></slot>
  </div>
</template>

<script>
/**
 * mt-tab-container-item
 * @desc 搭配 tab-container 使用
 * @module components/tab-container-item
 *
 * @param {number|string} [id] - 该项的 id
 *
 * @example
 * <mt-tab-container v-model="selected">
 *   <mt-tab-container-item id="1"> 内容A </mt-tab-container-item>
 *   <mt-tab-container-item id="2"> 内容B </mt-tab-container-item>
 *   <mt-tab-container-item id="3"> 内容C </mt-tab-container-item>
 * </mt-tab-container>
 */

/**
 * @noteType component
 * @name TabContainerItem
 * @tagName mt-tab-container-item
 * @desc 选项卡内容节点
 * @type container|tabItem
 * @wrapClassName mint-tab-container-item
 * @uniqueKey id
 * @noDisplayInComponents true
 * @html
 * <mt-tab-container-item id="1"></mt-tab-container-item>
 */
export default {
  name: 'mt-tab-container-item',

    /**
     * @noteType prop
     * @field id
     * @desc id
     * @type input
     * @value
     */
  props: ['id']
};
</script>

<style>
  @component-namespace mint {
    @component tab-container-item {
      position: relative;
      flex-shrink: 0;
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>
