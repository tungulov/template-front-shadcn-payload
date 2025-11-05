## О проекте

Это проект на **Next.js** (App Router), использующий UI-компоненты **shadcn/ui**, утилитарную CSS-библиотеку **Tailwind CSS** и библиотеку анимаций **framer-motion**.

## Стек и роль технологий

- **Next.js**: фреймворк для React с рендерингом на сервере, маршрутизацией и API-роутами.
  - Документация: [nextjs.org/docs](https://nextjs.org/docs)
- **shadcn/ui**: коллекция доступных и настраиваемых компонентов на базе Radix UI и Tailwind.
  - Документация: [ui.shadcn.com](https://ui.shadcn.com/)
- **Tailwind CSS**: утилитарные классы для быстрой стилизации интерфейсов.
  - Документация: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **framer-motion**: мощная библиотека для анимаций в React-компонентах.
  - Документация: [www.framer.com/motion](https://www.framer.com/motion)

## Быстрый старт

1. Установите зависимости:
   ```bash
   pnpm install
   ```
2. Запустите дев-сервер:
   ```bash
   pnpm dev
   ```
3. Откройте `http://localhost:3000` в браузере.

## Структура проекта (основное)

- `src/app/(frontend)`: публичные страницы, глобальные стили (`globals.css`), макеты и корневые компоненты фронтенда.
- `src/shared/ui`: библиотека переиспользуемых UI-компонентов на базе shadcn/ui.
- `src/shared/lib`: утилиты и вспомогательные функции.

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

- Импорты направлены сверху вниз: `shared → entities → shared → widgets → features → pages/app`.
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

## Стилизация: Tailwind CSS

Проект использует Tailwind для быстрой и согласованной стилизации. Ключевые ресурсы:

- Документация: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Руководства по best practices: [tailwindcss.com/blog](https://tailwindcss.com/blog)

## Анимации: framer-motion

Для анимаций используется `framer-motion`. Это мощная библиотека для создания плавных и производительных анимаций в React-компонентах.

Пример использования:

```tsx
import { motion } from 'framer-motion';

function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Анимированный контент
    </motion.div>
  );
}
```

Документация: [www.framer.com/motion](https://www.framer.com/motion)

## Команды

```bash
# Запуск дев-сервера
pnpm dev

# Билд продакшн-версии
pnpm build

# Предпросмотр продакшн-сборки
pnpm start

# Линтинг
pnpm lint
```

## Полезные ссылки

- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- shadcn/ui: [ui.shadcn.com](https://ui.shadcn.com/)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- framer-motion: [www.framer.com/motion](https://www.framer.com/motion)
