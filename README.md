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