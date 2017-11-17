<template>
    <div>
        <div class="bh-ddb">
            <div v-for="(item,index) in options" class="bh-ddb-item" :class="{'bh-ddb-item-selected':item.active}" v-bind:style="{ width: itemWidth}" @click="setSelected(item,index)">
                <label>
                    {{item.label}}
                    <i class="bh-ddb-i" :class="{'bh-ddb-i-default':!item.active,'bh-ddb-i-selected':item.active,}"></i>
                </label>
            </div>
        </div>
        <div v-if="isShowMenu" class="bh-ddm">
            <slot name="menu"></slot>
        </div>
        <!-- 遮罩层 -->
        <div v-if="isShowMenu" class="bh-ddm-shadow" @click="cancelShadow"></div>
    </div>
</template>
<style>
.bh-ddb {
    overflow: auto;
    padding: 10px 0;
    border-bottom: solid 0.5px #ddd;
    border-top: solid 0.5px #ddd;
}
.bh-ddb-item {
    float:left;
    box-sizing: border-box;
    border-right:solid 0.5px rgba(0,0,0,0.25);
}
.bh-ddb .bh-ddb-item:last-child {
    border-right:none;
}
.bh-ddb-item label {
    position: relative;
    color:#999;
    display: block;
    width: 50px;
    margin: 0 auto;
}
.bh-ddb-item.bh-ddb-item-selected label {
    color:#38CDC1 !important;
}
.bh-ddb-i {
    position: absolute;
    top: 8px;
    right: -4px;
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
}
.bh-ddm {
  background-color: #fff;
  border-bottom: solid 1px #eee;
  overflow: auto;
  zIndex:10;
  /* position: absolute; */
  width: 100%;
}
.bh-ddm-shadow {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 9;
  position: absolute;
}
</style>
<script>
    export default {
        name: 'mt-dropdown-menus',
        data () {
            return {
                itemWidth:''
            }
        },
        props:{
            options:Array,
            isShowMenu: {
                type: Boolean,
                default: false
            }
        },
        components:{
            
        },
        created() {
            this.itemWidth = (100 / this.options.length) + '%';
        },
        methods:{
            setSelected:function(param,index){
                var that = this;
                that.$nextTick(function () {
    　　　　　　　　that.options.forEach(function (item) {
    　　　　　　　　　　that.$set(item,'active',false);
    　　　　　　　　});
    　　　　　　　　that.$set(param,'active',true);
                   that.$set(param,'index',index);
                  that.$emit('dropDownButtons',param);
    　　　　　　});
            },
            cancelShadow: function() {
              this.options.forEach(function(ele) {
                if (ele.active) {
                  ele.active = false;
                }
              });
              this.isShowMenu = false;
            }
        }
    }
</script>