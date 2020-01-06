## Events

![](./image/events.png)

Selanjutnya kita akan membahas `event`. Event di sini bukan event seperti yang ada di javascript. Event di Vue CLI ini berfungsi untuk mengirimkan data dari child component ke parent component (kebalikan dari `props`). Contoh dari `event` itu sendiri dapat kita lihat pada contoh kode di bawah ini:

```js
changeTitle: function() {
    this.$emit("changeTitle", "Vue Wizards");
}
```

Di `event` kita menggunakan `$emit` untuk mengirimkan data dari child ke parent. Pada contoh di atas, data berupa string `Vue Wizards` akan dikirim ke root component `App.vue` seperti di bawah ini:

`<app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>`

nama variabel tadi dtangkap oleh `v-on:changeTitle` di root. Kemudian disimpan di dalam value / function `updateTitle($event)`. Nah `$event` inilah yang berisi data string `Vue Wizards` yang akan diolah di script javascript di bawahnya untuk mengubah data `title` yang ada.

```js
methods: {
    updateTitle: function(updateTitle) {
      this.title = updateTitle;
    }
  }
```
