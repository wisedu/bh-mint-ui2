 <template>
  <div class="page-infinite">
    <p class="page-infinite-desc">当即将滚动至列表底部时, 自动加载更多数据</p>
    <div class="page-infinite-wrapper" ref="wrapper" :style="{ 'max-height': wrapperHeight + 'px' }">
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
      </ul>
      <p v-show="loading" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中...
      </p>
      <p v-show="allLoaded" class="page-infinite-loading">没有更多数据了</p>
    </div>
    <!-- 与navbar套用 -->
<!--     <mt-navbar v-model="selected" @change="change">
      <mt-tab-item id="1" >选项一四</mt-tab-item>
      <mt-tab-item id="2" >选项二四</mt-tab-item>
      <mt-tab-item id="3" >选项三四</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" >
      <mt-tab-container-item id="1">
        <mt-cell-group>
          <mt-cell v-for="n in 20" :key="n" :title="'内容 ' + n" wrapperpaddingleft="20px"/>
        </mt-cell-group>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell-group>
          <mt-cell v-for="n in 10" :key="n" :title="'测试 ' + n" wrapperpaddingleft="20px"/>
        </mt-cell-group>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="page-infinite-wrapper" ref="wrapper" :style="{ 'max-height': wrapperHeight + 'px' }">
          <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50" infinite-scroll-immediate-check="check">
            <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
          </ul>
          <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>
            加载中...
          </p>
          <p v-show="allLoaded" class="page-infinite-loading">没有更多数据了</p>
        </div>
      </mt-tab-container-item>
    </mt-tab-container> -->
  </div>
</template>

<style>
  @component-namespace page {
    @component infinite {
      margin-top: 60px;
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        border-bottom: solid 1px #eee;
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
        margin-top: -1px;
        overflow: scroll;
      }

      @descendent loading {
        text-align: center;
        height: 50px;
        line-height: 50px;

        div {
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
        }
      }
    }
  }
</style>

<script type="text/babel">
  import axios from 'axios';
  export default {
    data() {
      return {
        list: [],
        loading: false,
        allLoaded: false,
        check: false,
        wrapperHeight: 0,
        selected: '1'
      };
    },

    methods: {
      loadMore() {
        if(this.list.length && this.list[this.list.length - 1]>=50) {
          this.allLoaded = true;
          return
        };
        this.loading = true;
        axios.get('https://res.wisedu.com/fe_components/mock/select.json').then(resp => {
          let last = this.list.length?this.list[this.list.length - 1]:0;
          for (let i = 1; i <= 4; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        });
      },
      loadMoreHandle(){
        this.loadMore()
      },
      change: function(val){
        if(val === '3') {
          this.check = true;
          this.$nextTick(function(){
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
          })
        }
      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>
