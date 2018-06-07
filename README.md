## Jquery Akıllı Mobil Menü Eklentisi

smart-mobile-menu eklentisi sayesinde dinamik ve hazır menülerinizi otomatik bir şekilde mobil menüye fazladan kod yazmadan geçirebilirsiniz.

---

**Dikkat: Eklenti, sitenizde belirttiğiniz menünüzden `ul li` yapısını otomatik çekip, mobil menüye aktarır. Ekstra içerik girmenize gerek yoktur.**


## Version 1.1.0
* Menü elementinin niteliğiyle eklenti artık kullanılabiliyor.
* Yeni Nitelikler: `data-smart-menu="#open_mobile_menu"` `data-smart-menu-active-auto="true"`  `data-smart-menu-dropdown="true"` `data-smart-menu-theme="default"`
* Bu nitelikleri kullandığınızda `$('#open_mobile_menu').smobileMenu({getMenu: '#menu'});` bu koda gerek kalmayacaktır.

## Kullanımı
***


Aşağıdaki `css` dosyalarını `head` etiketleri arasına eklemelisiniz.

**Kendinize ait tema dosyalarınızda bu şekilde eklemelisiniz.**

```html
<link rel="stylesheet" href="dist/css/smart-mobile-menu.css">

<!-- theme -->
<link rel="stylesheet" href="dist/css/smm-theme-default.css">
```
<br><br>

Aşağıda `js` dosyalarınızı `body` etiketinin önüne eklemelisiniz.

**Jquery dosyanız en başta olmalıdır, sonrasında smart-mobile-menu dosyaları eklenmelidir.**

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="dist/js/smart-mobile-menu.min.js"></script>
<script>
    $('#open_mobile_menu').smobileMenu({getMenu: '#menu'});
</script>
```

<br>

## JavaScript kodu kullanmadan HTML ile otomatik olarak kullanabilirsiniz
[Örnek sayfaya ve canlı önizlemeye gitmek için tıklayın.](https://oguzkulcu.github.io/jquery-smart-mobile-menu/example-2.html)

**Örnek kod İçeriği:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Example</title>
    <link rel="stylesheet" href="dist/css/smart-mobile-menu.css">
    <link rel="stylesheet" href="dist/css/smm-theme-default.css">

    <!-- font awesome icon -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<div>
    <ul id="menu" data-smart-menu="#open_mobile_menu" data-smart-menu-active-auto="true"  data-smart-menu-dropdown="true" data-smart-menu-theme="default">
        <li><a href="#">Menü 1</a></li>
        <li class='test' data-smm-hidden="true"><a href="#">Menü 2</a></li>
        <li>
            <a href="#">Menü 3</a>
            <ul>
                <li><a href="#">Test 1</a></li>
                <li><a class="smm-active" href="#">Test 2</a></li>
                <li>
                    <a href="#">Test 3</a>
                    <ul>
                        <li><a href="#">Test 1</a></li>
                        <li><a href="#">Test 2</a></li>
                        <li>
                            <a href="#">Test 3</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">Menü 4</a>
            <ul data-smm-dropdown="false">
                <li><a href="#">Test 1</a></li>
                <li><a href="#">Test 2</a></li>
                <li><a href="#">Test 3</a></li>
            </ul>
        </li>
    </ul>
</div>

<button id="open_mobile_menu" type="button">Open Menu</button>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="dist/js/smart-mobile-menu.js"></script>
</body>
</html>
```
 <br><br><br><br>
 

## jQuery seçisi ile kullanma

