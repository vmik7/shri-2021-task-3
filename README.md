# Задание 3. Найдите ошибки

В этом репозитории находится моё решение тестового задания «Найдите ошибки» для 17-й Школы разработки интерфейсов.

## Исправленные ошибки

### Ошибка в файле `src/application/data.ts(46,14)`

Текст: *Type '"update"' is not comparable to type '"message" | "next" | "prev" | "restart" | "theme" | "timer"'.*

Решние: В файле `src/application/actions.ts(46,14)` в тип `Action` добавлено `ReturnType<typeof actionUpdate>`.

### Режим разработки

Добавлен режим разработки `mode: 'development'` в конфигурацию `webpack`. Ошибкой не является, но упрощает процесс отладки.


### Опечатка в файле `src/index.ts(46)`

В строке `document.querySelector<HTMLDivElement>('.next').addEventListener('click', () => dispatch(actionPrev()));`
заменил `actionPrev()` на `actionNext()`.

### Скрытая кнопка предыдущего слайда

В файле `src/index.css` почему-то написано, что кнопка с классом `prev` не должна показываться при высоте экрана < 750px.
Эта кнопка переключает слайд на предыдущий, её функционал важен при любом разрешении экрана. Из этих соображений следующий код был закомментирован:

```css
@media (max-height: 750px) { 
    .prev {
        display: none;
    }
}
```

### Неправильный индекс слайда в action 'update'

В файле `src/application/data.ts(50)` почему-то указан не индекс текущего слайда, а 0.

Заменил строку

```js
draft.stories[0].alias = alias;
```

на

```js
draft.stories[draft.index].alias = alias;
```

### Переключатель тем

В файле `src/application/views.ts` описана функция `setElementTheme`, которая судя по всему должна менять класс темы. Однако она просто навешивает новый класс поверх старого. Вследствие этого тема меняется, однако кнопки переключения темы взаимодействуют между собой неправильно. Чтобы это пофиксить, необходимо сначала удалить старый класс темы, а только после этого добавить новый.

Добавил в функцию две новые строки:

```js
elem.classList.remove('theme_light');
elem.classList.remove('theme_dark');
```


### Не переключаются слайды

В файле `src/application/selectors.ts(18)` есть функция createCurrentIndexSelector, которая должна обрабатывать поток, преобразуя слайды в индексы с помощью `map`. Однако почему-то тут также применен оператор `mergeMapTo()` со значением `EMPTY`. Он явно всё портит... Убираем!