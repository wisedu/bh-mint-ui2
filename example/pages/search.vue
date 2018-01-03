<template>
  <div class="page-search">
    <mt-header title="Search" backgroundColor="bg-theme color-theme">
        <router-link to="/" slot="left">
          <span class="iconfont icon-keyboardarrowleft"></span>
        </router-link>
      </mt-header>
    <mt-search autofocus v-model="value" :result="filterResult" margintop="87px"></mt-search>
  </div>
</template>

<script>
export default {
  name: 'page-search',

  data() {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    };
  },

  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  }
};
</script>

<style lang="css">
  .page-search {
    height: 100%;
  }
</style>
