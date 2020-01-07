## Dynamic Component

Component dapat diatur dinamis, sesuai dengan aksi yang diberikan oleh user. Seperti misalnya ketika user mengeklik sebuah tombol, maka sistem akan menampilkan component yang ingin ditampilkan ketika tombol tersebut ditekan.

Misalkan kita memiliki 2 komponen yaitu `formOne` dan `formTwo`, di mana kedua komponen itu terhubung dengan komponen `formHelper` via `slot`, sehingga, kedua form tersebut memiliki content yang hampir sama. Dan ternyata, `slot` dapat menghubungkan antar component dalam 1 directory (sama-sama child).

Dalam hal ini kita akan menggunakan tag `component`, dengan menambahkan atribut `v-bind:is`, seperti di bawah ini:

`<component v-bind:is="component"></component>`

Sementara itu, properti `component` akan bernilai `form-one`, seperti yang ada pada object `components`. Sehingga apabila atribut ini berisi `form-one`, maka component `form-one`-lah yang akan ditampilkan.

```js
import formOne from "./components/formOne.vue";
import formTwo from "./components/formTwo.vue";

export default {
  components: {
    "form-one": formOne,
    "form-two": formTwo
  },
  data() {
    return {
      component: "form-one"
    };
  },
  methods: {}
};
```

Maka user perlu memberikan aksi pada `button` seperti di bawah ini apabila ingin menampilkan form secara bergantian, baik itu `formOne` maupun `formTwo`

```html
<button v-on:click="component = 'form-one'">Show Form One</button>
<button v-on:click="component = 'form-two'">Show Form Two</button>
```
