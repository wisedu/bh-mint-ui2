<template>
  <mt-cell :title="label" @click.native="handleDisplayClick" isLink :required="required" :disabled="disabled" :readonly="readonly" :titlewidth="titlewidth" :value-align="valueAlign" :direction="direction">
    <div :class="[{'select-value': direction !== 'vertical'}]" style="word-break: break-all;">
      <!-- select 模板 -->
      <template v-if="selectType === 'select'"><span :class="[{'mt-color-grey-lv3': isDefalut}]">{{singleSelectDisplay()}}</span></template>
      <!-- multi-select 模板 -->
      <template v-if="selectType === 'multi-select'"><span :class="[{'mt-color-grey-lv3': isDefalut}]">{{multiSelectDisplay()}}</span></template>
      <!-- 自定义 -->
      <slot v-else  name="display" :options="options" :value="value" @testhandle="testhandle(value)"></slot>
    </div>
    <transition name="slide">
      <div class="select-container mt-bg-lv2" :style="{height: cHeight + 'px'}" v-show="selectorShow" @click.stop>
        <!-- select 模板 -->
        <template v-if="selectType === 'select'">
          <mt-box-group v-model="currentValue">
            <mt-cell-group>
              <mt-radiobox :name="item.value" v-for="item in getOptions_select(options)" :key="item.value" @click="handleClick_select" :iconpattern="iconpattern">
                {{item.label}}
              </mt-radiobox>
            </mt-cell-group>
          </mt-box-group>
        </template>
        <!-- multi-select 模板 -->
        <template  v-else-if="selectType === 'multi-select'">
          <div v-if="!getOptions_select(options).length" class="mint-no-data"><img src="http://cdnres.campusphere.cn/images/Nodata.png"></div>
          <mt-box-group v-else="!getOptions_select(options).length" v-model="currentValue" :style="[{height: cHeight + 'px', overflow: 'auto', 'padding-bottom': '49px'}]">
            <mt-cell-group>
                <mt-checkbox :name="item.value" :disabled="item.disabled" v-for="item in getOptions_select(options)" :key="item.value" :iconpattern="iconpattern" :align="align">
                    {{item.label}}
                </mt-checkbox>
            </mt-cell-group>
          </mt-box-group>
          <selected-footer :options="options" v-model="currentValue" @confirm-click="confirm_multiSelect" :iconpattern="iconpattern" :align="align"></selected-footer>
        </template>
        <!-- 自定义 -->
        <slot v-else name="selector" :options="options" :value="value"></slot>
      </div>
    </transition>
  </mt-cell>
</template>
<script>
import SelectedFooter from './selected-footer.vue';
import Locale from 'bh-mint-ui2/src/mixins/locale';
/**
 * @event selector-click - 点击选择器触发的事件
 */
/* eslint-disable */

/**
 * @noteType component
 * @name Select
 * @tagName mt-select
 * @desc 选择器
 * @wrapClassName mint-cell
 * @html
 * <mt-select label="标题文字"></mt-select>
 */
