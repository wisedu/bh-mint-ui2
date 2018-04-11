<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div style="margin-bottom:15px;">
        <mt-cell title="当前选中" :value="selected" wrapperpaddingleft="20px"/>
      </div>

      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="外卖">
<!--           <mt-cell-group>
            <mt-cell v-for="n in 10" :key="n" :title="'餐厅 ' + n" />            
          </mt-cell-group> -->
          <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
            <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="false" :bottomDistance="80">
              <ul class="page-loadmore-list" style="background-color:#fff">
                <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
              </ul>
              <div slot="bottom" class="mint-loadmore-bottom">
                <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                <span v-show="bottomStatus === 'loading'">
                  <mt-spinner type="snake"></mt-spinner>
                </span>
                <span class="mint-loadmore-text">{{ bottomStatus }}</span>
              </div>
            </mt-loadmore>
          </div>
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
<!--          <img slot="icon" src="../assets/100x100.png"> -->
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单" icontype="lingdaorichengicon" badge="dot">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        <!-- <mt-badge size="normal" padding="3px" color="red" slot="badge"></mt-badge> -->
        订单
      </mt-tab-item>
      <mt-tab-item id="发现" badge="dot">
        <img slot="icon" src="../assets/100x100.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的" icontype="wodezixun" badge="figure" badgeValue="99+">
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
      selected: '外卖',
      list: [],
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: 0
    };
  },
  methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },

      loadBottom(id) {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 5; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded(id);
        }, 1500);
      }
    },

    created() {
      for (let i = 1; i <= 5; i++) {
        this.list.push(i);
      }
    },


    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top-50;
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
  }

  @component-namespace page {
    @component loadmore {
      margin-top: 60px;
      width: 100%;
      overflow-x: hidden;

      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        &:last-of-type {
          border-bottom: solid 1px #eee;
        }
      }

      @descendent listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }

      @descendent wrapper {
        overflow: scroll;
      }

      .mint-spinner {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  @component mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;

      @when rotate {
        transform: rotate(180deg);
      }
    }
  }
</style>
