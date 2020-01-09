## Input Binding

Pada latihan kali ini kita akan membuat sistem blog. Di sini kita mengawalinya dengan pembuatan component `add-blog` yang digunakan untuk menambahkan `title` dan `content` dari blog itu sendiri. Berikut adalah `template` dari component `addBlog`

```html
<div id="add-blog">
  <h2>Add a New Blog Post</h2>
  <form action="">
    <label for="">Blog Title</label>
    <input type="text" v-model.lazy="blog.title" required />
    <label for="">Blog Content</label>
    <textarea v-model.lazy="blog.content"></textarea>
  </form>
  <div id="preview">
    <h3>Preview Blog</h3>
    <p>Blog Title: {{ blog.title }}</p>
    <p>Blog Content:</p>
    <p>{{ blog.content }}</p>
  </div>
</div>
```

Pada kode di atas, kita membuat sebuah form untuk memasukkan `title` dan `content` dari component blog. Dengan menggunakan `v-model.lazy` kita dapat menangkap value dari form tersebut setelah mengeklik tombol `tab` karena ada modifier `lazy`. Kemudian melalui script JS di bawahnya dihubungkan dengan outpu `{{ blog.title }}` dan `{{ blog.content }}`. Lihat kode di bawah ini.

```js
 blog: {
    title: "",
    content: ""
    }
};
```

Pada kode di atas, bisa kita lihat, bahwa `title` dan `content` disatukan dalam sebuah object `blog`, hal ini dimaksudkan agar pengiriman kedua data tersebut ke komponen yang lain lebih mudah.

Setelah itu component `addBlog.vue` dipanggil di root component `App.vue` seperti di bawah ini:

```html
<template>
  <add-blog></add-blog>
</template>

<script>
  import addBlog from "./components/addBlog.vue";

  export default {
    components: {
      "add-blog": addBlog
    },
    data() {
      return {};
    }
  };
</script>
```
