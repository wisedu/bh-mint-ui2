<template>
  <x-cell class="mint-field" :title="label" v-clickoutside="doCloseActive" :disabledcolor="readonly||disabled" :wrapperpaddingright="state!=='default'?'15px':'20px'" :class="[{
              'is-nolabel': !label
            }]">
    <div class="mint-field-core" :class="[{'mt-color-grey-lv3':placeholder===showValue},{'mt-color-danger':state==='error'},{'mt-color-warning':state==='warning'}]" @click="handlePick()">{{showValue}}</div>
    <div @click="handleClear" class="mint-field-clear" v-if="!disableClear" v-show="currentValue && active">
      <i class="iconfont icon-weiwancheng"></i>
    </div>
    <span class="mint-field-state" v-if="state" :class="iconColor">
      <i class="iconfont" :class="['icon-' + iconstate]"></i>
    </span>
    <div class="mint-field-other">
      <slot></slot>
    </div>
    <mt-datetime-picker ref="picker" :type="type" :value="currentValue" @change="handleChange"
    @confirm="handlePickedValue" @cancel="handleCancel" :visibileColumnCount="visibileColumnCount"
     :min-date="minDate" :max-date="maxDate" :min-hour="minHour" :max-hour="maxHour"></mt-datetime-picker>
  </x-cell>
</template>

<script>
import XCell from 'bh-mint-ui2/packages/cell/index.js';
import Clickoutside from 'bh-mint-ui2/src/utils/clickoutside';
if (process.env.NODE_ENV === 'component') {
  require('bh-mint-ui2/packages/cell/style.css');
}

/**
 * mt-datetime-selector
 * @desc 日期输入
 * @module components/datetime-selector
 *
 * @param {string} [label] - 标签
 * @param {string} [placeholder] - placeholder
 * @param {string} [disabled] - disabled
 * @param {string} [readonly] - readonly
 * @param {string} [state] - 表单校验状态样式，接受 error, warning, success
 *
 * @example
 * <mt-datetime-selector v-model="value" label="用户名"></mt-datetime-selector>
 * <mt-datetime-selector v-model="value" label="密码" placeholder="请输入密码"></mt-datetime-selector>
 * <mt-datetime-selector v-model="value" label="邮箱" placeholder="成功状态" state="success"></mt-datetime-selector>
 */

/**
 * @noteType component
 * @name DatetimeSelector
 * @tagName mt-datetime-selector
 * @desc 日期输入
 * @wrapClassName mint-datetime-selector
 * @html
 * <mt-datetime-selector label="输入框" type="datetime" placeholder="请输入发生时间"></mt-datetime-selector>
 */
