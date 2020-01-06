## Slots

Slot fungsinya hampir sama seperti halnya `props`. Namun, `slot` digunakan untuk menyisipkan HTML script dari parent ke child components, tidak bisa kebalikannya. Pertama slot didefinisikan di parent component kemudian dipanggil di child component. Tujuannnya adalah untuk memperbanyak HTML script apabila dibutuhkan di bebeapa halaman web yang berbeda. Contoh dari `slot` dapat kita lihat pada kdoe di bawah ini

Pertama adalah kita hubungkan child component ke root component. Script ini ada di file root component `App.vue`:

```js
components: {
    "form-helper": formHelper
  },
```

Kemudian kita panggil child component tersebeut di dalam tag `template` seperti ini:

```html
<template>
  <div>
    <form-helper></form-helper>
  </div>
</template>
```

Kemudian kta inisialisasi `slots` di dalam tag `template` tersebut

```html
<div slot="form-header">
  <h3>This is the title of form</h3>
  <p>Information about form</p>
</div>
```

Cara inisialisasinya dengan memberikan atribut `slot` pada tag `div`, kemudian diberikan value string yang nantinya akan dipanggil di child component, yaitu `"form-header"`.

Setelah itu slot dipanggil di bagian child component `formHelper.vue`, seperti kode di bawah ini:

```html
<form action>
  <div id="form-header">
    <slot name="form-header"></slot>
  </div>
</form>
```

Demikian pula dengan slot-slot yang lain, sama semua dalam hal pemanggilan slot tertentu. Hal ini memudahkan front-end developer dalam membangun website ketika akan membuat komponen yang sama di dalam beberapa halaman website yang berbeda.
