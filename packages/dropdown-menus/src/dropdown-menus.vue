<template>
    <div>
        <div class="bh-ddb">
          <div v-for="(item,index) in options" class="bh-ddb-item" :class="{'bh-ddb-item-selected':item.active}" v-bind:style="{ width: itemWidth}" @click="setButtonSelected(item,index)">
              <label>
                  {{item.text}}
                  <i class="bh-ddb-i" :class="{'bh-ddb-i-default':!item.active,'bh-ddb-i-selected':item.active,}"></i>
              </label>
          </div>
        </div>
        <div v-if="isShowMenu" class="bh-ddm" style="zIndex:10">
            <div v-if="type === 1" class="bh-ddm-one" :style="{'maxHeight':maxHeight}">
                <div v-for="(item,index) in menuOptions" class="bh-ddm-item" :class="{'bh-ddm-item-selected':item.active}" @click="setSelected(item,index)">
                    {{item.text}}
                    <i class="bh-ddm-item-img" v-if="item.active"></i>
                </div>
            </div>
            <div v-else-if="type === 2" class="bh-ddm-two" :style="{'maxHeight':maxHeight}">
                <div class="bh-ddm-lv1-container">
                    <div v-for="(item,index) in menuOptions" class="bh-ddm-lv1-item" :class="{'bh-ddm-lv1-item-selected':item.active}" @click="setSelected(item,index)">
                        {{item.text}}
                    </div>
                </div>
                <div class="bh-ddm-lv2-container">
                    <div v-for="(item,index) in subOptions" class="bh-ddm-lv2-item" :class="{'bh-ddm-lv2-item-selected':item.active}" @click="setLv2Selected(item,index)">
                        {{item.text}}
                        <i class="bh-ddm-item-img" v-if="item.active"></i>
                    </div>
                </div>   
            </div>
            <div v-else-if="type === 3" class="bh-ddm-three" :style="{'maxHeight':maxHeight}">
                <div class="bh-ddm-lv1-container">
                    <div v-for="(item,index) in menuOptions" class="bh-ddm-lv1-item" :class="{'bh-ddm-lv1-item-selected':item.active}" @click="setSelected(item,index)">
                        {{item.text}}
                    </div>
                </div>
                <div class="bh-ddm-lv2-container">
                    <div v-for="(item,index) in subOptions" class="bh-ddm-lv2-item" :class="{'bh-ddm-lv2-item-selected':item.active}" @click="setLv2Selected(item,index)">
                        {{item.text}}
                    </div>
                </div>
                <div class="bh-ddm-lv3-container">
                    <div v-for="(item,index) in grandSonOptions" class="bh-ddm-lv3-item" :class="{'bh-ddm-lv3-item-selected':item.active}" @click="setLv3Selected(item,index)">
                        {{item.text}}
                        <i class="bh-ddm-item-img" v-if="item.active"></i>
                    </div>
                </div>   
            </div>
            <!-- 筛选类型 -->
            <div v-if="type === 'filter'" class="bh-ddm-filter" :style="{'height':bodyHeight}">
              <div style="padding:0px 20px;">
                <div v-for="(item,index) in menuOptions">
                    <div class="bh-ddm-filter-text">
                        {{item.text}}
                    </div>
                    <div v-for="(ele,inx) in item.children" class="bh-ddm-filter-tag" :class="{'bh-ddm-filter-tag-selected':ele.active}" @click="addFilterTags(ele,inx,item)">
                      {{ele.text}}
                    </div>
                </div>
              </div>
              <div class="bh-ddm-filter-buttons">
                <div class="bh-ddm-filter-button" @click="resetFilter">
                  重置
                </div>
                <div class="bh-ddm-filter-button" @click="sureFilter">
                  确定
                </div>
              </div>
            </div>
        </div>
        <!-- 遮罩层 -->
        <div v-if="isShowShadow" class="bh-ddm-shadow" @click="cancelShadow"></div>
    </div>
