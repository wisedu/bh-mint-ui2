<template>
    <div>
        <div class="bh-ddb">
            <div v-for="(item,index) in options" class="bh-ddb-item" :class="{'bh-ddb-item-selected':item.active}" v-bind:style="{ width: itemWidth}" @click="setSelected(item,index,$event)">
                <label>
                    {{item.label}}
                </label>
                <i class="bh-ddb-i" :class="{'bh-ddb-i-default':!item.active,'bh-ddb-i-selected':item.active,}"></i>
            </div>
        </div>
        <!-- <div v-if="isShowMenu" class="bh-ddm">
            <slot name="menu"></slot>
        </div> -->
        <!-- 遮罩层 -->
        <div v-if="isShowMenu" class="bh-ddm-shadow" @click="cancelShadow" :style="{height:shadowHeight}"></div>
    </div>
</template>
<style lang="css">
  @import "../../../src/style/var.css";
  
.bh-ddb {
    overflow: auto;
    padding: 10px 0;
    border-bottom: solid 0.5px $grey-lv5;
    border-top: solid 0.5px $grey-lv5;
    background-color: $color-white;
}
.bh-ddb-item {
    float:left;
    position: relative;
    box-sizing: border-box;
    border-right:solid 0.5px rgba(0,0,0,0.25);
    text-align: center;
}
.bh-ddb .bh-ddb-item:last-child {
    border-right:none;
}
.bh-ddb-item label {
    position: relative;
    /* left: 4%; */
    color:#999;
    display: inline-block;
    max-width: 70%;
    /* width: 80%; */
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: top;
    text-align: center;
}
.bh-ddb-item.bh-ddb-item-selected label {
    color:#38CDC1 !important;
}
.bh-ddb-i {
    position: relative;
    top: 0px;
    left: 8px;
    font-size: 0px;
}
.bh-ddb-i-default {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #BFC3C7;
}
.bh-ddb-i-selected {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 6px solid #38CDC1;
    top:-6px !important;
}
.bh-ddm {
  background-color: #fff;
  border-bottom: solid 1px #eee;
  overflow: auto;
  z-index:10;
  position: absolute;
  width: 100%;
}
.bh-ddm-shadow {
  width: 100%;
  /* height: 100%; */
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 9;
  position: absolute;
}
.bh-radio-slot .mint-radiolist-title {
  margin: 0;
}
.bh-ddm .mint-cell {
  min-height: 42px;
}
.bh-ddm .mint-cell .mint-cell-wrapper {
  padding: 0 16px;
}
.bh-ddm .mint-cell-allow-right {
  display: none;
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
  border-left: solid 0.5px rgba(0, 0, 0, 0.1);
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
.bh-ddm-sideNavbar .mint-tab-item.is-selected {
  border-color:#fff !important;
}
</style>
<script>
    export default {
        name: 'mt-dropdown-menus',
        data () {
            return {
                itemWidth:'',
                shadowHeight:''
            }
        },
        props:{
            options:{type:Array,default:[]},
            isShowMenu: {
                type: Boolean,
                default: false
            }
        },
        components:{
            
        },
        watch:{
          options:function(n){
            if(n.length){
              this.itemWidth = (100 / n.length) + '%';
            }else {
              console.log('按钮组长度为0')
            }
          }
        },
        created() {
            this.shadowHeight = document.documentElement.clientHeight + 'px';
        },
        methods:{
            setSelected:function(param,index,evt){
                var that = this;
                that.$nextTick(function () {
    　　　　　　　　that.options.forEach(function (item) {
    　　　　　　　　　　that.$set(item,'active',false);
    　　　　　　　　});
    　　　　　　　　that.$set(param,'active',true);
                   that.$set(param,'index',index);
                  that.$emit('dropDown',param,evt);
    　　　　　　});
            },
            cancelShadow: function(evt) {
              this.options.forEach(function(ele) {
                if (ele.active) {
                  ele.active = false;
                }
              });
              //this.isShowMenu = false;
              this.$emit('cancel', evt);
            }
        }
    }
</script>