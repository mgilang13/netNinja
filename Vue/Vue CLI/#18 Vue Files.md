## Vue Files

Di dalam Vue CLI kita harus memperhatikan beberapa jenis file yang membangun environtment dari Vue itu sendiri, sehingga kita akan mudah dalam proses development website menggunakan Vue CLI dalam pemabangungannya.

```
src
│   App.vue
│   main.js
│
└───assets
       logo.png

index.html
package.json
```

### 1. main.js

File ini merupakan file JS yang pertama kali di jalankan oleh browser. Sementara itu, `index.html` merupakan file HTML pertama yang di-load oleh browser. Sehingga kedua file ini bisa dikatakan berjalan bersamaan ketika aplikasi Vue dijalankan.

### 2. Package.json

Berisikan data-data package yang digunakan di dalam aplikas vue tersebut. Sehingga, package.json bisa berbeda antara aplikasi yang satu dengan yang lainnya.

### 3. App.vue

Merupakan aplikasi yang berisikan 3 jenis script language, yaitu: script HTML, Javascript, dan CSS. File ini dipanggil oleh file `main.js`

```js
import App from './App.vue

new Vue({
  el: '#app',
  render: h => h(App)
})
```
