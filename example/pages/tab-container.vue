<template>
  <div style="margin-top:44px;position:relative">
    <div class="nav">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'" type="primary">tab 1</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'" type="warning">tab 2</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'" type="danger">tab 3</mt-button>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <mt-cell-group>
            <mt-cell v-for="n in 10" :key="n" title="tab-container 1"></mt-cell>
          </mt-cell-group> 
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell-group>
            <mt-cell v-for="n in 5" :key="n" title="tab-container 2"></mt-cell>            
          </mt-cell-group>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell-group>
            <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
          </mt-cell-group>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-tab-container',
  data() {
    return {
      active: 'tab-container1'
    };
  }
};
</script>

<style lang="css" scoped>
  .item {
    display: inline-block;
  }

  .nav {
    padding: 10px;
  }

  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
</style>
