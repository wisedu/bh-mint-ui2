<template>
    <div class="page-field">
      <div style="height:45px;width:100%;"></div>
        <div style="position:relative">
            <mt-dropdown-menus :options="options" @dropDown="getSelectedButtons" @cancel="cancel" :isShowMenu="isShowMenu">
              <div v-if="isShowMenu" slot="menu">
                  <mt-box-group v-if="type==='lv1'" v-model="sexValue" align="right" >
                    <mt-cell-group>
                        <mt-radiobox align="right" :name="item.value" :disabled="item.disabled"  v-for="(item,index) in menuDatas" :key="index" iconpattern="hook">
                            {{item.label}}
                        </mt-radiobox>
                    </mt-cell-group>
                  </mt-box-group>
                  <mt-side-navbar  v-if="type==='lv2'" class="bh-ddm-sideNavbar" v-model="lv2Selected" :fixed="false">
                    <div slot="nav">
                      <mt-tab-item id="4" componentname="sidenavbar">全部国家</mt-tab-item>
                      <mt-tab-item id="1" componentname="sidenavbar">选项一</mt-tab-item>
                      <mt-tab-item id="2" componentname="sidenavbar">选项二</mt-tab-item>
                      <mt-tab-item id="3" componentname="sidenavbar">选项三</mt-tab-item>
                    </div>
                    <mt-tab-container v-model="lv2Selected" slot="content">
                      <mt-tab-container-item id="4">
                        <mt-cell-group>
                          <mt-cell :title="'国家'" :id="'countryAll'" is-link to="click" @cellClick="cellClick" cellheight='44px'/>
                        </mt-cell-group>
                      </mt-tab-container-item>
                      <mt-tab-container-item id="1">
                        <mt-cell-group>
                          <mt-cell v-for="n in 50" :key="n" :title="'内容 ' + n" :id="n" is-link to="click" @cellClick="cellClick" cellheight='44px'/>
                        </mt-cell-group>
                      </mt-tab-container-item>
                      <mt-tab-container-item id="2">
                        <mt-cell-group>
                          <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" :aria-invalid="n" is-link to="click" @cellClick="cellClick" cellheight='44px'/>
                        </mt-cell-group>
                      </mt-tab-container-item>
                      <mt-tab-container-item id="3">
                        <mt-cell-group>
                          <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" :id="n" is-link to="click" @cellClick="cellClick" cellheight='44px'/>
                        </mt-cell-group>
                      </mt-tab-container-item>
                    </mt-tab-container>
                  </mt-side-navbar>
                  <!-- <div  v-if="type==='lv2'" class="bh-ddm-two">
                      <div class="bh-ddm-lv1-container">
                          <mt-cell v-for=" item in menuDatas" :title="item.label" is-link :to="'click'" class="bh-ddm-lv1-item" :class="{'bh-ddm-lv1-item-selected':item.active}" @cellClick="setSelected(item)">
                          </mt-cell>
                      </div>
                      <div class="bh-ddm-lv2-container">
                          <mt-radiobox class="bh-radio-slot"  align="right" type="hook" :options="subMenuDatas" v-model="countryValue">
                          </mt-radiobox>
                      </div>
                  </div> -->
                  <div v-if="type==='lv3'" class="bh-ddm-three">
                      <div class="bh-ddm-lv1-container">
                        <mt-cell-group>
                          <mt-cell v-for=" (item,index) in menuDatas" :key="index" :title="item.label" is-link :to="'click'" class="bh-ddm-lv1-item" :class="{'bh-ddm-lv1-item-selected':item.active}" @cellClick="setSelected(item)">
                          </mt-cell>
                        </mt-cell-group>
                      </div>
                      <div class="bh-ddm-lv2-container">
                          <mt-cell v-for=" (item,index) in subMenuDatas" :key="index" :title="item.label" is-link :to="'click'" class="bh-ddm-lv2-item" :class="{'bh-ddm-lv2-item-selected':item.active}" @cellClick="setSubSelected(item)">
                          </mt-cell>
                      </div>
                      <div class="bh-ddm-lv3-container">
                          <mt-radiobox class="bh-radio-slot"  align="right" type="hook" :options="grandMenuDatas" v-model="trafficValue">
                          </mt-radiobox>
                      </div>
                  </div>
                  <div v-if="type==='filter'" class="bh-ddm-filter" :style="{'height':bodyHeight}">
                      <div style="padding:0 20px;">
                          <mt-button-list label="频率" :multiple="true" :plain="false" :options="filterMenuDatas" v-model="multiValue" :display.sync="multiValue_display"></mt-button-list>
                          <p>value: {{multiValue}}</p>
                          <p>display: {{multiValue_display}}</p>
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
            </mt-dropdown-menus>
            <mt-cell-group>
              <mt-cell v-for="n in 40" :key="n" :title="'内容 ' + n" cellheight="44px"/>
            </mt-cell-group>
        </div>
    </div>
