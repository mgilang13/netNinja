new Vue({
  el: ".vue-app",
  data: {
    name: "Muhammad Gilang Nur Khoiri",
    job: "Web Programmer"
  },
  methods: {
    greet: function(s) {
      return "Happy " + s + ", " + this.name;
    }
  }
});
