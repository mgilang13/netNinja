## Intro to Components

Di dalam Vue, `component` merupakan penyusun utama dari website. Di dalam 1 instance bisa saja memiliki banyak komponen penyusun. Dengan adanya `component` ini, pengelolaan `error` dan `debugging` menjadi lebih mudah. Contoh `componenet` sederhana dapat dilihat di baris kode di bawah ini:

```js
Vue.component("greeting", {
  template:
    "<p> Hey, re-usable componeent is me</p>",
```

parameter `greeting` adalah nama dari komponen itu sendiri, yang nantinya akan menjadi `tag` baru `html`. Sementara itu, parameter kedua adalah _object_ dari `component` itu sendiri. Contoh pemanggilan `component` di file html

```html
<div id="vue-app-one">
  <h2>Vue app one</h2>
  <greeting></greeting>
</div>
```

Kemudahan yang ditawarkan oleh `component` adalah kemampuannya dalam _reusable_ `component` itu sendiri. Sehingga 1 `component` dapat digunakan banyak sekali. Hal ini sangat penting dalam _web scalability development_.

Komponen juga dapat memiliki `data` dan `method` layaknya `instance` biasa, seperti di bawah ini:

```js
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
```

Selain itu, komponen juga dapat disisipkan `template` yang merupakan baris kode HTML dan sekaligus dapat memberikan aksi pada komponen itu sendiri contoh:

```js
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
```

Maka, pada kode di atas, `template` yang elemennya sudah diberi `event onclick` digunakan untuk mengubah `name` dengan method yang ada pada komponen itu sendiri