</template>

<script>
export default {
  name: 'mt-dropdown-menus',
  data() {
    return {
      itemWidth: "",
      subOptions: [],
      subParentOptions: "",
      grandSonOptions: [],
      grandSonParentOptions: "",
      maxHeight: "",
      bodyHeight:"",
      isShowShadow: false,
      isShowMenu: false,
      type: 1,
      line: 10,
      menuOptions: [],
      menuParent: {},
      resultFilterData: {}
    };
  },
  props: {
    options: {
      type: Array,
      default: [],
      required: true
    },
    menuOption: {
      type: Array,
      default: [],
      required: true
    }
  },
  computed: {},
  components: {},
  created() {
    this.maxHeight = this.line * 44 + "px";
    this.bodyHeight = (screen.height || document.body.scrollHeight) + "px";
    this.itemWidth = 100 / this.options.length + "%";
  },
  watch: {
    menuOptions: function(newData, oldData) {
      //切换变化时
      if (oldData.length != 0 && newData.length != 0) {
        if (oldData[0].ddmId != newData[0].ddmId) {
          if (!isNaN(this.type)) {
            if (
              this.menuOptions.length &&
              this.menuOptions[0].ddmId.indexOf("All") === -1
            ) {
              var totalItem = {
                text: "全部" + this.menuParent.text,
                ddmId: this.menuParent.ddmId + "All",
                originText: this.menuParent.text,
                originddmId: this.menuParent.ddmId
              };
              this.menuOptions.unshift(totalItem);
            }
          }
        }
      }
      //第一次进来
      if (oldData.length === 0 && newData.length != 0) {
        if (!isNaN(this.type)) {
          var totalItem = {
            text: "全部" + this.menuParent.text,
            originText: this.menuParent.text,
            originddmId: this.menuParent.ddmId,
            ddmId: this.menuParent.ddmId + "All"
          };
          this.menuOptions.unshift(totalItem);
        }
      }
    },
    line: function(newData, oldData) {
      this.maxHeight = newData * 44 + "px";
    }
  },
  methods: {
    setButtonSelected: function(param, index) {
      var that = this;
      this.$nextTick(function() {
        this.options.forEach(function(item) {
          that.$set(item, "active", false);
        });
        that.$set(param, "active", true);
      });
      this.menuOptions = this.menuOption[index].menuOptions;
      this.type = this.menuOption[index].type;
      this.line = this.menuOption[index].line || 10;
      if (param.ddmId != this.menuParent.ddmId) {
        this.menuParent = param;
        //初始化二级三级项数组
        this.subOptions = [];
        this.grandSonOptions = [];
      }
      //选中后，重新打开，定位到选中的项
      if (this.menuOptions.length > 0) {
        this.menuOptions.forEach(function(item) {
          if (item.active && item.children && item.children.length > 0) {
            that.subOptions = item.children;
            that.subOptions.forEach(function(ele) {
              if (ele.active && ele.children && ele.children.length > 0) {
                that.grandSonOptions = ele.children;
              }
            });
          }
        });
      }
      this.isShowMenu = true;
      this.isShowShadow = true;
    },
    setSelected: function(param, index) {
      var that = this;
      this.$nextTick(function() {
        this.menuOptions.forEach(function(item) {
          that.$set(item, "active", false);
        });
        that.$set(param, "active", true);
        if (this.type != 1) {
          if (param.ddmId.indexOf("All") > -1) {
            //清除二三级的选中信息
            if (this.subOptions.length > 0) {
              this.subOptions.forEach(function(ele) {
                if (ele.active) {
                  ele.active = false;
                }
              });
            }
            if (this.grandSonOptions.length > 0) {
              this.grandSonOptions.forEach(function(ele) {
                if (ele.active) {
                  ele.active = false;
                }
              });
            }
            this.subOptions = [];
            this.grandSonOptions = [];
            var returnData = {
              node: {
                text: param.originText,
                ddmId: param.originddmId
              }
            };
            this.postEventToParent(returnData);
          } else {
            //设置二级列表数据来源
            this.subOptions = param.children;
            this.subParentOptions = param;
            //清除切换一级列表导致二级数据的变化，比如，选择某一级，点击了其二级项，再切换一级，再点击此二级的项，再返回之前的某一级，发现其二级保留了之前的状态
            this.subOptions.forEach(function(item) {
              that.$set(item, "active", false);
            });
          }
        } else {
          if (param.ddmId.indexOf("All") > -1) {
            var returnData = {
              node: {
                text: param.originText,
                ddmId: param.originddmId
              }
            };
          } else {
            var returnData = {
              node: param
            };
          }
          this.postEventToParent(returnData);
        }
      });
    },
    setLv2Selected: function(param, index) {
      var that = this;
      this.$nextTick(function() {
        this.subOptions.forEach(function(item) {
          that.$set(item, "active", false);
        });
        that.$set(param, "active", true);
        if (this.type != 2) {
          //设置三级列表数据来源
          this.grandSonOptions = param.children;
          this.grandSonParentOptions = param;
          //清除切换二级列表导致三级数据的变化
          this.grandSonOptions.forEach(function(item) {
            that.$set(item, "active", false);
          });
        } else {
          var returnData = {
            node: param,
            parentNode: this.subParentOptions
          };
          this.postEventToParent(returnData);
        }
      });
    },
    setLv3Selected: function(param, index) {
      var that = this;
      this.$nextTick(function() {
        this.grandSonOptions.forEach(function(item) {
          that.$set(item, "active", false);
        });
        that.$set(param, "active", true);
        var returnData = {
          node: param,
          parentNode: this.grandSonParentOptions,
          grandNode: this.subParentOptions
        };
        this.postEventToParent(returnData);
      });
    },
    cancelShadow: function() {
      this.options.forEach(function(ele) {
        if (ele.active) {
          ele.active = false;
        }
      });
      this.isShowShadow = false;
      this.isShowMenu = false;
    },
    postEventToParent: function(data) {
      var that = this;
      if (!isNaN(that.type)) {
        this.options.forEach(function(ele) {
          if (ele.active) {
            ele.active = false;
            ele.text = data.node.text;
          }
        });
      }
      this.resultFilterData[this.menuParent.ddmId] = data;
      this.$emit("dropDownButtonMenu", this.resultFilterData);
      setTimeout(function() {
        that.cancelShadow();
      }, 200);
    },
    addFilterTags: function(node, index, parent) {
      var that = this;
      if (node.active) {
        that.$set(node, "active", false);
      } else {
        that.$set(node, "active", true);
      }
    },
    resetFilter: function() {
      this.menuOptions.forEach(function(item) {
        item.children.forEach(function(subItem) {
          subItem.active = false;
        });
      });
    },
    sureFilter: function() {
      var that = this;
      var filterArray = [];
      this.menuOptions.forEach(function(item) {
        item.children.forEach(function(subItem) {
          if (subItem.active) {
            filterArray.push({
              node: subItem,
              parentNode: item
            });
          }
        });
      });
      that.postEventToParent(filterArray);
    }
  }
};
</script>
<style>
.bh-ddb {
  overflow: auto;
  padding: 10px 0;
  border-bottom: solid 0.5px #ddd;
  border-top: solid 0.5px #ddd;
}
.bh-ddb-item {
  box-sizing: border-box;
  float: left;
  border-right: solid 0.5px rgba(0, 0, 0, 0.25);
}
.bh-ddb .bh-ddb-item:last-child {
  border-right: none;
}
.bh-ddb-item label {
  position: relative;
  color: #999;
  display: block;
  width: 60px;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}
