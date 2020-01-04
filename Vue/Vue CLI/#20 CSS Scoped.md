## Component CSS (Scoped)

Intinya apabila di dalam tag `style`, seperti ini:

```css
<style scoped>
...
</style>
```

scoped di atas akan membuat efek css hanya berlaku pada file `.vue` di mana style CSS tersebut berada.

Demikian pula sebaliknya apabila tidak diberi atribut `scoped` maka efek style CSS akan berlaku untuk semua file berkestensi `.vue`
