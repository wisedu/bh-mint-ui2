<template>
  <div class="page-buttonList">
    <div class="page-buttonList-item">
      <mt-button-list label="单选按钮组" :options="options" v-model="value" :display.sync="value_display"></mt-button-list>
      <p>value: {{value}}</p>
      <p>display: {{value_display}}</p>
    </div>
    <mt-layout-spacing></mt-layout-spacing>
    <div class="page-buttonList-item">
      <mt-button-list label="多选按钮组" :multiple="true" :options="options" v-model="multiValue" :display.sync="multiValue_display"></mt-button-list>
      <p>value: {{multiValue}}</p>
      <p>display: {{multiValue_display}}</p>
    </div>


  </div>
</template>

<script>
export default {
  name: 'button',
  data() {
    return {
      value: '',
      value_display: '',
      'multiValue': '',
      'multiValue_display': '',
      options: [
        { id: 0, name: '女' },
        { id: 1, name: '男' },
        { id: 2, name: '未知' }
      ]
    };
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component buttonList {
      margin-top: 45px;

      @descendent item {
        & p{
          margin: 10px;
        }
      }
    }
  }
</style>
