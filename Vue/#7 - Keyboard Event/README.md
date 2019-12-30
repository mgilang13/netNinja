## Keyboard Events

Selain _event_ yang ada pada _mouse_, kita juga mengenal adanya _event_ pada _keyboard_. 2 jenis _event_ ini tentu sangat sering dipergunakan, karena _hardware_ untuk mengakses website ya _mouse_ dan _keyboard_ itu sendiri.

`<input type="text" v-on:keyup.enter="logName" />`

Pada baris kode di atas, _keyboard event_ yang digunakan adalah `onkeyup` yang berarti ketika keyboard dilepas maka _event_ baru akan dijalankan. Pada kode di atas, _event_ akan memanggil _fumction_ `logName()` yang terdapat pada _file_ JS di bawah ini:

```javascript
logName: function() {
  console.log("you entered name");
}
```

---

**Note:** Sama halnya dengan _mouse event_, pada _keyboard event_ juga dikenal adanya _event modifier_, pada kasus di atas _event modifier_ yang digunakan adalah `enter`, artinya ketika ditekan tobmol `enter`, maka _event_ baru dijalankan. Apabila _event modifier_ ini dihapuskan maka _event_ akan terus berjalan selama tombol _keyboard_ di-_release_ (dilepas).

Selain `onkeyup`, _keyboard event_ juga dapat berupa `onkeydown` (dieksekusi ketika tombol ditekan) dan `onkeypress`
