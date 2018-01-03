<template>
  <section class="page-demo">
    <div v-for="group in navs" class="page-part">
      <div class="page-title" v-text="group.title"></div>
      <div class="page-part-swapper">
        <mt-cell-group>
          <mt-cell
            v-for="item in group.list" :key="item.path"
            :to="item.path"
            is-link>
            <div slot="title">
              <i :class="['indexicon', 'icon-' + item.icon, 'mt-color-primary']"></i>
              <span>{{ item.name }}</span>
            </div>
          </mt-cell>
        </mt-cell-group>
      </div>
    </div>
  </section>
</template>

<style>
  .page-demo {
    padding-bottom: 50px;

    .indexicon {
      font-size: 22px;
      display: inline-block;
      width: 30px;
      vertical-align: middle;

      &.icon-swipe {
        font-size: 26px;
      }
      &.icon-checklist {
        font-size: 18px;
      }
    }
  }
  @component-namespace page {
    @component title {
      font-size: 20px;
      margin: 0 auto;
      padding:20px 0;
      text-align: center;
      display: block;
      line-height: 1;
    }

    @component part {
      margin-bottom: 15px;
      background-color:#fff;


      &:last-child {
        margin-bottom:0;
      }
    }
  }
</style>

<script type="text/babel">
  import { navs } from './route';

  export default {
    data() {
      return {
        navs: []
      };
    },

    created() {
      this.navs = navs;
    }
  };
</script>
