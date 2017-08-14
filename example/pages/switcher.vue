<template>
  <div class="page-switch">
    <div class="page-title">Switcher</div>
    <div class="page-part page-switch-padding">
      <mt-switcher label="标题" v-model="value1" @change="handleChange">
      </mt-switcher>
      <!-- <mt-switcher label="标题" v-model="value2" @change="handleChange">
      </mt-switcher>
      <mt-switcher label="标题" v-model="value3" @change="handleChange">
      </mt-switcher>
      <mt-switcher label="标题" v-model="value4" @change="handleChange">
      </mt-switcher> -->
      {{value1}}
    </div>

    <!-- <div class="page-part page-switch-padding">
      <mt-switcher v-model="value4" @change="handleChange">
        <label v-text="value4"></label>
      </mt-switcher>
    </div> -->

    <!-- <mt-cell :title="'选项 ' + value2">
      <mt-switcher v-model="value2" @change="handleChange"></mt-switcher>
    </mt-cell>
    <mt-cell :title="'选项 ' + value3">
      <mt-switcher v-model="value3" @change="handleChange"></mt-switcher>
    </mt-cell> -->
  </div>
</template>

<script>
export default {
  name: 'page-switch',

  data() {
    return {
      value1: false,
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
      @descendent padding {
        padding: 0 10px;
      }
    }
  }
</style>
