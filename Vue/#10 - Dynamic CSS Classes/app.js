new Vue({
  el: "#vue-app",
  data: {
    available: false,
    nearby: false
  },
  methods: {},
  computed: {
    compClass: function() {
      return {
        available: this.available,
        nearby: this.nearby
      };
    }
  }
});
