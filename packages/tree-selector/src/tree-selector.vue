 <template>
  <mt-select :label="label" :options="activeOptions" v-model="currentValue" @selector-click="handleSelectorClick" select-type="custom" :required="required" :disabled="disabled" :readonly="readonly" :titlewidth="titlewidth" :value-align="valueAlign" :direction="direction">
    <template slot-scope="scope" slot="display">
      <span :class="[{'mt-color-grey-lv3':(scope.value === '') || (Object.prototype.toString.call(scope.value) === '[object Array]' && scope.value.length === 0)}]">{{scope.value === ''|| (Object.prototype.toString.call(scope.value) === '[object Array]' && scope.value.length === 0)? computedPlaceholder : getDisplay(scope.value)}}</span>
    </template>
    <template slot-scope="scope" slot="selector">
      <bread :data="breadData" :active-id="(activePids.length ? activePids[activePids.length - 1] : '')" @item-click="handleBreadClick"></bread>
      <p class="mint-tree-selector-loading" v-show="scope.options.length === 0">{{i18n.noData}}</p>
      <template v-if="!multiple" v-show="scope.options.length > 0">
        <mt-cell-group :style="[{height:parentSelectable?'calc(100% - 88px)':null,overflow:'auto'}]">
          <mt-cell v-for="item in scope.options" :class="{active: scope.value.indexOf(item) > -1}" :key="item.id" :title="item.name" @click.native.stop="handleItemClick(item, $event)" :is-link="!!item.isParent"></mt-cell>
        </mt-cell-group>
        <mt-button size="large" type="primary" v-if="parentSelectable"  @click="handleConfirmClick('single')">{{i18n.buttonConfirm}}</mt-button> 
      </template>
      <template v-else-if="multiple" v-show="scope.options.length > 0">
        <tree-checkbox-list class="mint-tree-selector-multi-list" :options="scope.options" :parentSelectable="parentSelectable" @item-click="handleItemClick" v-model="currentValue" :iconpattern="iconpattern"></tree-checkbox-list>
      </template>
      <selected-footer v-if="multiple" :options="footerOptions" v-model="currentValue" @confirm-click="handleConfirmClick" :iconpattern="iconpattern"></selected-footer>
    </template>
  </mt-select>
</template>

<script>
/**
 * mt-tree-selector
 * @module components/TreeSelector
 * @desc 树形选择器
 * @param {String} label - 字段中文名
 * @param {String} [value] - 绑定值，支持双向绑定
 * @param {Array} options - 格式化后的树形字典数据，结构平铺， 不需要格式化
 * @example
 */
// import MtSelect from 'bh-mint-ui2/packages/tree-selector/index.js';
import Bread from './bread.vue';
import SelectedFooter from '../../select/src/selected-footer.vue';
import TreeCheckboxList from './tree-checkbox-list';
import Locale from 'bh-mint-ui2/src/mixins/locale';
/**
 * @noteType component
 * @name TreeSelector
 * @tagName mt-tree-selector
 * @desc 树形选择器
 * @html
 * <mt-tree-selector label="树形选择器" :options="[]" v-model="value" placeholder="请选择"></mt-tree-selector>
 */
