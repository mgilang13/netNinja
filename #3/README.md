## Instance

Di Vue, kita diperkenalkan dengan apa itu instance.

```javascript
new Vue({
  el: "#vue-app",
  data: {
    name: "Muhammad Gilang Nur Khoiri"
  }
});
```

Pada block di atas, intance ini menangani element `vue-app` yang berisikan data `name` yang kemudian akan dipanggil di web html berikut ini:

```html
<div id="vue-app">
  <h1>{{name}}</h1>
</div>
```

Di vue, pemakaian DOM JS sudah lebih disederhanakan.