</template>
<style>

</style>
<script type="text/javascript">
export default {
  name: "page-field",
  data() {
    return {
      isShowMenu: false,
      options: [
        {
          label: "性别",
          value: "sex",
          type: "lv1"
        },
        {
          label: "国家国家国",
          value: "country",
          type: "lv2"
        },
        {
          label: "交交通交通通",
          value: "traffic",
          type: "lv3"
        },
        {
          label: "筛选",
          value: "filter",
          type: "filter"
        }
      ],
      type: "",
      menuDatas: [],
      subMenuDatas: [],
      subParent: {},
      grandMenuDatas: [],
      grandParent: {},
      filterMenuDatas: [],
      multiValue: "",
      multiValue_display: "",
      menuParent: {},
      sexValue: "",
      lv2Selected:'',
      lv2SelectedId:'',
      // countryValue: "",
      trafficValue: "",
      bodyHeight: ""
    };
  },
  components: {},
  mounted() {},
  watch: {
    sexValue: function(newData, oldData) {
      var that = this;
      that.changeSelectValus(newData, that.menuDatas);
    },
    // countryValue: function(newData, oldData) {
    //   var that = this;
    //   that.changeSelectValus(newData, that.subMenuDatas);
    // },
    trafficValue: function(newData, oldData) {
      var that = this;
      that.changeSelectValus(newData, that.grandMenuDatas);
    },
    lv2SelectedId:function(newData, oldData){
      var that = this;
      that.changeSelectValus(newData);
    }
  },
  created() {
    this.bodyHeight = (screen.height || document.body.clientHeight) + "px";
  },
  methods: {
    changeSelectValus: function(newData, arr) {
      var that = this;
      var selectItem = {};
      this.isShowMenu = false;
      if (arr) {
        arr.forEach(function(item) {
          if (item.value === newData) {
            that.$set(item, "active", true);
            selectItem = item;
          } else {
            that.$set(item, "active", false);
          }
        });
      }else {
        selectItem = {
          label:newData.title,
          value:newData.id
        };
      }
      that.options.forEach(function(ele) {
        if (ele.active) {
          ele.active = false;
          ele.label = selectItem.originLabel?selectItem.originLabel:selectItem.label;
        }
      });
    },
    getSelectedButtons: function(item) {
      this.menuParent = item;
      this.type = item.type;
      this.isShowMenu = true;
      if (
        this.menuDatas[0] &&
        this.menuDatas[0].value.indexOf(item.value) > -1
      ) {
        //   与上次一样不再重置数据
      } else {
        this.subMenuDatas = [];
        this.grandMenuDatas = [];
        if (item.value === "sex") {
          this.menuDatas = [
            {
              label: "全部性别",
              value: "sexAll",
              originLabel:'性别',
              originValue:'sex'
            },
            {
              label: "男",
              value: "man"
            },
            {
              label: "女",
              value: "woman"
            },
            {
              label: "男",
              value: "man"
            },
            {
              label: "女",
              value: "woman"
            },
            {
              label: "男",
              value: "man"
            },
            {
              label: "女",
              value: "woman"
            },
            {
              label: "男",
              value: "man"
            },
            {
              label: "女",
              value: "woman"
            },
            {
              label: "男",
              value: "man"
            },
            {
              label: "女",
              value: "woman"
            },
            {
              label: "男",
              value: "man"
            },
            {
              label: "女",
              value: "woman"
            }
          ];
        } 
        // else if (item.value === "country") {
        //   this.menuDatas = [
        //     {
        //       label: "全部国家",
        //       value: "countryAll",
        //       originLabel:'国家',
        //       originValue:'country'
        //     },
        //     {
        //       label: "中国",
        //       value: "China"
        //     },
        //     {
        //       label: "美国",
        //       value: "American"
        //     }
        //   ];
        // } 
        else if (item.value === "traffic") {
          this.menuDatas = [
            {
              label: "全部交通",
              value: "trafficAll",
              originLabel:'交通',
              originValue:'traffic'
            },
            {
              label: "地铁",
              value: "metro"
            }
          ];
        } else if (item.value === "filter") {
          this.filterMenuDatas = [
            {
              name: "1次",
              id: "1time"
            },
            {
              name: "2次",
              id: "2time"
            },
            {
              name: "3次",
              id: "3time"
            },
            {
              name: "4次",
              id: "4time"
            },
            {
              name: "5次",
              id: "5time"
            },
            {
              name: "6次",
              id: "6time"
            }
          ];
        }
      }
    },
    setSelected: function(param) {
      var that = this;
      that.$nextTick(function() {
        that.menuDatas.forEach(function(item) {
          that.$set(item, "active", false);
        });
        that.$set(param, "active", true);
        if (this.type != "lv1") {
          if (param.value.indexOf("All") > -1) {
            //清除二三级的选中信息
            // if (this.subMenuDatas.length > 0) {
            //   that.subMenuDatas.forEach(function(ele) {
            //     if (ele.active) {
            //       ele.active = false;
            //     }
            //   });
            // }
            // if (that.grandMenuDatas.length > 0) {
            //   that.grandMenuDatas.forEach(function(ele) {
            //     if (ele.active) {
            //       ele.active = false;
            //     }
            //   });
            // }
            that.subMenuDatas = [];
            that.grandMenuDatas = [];
            // that.countryValue = '';
            that.trafficValue = '';
            var returnData = {
              node: {
                label: param.originLabel,
                value: param.originValue
              }
            };
            that.postEventToParent(returnData);
          } else {
            //设置二级列表数据来源
            // if (param.value === "China") {
            //   that.subMenuDatas = [
            //     {
            //       label: "江苏",
            //       value: "js"
            //     },
            //     {
            //       label: "山东",
            //       value: "sd"
            //     }
            //   ];
            // } else if (param.value === "American") {
            //   that.subMenuDatas = [
            //     {
            //       label: "纽约",
            //       value: "ny"
            //     },
            //     {
            //       label: "旧金山啊",
            //       value: "jjs"
            //     }
            //   ];
            // } else 
            if (param.value === "metro") {
              that.subMenuDatas = [
                {
                  label: "一号线",
                  value: "yhx"
                },
                {
                  label: "三号线",
                  value: "shx"
                }
              ];
            }
            that.subParent = param;
            //清除切换一级列表导致二级数据的变化，比如，选择某一级，点击了其二级项，再切换一级，再点击此二级的项，再返回之前的某一级，发现其二级保留了之前的状态
            that.subMenuDatas.forEach(function(item) {
              that.$set(item, "active", false);
            });
          }
        } else {
          if (param.value.indexOf("All") > -1) {
            var returnData = {
              node: {
                label: param.originLabel,
                value: param.originValue
              }
            };
          } else {
            var returnData = {
              node: param
            };
          }
          that.postEventToParent(returnData);
        }
      });
    },
    setSubSelected: function(item) {
      var that = this;
      that.$nextTick(function() {
        that.subMenuDatas.forEach(function(item) {
          that.$set(item, "active", false);
        });
        that.$set(item, "active", true);
        if (this.type == "lv3") {
          //设置三级列表数据来源
          if (item.value === 'yhx') {
            this.grandMenuDatas = [
              {
                label: "南京南",
                value: "njn"
              },
              {
                label: "河定桥",
                value: "hdq"
              }
            ];
          }else if (item.value === 'shx'){
            this.grandMenuDatas = [
              {
                label: "河海大学",
                value: "hhdx"
              },
              {
                label: "机场",
                value: "jc"
              }
            ];
          }
          this.grandParent = item;
          //清除切换二级列表导致三级数据的变化
          this.grandMenuDatas.forEach(function(item) {
            that.$set(item, "active", false);
          });
        } else {
          var returnData = {
            node: item,
            parentNode: this.subParentOptions
          };
          this.postEventToParent(returnData);
        }
      });
    },
    postEventToParent: function(data) {
      var that = this;
      if (that.type != "filter") {
        that.options.forEach(function(ele) {
          if (ele.active) {
            ele.active = false;
            ele.label = data.node.label;
          }
        });
      }
      this.isShowMenu = false;
    },
    resetFilter: function() {
      this.multiValue = "";
    },
    sureFilter: function() {
      console.log(this.multiValue);
    },
    cancel:function(){
        this.isShowMenu = false;
    },
    cellClick:function(param,item){
      this.lv2SelectedId = item;
    }
  }
};
</script>
<style>
  .bh-ddm-sideNavbar.mint-side-navbar .navbar.is-fixed {
    position: relative;
  }
  .bh-ddm-filter .mint-button--normal {
    border-radius: 4px;
    padding: 6px 24px;
    margin: 4px 10px;
    box-shadow: 0 0 3px #bdc0c5;
  }
  .bh-ddm-lv1-container {
    float: left;
    width: 30%;
    background-color: #f4f4f4;
    border-right: solid 1px rgba(0, 0, 0, 0.25);
  }
  .bh-ddm-two {
    overflow: auto;
    display: flex;
  }
  .bh-ddm-two .bh-ddm-lv2-container {
    float: right;
    width: 70%;
  }
  .bh-ddm-two .mint-cell-wrapper {
    border-top: none;
  }
  .bh-ddm-three {
    overflow: auto;
    display: flex;
  }
  .bh-ddm-three .mint-cell-wrapper {
    border-top: none;
  }
  .bh-ddm-three .bh-ddm-lv2-container {
    float: left;
    width: 30%;
  }
  .bh-ddm-three .bh-ddm-lv3-container {
    float: right;
    width: 40%;
    border-left: solid 1px rgba(0, 0, 0, 0.1);
  }

  .bh-ddm-lv1-item.bh-ddm-lv1-item-selected {
    background-color: #fff;
    border-top: solid 1px rgba(0, 0, 0, 0.25);
    border-bottom: solid 1px rgba(0, 0, 0, 0.25);
    border-right: solid 1px #fff;
    width: calc(100% + 1px);
  }
  .bh-ddm-lv1-container .bh-ddm-lv1-item:first-child.bh-ddm-lv1-item-selected {
    border-top: none;
  }
  .bh-ddm-lv1-container .bh-ddm-lv1-item:last-child.bh-ddm-lv1-item-selected {
    border-bottom: none;
  }
  .bh-ddm-lv2-item-selected {
    color: #38cdc1 !important;
  }
  .bh-ddm-lv3-item-selected {
    color: #38cdc1 !important;
  }

  .bh-ddm-filter {
    position: relative;
  }
  .bh-ddm-filter-buttons {
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: solid 1px rgba(0, 0, 0, 0.25);
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
