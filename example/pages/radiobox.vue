<template>
  <div class="page-radiobox" style="margin-top:45px;">
    <div>
      <mt-cell-group title="横向单选">
        <mt-radiobox direction="horizon" name="性别" v-model="value" wrapperpaddingleft="0" :options="options"></mt-radiobox>
        <mt-cell title="选中的项">{{ value }}</mt-cell>
      </mt-cell-group>
      <mt-box-group v-model="value1" :max="3">
          <mt-cell-group title="普通单选">
              <mt-radiobox :name="item.value" v-for="item in options2" :key="item.value" :disabled="item.disabled" @radiobox-click="blank" required>
                  {{item.label}}
              </mt-radiobox>
              <mt-cell title="选中的项">{{ value1 }}</mt-cell>
          </mt-cell-group>
      </mt-box-group>
    </div>


    <div>
        <mt-box-group v-model="value2" :disabled="true">
            <mt-cell-group title="全部禁用">
                <mt-radiobox :name="item.value" v-for="item in options2" :key="item.value">
                    {{item.label}}
                </mt-radiobox>
            </mt-cell-group>
        </mt-box-group>
    </div>

    <div>
        <h2 class="mint-box-group-title">右对齐</h2>
        <mt-box-group v-model="value1" :disabled="false" align="right">
            <mt-cell-group>
                <mt-radiobox align="right" :name="item.value" v-for="item in options2" :key="item.value" :disabled="item.disabled" iconpattern="hook">
                    {{item.label}}
                </mt-radiobox>
            </mt-cell-group>
        </mt-box-group>
    </div>

    <div>
        <h2 class="mint-box-group-title">组合的多选</h2>
        <mt-box-group v-model="value2">
            <mt-cell-group>
                <mt-radiobox ref="cb" :name="item" v-for="item in options1" :key="item" iconpattern="hook">
                    {{item}}
                    <div slot="newline" slot-scope="scope" style="margin-top:10px" v-if="scope.checked">
                        <mt-textarea maxlength="50"></mt-textarea>
                    </div>
                </mt-radiobox>
            </mt-cell-group>
        </mt-box-group>
    </div>

    <div v-for = "(tm,idx) in data.tm" :key="idx">
      <div v-show="tm.TMLX==='1'">
        <p>单选：{{obj[tm.TMDM]}}</p>
        <mt-box-group v-model="obj[tm.TMDM]">
          <mt-cell-group>
            <mt-radiobox :name="xx.XXDM" v-for="xx in tm.xx" :key="xx.XXDM">
                {{xx.XXMC}}
            </mt-radiobox>
          </mt-cell-group>
        </mt-box-group>
      </div>
      <div v-show="tm.TMLX==='2'">
        <p>多选：{{obj[tm.TMDM]}}</p>
        <mt-box-group v-model="obj[tm.TMDM]">
          <mt-cell-group>
            <mt-checkbox :name="xx.XXDM" v-for="xx in tm.xx" :key="xx.XXDM">
                {{xx.XXMC}}
            </mt-checkbox>
          </mt-cell-group>
        </mt-box-group>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'page-checklist',

  data() {
    return {
      options1: [],
      options2: [],
      options3: [],
      options4: [],
      value1: "选中禁用的值",
      value2: '选项A',
      value3: '选项A',
      value4: '',
      value: "",
      data: {},
      obj: {
      }
    };
  },
  methods: {
      blank(e,val){
        console.log(e,val,'你点击了！')
      }
  },


  created() {
    this.options = [
      {
        id:"1",
        label:"男"
      },
      {
        id:"2",
        label:"女"
      },
      {
        id:"3",
        label:"禁用",
        disabled: true
      }
    ]
    this.options1 = ['选项A', '选项B', '选项C'];
    this.options3 = ['选项A', '选项B', '选项C', '选项D'];
    this.options4 = ['选项A', '选项B', '选项C', '选项D'];
    this.options2 = [
      {
        label: '被禁用',
        value: '值F',
        disabled: true,
      },
      {
        label: '选中禁用',
        value: '选中禁用的值',
        disabled: true
      },
      {
        label: '选项A',
        value: '值A'
      },
      {
        label: '选项B',
        value: '值B'
      }
    ];

  },
  mounted(){
    axios.get('/mock/radio.json').then(resp => {
      this.data = resp.data.data;
      var tm = this.data.tm;
      var self = this;
      tm.forEach(function(opt){
        var value=opt.TMLX === '2'?[]:'';
        self.$set( self.obj, opt.TMDM, value )
        // self.obj[opt.TMDM] = value
      })
    });
  }
};
</script>

<style lang="css">
    .mint-box-group-title {
        margin: 10px 0 0 20px;
        font-size: 14px;
        color: #92969c;
    }
</style>