export default {
  name: 'mt-datetime-selector',

  data() {
    return {
      active: false,
      currentValue: this.value
    };
  },
  directives: {
    Clickoutside
  },
  props: {
    /**
     * @noteType prop
     * @field type
     * @desc 类型
     * @type select
     * @value datetime
     * @option
     [{
         "text": "日期时间",
          "value": "datetime"
      },{
          "text": "日期",
          "value": "date"
      },{
          "text": "时间",
          "value": "time"
      }]
      */
    type: String,
    /**
     * @noteType prop
     * @field label
     * @desc 内容
     * @type input
     */
    label: String,
    /**
     * @noteType prop
     * @field placeholder
     * @desc placeholder
     * @type input
     */
    placeholder: String,
    /**
     * @noteType prop
     * @field readonly
     * @desc 是否只读
     * @valueType boolean
     * @type radio
     * @value false
     * @option
     [{
         "text": "否",
         "value": false
     },{
         "text": "是",
         "value": true
     }]
     */
    readonly: Boolean,
    /**
     * @noteType prop
     * @field disabled
     * @desc 是否禁用
     * @valueType boolean
     * @type radio
     * @value false
     * @option
     [{
         "text": "否",
         "value": false
     },{
         "text": "是",
         "value": true
     }]
     */
    disabled: Boolean,
    disableClear: Boolean,
    /**
     * @noteType prop
     * @field state
     * @desc 校验样式
     * @type select
     * @option
     [{
       "text": "默认",
        "value": ""
      },{
        "text": "成功",
        "value": "success"
      },{
        "text": "失败",
        "value": "error"
      },{
        "text": "警告",
        "value": "warning"
      }]
      */
    state: {
      type: String,
      default: 'default'
    },
    /**
     * @noteType prop
     * @field value
     * @desc 默认值
     * @type textarea
      */
    value: {},
    attr: Object,
    minDate: Date,
    maxDate: Date,
    minHour: Number,
    maxHour: Number,
    visibileColumnCount: Number
  },

  components: { XCell },

  methods: {
    doCloseActive() {
      this.active = false;
    },

    handleClear() {
      if (this.disabled || this.readonly) return;
      this.currentValue = '';
    },

    handlePick() {
      if (this.disabled || this.readonly) return;
      this.active = true;
      this.$refs.picker.open();
    },
    handlePickedValue(val, index, picker) {
      switch (this.type) {
        case "datetime":
          this.currentValue = this.formatDate(val, "datetime");
          break;
        case "date":
          this.currentValue = this.formatDate(val, "date");
          break;
        // case "ym":
        //   this.currentValue = this.formatDate(val, "ym");
        default:
          this.currentValue = val;
      }
      this.$emit('confirm', this.currentValue, index, picker);
    },
    handleCancel() {
      this.$emit('cancel');
    },
    handleChange(value, picker) {
      this.$emit('change', value, picker);
      this.$emit('cancel');
    },
    formatDate(date, type) {
      let month = String(date.getMonth()+1);
      if (month.length === 1)month = "0" + month;
      let day = String(date.getDate());
      if (day.length === 1)day = "0" + day;
      let hour = String(date.getHours());
      if (hour.length === 1)hour = "0" + hour;
      let min = String(date.getMinutes());
      if (min.length === 1)min = "0" + min;

      let result = "";
      if (type === "datetime") {
        result = date.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + min;
      } else if (type === "date") {
        result = date.getFullYear() + "-" + month + "-" + day;
      // } else if (type === "ym") {
      //   result = this.$refs.picker.getYear(date) + "-" + month;
      } else {
        
      }
      return result;
    }
  },

  computed: {
    showValue: {
      get: function() {
        if (this.currentValue === undefined || this.currentValue === "" || this.currentValue === null) {
          return this.placeholder;
        } else {
          return this.currentValue;
        }
      }
    },
    iconstate:function(){
      let iconstate="default";
      switch(this.state){
        case "success":iconstate="wancheng";break;
        case "warning":iconstate="yuqiweiwancheng";break;
        case "error":iconstate="weiwancheng";break;
        default:
          break;
      }
      return iconstate;
    },
    iconColor:function(){
      let iconColor="default";
      switch(this.state){
        case "success":iconColor="mt-color-primary";break;
        case "warning":iconColor="mt-color-warning";break;
        case "error":iconColor="mt-color-danger";break;
        default:
          break;
      }
      return iconColor;
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit('input', val);
    },

    attr: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const target = [this.$refs.input, this.$refs.textarea];
          target.forEach(el => {
            if (!el || !attrs) return;
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
          });
        });
      }
    }
  }
};
/**
 * @noteType external
 * @content
 {
    "mock": {
      "label": "日期输入",
      "placeholder": "请选择"
    },
    "xtype": [ "date-full" ],
    "bindField": "v-model"
 }
 */
</script>

<style lang="css">

@component-namespace mint {
  @component field {
    display: flex;

    @when textarea {
      align-items: inherit;

      .mint-cell-title {
        padding: 10px 0;
      }

      .mint-cell-value {
        padding: 5px 0;
      }
    }

    .mint-cell-title {
      width: 105px;
      flex: none;
    }

    .mint-cell-value {
      flex: 1;
      display: flex;
    }

    @descendent core {
      appearance: none;
      border-radius: 0;
      border: 0;
      flex: 1;
      outline: 0;
      line-height: 1.6;
      font-size: inherit;
      width: 100%;
    }


    @descendent clear {
      opacity: .2;
    }

    @descendent state {
      margin-left: 20px;

      .iconfont {
          font-size: 20px;
        }
    }

    @descendent other {
      position: relative 0 0 * *;
    }

    @when nolabel {
      .mint-cell-title {
        display: none;
      }
    }
  }
}
</style>
