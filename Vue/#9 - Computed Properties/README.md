## Computed Properties

Seperti halnya dengan _properties_ pada umumnya, _computed properties_ memiliki semacam proses komputasi yang tersimpan di dalam _variable_ seperti halnya _property_ pada umumnya dan dapat menghasilkan nilai tertentu. Contoh:

```html
<button v-on:click="a++">Add to A</button>
<button v-on:click="b++">Add to B</button>
<p>A - {{a}}</p>
<p>B - {{b}}</p>
```

Pada kode di atas, ketika kita menekan tombol A dan B, maka _property_ `a` dan `b` (**lihat kode di bawah ini)** juga akan menambah sebanya 1 poin. Kemudian nilai `a` dan `b` tersebut ditampilkan di _tag_ `p`, sesuai dengan nama _property_-nya.

```js
data: {
    age: 20,
    a: 0,
    b: 0
},
```

Pada contoh-contoh _property_ di atas, merupakan jenis _property_ yang sering / umumnya kita temui. Namun di Vue, kita dapat menggunakan yang namanya _computed property_ seperti pada kode di bawah ini:

```js
computed: {
    addToA: function() {
      return this.a + this.age;
    },
    addToB: function() {
      return this.b + this.age;
    }
```

Karena pada awal pembuatannya merupakan sebuah _function_, maka tingkah laku _computed properties_ ini hampir sama seperti _function_ pada umumnya, yaitu: dapat me-_return_ nilai hasil komputasi (untuk yang _non-void function_). Nilai tersebut nantinya akan ditampilkan di file html, seperti pada kode di bawah ini:

```html
<p>Age + A = {{ addToA }}</p>
<p>Age + B = {{ addToB }}</p>
```

Yang menarik dari kode di atas adalah, _property_ `addToA` dan `addToB` sudah tidak memerlukan tanda kurung `()` yang seperti pada kebanyakan pemanggilan _function_. Hal ini tentu saja sangat memudahkan _programmer_ karena tidak perlu membuat banyak _function_ yang justru malah akan membingungkan proses pengambilan data dan menampilkan data tersebut secara _reactive_
