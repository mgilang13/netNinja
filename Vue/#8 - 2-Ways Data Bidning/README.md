## 2-Ways Data Binding

Ini merupakan materi yang sangat penting dari Vue JS sekaligus merupakan fitur kelebihan Vue JS. 2-Ways data binding maksudnya adalah binding data ketika memasukkan data (1st way) dan updating data/showing data secara langsung (2nd way) dan kedua hal ini terjadi secara bersamaan seolah-olah kedua proses tersebut saling terhubung.

Di dalam Vue, proses ini difasilitasi oleh attribut `v-model` seperti pada contoh kode di bawah ini:

```html
<input type="text" v-model="name" /> <input type="text" v-model="age" />
```

Selanjutnya, v-model memiliki value yang sama dengan data property pada instance Vue JS seperti di bawah ini.

```javascript
data: {
    name: "",
    age: ""
}
```

Kemudian data secara langsung ditampilkan dengan 2 tanda kurung kurawal di file htmlnya

```html
<span>{{name}}</span> <span>{{age}}</span>
```

Sehingga apabila kita mengetik suatu data berupa string pada form tersebut, maka data akan secara otomatis juga akan ikut tertampil di inerface yang sama sesuai dengan apa yang kita ketikkan sebelumnya.
