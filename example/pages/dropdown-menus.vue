<template>
    <div class="page-field">
        <h1 class="page-title">Dropdown-Menus</h1>
        <div class="page-part">
            <mt-dropdown-menus :isShowMenu="isShowMenu">
                <div slot="menu" v-for=" item in menuDatas" class="bh-ddm-item" :class="{'bh-ddm-item-selected':item.active}" @click="setSelected(item)">
                    {{item.text}}
                    <i class="bh-ddm-item-img" v-if="item.active"></i>
                </div>
            </mt-dropdown-menus>
        </div>
        <div class="page-part">
            <mt-dropdown-menus :isShowMenu="isShowMenu">
                <div slot="menu" class="bh-ddm-two">
                    <div class="bh-ddm-lv1-container">
                        <div v-for=" item in menuDatas2" class="bh-ddm-lv1-item" :class="{'bh-ddm-lv1-item-selected':item.active}" @click="setSelected2(item)">
                            {{item.text}}
                        </div>
                    </div>
                    <div class="bh-ddm-lv2-container">
                        <div v-for=" item in subMenuDatas2" class="bh-ddm-lv2-item" :class="{'bh-ddm-lv2-item-selected':item.active}" @click="setSubSelected2(item)">
                            {{item.text}}
                            <i class="bh-ddm-item-img" v-if="item.active"></i>
                        </div>
                    </div>
                </div>
            </mt-dropdown-menus>
        </div>
        <div class="page-part">
            <mt-dropdown-menus :isShowMenu="isShowMenu">
                <div slot="menu" class="bh-ddm-three">
                    <div class="bh-ddm-lv1-container">
                        <div v-for=" item in menuDatas3" class="bh-ddm-lv1-item" :class="{'bh-ddm-lv1-item-selected':item.active}" @click="setSelected3(item)">
                            {{item.text}}
                        </div>
                    </div>
                    <div class="bh-ddm-lv2-container">
                        <div v-for=" item in subMenuDatas3" class="bh-ddm-lv2-item" :class="{'bh-ddm-lv2-item-selected':item.active}" @click="setSubSelected3(item)">
                            {{item.text}}
                        </div>
                    </div>
                    <div class="bh-ddm-lv3-container">
                        <div v-for="item in grandMenuDatas3" class="bh-ddm-lv3-item" :class="{'bh-ddm-lv3-item-selected':item.active}" @click="setGrandSelected3(item)">
                            {{item.text}}
                            <i class="bh-ddm-item-img" v-if="item.active"></i>
                        </div>
                    </div>
                </div>
            </mt-dropdown-menus>
        </div>
        <div class="page-part">
            <mt-dropdown-menus :isShowMenu="isShowMenu">
                <div slot="menu" class="bh-ddm-filter" :style="{'height':bodyHeight}">
                    <div style="padding:0 20px;">
                        <div v-for="(item,index) in filterMenuDatas">
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
            </mt-dropdown-menus>
        </div>
  </div>
</template>
<style>
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
<script type="text/javascript">

    export default {
        name: 'page-field',
        data(){
            return {
                isShowMenu:true,
                menuDatas:[{
                    text:'男',
                    ddmId:'man'
                },{
                    text:'女',
                    ddmId:'woman'
                }],
                menuDatas2:[{
                    text:'中国',
                    ddmId:'China'
                },{
                    text:'美国',
                    ddmId:'American'
                }],
                menuDatas3:[{
                    text:'地铁',
                    ddmId:'metro'
                },{
                    text:'公交',
                    ddmId:'bus'
                }],
                subMenuDatas2:[],
                
                subMenuDatas3:[],
                grandMenuDatas3:[],
                filterMenuDatas:[{
                        text:'距离',
                        ddmId:'location',
                        children:[{
                            text:'一千米',
                            ddmId:'1km'
                        },{
                            text:'两千米',
                            ddmId:'2km'
                        }]
                    },{
                        text:'频率',
                        ddmId:'pl',
                        children:[{
                            text:'1次',
                            ddmId:'1time'
                        },{
                            text:'2次',
                            ddmId:'2time'
                        },{
                            text:'3次',
                            ddmId:'3time'
                        },{
                            text:'4次',
                            ddmId:'4time'
                        },{
                            text:'5次',
                            ddmId:'5time'
                        },{
                            text:'6次',
                            ddmId:'6time'
                        }]
                    }],
                bodyHeight:''
            }
        },
        components: {

        },
        mounted(){
            
        },
        methods:{
            setSelected:function(item){
                var that = this;
                that.$nextTick(function() {
                    that.menuDatas.forEach(function(item) {
                    that.$set(item, "active", false);
                    });
                    that.$set(item, "active", true);
                });
            },
            setSelected2:function(item){
                var that = this;
                that.$nextTick(function() {
                    that.menuDatas2.forEach(function(item) {
                    that.$set(item, "active", false);
                    });
                    that.$set(item, "active", true);
                });
                that.subMenuDatas2 = [{
                    text:'江苏',
                    id:'js'
                },{
                    text:'山东',
                    id:'sd'
                }];
                
            },
            setSubSelected2:function(item){
                var that = this;
                that.$nextTick(function() {
                    that.subMenuDatas2.forEach(function(item) {
                    that.$set(item, "active", false);
                    });
                    that.$set(item, "active", true);
                });
            },
            setSelected3:function(item){
                var that = this;
                that.$nextTick(function() {
                    that.menuDatas3.forEach(function(item) {
                        that.$set(item, "active", false);
                    });
                    that.$set(item, "active", true);
                });
                that.subMenuDatas3 = [{
                    text:'一号线',
                    id:'yhx'
                },{
                    text:'二号线',
                    id:'ehx'
                }];
                
            },
            setSubSelected3:function(item){
                var that = this;
                that.$nextTick(function() {
                    that.subMenuDatas3.forEach(function(item) {
                        that.$set(item, "active", false);
                    });
                    that.$set(item, "active", true);
                });
                that.grandMenuDatas3 = [{
                    text:'南京南',
                    id:'njn'
                },{
                    text:'河定桥',
                    id:'hdq'
                }];
            },
            setGrandSelected3:function(item){
                var that = this;
                that.$nextTick(function() {
                    that.grandMenuDatas3.forEach(function(item) {
                        that.$set(item, "active", false);
                    });
                    that.$set(item, "active", true);
                });
                
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
                this.filterMenuDatas.forEach(function(item) {
                    item.children.forEach(function(subItem) {
                        subItem.active = false;
                    });
                });
            },
            sureFilter: function() {
                var that = this;
                var filterArray = [];
                this.filterMenuDatas.forEach(function(item) {
                    item.children.forEach(function(subItem) {
                    if (subItem.active) {
                        filterArray.push({
                            node: subItem,
                            parentNode: item
                        });
                    }
                    });
                });
                console.log(filterArray);
            }
        }
    }
</script>
