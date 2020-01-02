## Looping with v-for

Setelah kita mengenal mengenai apa itu pengkondisian, Vue juga menawarkan salah satu fiturnya yang menawan, yaitu `v-for`.

`characters: ["Fajar", "Gilang", "Fuad", "Faris"]`

Anggaplah kita memiliki baris data seperti di atas. Baris data `characters` dapat kita tampilkan dalam bentuk `list` dengan bantuan `v-for`-nya Vue, seperti ini:

```html
<ul>
  <li v-for="character in characters">{{ character }}</li>
</ul>
```

Kata `character` di dalam attribute `v-for` di atas adalah nama alias yang merepresentasikan data tunggal dari baris data `characters` di instance Vue. Oleh karenanya `character` ini dapat diubah menjadi `x`, atau `y`, terserah.

Adapun bila kita ingin menampilkan data yang berupa object, di mana di dalam satu object memiliki key dan value-nya tersendiri, dapat dilihat pada contoh kasus di bawah ini:

```js
employees: [
  { name: "Budiono", age: 10 },
  { name: "Budianto", age: 12 },
  { name: "Budiani", age: 15 }
];
```

Pada kasus di atas, disebutkan bahwasanya array `employees` memiliki 3 object, yang masing-masing object memiliki 2 key (name, age) dan value-nya tersendiri. Maka cara menampilkannya dengan v-for adalah sebagai berikut:

```html
<ul>
  <li v-for="(employee,index) in employees">
    {{index}} . {{employee.name}} - {{employee.age}}
  </li>
</ul>
```

Apabila tidak perlu index, maka cukup dihilangkan kata index-nya.

V-for juga dapat diterapkan pada tag `template` untuk menghilangkan parent loopingnya. Misal:

```html
<div v-for="(employee,index) in employees">
  <h3>{{index}}. {{employee.name}}</h3>
  <p>{{employee.age}}</p>
</div>
```

Pada contoh kode di atas, file html akan mengulangi di mulai dari tag `div`, sehingga akan muncul 3 `div` hanya untuk mengulangi object itu. Dan di dalam Vue, seminimal mungkin menggunakan `div` di dalam 1 instance maupun komponen, karena dapat membingungkan programmer yang lain dan kode terkesan tidak rapi. Maka solusinya adalah dengan mengganti `div` dengan `template` seperti di bawah ini:

```html
<template v-for="(employee,index) in employees">
  <h3>{{index}}. {{employee.name}}</h3>
  <p>{{employee.age}}</p>
</template>
```

Dengan adanya `template` maka v-for tidak akan melakukan looping dari parent-nya, melainkan langsung pada child-nya, sehingga `h3` dan `p` yang akan di-looping secara berurutan.
