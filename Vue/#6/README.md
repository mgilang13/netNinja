## Event Modifiers

Event modifiers ini digunakan untuk menambahkan fungsionalitas tertentu pada _event_ yang dipanggil. Seperti pada kode di bawah ini:

`<button v-on:click.once="substract(1)">Substract</button>`

Pada kode di atas, _modifier_-nya adalah `once`. _Modifier_ ini akan memberikan efek berupa _event_ yang hanya dapat dipanggil satu kali saja, bila lebih dari 1, maka _event_ akan ditolak.

---

**Note:**
Untuk _modifier_ `prevent` yang digunakan untuk menghentikan sementara proses eksekusi elemen html (dalam kasus ini me-_link_ ke alamat website tertentu) pada latihan ini tidak dapat dikerjakan karena tanpa _modifier_ tersebut pun, fungsi sudah berjalan dengan normal (sudah ter-_prevent_ sendiri)

`<a v-on:click="click" href="https://www.google.com">Google</a>`

Setelah tombol itu diklik maka akan mengarah ke function `click` pada `instance` Vue terkait.

```js
click: function() {
  alert("You're clicked me, right?");
}
```
