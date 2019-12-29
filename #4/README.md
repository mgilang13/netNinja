## Data Binding

Untuk menampilkan berbagai macam data. Seperti pada kode di bawah ini:

```html
<a :href="website">Google</a> <input type="text" :value="name" />
```

`:href, :value` atau `v-bind:href, v-bind:value` merupakan keuntungan yang ditawarkan oleh Vue, sehingga kita tidak perlu repot-repot memanggil DOM JS yang syntax-nya sangat panjang dan melelahkan. Dalam pemanggilannya tidak diperlukan adanya tanda kurung kurawal `{{ }}`, sehingga pemanggilannya langsung `"website"`, tanpa embel-embel `{{ }}`, berbeda dengan mater yang sebelumnya yang berkaitan dengan `string` biasa.

Kemudian data binding Vue juga dapat menyimpan data elemen HTML seperti berikut.

`websiteTag: '<a href="https://www.google.com">Google</a>'`

yang nantinya akan dipanggil dengan `attribute v-html` pada Vue, seperti pada kode di bawah ini.

`<p v-html="websiteTag"></p>`

maka, browser akan menampilkan elemen yang disimpan di dalam data di Vue tadi.
