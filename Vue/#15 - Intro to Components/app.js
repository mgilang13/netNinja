Vue.component("greeting", {
  template:
    "<p> Hey, re-usable componeent is me ({{name}}).<br><br> <button v-on:click = 'changeName'>Change Name</button> </p>",
  data: function() {
    return {
      name: "Gilang"
    };
  },
  methods: {
    changeName: function() {
      this.name = "Fuad";
    }
  }
});

new Vue({
  el: "#vue-app-one"
});

new Vue({
  el: "#vue-app-two"
});
