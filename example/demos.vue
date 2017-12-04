<template>
  <section class="page-demo">
    <div v-for="group in navs" class="page-part">
      <div class="page-title" v-text="group.title"></div>
      <mt-cell
        v-for="item in group.list" :key="item.path"
        :to="item.path"
        is-link>
        <div slot="title">
          <i :class="['indexicon', 'icon-' + item.icon]"></i>
          <span>{{ item.name }}</span>
        </div>
      </mt-cell>
    </div>
  </section>
</template>

<style>
  .page-demo {
    padding-bottom: 50px;

    .indexicon {
      font-size: 22px;
      color: #26a2ff;
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
      padding-left:20px;
      border-top:0.5px solid #e8e8e8;
      border-bottom:0.5px solid #e8e8e8;

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
