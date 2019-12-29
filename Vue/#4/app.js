new Vue({
  el: "#vue-app",
  data: {
    name: "Muhammad Gilang Nur Khoiri",
    job: "Web Programmer",
    website: "https://www.google.com",
    websiteTag: '<a href="https://www.google.com">Google</a>'
  },
  methods: {
    greet: function(s) {
      return "Happy " + s + ", " + this.name;
    }
  }
});
