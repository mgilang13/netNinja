## Nesting Component

Di dalam vue, bagian-bagian yang bergabung menjadi 1 kesatuan tampilan web disebut dengan `component`. Kalau diibaratkan seperti sebuah rumah, ada bagian yang namanya pintu, jendela, lantai, dapur, dsb. Begitu pula dengan website, di dalamnya ada header, footer, content, aside, article, dsb. Semua itu di dalam vue disatukan dalam sebuah komponen, sehingga memudahkan dalam error debugging

Dalam materi ini, kita akan membuat 3 jenis component di dalam folder `components` yaitu

```
- components
    -- Employee.vue
    -- Footer.vue
    -- Header.vue
```

Kemudian 3 jenis komponen tersebut dipanggil melalui `root component` yaitu component yang pertama kali di-render oleh Vue, seperti pada contoh kode pada main.js di bawah ini:

```
new Vue({
  el: "#app",
  render: h => h(App)
});
```

Maka pada contoh kode di atas, root component-nya adalah `App.vue`.

1.  Header.vue <br>
    Pada komponen ini, kita akan membuat tampilan untuk `header` contoh website sederhana yang akan kita buat nantinya. Lihat kode di bawah ini

    ```html
    <template>
      <header><h1>{{ title }}</h1></header>
    </template>
    ```

    Header yang akan kita buat berisi elemen HTML `h1` yang mengambil data `title` dari script javascript di bawahnya, seperti kode berikut ini:

    ```html
    <script>
      export default {
        data() {
          return {
            title: "Vue Employees"
          };
        }
      };
    </script>
    ```

2.  Footer.vue <br>
    Adapun komponen Footer.vue berisikan elemen `p` seperti di bawah ini:

    ```html
    <template>
      <footer>
        <p>{{ copyright }}</p>
      </footer>
    </template>
    ```

    Pada kode di atas, elemen `p` di dalam tag `footer` akan memanggil property `copyright` dari script Vue di bawahnya, yaitu seperti ini:

    ```html
    <script>
      export default {
        data() {
          return {
            copyright: "Copyright 2020, M. Gilang"
          };
        }
      };
    </script>
    ```

3.  Employee.vue <br>
    Pada komponen ini, berisikan daftar dari para karyawan yang disimpan di dalam array property `employees` seperti di bawah ini:

        ```html
        <script>
        export default {
            data() {
            return {
                employees: [
                { name: "Gilang", speciality: "Front-End", show: false },
                { name: "Bani", speciality: "Back-End", show: false },
                { name: "Fuad", speciality: "UI/UX", show: false },
                { name: "Faris", speciality: "Python", show: false },
                { name: "Fajar", speciality: "Multimedia", show: false },
                { name: "Mardigu", speciality: "Boss", show: false }
                ]
            };
            }
        };
        </script>
        ```

    Kemudian dipanggil oleh script HTML di Vue, di atasnya:


    ```html
    <div id="employees">
        <ul>
        <li
            v-for="employee in employees"
            v-bind:key="employee"
            v-on:click="employee.show = !employee.show"
        >
            <h2>{{ employee.name }}</h2>
            <h3 v-show="employee.show">{{ employee.speciality }}</h3>
        </li>
        </ul>
    </div>
    ```

Setelah itu, root component yakni `App.vue` akan menggabungkan itu semua, seperti ini:

```html
<template>
  <div>
    <app-header></app-header>
    <app-employee></app-employee>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import Employee from "./components/Employee.vue";

  export default {
    components: {
      "app-header": Header,
      "app-footer": Footer,
      "app-employee": Employee
    },
    data() {
      return {};
    }
  };
</script>

<style></style>
```
