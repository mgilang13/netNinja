## Lifecycle Hooks

Bagian ini juga tidak kalah pentingnya dibandingkan dengan materi-materi yang lain.

![](image/lifehooks.png)

1.  Creation (Initialization)<br>
    Creation hook merupakan hook yang pertama kali berjalan di komponen sebelum komponen itu ditembahkan ke DOM. Hook ini juga berjalan selama _server-side_ melakukan _rendering_.

    **Gunakan** Hook ini ketika kita membutuhkan pengaturan awal pada suatu komponen baik ketika sedang di-_render_ oleh client maupun server. Di hook ini kita tidak akan diperbolehkan untuk mengakses DOM atau target mounting element di dalam creation hook.

    Macam-macam creation hook dapat kita lihat di bawah ini: <br>

    1. _beforeCreate_ : Hooks yang benar-benar pertama kali dijalankan dalam menjalankan komponen. `Data` masih belum dibuat secara reactive dan event belum diatur sedemikian rupa.

    2. _created_ : Di hooks ini kita diperbolehkan untuk mengakses data reactive dan events yang sudah aktif. Namun, template dan Virtual DOM masih belum diperbolehkan untuk dipasang dan di-_render_ di dalam hooks ini.

2.  Mounting (DOM Insertion)<br>
    Mounting hooks ini adalah hooks yang paling sering digunakan. Di tahap ini kita diperbolehkan untuk mengakses komponen. Hal ini berbeda dengan Creation Hooks yang masih tidak membolehkan kita untuk mengakses komponen.

    **Gunakan** ini ketika kamu membutuhkan gakses atau modifikasi DOM komponen secara cepat sebelum atau sesudah render awal.

    **Jangan gunakan** ini ketika kita membutuhkan untuk melakukan fetch beberapa data terhadap komponen tertentu di awal. Gunakan _created_ (atau created ditambah _activated_ untuk _keep-alive_ component) dalam kasus ini, khususnya jika kita membutuhkan data selama server rendering.

    Macam-macam mounting hooks dapat kita lihat di bawah ini:<br>

    1. _beforeMount_ : Hook ini berjalan sebelum initial render beerjalan dan setelah template atau render functions sudah di-_compile_. Hook ini sangat jarang dipanggil. Dan hook ini tidak akan dipanggil ketika sedang melakukan server-side rendering.

    2. _mounted_ : Hook ini memberikan kita akses penuh terhadap reactive component, template, dan rendered DOM. Hook ini merupakan hook syang paling sering diakses. Pola yang sering digunakan adalah fetch data untuk komponen kita (gunakan _created_ untuk kasus ini) dan modifikasi DOM, sering juga digunakan untuk mengintegrasikan komponen dengan non-Vue library.

3.  Updating (Diff & Re-render) <br>
    Hook ini dipanggil ketika terjadi perubahan pada komponen atau sesuatu yang menyebabkan komponen tersebut di-_render_ ulang.

    **Gunakan** hook ini ketika kita memerlukan penanda / notifikasi ketika komponen di-_render_ ulang.

    **Jangan gunakan** hooks ini kalau hanya untuk melihat perubahan sebuah property pada sebuah komponen. Dalam hal ini gunakanlah `computed properties` atau `watchers` untuk kasus ini.

    Macam-macam hook ini dapat kita lihat seperti di bawah in:<br>

    1. _beforeUpdate_ : Hook ini berjalan setelah data berubah di komponen tetentu dan mengulangi lifecycle komponen. Hook ini memberikan state baru pada data-data yang nyambung ke component sebelum component tersebut benar-benar di-_render_ ulang.

    2. _updated_ : Hook ini berjalan setelah data berubah di komponen dan DOM yang di-_render_ ulang. Jika kita membutuhkan untuk mengakses DOM setelah sebuah property berubah. mungkin hook inilah tempat yang paling aman untuk melakukan itu.

4.  Destruction <br>
    Hook ini digunakan untuk memberikan aksi tertentu ketika komponen kita dihapus, contohnya seperti:cleanup dan pengiriman hasil analitis data. Hook ini berjalan ketika komponen kita dihapus dari DOM

    Macam-macam hooks jenis ini dapat kita lihat sebagai berikut:

    1.  _beforeDestroy_ : Hook ini dijalankan sebelum proses penghancuran komponen. Kmponen kita masih secara penuh terlihat dan berfungsi dengan baik. Jika kita membutuhkan untuk membersihkan event-event, maka beforeDestroy cocok digunakan di dalamnya.

    2.  _destroyed_ : Pada saat kita menggunakan destroyed hook untuk menghapus komponen, segala yang melekat pada komponen tersebut sudah di hapuskan

    **Gunakan** hook ini untuk mengecek detik-detik terakhir pembersihan atau menginformasikan ke server bahwa component sudah dihancurkan

5.  Hook yang lain <br>
    Ada _activate_ dan _deactivate_ hook. Hook ini digunakan sebagai penanda kehidupan sebuah komponen.
