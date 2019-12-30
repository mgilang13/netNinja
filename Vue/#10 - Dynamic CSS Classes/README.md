## Dynamic CSS Classes

Di Vue, terdapat fitur untuk membuat CSS `class` di file HTML dinamis. MIsalnya ketika kita ingin menambahkan `class` tertentu setelah melakukan `action` tertentu pada elemen HTML tertentu (di dalam kasus ini kita menggunakan _event_ `onclick`) kita dapat menggunakan fitur di Vue yang namanya `v-bind:class`. Masih dalam satu jenis _binding_ di VUe, namun berbeda dengan _binding_ sebelumnya, di mana pada kasus ini data _binding_ yang digunakan adalah data `class`.
Perhatikan baris kode di bawah ini:

```html
<div v-on:click="available = !available" v-bind:class="{available: available}">
  <span>Gilang</span>
</div>
```

Kode tersebut merupakan contoh dari _dynamic css classes_ pada Vue. Di mana ketika kita beraksi dengan memanggil event `onclick` pada elemen tersebut, maka akan terjadi proses **switching** yang terdapat pada _value_ `available = !available`, yang berarti akan menghasilkan _value_ bawaan dari _property_ `available` tersebut. Pada file JS di bawah ini. dituliskan bahwasamya _value_ dari `available` adalah `false`.

```js
data: {
  available: false;
}
```

Maka ketika _tag_ `div` diklik maka nilai dari `available` akan berubah menjadi `true`, bila diklik lagi maka akan berubah menjadi `false` lagi. Itulah kemudahan yang ditawarkan oleh Vue di dalam mengolah data `boolean`.

Kemudian nilai _property_ `available` akan dilempar ke `v-bind:class` sehingga mengubah _value class_ `available` apakah `true` atau `false`. Apabila _property_ `available` bernilai `true`, maka class `available` akan ditampilkan, bila `false`, maka _class_ `available` akan dihilangkan (_none-class_ / tidak memiliki _class_)

```html
<button v-on:click="nearby = !nearby">Toggle Nearby</button>
<button v-on:click="available = !available">Toggle Available</button>
```

Kemudian kita menambahkan 2 `button` untuk memberikan contoh bagaimana mengintegrasikan antara 1 `class` dengan `class` yang lain di dalam bentuk _computed properties_ yang sudah kita pelajari sebelumnya. Maka kita tambahkan _property_ `nearby` pada _object_ `data`, seperti kode di bawah ini:

```js
data: {
    available: false,
    nearby: false
  }
```

Lalu kita menambahkan _computed properties_ untuk men-dinamisasi _class_, selanjutnya kita beri nama properties tersebut dengan nama _computed class_ (compClass), seperti pada kode di bawah ini:

```js
computed: {
    compClass: function() {
      return {
        available: this.available,
        nearby: this.nearby
      };
    }
  }
```

_Value_ dari `available` dan `nearby` akan berubah-ubah seiring dengan proses switching pada 2 `button` tersebut dilakukan.

Kemudian `compClass` ditampilkan seperti biasa di file HTML-nya dengan bantuan `v-bind:class`, seperti pada kode di bawah ini:

```html
<div v-bind:class="compClass">
  <span>Gilang</span>
</div>
```

ketika _class_ `nearby` ikut dipanggil maka dia akan menyisipkan kata "nearby" di _child_ yang paling akhir. Hal ini dikarenakan pada file CSS, _class_ `nearby` membentuk semacam _pseudo-class_ `::after` yang menyisipkan `content` pada _child_ paling terakhir dari elemen HTML yang memiliki atribut _class_ `nearby`.

```css
.nearby span:after {
  content: "nearby";
  margin-left: 10px;
}
```

Kata "nearby" dapat dilihat pada screenshot di bawah ini.

![nearby_css](nearby_css.png)
