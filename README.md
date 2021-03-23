# Задание 3. Найдите ошибки

В этом репозитории находится моё решение тестового задания «Найдите ошибки» для 17-й Школы разработки интерфейсов.

## Исправленные ошибки

### Ошибка в файле `src/application/data.ts(46,14)`

Текст: *Type '"update"' is not comparable to type '"message" | "next" | "prev" | "restart" | "theme" | "timer"'.*

Решние: В файле `src/application/actions.ts(46,14)` в тип `Action` добавлено `ReturnType<typeof actionUpdate>`.

### Режим разработки

Добавлен режим разработки `mode: 'development'` в конфигурацию `webpack`. Ошибкой не является, но упрощает процесс отладки.