export default {
  name: 'mt-tree-selector',
  mixins: [ Locale],
  props: {
    value: [String, Number],
    /**
     * @noteType prop
     * @field label
     * @desc 标题
     * @type input
     * @value 标题
     */
    label: String,
    /**
     * @noteType prop
     * @field defName
     * @desc value值对应的文本
     * @type input
     * @value ''
     */
    defName: {
      type: String,
      default: ''
    },
    /**
     * @noteType prop
     * @field placeholder
     * @desc 占位文本
     * @type input
     * @value 请选择
     */
    placeholder: {
      type: String,
      default: 'pleaseSelect' // 请选择
    },
    /**
     * @noteType prop
     * @field multiple
     * @desc 是否多选
     * @type select
     * @option
      [
        {
          "text": "单选",
          "value": false
        },
        {
          "text": "多选",
          "value": true
        }
      ]
     */
    multiple: { type: Boolean, default: false },
    parentSelectable: { type: Boolean, default: false },
    /**
     * @noteType prop
     * @field options
     * @desc 选项字典数据
     * @type textarea
     * @value []
     */
    options: { type: Array, default() { return []; } },
    iconpattern: {
      type: String,
      default: "hook"
    },
    required: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    displayType: [Boolean,String],
    titlewidth: String,
    valueAlign: String,
    direction: String
  },
  data() {
    return {
      activePids: []
    };
  },
  created() {
    let id = this.value;
    let options = this.options;
    if(!this.multiple&&options.length){
      if(id){
        let activeItem = options.filter(o => o.id === id)[0];
        if(!activeItem) return;
        this.activePids.unshift(this.value);
        while(activeItem.pId){
          id=activeItem.pId;
          this.activePids.unshift(id);
          activeItem = options.filter(o => o.id === id)[0];
        }
      }
    }
  },
  computed: {
      i18n(){
        return this.t('mint')
    },
    computedPlaceholder(){
        return this.i18n[this.placeholder] || this.placeholder;
    },
    cttHeight(){
      if(this.parentSelectable){
        return calc(100% - 87)+'px'
      }
    },
    activeOptions() {
      let pid = this.activePids[this.activePids.length - 1]
      if (pid === undefined) pid = ''
      if (pid !== '') {
        let activeItem = this.options.filter(item => item.id === pid)[0]
        // 已经选择到叶子节点时，使用父节点作为pId
        if (activeItem && activeItem.isParent === 0) {
          pid = this.activePids[this.activePids.length - 2]
        }
      }
      return this.options.filter(item => item.pId === pid)
    },
    breadData() {
      if (this.activePids.length === 0) {
        return [{ name: this.i18n.all, id: ''}]
      }
      let result = [{ name: this.i18n.all, id: ''}];
      let options = this.options;
      this.activePids.map(item => {
        let activeItem = options.filter(o => o.id === item)[0];
        if (activeItem) {
          result.push(activeItem);
        }
      });

      return result;
    },
    currentValue: {
      get() {
        if (this.multiple) {
          if (this.value === '') return [];
          var arr = this.value.split(',');
          if(this.options.length){
            arr = arr.filter( item => {
              return this.getItemDisplay(item)!=''
            });
          }
          return arr;
        } else {
          return this.value;
        }
      },
      set(val) {
        if (val === '' || val.length === 0) this.$emit('input', '')
        if (this.multiple) {
          this.$emit('input', val.join(','));
        } else {
          this.$emit('input', val);
        }
      }
    },
    footerOptions () {
      if (this.currentValue.length === 0) return [];
      return this.currentValue.map(item => {
        return {
          name: this.getItemDisplay(item),
          id: item
        }
      })
    }
  },
  methods: {
    handleBreadClick(id) {
      // 点击顶部面包屑导航的节点
      let activePids = this.activePids
      let index = activePids.indexOf(id) + 1
      activePids.splice(index, activePids.length)
      this.$set(this, 'activePids', activePids)
    },
    handleSelectorClick(pid, $event) {
      this.$emit('selector-click', pid, $event);
    },
    handleItemClick(item, $event) {
      // 点击节点
      if (item.isParent) {
        // 是父节点则展开并进入下一级
        this.activePids.push(item.id);
        this.$emit('selector-click', item.id, $event);
      } else {
        // 叶子节点
        if (this.multiple) {

        } else {
          // 末位的pId验证，防止重复pId
          if (item.pId === this.activePids[this.activePids.length - 1]) {
            this.activePids.push(item.id)
          } else {
            let activePids = this.activePids;
            activePids.splice(activePids.length - 1, 1, item.id);
            this.$set(this, 'activePids', activePids)
          }
          this.currentValue = this.activePids[this.activePids.length - 1]
          window.history.back()
        }
      }
    },
    getDisplay (value) {
      if(!this.options.length){
        return this.defName
      }else{
        if (this.multiple === true) {
          return value.map(item => this.getItemDisplay(item)).join(',')
        } else {
          // 单选
          return this.getItemDisplay(value)
        }
      }
    },
    getItemDisplay (value) {
      let result = '';
      let options = this.options;

        let optionItem = options.filter(item => item.id === value)[0];
        if(!this.displayType){
          result = optionItem?optionItem.name:''
        }else{
          result += (optionItem?optionItem.name:'');
          if(!optionItem && this.multiple) result = "";
          if (optionItem && optionItem.pId !== undefined && optionItem.pId !== '') {
            result = this.getItemDisplay(optionItem.pId) + ( typeof this.displayType === 'boolean'?" ":this.displayType) + result
          }
        }

      return result
    },
    // 单选树(single)父级可选确定按钮/多选树点击footer确认按钮
    handleConfirmClick (flag) {
      if(flag === 'single'&&this.activePids.length){
        this.currentValue = this.activePids[this.activePids.length - 1]
      }
      window.history.back()
    }
  },
  components: { Bread, SelectedFooter, TreeCheckboxList }
};
/**
 * @noteType external
 * @content
  {
    "xtype": [ "tree", "multi-tree" ],
    "bindField": "v-model",
    "mock": { "value": "" }
  }
 */
</script>

<style lang="css">

@component-namespace mint {
  @component tree-selector {
    @descendent loading {
      text-align: center;
      line-height: 80px;
    }
  }
}

.mint-tree-selector-multi-list {
  padding-bottom: 60px;
}
</style>
