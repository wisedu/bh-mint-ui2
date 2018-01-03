<template>
  <li class="mint-indexsection">
    <p class="mint-indexsection-index mt-bg-lv2">{{ index }}</p>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<style lang="css">
  @component-namespace mint {
    @component indexsection {
      padding: 0;
      margin: 0;
      
      @descendent index {
        margin: 0;
        padding: 6px 20px;

        & + ul {
          padding: 0;
        }
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    name: 'mt-index-section',

    props: {
      index: {
        type: String,
        required: true
      }
    },

    mounted() {
      this.$parent.sections.push(this);
    },

    beforeDestroy() {
      let index = this.$parent.sections.indexOf(this);
      if (index > -1) {
        this.$parent.sections.splice(index, 1);
      }
    }
  };
</script>
