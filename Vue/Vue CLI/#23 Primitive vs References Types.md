## Primitve vs References Types

Ketika menggunakan `props` kita perlu mengenal 2 jenis tipe data yang dimasukkan ke dalam `props`. **Primitive props** berbentuk `string, boolean, number,` dsb. Adapun **reference props** berbentuk `object` dan `array`.

Primitive props apabila diubah bagian child componentnya, maka tidak akan mengubah di bagian data aslinya yaitu yang di root component.

Sebaliknya, reference props akan mengubah keduanya baik di original data maupun yang didistribusikan ke components.

1.  Reference props <br>
    Contoh dari reference type adalah seperti kode di bawah ini, di bagian component `Employee.vue`:

            `<button v-on:click="deleteEmployee">Delete employee</button>`

        Atribut `v-on:click"deleteEmployee"` akan memanggil methods `deleteEmployee` di bawahnya seperti ini:

        ```js
        methods: {
            deleteEmployee: function() {
                this.employees.pop();
            }
        }
        ```

    Meskipun kita menghapus melalui komponen di bawah root, hal tersebut tetap akan berdampak sama dengan yang ada di root, pada data object di root `App.vue` itu.


    ```js
    data() {
        return {
            employot: [
            { name: "Gilang Khoiri", speciality: "Front-End", show: false },
            { name: "Bani", speciality: "Back-End", show: false },
            { name: "Fuad", speciality: "UI/UX", show: false },
            { name: "Faris", speciality: "Python", show: false },
            { name: "Fajar", speciality: "Multimedia", show: false },
            { name: "Mardigu", speciality: "Boss", show: false }
            ],
    ```

2. Primitive props <br>
   Sebaliknya, bila kita memakai `props` selain yang bertipe `object` dan `array`, maka perubahan pada komponen di bawah root tidak akan mengubah original data yang ada pada root component.

   Misalkan kita membuat `props` `title` di root yang mengarah ke komponen `Header.vue` dan `Footer.vue` kemudian kita memberikan `methods` di `Header` yang mengubah `title` tersebut.

   `<h1 v-on:click="changeTitle">{{ title }}</h1>`

   Adapun props primitive di komponen `Header.vue` digambarkan seperti di bawah ini:

   ```js
    props: {
        title: {
        type: String
        }
   ```

   Kemudan props tersebut diubah dengan methods `changeTitle` seperti di bawah ini:

   ```js
    methods: {
        changeTitle: function() {
            this.title = "Title Changed!";
        }
   }
   ```

   Maka `title` di `Header.vue` akan berubah. Sementara itu, `title` yang ada di `Footer.vue` tidak akan berubah. Itu tandanya original data di root tidak berubah.
