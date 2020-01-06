## Event Bus

Event Bus yang dimaksud disini seperti sebuah saluran yang menghubungkan antara kedua komponen. Bus dideklarasikan di bagian `main.js` yang nantinya akan mengubungkan 2 / lebih object. Misalkan:

Dibagian `Header.vue` kita membuat sebuah method untuk mengubah title yang nantinya akan diemit ke `bus` yang ada di `main.js` kemudian dipanggil oleh `$on` yang ada di `Footer.vue`, seperti di bawah ini

```js
import { bus } from "../main";

changeTitle: function() {
      this.title = "Vue Wizards";
      bus.$emit("titleChanged", "Vue Wizards");
    }
```

Kemudian di-_emit_ ke `main.js` seperti di bawah ini:

`export const bus = new Vue();`

Setelah itu, dipanggil dari `Footer.vue` seperti di bawah ini:

```js
import { bus } from "../main";

created() {
    bus.$on("titleChanged", data => {
      this.title = data;
    });
  }
```

Maka `title` yang ada di `Footer.vue` juga akan berubah mengikuti apa yang ada di `Header.vue`.
