<template>
  <x-cell class="mint-field" :title="label" v-clickoutside="doCloseActive" :class="[{
              'is-nolabel': !label
            }]">
    <!-- <input
              @change="$emit('change', currentValue)"
              ref="input"
              class="mint-field-core"
              :placeholder="placeholder"
              @focus="active = true"
              :disabled="disabled"
              :readonly="readonly"
              :value="currentValue"
              @input="handleInput"> -->
    <div class="mint-field-core" @click="handlePick()">{{showValue}}</div>
    <div @click="handleClear" class="mint-field-clear" v-if="!disableClear" v-show="currentValue && active">
      <i class="mintui mintui-field-error"></i>
    </div>
    <span class="mint-field-state" v-if="state" :class="['is-' + state]">
      <i class="mintui" :class="['mintui-field-' + state]"></i>
    </span>
    <div class="mint-field-other">
      <slot></slot>
    </div>
    <mt-datetime-picker ref="picker" :type="type" :value="currentValue" @confirm="handlePickedValue">
    </mt-datetime-picker>
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
    attr: Object
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
    handlePickedValue(val) {
      switch (this.type) {
        case "datetime":
          this.currentValue = this.formatDate(val, "datetime");
          break;
        case "date":
          this.currentValue = this.formatDate(val, "date");
          break;
        default:
          this.currentValue = val;
      }
    },
    formatDate(date, type) {
      let month = String(this.$refs.picker.getMonth(date));
      if (month.length === 1)month = "0" + month;
      let day = String(this.$refs.picker.getDate(date));
      if (day.length === 1)day = "0" + day;
      let hour = String(this.$refs.picker.getHour(date));
      if (hour.length === 1)hour = "0" + hour;
      let min = String(this.$refs.picker.getMinute(date));
      if (min.length === 1)min = "0" + min;

      let result = "";
      if (type === "datetime") {
        result = this.$refs.picker.getYear(date) + "-" + month + "-" + day + " " + hour + ":" + min + ":00";
      } else if (type === "date") {
        result = this.$refs.picker.getYear(date) + "-" + month + "-" + day;
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
@import "../../../src/style/var.css";

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
      color: inherit;
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
      color: inherit;
      margin-left: 20px;

      .mintui {
        font-size: 20px;
      }

      @when error {
        color: $error-color;
      }

      @when warning {
        color: $warning-color;
      }

      @when success {
        color: $success-color;
      }

      @when default {
        margin-left: 0;
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
