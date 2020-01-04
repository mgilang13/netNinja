new Vue({
  el: "#vue-app",
  data: {
    food: ""
  },
  methods: {
    readRefs: function() {
      console.log(this.$refs.test.innerText);
      this.food = this.$refs.gilang.value;
    }
  }
});
