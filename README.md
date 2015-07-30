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

package.json - содержит различные метаданные о проекте: имя проекта, версия, описание.
```
npm init
```

bower.json хранbn зависимости, необходимые для конечного пользователя.

Bower - менеджер пакетов, от Twitter. Предназначен для установки зависимостей, необходимых во фронтенде (jQuery плагины, Bootstrap, ... ).Не скачивает вложенные зависимости, поэтому каждая библиотека будет установлена только один раз. Это очень важно для конечного пользователя – никто не хочет скачивать пять версий jQuery.

```
bower init
```

### +

```
touch .bowerrc .gitignore gulpfile.js
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
