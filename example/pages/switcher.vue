<template>
  <div class="page-switch">
    <div>
      <mt-switcher label="标题" v-model="value1" @change="handleChange" wrapperpaddingleft="10px">
      </mt-switcher>
      {{value1}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-switch',

  data() {
    return {
      value1: 0,
      value2: false,
      value3: true,
      value4: true
    };
  },

  methods: {
    handleChange(event) {
      console.log(event);
    }
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component switch {
      margin-top: 60px;
    }
  }
</style>
