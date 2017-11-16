<template>
    <div>
        <div v-if="isShowMenu" class="bh-ddm" style="zIndex:10;">
          <slot name="menu">
          </slot>
        </div>
    </div>
</template>
<style>
.bh-ddm {
  background-color: #fff;
  border-bottom: solid 1px #eee;
  overflow: auto;
  /* position: absolute; */
  width: 100%;
}
</style>
<script>
export default {
  name: 'mt-dropdown-menus',
  data() {
    return {
      
    };
  },
  props: {
    isShowMenu: {
      type: Boolean,
      default: false
    }
  },
  computed: {
  },
  components: {},
  created() {
  },
  watch: {
  },
  methods: {
  }
};
</script>