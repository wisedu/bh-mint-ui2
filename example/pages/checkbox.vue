<template>
  <div class="page-checklist">
    <div class="page-title page-part">Checkbox</div>

    <div>
        <h2>普通多选</h2>
        <mt-box-group v-model="value1">
            <mt-cell-group>
                <mt-checkbox :name="item.value" :disabled="item.disabled" v-for="item in options2">
                    {{item.label}}
                </mt-checkbox>
                <mt-cell title="选中的项">{{ value1 }}</mt-cell>
            </mt-cell-group>
        </mt-box-group>
    </div>


    <div>
        <h2>全部禁用</h2>
        <mt-box-group v-model="value2" :disabled="true">
            <mt-cell-group>
                <mt-checkbox :name="item.value" v-for="item in options2">
                    {{item.label}}
                </mt-checkbox>
            </mt-cell-group>
        </mt-box-group>
    </div>

    <div>
        <h2>右对齐</h2>
        <mt-box-group v-model="value1" align="right" :max="3">
            <mt-cell-group>
                <mt-checkbox align="right" :name="item.value" v-for="item in options2">
                    {{item.label}}
                </mt-checkbox>
            </mt-cell-group>
        </mt-box-group>
    </div>

    <div>
        <h2>组合的多选</h2>
        <mt-box-group v-model="value2">
            <mt-cell-group>
                <mt-checkbox ref="cb" :name="item" v-for="item in options1" :key="item">
                    {{item}}
                    <div slot="newline" slot-scope="scope" style="margin-top:10px" v-if="scope.checked">
                        <mt-textarea maxlength="50"></mt-textarea>
                    </div>
                </mt-checkbox>
            </mt-cell-group>
        </mt-box-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-checklist',

  data() {
    return {
      options1: [],
      options2: [],
      options3: [],
      options4: [],
      value1: ["选中禁用的值"],
      value2: ['选项A'],
      value3: ['选项A'],
      value4: []
    };
  },
  methods: {
      blank(){

      }
  },

  created() {
    this.options1 = ['选项A', '选项B', '选项C'];
    this.options3 = ['选项A', '选项B', '选项C', '选项D'];
    this.options4 = ['选项A', '选项B', '选项C', '选项D'];
    this.options2 = [
      {
        label: '被禁用',
        value: '值F',
        disabled: true
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
  }
};
</script>

<style lang="css">
  .page-checklist .page-part {
    margin-top: 40px;
  }
</style>