.bh-ddb-item.bh-ddb-item-selected label {
  color: #38cdc1 !important;
}
.bh-ddb-i {
  position: absolute;
  top: 8px;
  right: 0px;
}
.bh-ddb-i-default {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #bfc3c7;
}
.bh-ddb-i-selected {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 6px solid #38cdc1;
}
.bh-ddm {
  background-color: #fff;
  border-bottom: solid 1px #eee;
  overflow: auto;
  position: absolute;
  width: 100%;
}
.bh-ddm-item {
  text-align: left;
  padding: 11px 16px;
  border-bottom: solid 0.5px #eee;
}
.bh-ddm-item-img {
  float: right;
  width: 16px;
  height: 16px;
  position: relative;
}
.bh-ddm-item-img:after {
  content: "\00a0";
  display: inline-block;
  border: 2px solid #38cdc1;
  border-top-width: 0;
  border-right-width: 0;
  width: 12px;
  height: 6px;
  -webkit-transform: rotate(-50deg);
  position: absolute;
  top: 4px;
  left: 4px;
}
.bh-ddm-item-selected {
  color: #38cdc1;
}
.bh-ddm-lv1-container {
  float: left;
  width: 30%;
  background-color: #f4f4f4;
  border-right: solid 0.5px rgba(0, 0, 0, 0.25);
}
.bh-ddm-two {
  overflow: auto;
  display: flex;
}
.bh-ddm-two .bh-ddm-lv2-container {
  float: right;
  width: 70%;
}
.bh-ddm-three {
  overflow: auto;
  display: flex;
}
.bh-ddm-three .bh-ddm-lv2-container {
  float: left;
  width: 30%;
}
.bh-ddm-three .bh-ddm-lv3-container {
  float: right;
  width: 40%;
  border-left: solid 0.5px rgba(0, 0, 0, 0.1);
}
.bh-ddm-lv1-item {
  padding: 11px 20px;
}
.bh-ddm-lv2-item {
  padding: 11px 20px;
}
.bh-ddm-lv3-item {
  padding: 11px 20px;
  box-sizing: border-box;
}
.bh-ddm-lv1-item.bh-ddm-lv1-item-selected {
  background-color: #fff;
  border-top: solid 0.5px rgba(0, 0, 0, 0.25);
  border-bottom: solid 0.5px rgba(0, 0, 0, 0.25);
  border-right: solid 0.5px #fff;
  width: calc(100% + 1px);
}
.bh-ddm-lv1-container .bh-ddm-lv1-item:first-child.bh-ddm-lv1-item-selected {
  border-top: none;
}
.bh-ddm-lv1-container .bh-ddm-lv1-item:last-child.bh-ddm-lv1-item-selected {
  border-bottom: none;
}
.bh-ddm-lv2-item-selected {
  color: #38cdc1;
}
.bh-ddm-lv3-item-selected {
  color: #38cdc1;
}
.bh-ddm-shadow {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 9;
  position: absolute;
}
.bh-ddm-filter {
  position: relative;
}
.bh-ddm-filter-text {
  padding: 15px 0 0px 0;
  color: #92969c;
}
.bh-ddm-filter-tag {
  display: inline-block;
  width: 70px;
  font-size: 16px;
  padding: 4px 0;
  text-align: center;
  margin: 10px 10px 0 0;
  border-radius: 4px;
  border: solid 0.5px rgba(0, 0, 0, 0.25);
  vertical-align: top;
}
.bh-ddm-filter-tag-selected {
  background-color: #06c1ae;
  color: #fff;
  border-color: #fff;
}
.bh-ddm-filter-buttons {
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: solid 0.5px rgba(0, 0, 0, 0.25);
}
.bh-ddm-filter-button {
  width: 50%;
  float: left;
  padding: 10px 0;
  text-align: center;
}
.bh-ddm-filter-buttons .bh-ddm-filter-button:last-child {
  background-color: #06c1ae;
  color: #fff;
}
</style>