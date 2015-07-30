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

- bower.json - хранит зависимости, необходимые для конечного пользователя.
```
bower init
```

### +
```
touch .bowerrc .gitignore gulpfile.js
```

- .gitignore - Список ф-ов игнорируемых в GIT
- .bowerrc - файл настройки [Bower](http://bower.io) с помощью JSON
- gulpfile.js - файл настроек для сборки проекта и выполнения задач с помощью [Gulp.js](http://gulpjs.com)





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
