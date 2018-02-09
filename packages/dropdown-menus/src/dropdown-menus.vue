<template>
    <div>
        <div class="bh-ddb mt-bColor-grey-lv5 mt-bg-lv3">
            <div v-for="(item,index) in options" class="bh-ddb-item mt-bColor-grey-lv5" :class="{'bh-ddb-item-selected':item.active}" v-bind:style="{ width: itemWidth}" @click="setSelected(item,index,$event)">
                <label :class="[item.active?'mt-color-theme':'mt-color-grey-lv3']">{{item.label}}</label><i class="bh-ddb-i" :class="{'mt-bColor-grey-lv4 bh-ddb-i-default':!item.active,'bh-ddb-i-selected mt-bColor-theme':item.active,}"></i>
            </div>
        </div>
        <div class="bh-ddm mt-bg-lv3" ref="content" :style="{'max-height':maxHeight}">
            <slot name="menu"></slot>
        </div>
        <!-- 遮罩层 -->
        <div v-if="isShowMenu" class="bh-ddm-shadow mt-bg-mask" @click="cancelShadow"  :style="{top:shadowTop}"></div>
    </div>
</template>
<style lang="css">
  
  .bh-ddb {
      overflow: auto;
      padding: 13px 0 12px;
      border-bottom-width: 1px;
      border-top-width: 1px;
      border-bottom-style: solid;
      border-top-style: solid;
  }
  .bh-ddb-border-bottom{
    border-bottom:none;
  }
  .bh-ddb-item {
      float:left;
      font-size: 13px;
      position: relative;
      box-sizing: border-box;
      border-right-width: 1px;
      border-right-style: solid;
      text-align: center;
      padding-right: 6px;
  }
  .bh-ddb .bh-ddb-item:last-child {
      border-right:none;
  }
  .bh-ddb-item label {
      position: relative;
      display: inline-block;
      max-width: 70%;
      margin: 0 auto;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      vertical-align: top;
      text-align: center;
  }
  .bh-ddb-i {
      position: relative;
      top: 0px;
      left: 6px;
      font-size: 0px;
  }
  .bh-ddb-i-default {
      width: 0;
      height: 0;
      border-left: 3.5px solid transparent;
      border-right: 3.5px solid transparent;
      border-top-width: 4px;
      border-top-style: solid;
  }
  .bh-ddb-i-selected {
      width: 0;
      height: 0;
      border-left: 3.5px solid transparent;
      border-right: 3.5px solid transparent;
      border-bottom-width: 4px;
      border-bottom-style: solid;
      top:-4px !important;
  }
  .bh-ddm {
    position: absolute;
    width: 100%;
    z-index: 2000;
    overflow: auto;
  }
  .bh-ddm-shadow {
    width: 100%;
    z-index: 1999;
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
  }
  .bh-ddm .mint-hairline--top-bottom::after{
    border-top-width: 0;
  }
  .bh-radio-slot .mint-radiolist-title {
    margin: 0;
  }
  .bh-ddm .mint-cell {
    min-height: 42px;
  }
  .bh-ddm .mint-cell-allow-right {
    display: none;
  }
</style>
<script>
    export default {
        name: 'mt-dropdown-menus',
        data () {
            return {
              itemWidth:'',
              shadowTop:'',
              maxHeight:''
            }
        },
        props:{
            options:{type:Array,default:[]},
            isShowMenu: {
                type: Boolean,
                default: false
            }
        },

        watch:{
          options:function(n){
            if(n.length){
              this.itemWidth = (100 / n.length) + '%';
            }else {
              console.log('按钮组长度为0')
            }
          },
          isShowMenu: function(n){
            if(n){
              this.$nextTick(function(){
                let elem = this.$refs.content;
                let obj = {
                  "top":elem.offsetTop
                };
                while(elem != document.body){
                  elem = elem.offsetParent ;
                  obj.top += elem.offsetTop ;
                }
                this.shadowTop = obj.top+"px";
                this.maxHeight = window.screen.height -obj.top+"px";
              })
            }else{
              document.body.style.overflow = "auto";
            }
          }
        },

        components:{
            
        },
        created() {
            if(this.options.length){
              this.itemWidth = (100 / this.options.length) + '%';
            }
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
                document.body.style.overflow = "hidden";
            },
            cancelShadow: function(evt) {
              this.options.forEach(function(ele) {
                if (ele.active) {
                  ele.active = false;
                }
              });
              this.borderActive=false;
              //this.isShowMenu = false;
              this.$emit('cancel', evt);
            }
        },
        beforeDestroy:function(){
          document.body.style.overflow = "auto";
        }
    }
</script>