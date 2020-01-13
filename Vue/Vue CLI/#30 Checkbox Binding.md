## Checkbox Binding

Di dalam Vue, kita juga dipermudah dengan salah satu fitur dari Vue, yaitu: checkbox binding. Fitur ini digunakan untuk mengambil `value` dari elemen `input` pada `form` di HTML, untuk kemudian disimpan di dalam object Vue

```html
<div id="checkboxes">
  <label>Pollitical</label>
  <input type="checkbox" value="politic" v-model="blog.categories" />
  <label>Economy</label>
  <input type="checkbox" value="economy" v-model="blog.categories" />
  <label>National</label>
  <input type="checkbox" value="national" v-model="blog.categories" />
  <label>International</label>
  <input type="checkbox" value="international" v-model="blog.categories" />
</div>
```

Kita menggunakan tipe input `checkbox` dengan `value = politic` misalnya. Kemudian kita melakukan binding dengan `v-model` dan disimpan di dalam object `blog.categories`, seperti pada kode di bawah ini:

```js
data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: []
      }
    };
  }
```

Kategori-kategori tersebut disimpan dalam array `categories []`, kemudian ditampilkan di dalam script HTML kembali dengan `v-for`, seperti di bawah ini. Sehingga bisa dikatakan kita sedang menggunakan two-way binding di dalam kasus ini:

```html
<ul>
  <li v-for="category in blog.categories" v-bind:key="category">
    {{ category }}
  </li>
</ul>
```
