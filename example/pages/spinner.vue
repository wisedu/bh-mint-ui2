<template>
  <div class="page-spinner">
    <mt-cell-group>
      <mt-cell title="默认:snake+grey-lv5+28">
        <mt-spinner></mt-spinner>
      </mt-cell>

      <mt-cell title="snake">
        <mt-spinner color="#F26666" type="snake"></mt-spinner>
      </mt-cell>

      <mt-cell title="double-bounce">
        <mt-spinner color="#FF7949" type="double-bounce" :size='30'></mt-spinner>
      </mt-cell>

      <mt-cell title="triple-bounce">
        <mt-spinner color="#FFB950" type="triple-bounce" :size='20'></mt-spinner>
      </mt-cell>

      <mt-cell title="fading-circle">
        <mt-spinner color="#A2D06B" type="fading-circle"></mt-spinner>
      </mt-cell>
    </mt-cell-group>
  </div>
</template>

<script>
export default {
  name: 'page-spinner',

  data() {
    return {

    };
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component spinner {
      margin-top: 45px;
    }
  }
</style>