<template>
  <div style="margin-top:45px;">
    <mt-cell-group grouppaddingleft="0">
      <mt-cell-swipe
        v-for="n in 15"
        :right="rightButtons"
        wrapperpaddingleft="20px"
        title="swipe me">
      </mt-cell-swipe>
    </mt-cell-group>
  </div>
</template>

<script>
  export default {
    created() {
      this.rightButtons = [
        {
          content: '创建',
          style: { background: 'lightgray', color: '#fff' }
        },
        {
          content: '删除',
          style: { background: 'red', color: '#fff' },
          handler: () => this.$messagebox('你确定要删除该条信息？')
        }
      ];
    },

    methods: {
      leftButtonHandler(evt) {
        console.log(123);
      }
    }
  };
</script>
