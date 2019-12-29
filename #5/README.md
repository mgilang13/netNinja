## Events

Event ini merupakan bentuk aksi yang kita berikan kepada elemen-elemen yang ada pada HTMLtersebut, misalnya: ketika elemen tersebut di-click maka event-nya `onclick` atau ketika elemen tersebut dilewati oleh cursor mouse di atasnya, maka event-nya menggunakan `onmousemove`. Hal ini dicontohkan seperti pada kode di bawah ini:

```html
<p>My age is : {{age}}</p>
<button @click="add(1)">Add</button>
<button v-on:click="substract(1)">Substract</button><br />
<button @dblclick="add(10)">Substract 10 Year</button>
<button v-on:dblclick="substract(10)">Substract 10 Year</button>
<br />
<div id="canvas" v-on:mousemove="updateXY">
  {{x}}, {{y}}
</div>
```

Pada kode di atas, vue menawarkan attribute-nya yang bernama `v-on` atau disingkat menjadi `@`. Attribute ini berfungsi untuk menyederhanakan syntax `EventListener` di JS Native yang panjang. Penulisan di VUe JS sendiri sama seperti contoh pada materi sebelumnya (**lihat**: binding dan data & methods)

```js
new Vue({
  el: "#vue-app",
  data: {
    age: 24,
    x: 0,
    y: 0
  },
  methods: {
    add: function(inc) {
      this.age += inc;
    },
    substract: function(dec) {
      this.age -= dec;
    },
    // e for event
    updateXY: function(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }
});
```

function `updateXY` digunakan untuk menentukan offset dari letak pointer di dalam area ber-id `canvas`, sehingga Vue secara otomatis akan me-_update_ data-nya yang sebelumnya tersimpan di variabel `x` dan `y` bersesuaian dengan apa yang ia dengar dari event `onmousemove`
