## Get Request

Method `get` digunakna untuk mendapatkan request dari resource JSON di url tertentu. Sehingga kita bisa menampilkan data tersebut ke halaman website kita secara dinamis. Langkah pertama adalah membuat komponen baru `showBlog`.

```html
<div id="show-blogs">
  <h1>All Blog Articles</h1>
  <div v-for="blog in blogs" v-bind:key="blog.id" class="single-blog">
    <h2>{{ blog.title }}</h2>
    <article>{{ blog.body }}</article>
  </div>
</div>
```

Kita menggunakan `v-for` untuk menampilkan semua data resource ke dalam web kita. Setelah itu kita melakukan method `get` pada hook `created`. Artinya ketika komponen-komponen tersebut sedang diinisiasi, maka method `get` akan melakukan penerimaan data secara langsung dari url yang dimasukkan. Seperti pada contoh kode di bawah ini:

```js
created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  }
```

Sebelumnya, data disimpan di dalam array `blogs` kemudian ditampilkan di dalam script HTML dengan memakai atribut `v-for`