[Örnek sayfaya ve canlı önizlemeye gitmek için tıklayın.](https://oguzkulcu.github.io/jquery-smart-mobile-menu/example.html)

**Örnek kod İçeriği:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Example</title>
    <link rel="stylesheet" href="dist/css/smart-mobile-menu.css">
    <link rel="stylesheet" href="dist/css/smm-theme-default.css">

    <!-- font awesome icons -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<div>
    <ul id="menu">
        <li><a href="#">Menu 1</a></li>
        <li>
            <a href="#">Menu 2</a>
            <ul>
                <li><a href="#">Test 1</a></li>
                <li><a href="#">Test 2</a></li>
                <li><a href="#">Test 3</a></li>
            </ul>
        </li>
    </ul>
</div>

<button id="open_mobile_menu" type="button">Open Menu</button>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="dist/js/smart-mobile-menu.js"></script>
<script>
    $('#open_mobile_menu').smobileMenu({getMenu: '#menu'});
</script>
</body>
</html>
```
 <br><br><br><br>
 
Eklenti menüyü açmak için kullanılan `seçici` ile çalışır.Bunun için `button` kullanmak güzel örnektir.
 
 ```html
<button id="open_mobile_menu" type="button">Open Menu</button>
```
<br>

Javascript kısmında ise eklentimizi seçiciye belirtiyoruz.
 ```js
$('#open_mobile_menu').smobileMenu({getMenu: '#menu'});
```
<br><br><br>
## Parametreler
**Kod Örneği**
 ```js
$('#open_mobile_menu').smobileMenu({
        dropdown: true,
        getMenu: '#menu',
        theme: 'default',
        dropdownIcon: '<i class="fa fa-angle-down"></i>',
        linkActiveClass: 'smm-active',
        activeAutoOpen: true
    });
```
<br><br>

| Parametre        | Varsayılan | Örnek | Açıklama  |
| ------------- |:----------: |:-----:| -------:|
| `getMenu`      | `null` | `#menu`  | Mobil menüde gösterilecek olan `ul` yapısının seçicisi girilmelidir. |
| `theme`      | `default` | `blue`  | Temanızın adını belirtmek için kullanılır, standart olanı `default` seçeneğidir. |
| `dropdown`      | `true` | `true` - `false`  | Akıllı Mobil Menü Eklentisi, sınırsız ve dinamik eklentiyi desteklediği için, içiçe olan `ul li` elemanlarını alt menü olarak açabilir. **Not : Bu özellik `false` olduğunda varsayılan linke yönlenir, `true` değerde ise linki menü açmak için kullanır.** |
| `dropdownIcon`      | `<i class="fa fa-angle-down"></i>` | <span>Alt menüyü aç</span>  | Açılır menüyü açmak için kullanılan linkin sonuna eklenir, her değeri alabilir. Varsayılan olarak Fontawesome'dan ikon eklenmiştir. Fontawesome'yi sayfasınıza dahil etmeniz önerilir. |
| `linkActiveClass`      | `smm-active` | `aktif-sinif`  | `<a href="#" class="smm-active">Link</a>` örneğinden anlaşılacağı gibi menüde aktif olan linki belirleyebilirsiniz. |
| `activeAutoOpen`      | `true` | `true` - `false`   | Bu parametre sayesinde, aktif olan linkin ait olduğu açılır menü `true` olduğu sürece açık şekilde gelecektir. |

<br><br><br>
## Olaylar

### Menüyü açma olayı - openClickEvent(thisContentSelector)
Menüyü açmak için kullanılan fonksiyondur. `thisContentSelector` parametresini alır. Bu parametre mobil menünün genel seçicisidir.

**Örnek şu şekilde kullanabilirsiniz :**
```js
$('#open_mobile_menu').smobileMenu({
    openClickEvent: function(thisContentSelector) {
    
        thisContentSelector.show(200);
    }
});
```
<br><br><br>
### Menüyü kapama olayı - closeClickEvent(thisContentSelector)
Menüyü kapatmak için kullanılan fonksiyondur. `thisContentSelector` parametresini alır. Bu parametre mobil menünün genel seçicisidir.

**Örnek şu şekilde kullanabilirsiniz :**
```js
$('#open_mobile_menu').smobileMenu({
    closeClickEvent: function(thisContentSelector) {
    
        thisContentSelector.hide(200);
    }
});
```

<br><br><br>
## Ek Öneriler
#### `data-smm-hidden` kullanımı
Bu özellik ile mobil menüde gözükmemesini istediğiniz alanları belirleyebilirsiniz. `true` değer verdiğinizde çalışacaktır.
<br>
**Örnek**
```html
<ul id="menu">
    <li><a href="#">Menü 1</a></li>
    <li data-smm-hidden="true"><a href="#">Menü 2</a></li>
</ul>
```

<br><br>

#### `data-smm-dropdown` kullanımı
Bu özellik ile `dropdown` özelliğini aktif ettiğiniz halde istemediğiniz yerleri pasif edebilirsiniz. . `false` değer verdiğinizde gözükmeyecektir.Sadece link gösterilir ve link belirlenen adrese gider.
<br>
**Örnek**
```html
<ul id="menu">
    <li>
        <a href="#">Menü 4</a>
        <ul data-smm-dropdown="false">
            <li><a href="#">Test 1</a></li>
            <li><a href="#">Test 2</a></li>
            <li><a href="#">Test 3</a></li>
        </ul>
    </li>
</ul>
```

<br><br><br>
## Tema Örneği

**Aşağıda default tema'nın kodları yer alıyor.Temanızı css dosyası oluşturarak sayfanıza ekleyebilirsiniz. `.smobilemenu-theme-temaadi` şeklinde kullanılıyor. Burada kesin olarak tema adı `.smobilemenu-theme-` devamına yazılmalıdır. Burada belirtilen `temaadi`, `theme` parametresindede aynı olmalıdır.**

 ```css
@import url('https://fonts.googleapis.com/css?family=Roboto');

ul.smobilemenu-theme-temaadi {
    background: black;
    padding: 20px !important;
    overflow-y: auto;

}

ul.smobilemenu-theme-temaadi li {
    border-bottom: #333 1px solid;
    padding: 25px;
}

ul.smobilemenu-theme-temaadi li a {
    font-size: 25px;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}

ul.smobilemenu-theme-temaadi li a.smm-active {
    color: red;
}

ul.smobilemenu-theme-temaadi li a > i {
    margin-left: 10px;
}

/* close button */
#smobileMenu-close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    color: white;
    font-size: 30px;
    text-decoration: none;
}
```

<br><br><br>
## Detaylı Örnek Kodlar

[Canlı örneğe gitmek için tıklayın.](https://oguzkulcu.github.io/jquery-smart-mobile-menu/example.html)


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Example</title>
    <link rel="stylesheet" href="dist/css/smart-mobile-menu.css">
    <link rel="stylesheet" href="dist/css/smm-theme-default.css">

    <!-- font awesome icons -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<div>
    <ul id="menu">
        <li><a href="#">Menü 1</a></li>
        <li class='test' data-smm-hidden="true"><a href="#">Menü 2</a></li>
        <li>
            <a href="#">Menü 3</a>
            <ul>
                <li><a href="#">Test 1</a></li>
                <li><a class="smm-active" href="#">Test 2</a></li>
                <li>
                    <a href="#">Test 3</a>
                    <ul>
                        <li><a href="#">Test 1</a></li>
                        <li><a href="#">Test 2</a></li>
                        <li>
                            <a href="#">Test 3</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">Menü 4</a>
            <ul data-smm-dropdown="false">
                <li><a href="#">Test 1</a></li>
                <li><a href="#">Test 2</a></li>
                <li><a href="#">Test 3</a></li>
            </ul>
        </li>
    </ul>
</div>

<button id="open_mobile_menu" type="button">Open Menu</button>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="dist/js/smart-mobile-menu.js"></script>
<script>
    $('#open_mobile_menu').smobileMenu({
        dropdown: true,
        getMenu: '#menu'
    });
</script>
</body>
</html>
```