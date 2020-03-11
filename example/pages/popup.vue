<template>
  <div class="page-popup">
    <div class="page-popup-wrapper" style="margin-top:44px">
      <mt-button @click.native="popupVisible1 = true" size="large" ref="button" type="default" plain>中部弹出 popup</mt-button>
      <mt-button @click.native="popupVisible2 = true" size="large" type="primary" plain>上侧弹出 popup</mt-button>
      <mt-button @click.native="popupVisible3 = true" size="large" type="warning" plain>右侧弹出 popup</mt-button>
      <mt-button @click.native="popupVisible4 = true" size="large" type="danger" plain>下侧弹出 popup</mt-button>
    </div>
    <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1" :style="{ top: buttonBottom + 10 + 'px' }" @maskCallback="cancel">
      <h1>popup</h1>
      <p>/ ˈpɑpˌʌp /</p>
      <p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>
      <p>adj. 弹起的; 有自动起跳装置的</p>
    </mt-popup>
    <mt-popup v-model="popupVisible2" position="top" class="mint-popup-2" :modal="false">
      <p>更新成功</p>
    </mt-popup>
    <mt-popup v-model="popupVisible3" position="right" class="mint-popup-3" :modal="false">
        <mt-dropdown-menus :options="options" @dropDown="getSelectedButtons" @cancel="cancel" :isShowMenu="isShowMenu" ref="dropDown" @selected-self="selectedSelf">
          <div v-if="isShowMenu" slot="menu">
              <mt-box-group v-if="type==='lv1'"  v-model="sexValue" align="right" >
                <mt-cell-group>
                    <mt-radiobox align="right" :name="item.value" :disabled="item.disabled"  v-for="(item,index) in menuDatas" :key="index" iconpattern="hook">
                        {{item.label}}
                    </mt-radiobox>
                </mt-cell-group>
              </mt-box-group>
          </div>
        </mt-dropdown-menus>
      <mt-button @click.native="popupVisible3 = false" size="large" type="primary">关闭 popup</mt-button>
    </mt-popup>
    <mt-popup v-model="popupVisible4" position="bottom">
      <div style="background-color:#e8e8e8;">
        <div style="padding:12px 20px;background-color:#fff;font-size:17px">
          <span style="float:left;">申请陈述：</span>
          <span style="float:right;color:#06c1ae" @click="submitHandle">提交</span>
          <div style="clear: both;display:table;margin-bottom:5px"></div>
        </div>
        <mt-cell-group style="margin-bottom:4px;max-height: 300px;overflow:scroll" class="mt-cell-group">
          <mt-textarea maxlength=100 placeholder="请输入" rows=4 ></mt-textarea>
        </mt-cell-group>
        <mt-button size="large" @click.native="messagebox">取消</mt-button>
      </div>
    </mt-popup>
  </div>
</template>

<style>
  @component-namespace page {
    @component popup {
      @descendent wrapper {
        padding: 0 20px;
        /*position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);*/
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }

      .mint-popup-1 {
        width: 200px;
        border-radius: 8px;
        padding: 10px;
        transform: translate(-50%, 0);

        h1 {
          font-size: 20px;
          color: #26a2ff;
        }

        p {
          margin-bottom: 10px;
        }
      }

      .mint-popup-1::before {
        triangle: 10px top #fff;
        content: '';
        position: absolute;
        top: -20px;
        right: 50px;
      }

      .mint-popup-2 {
        width: 100%;
        height: 50px;
        text-align: center;
        background-color: rgba(0,0,0,.7);
        backface-visibility: hidden;
      }

      .mint-popup-2 p {
        line-height: 50px;
        color: #fff;
      }

      .mint-popup-3 {
        width: 100%;
        height: 100%;
        background-color: #fff;
      }

      .mint-popup-3 .mint-button {
        position: absolute;
        width: 90%;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
      }

      .mint-popup-4 {
        width: 100%;
        .picker-slot-wrapper, .picker-item {
          backface-visibility: hidden;
        }
      }
      .mt-cell-group .mint-cell-group-content{
        overflow: hidden;
      }
    }
  }
</style>

<script type="text/babel">
  import { MessageBox } from 'src/index';
  export default {
    data() {
      return {
        popupVisible1: false,
        popupVisible2: false,
        popupVisible3: false,
        popupVisible4: false,
        buttonBottom: 0,
        dateSlots: [
          {
            flex: 1,
            values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
            className: 'slot3',
            textAlign: 'left'
          }
        ],
        isShowMenu: false,
        sexValue: '',
        type:'',
        options: [
          {
            label: "性别",
            value: "sex",
            type: "lv1"
          }
        ],
        menuDatas: [
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
          }
        ],
        newPopup: false
      };
    },

    watch: {
      popupVisible2(val) {
        if (val) {
          setTimeout(() => {
            this.popupVisible2 = false;
          }, 2000);
        }
      },
      sexValue: function(newData, oldData) {
        this.changeSelectValus(newData, this.menuDatas);
      },
    },

    methods: {
      addPopup() {
        this.newPopup = true;
      },
      messagebox(){
        this.popupVisible4 =false
      },
      onDateChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
        this.dateStart = values[0];
        this.dateEnd = values[1];
      },
      cancel(){
        console.log(" mask hide!")
      },
      submitHandle(){
        var that=this; 
        MessageBox.confirm('确定执行此操作?', '提示','').then(action =>{
          that.popupVisible4 =false
          console.log(action)
        });
      },
      selectedSelf(){
        this.isShowMenu = false;
      },
      cancel(){

      },
      getSelectedButtons(item){
        this.type = item.type;
        this.isShowMenu = true;
      },
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
    },

    mounted() {
      // this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom;
    }
  };
</script>
