new Vue({
  el: "#vue-app",
  data: {
    age: 24,
    x: 0,
    y: 0
  },
  methods: {
    add: function(inc) {
      this.age += inc;
    },
    substract: function(dec) {
      this.age -= dec;
    },
    // e for event
    updateXY: function(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }
});
