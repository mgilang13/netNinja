## Data & Methods

Ternyata di vue ini, kia bisa memanipulasi data dan method dengan mudah. Jadi di dalam `instance` tadi, kita bisa mengotak-atik data dan method yang terkait dengan `instance` tersebut, sebagaimana pada kode di bawah ini.

```js
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
```

Pada kode di atas, kita disuguhkan oleh kehebatan Vue dalam menangani data dan method. Method di atas, diwujudkan dalam bentuk `object` yang dapat berisi banytak `function`. Data dialirkan melalui parameter `s` yang terdapat pada methods `greet()`. Sehingga apabila method ini dipanggil melalui file html, seperti ini:

```html
<div class="vue-app">
  <h1>{{greet('ied') }}</h1>
</div>
```

parameter `s` di file js akan diisi oleh parameter berjenis string berisi value `ied` yang akan dikirim ke method vue.
Sehingga ia akan menampilkan seperti yang ada pada gambar di bawah ini:

![data_methods.png](data_methods.png)
