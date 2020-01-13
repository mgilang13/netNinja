## Select Binding

Binding pada Vue juga dapat menangani apabila kita menggunakan select box pada form seperti di bawah ini:

```html
<label>Author:</label>
<select v-model="blog.author">
  <option v-for="author in authors" v-bind:key="author">{{ author }}</option>
</select>
```

Tidak seperti pada kasus checkbox binding yang di mana `v-model`-nya ditaruh di setiap elemen `input` checkbox, pada select box penggunaan `v-model` hanya dilakukan 1 kali saja, yakni di bagian elemen `select` seperti di atas, baru pada elemen `option` dilakukanlah pengulangan.

Kemudian di bagian script JS dapat dilihat seperti di bawah ini:

```js
blog: {
    title: "",
    content: "",
    categories: [],
    author: ""
    },
    authors: ["Gilang", "Fajar", "Fuad"]
```

Setelah itu `author` dipanggil sebagai `v-model` di script HTML, dengan array terpisah dari object `blog`, yang selanjutnya akan dipanggil dengan `v-for` di elemen `option` dan ditampilkan lagi secara langsung di preview blog di bawahnya, seperti ini:

`<p>Author: {{ blog.author }}</p>`
