<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div style="margin-bottom:15px;">
        <mt-cell title="当前选中" :value="selected" wrapperpaddingleft="20px"/>
      </div>

      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="外卖">
          <mt-cell-group>
            <mt-cell v-for="n in 10" :key="n" :title="'餐厅 ' + n" />            
          </mt-cell-group>
        </mt-tab-container-item>
        <mt-tab-container-item id="订单">
          <mt-cell-group>
            <mt-cell v-for="n in 5" :key="n" :title="'订单 ' + n" />
          </mt-cell-group>
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <mt-cell-group>
            <mt-cell v-for="n in 7" :key="n" :title="'发现 ' + n" />
          </mt-cell-group>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <div class="page-part">
            <mt-cell-group>
              <mt-cell v-for="n in 12" :key="n" :title="'我的 ' + n" />              
            </mt-cell-group>
          </div>
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖" icontype="home">
        <!-- <img slot="icon" src="../assets/100x100.png">-->
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单" icontype="lingdaorichengicon">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        <mt-badge size="normal" padding="3px" color="red" slot="badge"></mt-badge>
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/100x100.png">
        <mt-badge size="normal" padding="3px" color="red" slot="badge"></mt-badge>
        发现
      </mt-tab-item>
      <mt-tab-item id="我的" icontype="wodezixun">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '外卖'
    };
  }
};
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    padding-top:44px;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }

 .mint-tab-item:nth-child(2) span{
    top: 8px;
    right: 33px;
  }
  .mint-tab-item:nth-child(3) span{
    top: 2px;
    right: 29px;
  }
</style>
