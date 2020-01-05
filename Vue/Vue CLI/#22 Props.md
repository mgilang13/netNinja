## Props

Props digunakan untuk mendistribusikan data dari root component ke component di bawahnya. Sehingga apabila ada beberapa component yang membutuhkan beberapa data misalnya, maka kita tidak perlu menggandakan component itu sendiri, tinggal dipanggil saja props yang ada di root component. Cara memanggilnya adalah sebagai berikut:

`props: ["employees"],`

Sementara di bagian root component-nya, dipanggil juga di tag `app-employee`, yakni komponent `Employee.vue` diberikan attribute seperti di bawah ini:

`<app-employee v-bind:employees="employot"></app-employee>`

`v-bind:employees` adalah atribut yang menghubungkan dengan props `"employees"`. Sementara itu, value `employot` merupakan property array data di bawah nya, yaitu:

```javascript
data() {
    return {
      employot: [
        { name: "Gilang", speciality: "Front-End", show: false },
        { name: "Bani", speciality: "Back-End", show: false },
        { name: "Fuad", speciality: "UI/UX", show: false },
        { name: "Faris", speciality: "Python", show: false },
        { name: "Fajar", speciality: "Multimedia", show: false },
        { name: "Mardigu", speciality: "Boss", show: false }
      ]
    };
  }
```
