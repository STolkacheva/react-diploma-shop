﻿# Дипломный проект курса «React»

Дипломный проект представляет собой интернет-магазин обуви. Задача заключается в создании работающего приложения, всеми основными функциями которого можно пользоваться.

Как это всегда бывает, вы (фронтенд разработчик) - последний в цепочке создания продукта, поэтому вам необходимо пользоваться результатами работы верстальщика и бекэнд разработчика. И если результаты работы верстальщика вы ещё можете немного подправить, то бэкенд - уже нет (т.е. вы не имеете права редактировать бэкенд).

Большая часть разметки и стилей уже реализована за вас и хранится в каталоге `html`. Как всегда, пояснений особо к разметке нет, т.к. со слов верстальщика "там и так всё понятно".


Запускать сервер нужно командой `npm run watch` (не забудьте сначала сделать `npm install`) - тогда он запустится в режиме live-reload. Если есть к нему вопросы - пишите в Slack или в группу Fb.

## Вехи

На весь диплом даётся три недели, в соответствии с чем, мы выделили ключевые вехи, которые отражают, какая часть и до какого срока должна быть сдана 

1. Первая неделя:
    - Постраничный роутинг
    - Шапка и футер
    - Статичные страницы (404, О Магазине, Контакты)
    - Баннер

## Содержание

Приложение содержит следующие самостоятельные экраны (страницы):

1. Главная страница
1. Каталог товаров
1. Информационная страница
1. Страница товара
1. Корзина
1. 404

## Переходы между экранами

Навигационным центром приложения являются шапка и футер каждого экрана (страницы)

Из шапки можно попасть на следующие экраны:
* Логотип и ссылка "Главная" - ведут на главную страницу, URL - "/"
* Каталог - ведёт на страницу каталога, URL - "/catalog.html"
* О магазине - ведёт на страницу "О магазине", URL - "/about.html"
* Контакты - ведёт на страницу "Контакты", URL - "/contacts.html"

Из футера можно попасть на следующие экраны:
* О магазине - ведёт на страницу "О магазине", URL - "/about.html"
* Каталог - ведёт на страницу каталога, URL - "/catalog.html"
* Контакты - ведёт на страницу "Контакты", URL - "/contacts.html"


### О магазине, Контакты

Это просто контентные страницы, в которые жёстко зашит контент. Никакой логики (кроме работы виджета поиска и ссылок) там нет.

### 404

При вводе несуществующего url'а (не соответствующего ни одному из путей), пользователю должна показываться страница 404.html.