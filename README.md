<p><a href="https://github.com/lime7/www/blob/master/gulpfile.pdf"><h1 align="center">Моя Front-End сборка</h1></a></p>


###СОЗДАНИЕ ИСХОДНИКОВ:
```
mkdir www
cd !$
mkdir app/{css,js} –p
cd app
touch index.html js/{main.js,plugins.js} css/{base.css,style.css} 
cd ..
ls
```
###ФАЙЛЫ ЗАВИСИМОСТЕЙ :

- **package.json** - *содержит различные метаданные о проекте: имя проекта, версия, описание.*
```
npm init
```

- **bower.json** - *хранит зависимости, необходимые для конечного пользователя.*
```
bower init
```

### +
```
touch .bowerrc .gitignore gulpfile.js
```

- **.gitignore** - *cписок ф-ов игнорируемых в GIT*
- **.bowerrc** - *файл настройки [Bower](http://bower.io) с помощью JSON*
- **gulpfile.js** - *файл настроек для сборки проекта и выполнения задач с помощью [Gulp.js](http://gulpjs.com)*

###УСТАНОВКА ПЛАГИНОВ:
**Установка самого gulp:**
```
npm i –g gulp
npm i --save-dev gulp
```
**Локальный dev сервер:**
```
npm i –g browser-sync
npm i --save-dev browser-sync
```

**Наблюдение за изменениями файлов:**
```
npm i gulp-watch
```

**Очистка:**
```
npm i --save-dev gulp-clean
```

**Парсинг\конкатенация js, css, html ф-ов:**
```
npm i --save-dev gulp-useref
npm i --save wiredep
npm i --save-dev gulp-rigger
```


**Удаление не используемых стилей:**
```
npm i --save-dev gulp-uncss
```

**Автопрефиксы:**
```
npm i --save-dev gulp-autoprefixer
```


**Минификация:**
```
npm i --save-dev gulp-uglify
npm i --save-dev gulp-css-minify
npm i --save-dev gulp-imagemin
npm i --save-dev imagemin-pngquant
```

**Удаление\деинсталяция:**
```
rm –r node_modules
uninstall browser-sync
npm cache clean ~/
```

**Bower:**
```
npm i –g bower
npm update –g bower
bower i --save jquery
bower i --save jquery#1.11
bower i bootstrap
bower i --save slick-carousel
bower i --save slick.js
```

###INDEX.HTML
```
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Test-pj</title>
<!-- build:css css/vendor.css -->
  <!-- bower:css -->
  <!-- endbower -->
<!-- endbuild -->

<!-- build:css css/global.css -->
  <link rel="stylesheet" href="css/base.css"></link>
  <link rel="stylesheet" href="css/style.css"></link>
 <!-- endbuild -->
</head>
<body>
  //= header.html <!-- Подключение header с помощью gulp-rigger -->
  <main> <h1>hello, world</h1> </main>
  //= footer.html <!-- Подключение footer с помощью gulp-rigger -->
  
<!-- build:js scripts/combined.js -->
  <!-- bower:js -->
  <!-- endbower -->
<!-- endbuild -->
</body>
</html>
```
<h3 align="center">Структура проекта:</h3>

<p align="center"><a href="https://github.com/lime7/www"><img src="https://github.com/lime7/www/blob/master/www_dir.png?raw=true" alt="" style="max-width:100%; display:inline-block;" width="350"></a></p>

### Установка:
```
git clone https://github.com/lime7/www.git
npm i
bower i
gulp
```
<br/>
<p align="center"><a href="https://github.com/lime7/www" style="color:#00D0FF; text-decoration:none;"><h1 style="color:#00D0FF; "> ^ <h1></a></p>

<h3 align="right">Ресурсы:</h3>
<p align="right"><a href="https://www.youtube.com/watch?v=9zwwmjGz1Vs&list=PLY4rE9dstrJwXCz1utct9b6Vub9VWQoKo">LoftBlog</a></p>
<p align="right"><a href="http://alexfedoseev.com/post/54/frontend-project-build">О сборке проекта</a></p>
<p align="right"><a href="http://habrahabr.ru/post/252745/">Самые нужные плагины</a></p>
<p align="right"><a href="http://habrahabr.ru/post/250569/">Приятная сборка</a></p>
<p align="right"><a href="http://habrahabr.ru/post/261467/">Быстрая сборка</a></p>
<p align="right"><a href="https://www.snip2code.com/Snippet/449281/Bullet-proff-gulpfile">snip2code example</a></p>





-------------------------------------------------------------------------------------------------
<p align="center"> © <a href="http://semenchenkov.github.io/" style="font-weight:bold;">Семенченко</a> 2015</p>
