## HTTP Request

HTTP Request Method merupakan methode untuk memmberikan aksi tertentu terhadap resource yang diberikan. Pada contoh kali ini kita akan menggunakan method `post` yang akan men-_submit_ resource ke url tertentu. Sebelumnya kita perlu untuk menginstall plugin `vue-resource` untuk membantu mengolah resource pada Vue. Ketik saja:

`npm install vue-resource`

Kemudian di bagian `main.js` kita deklarasikan terlebih dahulu `vue-resource` tersebut:

```js
import VueResource from "vue-resource";

Vue.use(VueResource);
```

Di sini kita akan membuat `button` dengan method `post` seperti di bawah ini:

`<button v-on:click.prevent="post">Add Blog</button>`

Kemudian, `button` tersebut akan memanggl function method `post` pada scirpt JS di bawahnya, seperti ini:

```js
post: function() {
    this.$http
    .post("https://jsonplaceholder.typicode.com/posts", {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
    })
    .then(function(data) {
        console.log(data);
        this.submitted = true;
    });
}
```

Hal yang perlu untuk kita perhatikan adalah `$http`, object ini diperoleh dari plugin `vue-resource` yang sudah kita install tadi.

Kemduian `console.log(data)` digunakan untuk melihat data yang di-post tadi. Hasilnya seprti pada screenshot di bawah ini:

![](image/add-blog.png)
