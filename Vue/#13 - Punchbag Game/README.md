## Conditionals

Di dalam Vue, kita juga diperkenalkan dengan yang namanya pengkondisian (if...else) seperti pada bahasa pemrograman pada umumnya. Tentu saja hal ini sangat memudahkan apabila kita menangani kasus yang membuat kita harus memilih di antara 2 pilihan, seperti pada contoh kode di bawah ini:

```html
<button v-on:click="error = !error">Toggle Error</button>
<button v-on:click="success = !success">Toggle Success</button>
<p v-if="error">There has been an error</p>
<p v-else-if="success">There has been an success</p>
```

Pada `button` kita memberikan _event_ `onclick` dengan model _switching_ yang akan memilih di antara 2 kondisi benar atau salah. Karena itulah nilai bawaan dari _property_ tersebut adalah `false`, maka pada pengkondisian `v-if` di bawahnya juga diawali dengan nilai `false`, yang artinya tulisan / `child` dari _tag_ `p` tidak dimunculkan.

```js
data: {
    error: false,
    success: false
  },
```

Adapun `v-show` akan memberikan _property_ CSS berupa `display`, yang akan bernilai `show` apabila _boolean_-nya bernilai `true`, `none` apabila _property boolean_-nya bernilai `false`.

```html
<p v-show="error">There has benn error</p>
<p v-show="success">There has benn success</p>
```

Selanjutnya `p` akan memiliki _style_ CSS seperti ini:

![](v_show.png)
