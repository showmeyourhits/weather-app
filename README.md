# Weather App

## Тестовая версия

Кликните на [ccылку](https://showmeyourhits.github.io/weather-app/build), чтобы посмотреть пример работы проекта.

## Set up
После клонирования репоризотория нужно поставить нужны для удобства работы модули.

Для локальной сборки проекта:

```
npm i
```
После завершения установки пакетов проект готов к разработке.

## Testing
- `npm run test` - Запуск тестов (Jest)
- `npm run test-dev` - Запускает тесты в watch режиме

## Build
- `npm run dev` - Запуск дев версии проекта (Rollup in watch mode)
- `npm run build` - Сборка проекта для публикации

Собранные файлы проекта (сконкатенированные в `iife` и минифицированные файлы) находятся в папке `./build`.

При каждом коммите билд проекта пересобирается (используется `pre-commit` хук).

---

[Listen](https://www.youtube.com/watch?v=mH8-x5U7XsA) to __good__ music, while you checking out the project ;)