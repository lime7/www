# Моя Front-End сборка


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
### Установка:
```
$ git clone https://github.com/lime7/www.git
```

```
$ npm i
```

```
$ bower i
```

```
$ gulp
```
