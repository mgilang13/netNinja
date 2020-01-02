## Multiple Instance

Vue tidak hanya memiliki 1 instance, tapi juga lebih dari itu. Namun cara ini sangat jarang digunakan karena hal ini justru akan membingungkan programmer. Vue sudah didukung dengan fitur utamanya yakni `componeent`, sehingga penggunaan multiple instance dalam satu antarmuka sebaiknya tidak dilakukan.

```js
let one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue App One"
  },
  computed: {
    greet: function() {
      return "Hello from App 1 :)";
    }
  }
});
```

```js
let two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue App Two"
  },
  computed: {
    greet: function() {
      return "Yo dudes, this is app 2 speaking to ya :)";
    }
  }
```

Pada 2 blok kode di atas. akan menampilkan 2 jenis `title` dan `greet` apabila dipanggil dengan cara seperti di bawah ini:

```html
<div id="vue-app-one">
  <h2>{{title}}</h2>
  <p>{{greet}}</p>
</div>

<div id="vue-app-two">
  <h2>{{title}}</h2>
  <p>{{greet}}</p>
</div>
```

Selain itu, kita juga bisa melakukan aksi pada instance yang lain dari instance tertentu, misalnya kita ingin mengubah title pada instance 1 melalui method yang ada pada instance 2, seperti di bawah ini:

```js
let one = new Vue({...});

let two = new Vue({
...
methods: {
    changeTitle: function() {
      one.title = "Title changed!";
    }
  },
```

Cara memberikan aksi pada instance yang lain adalah dengan memberikan tambahan `one.` (sesuai dengan nama variable instance).

Adapun pada file html nya kita dapat menuliskannya seperti ini:

```html
<button v-on:click="changeTitle">Change App 1 Title</button>
```

Kode tersebut terletak di dalam `div` dari `#app-vue-two` dan mengubah `title` pada `#app-vue-one`
