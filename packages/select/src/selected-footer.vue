<template>
  <div class="mint-selected-footer mt-bg-lv3 mt-bColor-grey-lv5">
    <div v-show="!isShowDetail" class="mint-selected-footer-bar">
      <mt-button class="mint-selected-footer-detail" :disabled="value.length === 0" size="large" @click="isShowDetail = true">{{i18n.viewSelected}}({{value.length}})</mt-button>
      <mt-button class="mint-selected-footer-confirm" size="large" type="primary" @click="handleConfirm">{{i18n.buttonConfirm}}</mt-button>
    </div>
    <div v-show="isShowDetail" class="mint-selected-footer-list-mask mt-bg-mask"></div>
    <div v-show="isShowDetail" class="mint-selected-footer-list-container mt-bg-lv2">
      <div class="mint-selected-footer-list-header mt-bg-lv3">
        <a href="javascript:void(0)" @click="handleCancel"><i class="iconfont icon-close"></i></a>
        <span class="mt-color-grey">{{i18n.selected}}({{value.length}})</span>
        <a @click="handleClickListConfirm" class="mint-selected-footer-list-confirm mt-color-theme" href="javascript:void(0)">{{i18n.buttonConfirm}}</a>
      </div>
      <div class="mint-selected-footer-list"  :style="[{'max-height': listHeight + 'px'}]">
        <mt-box-group v-model="currentValue">
          <mt-cell-group>
              <mt-checkbox :name="item.value" v-for="item in listData" :key="item.value" :iconpattern="iconpattern" :align="align">
                  {{item.label}}
              </mt-checkbox>
          </mt-cell-group>
        </mt-box-group>
      </div>
    </div>
  </div>  
</template>
<script>
import Locale from 'bh-mint-ui2/src/mixins/locale';
export default {
  mixins: [ Locale],
  props: {
    options: {required: true, type: Array},
    value: {required: true, type: Array},
    iconpattern: String,
    align: String
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
    },
    listHeight () {

      return document.documentElement.clientHeight*0.8-44
    },
    i18n(){
        return this.t('mint');
    },
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
.mint-selected-footer {
  position: fixed;
  width: 100%;
  border-top-width: 1px;
  border-top-style: solid;
  padding: 7px 8px;
  left: 0;
  bottom: 0;
  z-index: 999;
}

.mint-selected-footer-bar {
  display: flex;
  width: 100%;
}
.mint-selected-footer .mint-button {
  height: 44px;
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
  min-height: 50%;
  max-height: 80%;
  z-index: 1000;
}
.mint-selected-footer-list-header {
  display: flex;
  text-align: center;
  padding: 13px 0;
  font-size: 18px;
}
.mint-selected-footer-list-header a {
  flex-grow: 0;
  height: 18px;
  padding: 0 14px;
}
.mint-selected-footer-list-header .iconfont{
  font-size:30px;
  display:inline-block;
  margin-top:-4px;
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
}
.mint-selected-footer-list {
  overflow: auto;
}
</style>
