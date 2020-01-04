## Referencing with `$refs`

Reference di dalam Vue, digunakan untuk mendapatkan informasi yang memiliki reference tertentu di dalam 1 instance Vue. Reference diwujudkan dalam bentuk `ref=""` di HTML dan `$refs.namaRefs` di JS.

```html
<input type="text" ref="gilang" />
<button v-on:click="readRefs">Submit</button>
<p>Your favourite food is {{food}}</p>
```

Contoh baris kode di atas ini, atribut ref akan menyimpan informasi di dalam tag `input`, dalam hal ini kita akan menyimpan `value` dari tag `input` itu sendiri.

Kemudian kita akan menampilkan informasi tersebut di dalam tag di `p` di bawahnya melalui property `food`. Maka proses di dalam JS dapat kita lihat di bawah ini:

```javascript
data: {
  food: ""
},
methods: {
  readRefs: function() {

    this.food = this.$refs.gilang.value;
  }
}
```

Perlu kita lihat di atas, bahwasanya penulisan reference di dalam javascript adalah `$refs.gilang`, mengacu pada reference yang ada pada atribut elemen HTML `input` yaitu `ref="gilang"`.

Selain berupa `input`, reference juga dapat ditempatkan pada elemen-elemen yang lain, dalam hal ini saya tempatkan di tag `p`, seperti di bawah ini:

`<div ref="test">hello</div>`

sehingga di dalam instance vue-nya dapat kita panggil dengan cara seperti ini:

`this.$refs.test.innerText`
