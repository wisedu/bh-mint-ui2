<template>
  <div class="mint-selected-footer mt-bg-lv3 mt-bColor-grey-lv5">
    <div v-show="!isShowDetail" class="mint-selected-footer-bar">
      <mt-button class="mint-selected-footer-detail" :disabled="value.length === 0" size="large" @click="isShowDetail = true">查看已选({{value.length}})</mt-button>
      <mt-button class="mint-selected-footer-confirm" size="large" type="primary" @click="handleConfirm">确定</mt-button>
    </div>
    <div v-show="isShowDetail" class="mint-selected-footer-list-mask"></div>
    <div v-show="isShowDetail" class="mint-selected-footer-list-container">
      <div class="mint-selected-footer-list-header">
        <a href="javascript:void(0)" @click="handleCancel">取消</a>
        <span>已选({{value.length}})</span>
        <a @click="handleClickListConfirm" class="mint-selected-footer-list-confirm mt-color-theme" href="javascript:void(0)">确定</a>
      </div>
      <div class="mint-selected-footer-list">
        <!-- <mt-checklist v-model="currentValue" :options="listData" ></mt-checklist> -->
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  props: {
    options: {required: true, type: Array},
    value: {required: true, type: Array}
  },
  data() {
    return {
      isShowDetail: false,
      currentValue: []
    };
  },
  watch: {
    value(val) {
      this.currentValue = val.slice(0, this.value.length);
    }
  },
  computed: {
    listData() {
      if (this.value.length === 0 || this.options.length === 0) {
        return [];
      }
      return this.options.filter(item => {
        return this.value.indexOf(item.id.toString()) > -1;
      }).map(item => {
        return {
          label: item.name,
          value: item.id
        };
      });
    }
  },
  methods: {
    handleCancel() {
      this.currentValue = JSON.parse(JSON.stringify(this.value));
      this.isShowDetail = false;
      setTimeout(_ => {
      });
    },
    handleClickListConfirm() {
      this.$emit('input', this.currentValue);
      this.isShowDetail = false;
    },
    handleConfirm() {
      this.$emit('confirm-click');
    }
  },
  created() {
    this.currentValue = this.value.slice(0, this.value.length);
  }
};
</script>
<style>
@import "../../../src/style/var.css";
.mint-selected-footer {
  position: fixed;
  width: 100%;
  border-top-width: 0.5px;
  border-top-style: solid;
  padding: 7px 8px;
  left: 0;
  bottom: 0;
}

.mint-selected-footer-bar {
  display: flex;
  width: 100%;
}
.mint-selected-footer .mint-button {
  height: 34px;
  margin-top: 0;
  width: auto;
}
.mint-selected-footer .mint-selected-footer-confirm {
  width: 80px;
  flex-shrink: 0;
}
.mint-selected-footer .mint-selected-footer-detail {
  flex-grow: 1;
  margin-right: 8px;
}
.mint-selected-footer-list-container {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background: $bg-lv2;
  min-height: 50%;
  max-height: 80%;
}
.mint-selected-footer-list-header {
  display: flex;
  text-align: center;
  border-top: 1px solid $grey-lv5;
  border-bottom: 1px solid $grey-lv5;
  padding: 12px 0;
}
.mint-selected-footer-list-header a {
  flex-grow: 0;
  padding: 0 12px;
}
.mint-selected-footer-list-header span {
  flex-grow: 1;
}
.mint-selected-footer-list-container .mint-checklist-title {
  display: none;
}
.mint-selected-footer-list-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}
.mint-selected-footer-list {
  overflow: auto;
}
</style>
