## О проекте

Это проект на **Next.js** (App Router), использующий UI-компоненты **shadcn/ui**, headless CMS **Payload**, утилитарную CSS-библиотеку **Tailwind CSS** и библиотеку анимаций **anime.js**.

## Стек и роль технологий

- **Next.js**: фреймворк для React с рендерингом на сервере, маршрутизацией и API-роутами.
  - Документация: [nextjs.org/docs](https://nextjs.org/docs)
- **shadcn/ui**: коллекция доступных и настраиваемых компонентов на базе Radix UI и Tailwind.
  - Документация: [ui.shadcn.com](https://ui.shadcn.com/)
- **Payload CMS**: headless CMS на Node.js для хранения контента, MongoDB/REST API и админ-панели.
  - Что такое Payload: [payloadcms.com/docs/getting-started/what-is-payload](https://payloadcms.com/docs/getting-started/what-is-payload)
  - Документация: [payloadcms.com/docs](https://payloadcms.com/docs)
- **Tailwind CSS**: утилитарные классы для быстрой стилизации интерфейсов.
  - Документация: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **anime.js**: легковесная библиотека для анимаций. В проекте используется с React-компонентами.
  - Использование с React: [animejs.com/documentation/getting-started/using-with-react](https://animejs.com/documentation/getting-started/using-with-react)

## Быстрый старт

1. Установите зависимости:
   ```bash
   npm install
   ```
2. Создайте файл окружения на основе образца:
   ```bash
   cp .env.example .env
   ```
   Отредактируйте `.env` под ваше окружение (ключи для Payload, базы данных, URL и т.д.).
3. Запустите дев-сервер:
   ```bash
   npm run dev
   ```
4. Откройте `http://localhost:3000` в браузере.

## Структура проекта (основное)

- `src/app/(frontend)`: публичные страницы, глобальные стили (`globals.css`), макеты и корневые компоненты фронтенда.
- `src/app/(payload)`: интеграция с Payload (админ-панель, GraphQL, REST API и т.д.).
  > содержимое /(payload) не трогаем - автоматически генерируется и изменяется Payload
- `src/entities`: описания коллекций/сущностей для Payload (`users`, `media`, ...).
- `src/shared/ui`: библиотека переиспользуемых UI-компонентов на базе shadcn/ui.
- `src/shared/lib`: утилиты и вспомогательные функции (включая загрузчик Payload).

## Архитектура: Feature‑Sliced Design (FSD)

Проект следует принципам **Feature‑Sliced Design** для масштабируемой фронтенд-архитектуры. Подробнее: [feature-sliced.design/docs](https://feature-sliced.design/docs).

- **app**: инициализация приложения, провайдеры, глобальные стили и макеты (в проекте — `src/app`, в т.ч. `src/app/(frontend)`).
- **processes**: долгоживущие бизнес-процессы (слой появится при необходимости).
- **pages**: страницы и маршруты. В Next.js App Router это структурируется через `src/app` и сегменты маршрутов.
- **widgets**: составные блоки из нескольких features/entities (см. `src/widgets`).
- **features**: пользовательские сценарии и их логика/компоненты (см. `src/features`).
- **entities**: бизнес-сущности и их представления/модели (см. `src/entities`).
- **shared**: переиспользуемые модули, UI, утилиты, конфиги (см. `src/shared`).

Рекомендации:

- Импорты направлены сверху вниз: `shared → entities → features → widgets → pages/app`.
- Публичный API каждого слайса/модуля экспортируется через `index`-файлы.
- Избегайте циклических зависимостей между слоями.

## Соглашения по наименованию

- Имена файлов компонентов: `kebab-case`.
  - Примеры: `date-picker.tsx`, `user-card.tsx`, `navigation-menu.tsx`.
- Имена React-компонентов (идентификаторы): `PascalCase`.
  - Примеры: `DatePicker`, `UserCard`, `NavigationMenu`.

## UI на базе shadcn/ui

Компоненты интерфейса собраны и переиспользуются в каталоге `src/shared/ui`. Они основаны на Tailwind и Radix UI, легко настраиваются через классы и токены дизайна. Рекомендуется ориентироваться на официальные примеры и паттерны из документации:

- Руководство и примеры: [ui.shadcn.com](https://ui.shadcn.com/)

## Контент и API через Payload CMS

Payload управляет схемами данных (коллекциями), админ-панелью и API:

- Конфигурация Payload: `src/payload.config.ts`
- Коллекции: `src/entities/*/*.collection.ts`
- Админ-панель и API-роуты находятся в `src/app/(payload)` (например, GraphQL, REST и админ-маршруты)

Дополнительно:

- Конфиг Payload доступен по алиасу: `@/payload.config.ts` (алиас `@` указывает на `src`).
- Все сущности для Payload описываются в директории `src/entities` в файлах вида `*.collection.ts`.
  - Пример: `@/entities/media/payload/media.collection.ts`.
- Загрузка/обработка данных сущностей выносится в файлы вида `*.loader.ts` рядом с коллекциями.
  - Пример: `@/entities/media/payload/media.loader.ts`.

Полезные разделы документации:

- Что такое Payload: [payloadcms.com/docs/getting-started/what-is-payload](https://payloadcms.com/docs/getting-started/what-is-payload)
- Настройка коллекций: [payloadcms.com/docs/configuration/collections](https://payloadcms.com/docs/configuration/collections)
- GraphQL: [payloadcms.com/docs/graphql/overview](https://payloadcms.com/docs/graphql/overview)

## Стилизация: Tailwind CSS

Проект использует Tailwind для быстрой и согласованной стилизации. Ключевые ресурсы:

- Документация: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Руководства по best practices: [tailwindcss.com/blog](https://tailwindcss.com/blog)

## Анимации: anime.js

Для анимаций используется `anime.js`. Подход к интеграции в React-компоненты соответствует официальным рекомендациям:

- Гайд по React: [animejs.com/documentation/getting-started/using-with-react](https://animejs.com/documentation/getting-started/using-with-react)

> прмер работы с анимациейы

```
import { animate, createScope, spring, createDraggable } from 'animejs';
import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const root = useRef(null);
  const scope = useRef(null);
  const [ rotations, setRotations ] = useState(0);

  useEffect(() => {

    scope.current = createScope({ root }).add( self => {

      // Every anime.js instance declared here is now scoped to <div ref={root}>

      // Created a bounce animation loop
      animate('.logo', {
        scale: [
          { to: 1.25, ease: 'inOut(3)', duration: 200 },
          { to: 1, ease: spring({ bounce: .7 }) }
        ],
        loop: true,
        loopDelay: 250,
      });

      // Make the logo draggable around its center
      createDraggable('.logo', {
        container: [0, 0, 0, 0],
        releaseEase: spring({ bounce: .7 })
      });

      // Register function methods to be used outside the useEffect
      self.add('rotateLogo', (i) => {
        animate('.logo', {
          rotate: i * 360,
          ease: 'out(4)',
          duration: 1500,
        });
      });

    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert()

  }, []);

  const handleClick = () => {
    setRotations(prev => {
      const newRotations = prev + 1;
      // Animate logo rotation on click using the method declared inside the scope
      scope.current.methods.rotateLogo(newRotations);
      return newRotations;
    });
  };

  return (
    <div ref={root}>
      <div className="large centered row">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div className="medium row">
        <fieldset className="controls">
        <button onClick={handleClick}>rotations: {rotations}</button>
        </fieldset>
      </div>
    </div>
  )
}

export default App;
```

## Команды

```bash
# Запуск дев-сервера
npm run dev

# Билд продакшн-версии
npm run build

# Предпросмотр продакшн-сборки
npm run start
```

## Полезные ссылки

- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- shadcn/ui: [ui.shadcn.com](https://ui.shadcn.com/)
- Payload CMS: [payloadcms.com/docs](https://payloadcms.com/docs)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- anime.js: [animejs.com/documentation](https://animejs.com/documentation)
