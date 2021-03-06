# Задание 3. Найдите ошибки

В этом репозитории находится моё решение тестового задания «Найдите ошибки» для 17-й Школы разработки интерфейсов.

## Исправленные ошибки


### Ошибка в файле `src/application/data.ts(46,14)`

Текст: *Type '"update"' is not comparable to type '"message" | "next" | "prev" | "restart" | "theme" | "timer"'.*

Решние: В файле `src/application/actions.ts(46,14)` в тип `Action` добавлено `ReturnType<typeof actionUpdate>`.


### Режим разработки

Добавлен режим разработки `mode: 'development'` в конфигурацию `webpack`. Ошибкой не является, но упрощает процесс отладки. Когда все ошибки будут исправлены, поставлю `mode: 'production'`.


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


### Неправильно заданная высота slide-progress-value

Высота элемента `.slide-progress-value` задаётся в `src/index.css(41)` следующим образом:

```css
height: 4;
```

Очевидно, тут незватает единиц измерения `px`. Добавляем:

```css
height: 4px;
```


### Ограничение на количество переключений слайда

В файле `src/application/effects.ts(21)` есть ограничение `take(5)`, которое завершает поток переключения слайдов. Из-за этого при перезапуске плеера слайды перестают переключаться. А если оставить значение `5`, то 7-й слайд сам никогда не включится. Если же убрать эту строчку, то плеер работает как нужно.


### Не обрабатываются SVG кнопки

В файле `src/frames.ts` при клике на какой-либо элемент класса `HTMLElement` в документе происходит перебор всех его родителей в поисках ближайшего элемента с атрибутом `data-action`. Тут есть две проблемы:

1. Некоторые кнопки в вёрстке сделаны с помощью инлайновых svg элементов, которые не являются `instanceof HTMLElement`, в следствие чего клик на них не обрабатывается. Чтобы решить эту проблему, просто добавляем через логическое ИЛИ поддержку объектов класса `SVGElement`.

2. Если перебор дошёл до элемента `html`, то его родитель - это `null`, у которого конечно же нет никаких `dataset` параметров. При выходе из цикла это не учитывалось. Теперь перед отправкой сообщения проверяется, что мы действительно дошли до элемента с определённым атрибутом `data-action`.


### Не указана функция сравнения объектов в distinctUntilChanged

Файл `src/application/selectors.ts`, функция `createProgressSelector`. Оператор `distinctUntilChanged` удаляет лишние дубликаты одного и того же. Однако в нашем случае он сравнивает не примитивы, а объекты. Следовательно должен принимать в качестве параметра функцию сравнения этих самых объектов, иначе работать не будет. Дописываем функцию:

```js 
distinctUntilChanged((a, b) => a.index === b.index && a.value === b.value)
```


### Попытка переключить слайд, когда он является последним

Если слайд является последним и запускается действие `next`, то слайд по факту не переключается, слайдшоу ставится на паузу - отлично, но соответствующий progress-bar также ставится на паузу, как бы "застывает". Было бы красивее и понятнее, если бы он просто полностью заполнялся. Можно это реализовать следующим образом: установить в черновике `draft` свойство `progress` максимально возможным (константа `DELAY`).


### Некрасивый эффект перехода к предыдущему слайдшоу

При переключении слайда на предыдущий плиткам progress-bar для текущего и предыдущего слайдов плавно возвращается в ноль (со свойством `transition`). Когда этот эффект применён сразу к двум плиткам, это смотрится некрасиво (на мой субъективный взгляд). Лучше убрать `transition` с текущей плитки, а на предыдущей оставить. Добавил следующий функционал в файл `src/index.ts`:

```js 
const transitionDefault = window.getComputedStyle(bars[0]).transition;
const transitionZero = 'transform 0s linear';

bars[index].style.transition = transitionDefault;
if (index + 1 < bars.length) {
    bars[index + 1].style.transition = transitionZero;
}
```

`transitionDefault` - значение transition по умолчанию, можем достать его из самой первой плитки, так как в ней это свойство менять никогда не будем.

`transitionZero` - transition с нулевым временем.