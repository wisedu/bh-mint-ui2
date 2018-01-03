<script>
  export default {
    computed: {
      spinnerColor() {
        return this.color || this.$parent.color;
      },

      spinnerSize() {
        return (this.size || this.$parent.size) + 'px';
      }
    },

    props: {
      size: Number,
      color: String
    }
  };
</script>