export default {
  name: 'mt-select',
  mixins: [ Locale],
  components: { SelectedFooter },
  props: {
    value: { default: '' },
    // url: { type: String, default: '' },

    /**
     * @noteType prop
     * @field label
     * @desc 标题
     * @type input
     * @value 标题
     */
    label: { type: String, required: true },
    /**
     * @noteType prop
     * @field placeholder
     * @desc 占位文本
     * @type input
     * @value 请选择
     */
    placeholder: { type: String, default: 'pleaseSelect' }, // 请选择
    options: { type: Array, required: true },
    /**
     * @noteType prop
     * @field selectType
     * @desc 选择器类型
     * @type select
     * @option 
      [
        {
          "text": "自定义",
          "value": ""
        },
        {
          "text": "单选",
          "value": "select"
        },
        {
          "text": "多选",
          "value": "multi-select"
        }
      ]
     */
    selectType: { type: String, default: 'select' },
    iconpattern: { type: String, default: 'circle' },
    align: String,
    required: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    titlewidth: String,
    valueAlign: String,
    direction: String
  },
  data() {
    return {
      selectorShow: false,
      cHeight: document.documentElement.clientHeight,
      isDefalut: true
    };
  },
  computed: {
    /***** select 专有属性 *****/
    currentValue: {
      get () {
        if (this.selectType === 'select') {
          return this.value;
        } else if (this.selectType === 'multi-select') {
          if (this.value === '') return []
          return this.value.split(',')
        } else {
          return this.value
        }
      }, 
      set (val) {
        if (this.selectType === 'select') {
          this.$emit('input', val.toString());
          history.back();
        } else if (this.selectType === 'multi-select') {
          this.$emit('input', val.join(','))
        } else {
          this.$emit('input', val)
        }
      }
    },
    /***** select 专有属性 end *****/
    i18n(){
        return this.t('mint');
    },
    computedPlaceholder(){
        return this.i18n[this.placeholder] || this.placeholder;
    }
  },
  methods: {
    handleDisplayClick(e) {
      if(this.disabled||this.readonly) return;
      this.$emit('selector-click', this.selectType, this,e);
      history.pushState('', null, '#/smile-select');
      this.selectorShow = true;
    },
    historyChange(e) {
      this.selectorShow = false;
    },
    /***** select 专有方法 *****/
    getOptions_select (options) {
      if (!options || options.length === 0) {
        return []
      }
      return options.map(item => {
        return {
          value: item.id,
          label: item.name
        }
      })
    },
    singleSelectDisplay () {
      if (this.value === '' || this.value === null || this.value === undefined){
        this.isDefalut = true;
        return this.computedPlaceholder;
      }
      if (this.options.length === 0) {
        this.$emit('selector-click', '')
        return ''
      }
      // 解决 初始化设置的值在下拉列表中不存在 ，控制台报错(name "undefined")的问题 wangyongjian 2018-5-28
      var singleSelectValue = this.options.filter(item => {
        if (!item || item.id === null) return false
        return item.id.toString() === this.value.toString()
      });
      this.isDefalut = false;
      return singleSelectValue.length?singleSelectValue[0].name:this.value
    },
    handleClick_select(val, $event) {
      this.$emit('change', val, $event);
      this.selectorShow = false
    },
    /***** select 专有方法 end *****/

    /***** multi-select 专有方法 *****/
    multiSelectDisplay () {
      if (this.value === '') {
        this.isDefalut = true;
        return this.computedPlaceholder
      }
      if (this.options.length === 0) {
        this.$emit('selector-click', '')
        return ''
      }
      this.isDefalut = false;
      var multiSelectValue = this.options.filter(item => this.currentValue.indexOf(item.id.toString()) > -1).map(item => item.name).join(',');
      return  multiSelectValue.length?multiSelectValue:this.value;
    },
    handleClick_multiSelect (val, $event) {
      this.$emit('change', this.currentValue, $event)
    },
    confirm_multiSelect (){
      this.selectorShow = false;
      history.back();
    }
    /***** multi-select 专有方法 end *****/
  },
  mounted () {
    window.addEventListener("popstate", this.historyChange)
  },
  beforeDestroy () {
    window.removeEventListener("popstate", this.historyChange)
  }
};

/**
 * @noteType external
 * @content
  {
    "mock": {
    "selected": ""
  },
  "modelName": "selected",
  "xtype": [ "select", "multi-select", "multi-select2" ],
  "bindField": "v-model"
 }
 */
</script>
<style>
.slide-enter-active, .slide-leave-active {
  transition: transform .25s
}
.slide-enter, .slide-leave-to /* .slide-leave-active in below version 2.1.8 */ {
  transform: translateX(100%);
}
.select-container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 998;
  overflow: auto;
}

.select-picker {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.select-value{
  max-width: 192px;
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.select-value>span{
  line-height: initial;
}

.mint-no-data{
  height: calc(100% - 50px);
  display: table;
}

.mint-no-data>img{
  display: block;
  position: absolute;
  top:40%;
  left:50%;
  transform: translate(-50% , -50%);
}
</style>


