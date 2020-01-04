## Nesting Components and Importing Components

Component di dalam Vue dapat di nesting ataupun di import. Diimportnya aja bisa secara globally atau locally.

### 1. Globally

Secara global, berarti component diakses dari file `main.js`

```js
import Employee from "./Employee.vue";

Vue.component("employee", Employee);
```

`"employee"` di sini merupakan alias / nama komponen yang akan digunakan nanti oleh `App.vue`, seperti ini:

`<employee></employee`

### 3. Locally

Adapun dengan locally, berarti component diakses dari file `.vue` / dari komponen yang lain.

```js
import Employee from "./Employee.vue";

export default {
  components: {
    employee: Employee
  },
```

Kite mengggunakan object `component` untuk mendeklarasikannya, berbeda sekali dengan import component secara global.
