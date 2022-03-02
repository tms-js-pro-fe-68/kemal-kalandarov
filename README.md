# kemal-kalandarov

## Команды для создания и запуска проекта

```
npm install -g yarn
yarn create vite

yarn install
yarn dev

yarn build
```

<br/>
<br/>

## Установка Eslint и Prettier

### Eslint

```
yarn add -D eslint

yarn create @eslint/config
```

Далее выбрать опции в интерактивной командной строке (можно по видео или на свое усмотрение)

Удалить package-lock.json

```
yarn install
```

Добавить в `.eslintrc.js`, в `rules`:

```
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
```

[Ссылка на полный гайд](https://eslint.org/docs/user-guide/getting-started)

<br/>

### Prettier

yarn add -D prettier

yarn add -D eslint-config-prettier

Добавить в `.eslintrc.js`, в `extends: [..., 'prettier']`

[Ссылка на полный гайд](https://prettier.io/docs/en/install.html)

<br/>

### Format on Save

VS Code -> Настройки -> чекнуть чекбокс Format on Save

<br/>

### Проверка

В итоге должна остаться одна ошибка в `App.jsx` ('count' is already declared in the upper scope).
При сохранении код должен форматироваться автоматически.
