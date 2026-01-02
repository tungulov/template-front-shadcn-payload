# 🚀 Универсальный шаблон лендинга TaskFlow

Это профессиональный шаблон продающей страницы (лендинга), созданный по методологии **Feature-Sliced Design (FSD)**. Шаблон легко адаптируется под любой продукт, услугу или бизнес.

## 📋 Содержание

- [Архитектура](#архитектура)
- [Структура проекта](#структура-проекта)
- [Компоненты](#компоненты)
- [Секции лендинга](#секции-лендинга)
- [Как изменять шаблон](#как-изменять-шаблон)
- [Стилизация](#стилизация)
- [Анимации](#анимации)

---

## 🏗️ Архитектура

Проект построен по **FSD (Feature-Sliced Design)** - современной методологии архитектуры фронтенд-приложений:

```
src/
├── app/              # Слой приложения (глобальные настройки)
├── widgets/          # Композитные секции лендинга
├── features/         # Переиспользуемые блоки
└── shared/           # Общий код (UI-kit, хуки, утилиты)
```

### Принципы FSD:

- **Слоистая архитектура**: от общего (shared) к специфичному (app)
- **Изолированность**: каждый компонент независим
- **Переиспользование**: компоненты можно легко использовать в других проектах
- **Понятность**: структура ясна для ИИ и разработчиков

---

## 📁 Структура проекта

### Детальная структура:

```
src/
├── app/
│   ├── layout.tsx              # Root layout с провайдерами
│   ├── page.tsx                # Главная страница (композиция widgets)
│   └── globals.css             # Глобальные стили + CSS переменные
│
├── widgets/                    # 🎯 КОМПОЗИТНЫЕ СЕКЦИИ ЛЕНДИНГА
│   ├── header.tsx              # Header с навигацией
│   ├── hero-section.tsx        # Главная секция
│   ├── features-section.tsx    # Секция возможностей
│   ├── stats-section.tsx       # Статистика/достижения
│   ├── how-it-works-section.tsx# Как это работает
│   ├── comparison-section.tsx  # Сравнение до/после
│   ├── gallery-section.tsx     # Галерея/портфолио
│   ├── social-proof-section.tsx# Отзывы и логотипы
│   ├── team-section.tsx        # Команда
│   ├── pricing-section.tsx     # Тарифы
│   ├── faq-section.tsx         # Частые вопросы
│   ├── cta-section.tsx         # Призыв к действию
│   └── footer.tsx              # Подвал сайта
│
├── features/                   # 🧩 ПЕРЕИСПОЛЬЗУЕМЫЕ БЛОКИ
│   ├── section-container.tsx   # Обертка для секций
│   ├── section-header.tsx      # Заголовок секции
│   ├── gradient-background.tsx # Градиентный фон
│   ├── feature-card.tsx        # Карточка фичи
│   ├── testimonial-card.tsx    # Карточка отзыва
│   ├── pricing-card.tsx        # Карточка тарифа
│   ├── stat-card.tsx           # Карточка статистики
│   ├── step-card.tsx           # Карточка шага
│   ├── team-member-card.tsx    # Карточка члена команды
│   ├── comparison-item.tsx     # Элемент сравнения
│   ├── portfolio-item.tsx      # Элемент портфолио
│   └── logo-cloud.tsx          # Облако логотипов
│
└── shared/                     # 🔧 ОБЩИЙ КОД
    ├── ui/                     # shadcn/ui компоненты
    │   ├── button.tsx
    │   ├── card.tsx
    │   ├── input.tsx
    │   └── ... (50+ компонентов)
    ├── hooks/
    │   ├── use-in-view.ts      # Хук для viewport detection
    │   ├── use-scroll-animation.ts # Хук для scroll анимаций
    │   └── theme-provider.tsx  # Провайдер темы
    └── lib/
        └── utils.ts            # Утилиты
```

---

## 🧩 Компоненты

### Features (переиспользуемые блоки)

#### 1. **SectionContainer**

Универсальная обертка для всех секций.

**Props:**

```typescript
{
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'narrow' | 'wide';      // Ширина контейнера
  background?: 'default' | 'muted' | 'gradient'; // Фон секции
  withPadding?: boolean;                         // Отступы сверху/снизу
  id?: string;                                   // Для якорей навигации
}
```

**Где используется:** Во всех секциях

---

#### 2. **SectionHeader**

Заголовок секции с subtitle и description.

**Props:**

```typescript
{
  title: string;                              // Основной заголовок
  subtitle?: string;                          // Надзаголовок
  description?: string;                       // Описание
  align?: 'left' | 'center' | 'right';       // Выравнивание
  withGradient?: boolean;                     // Gradient на заголовке
}
```

**Где используется:** Features, Stats, Team, Pricing и др.

---

#### 3. **FeatureCard**

Карточка возможности/преимущества.

**Props:**

```typescript
{
  icon: LucideIcon;                          // Иконка
  title: string;                             // Название
  description: string;                       // Описание
  variant?: 'default' | 'bordered' | 'filled';
  link?: { href: string, label: string };    // Опциональная ссылка
}
```

**Где используется:** Features Section

---

#### 4. **PricingCard**

Карточка тарифного плана.

**Props:**

```typescript
{
  name: string;                              // Название плана
  price: number | 'custom';                  // Цена в рублях
  period?: 'month' | 'year';                 // Период оплаты
  description: string;
  features: Array<{                          // Список возможностей
    text: string;
    included: boolean;
  }>;
  ctaLabel: string;                          // Текст кнопки
  ctaHref: string;
  popular?: boolean;                         // Популярный план
}
```

**Где используется:** Pricing Section

---

#### 5. **StatCard**

Карточка статистики с анимированным счетчиком.

**Props:**

```typescript
{
  value: string | number;                    // Значение
  label: string;                             // Подпись
  icon?: LucideIcon;
  animated?: boolean;                        // Анимация счетчика
  trend?: {                                  // Тренд вверх/вниз
    value: number;
    direction: 'up' | 'down';
  };
}
```

**Где используется:** Stats Section

---

#### 6. **TestimonialCard**

Карточка отзыва клиента.

**Props:**

```typescript
{
  content: string;                           // Текст отзыва
  author: {
    name: string;
    role: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;                           // Рейтинг 1-5
  variant?: 'card' | 'quote';               // Стиль отображения
}
```

**Где используется:** Social Proof Section

---

### Другие компоненты

- **StepCard** - для How It Works
- **TeamMemberCard** - для Team
- **ComparisonItem** - для Comparison
- **PortfolioItem** - для Gallery
- **LogoCloud** - для логотипов клиентов

---

## 🎨 Секции лендинга

### 1. **Header** (`widgets/header.tsx`)

- Sticky навигация с backdrop blur
- Мобильное меню (Sheet)
- Переключатель темы
- Smooth scroll к секциям

**Как изменить:**

```typescript
// Измените навигацию в массиве:
const navigation = [
  { name: "Ваш пункт", href: "#section-id" },
  // ...
];
```

---

### 2. **Hero Section** (`widgets/hero-section.tsx`)

Главная секция с заголовком и CTA.

**Что изменить:**

- Заголовок: `"Управляйте проектами быстрее и проще"`
- Описание: `"Все инструменты для командной работы..."`
- Кнопки CTA
- Hero изображение (замените placeholder)

---

### 3. **Features Section** (`widgets/features-section.tsx`)

6 карточек с возможностями.

**Как изменить:**

```typescript
const features = [
  {
    icon: Zap, // Иконка из lucide-react
    title: "Ваша фича",
    description: "Описание...",
  },
  // ... добавьте или удалите фичи
];
```

---

### 4. **Stats Section** (`widgets/stats-section.tsx`)

4 карточки со статистикой.

**Как изменить:**

```typescript
const stats = [
  {
    value: "10000+", // Число или строка
    label: "Ваш показатель",
    icon: Users,
    animated: true, // Анимация счетчика
  },
  // ...
];
```

---

### 5. **How It Works** (`widgets/how-it-works-section.tsx`)

4 шага с описанием процесса.

**Как изменить:**

```typescript
const steps = [
  {
    number: 1,
    title: "Шаг 1",
    description: "Описание...",
    icon: YourIcon,
  },
  // ...
];
```

---

### 6. **Comparison Section** (`widgets/comparison-section.tsx`)

Сравнение "до/после" (3 элемента).

**Как изменить:**

```typescript
const comparisons = [
  {
    before: {
      title: "Старый способ",
      description: "...",
    },
    after: {
      title: "Новый способ",
      description: "...",
    },
  },
  // ...
];
```

---

### 7. **Gallery Section** (`widgets/gallery-section.tsx`)

6-8 примеров работ/скриншотов.

**Как изменить:**

- Замените `/api/placeholder/600/400` на реальные изображения
- Измените категории и описания

---

### 8. **Social Proof** (`widgets/social-proof-section.tsx`)

Отзывы клиентов + логотипы компаний.

**Как изменить:**

```typescript
const testimonials = [
  {
    content: "Текст отзыва...",
    author: {
      name: "Имя",
      role: "Должность",
      company: "Компания",
      avatar: "/path/to/avatar.jpg",
    },
    rating: 5,
  },
  // ...
];

const logos = [
  { name: "Company", src: "/path/to/logo.png" },
  // ...
];
```

---

### 9. **Team Section** (`widgets/team-section.tsx`)

Карточки членов команды.

**Как изменить:**

```typescript
const team = [
  {
    name: "Имя",
    role: "Должность",
    bio: "Краткая биография",
    image: "/path/to/photo.jpg",
    socials: [
      { platform: "linkedin", url: "#" },
      { platform: "github", url: "#" },
    ],
  },
  // ...
];
```

---

### 10. **Pricing Section** (`widgets/pricing-section.tsx`)

3 тарифных плана.

**Как изменить:**

```typescript
const pricingPlans = [
  {
    name: "Название",
    price: 2900, // В рублях
    period: "month", // или "year"
    description: "Описание плана",
    features: [
      { text: "Возможность 1", included: true },
      { text: "Возможность 2", included: false },
    ],
    ctaLabel: "Купить",
    ctaHref: "#",
    popular: true, // Показать badge "Популярный"
  },
  // ...
];
```

---

### 11. **FAQ Section** (`widgets/faq-section.tsx`)

8 частых вопросов с ответами.

**Как изменить:**

```typescript
const faqs = [
  {
    question: "Ваш вопрос?",
    answer: "Подробный ответ...",
  },
  // ...
];
```

---

### 12. **CTA Section** (`widgets/cta-section.tsx`)

Финальный призыв к действию.

**Что изменить:**

- Заголовок
- Описание
- Текст на кнопке
- Форма подписки (email input)

---

### 13. **Footer** (`widgets/footer.tsx`)

Подвал с ссылками и соцсетями.

**Как изменить:**

```typescript
const footerLinks = {
  product: {
    title: "Ваша категория",
    links: [
      { name: "Ссылка", href: "#" },
      // ...
    ],
  },
  // ... добавьте колонки
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  // ...
];
```

---

## 🎨 Стилизация

### CSS Переменные

Все цвета настраиваются в `src/app/globals.css`:

```css
:root {
  /* Градиенты для лендинга */
  --gradient-from: oklch(0.67 0.24 252); /* Синий */
  --gradient-via: oklch(0.62 0.23 295); /* Фиолетовый */
  --gradient-to: oklch(0.72 0.19 345); /* Розовый */

  /* Акцентный цвет */
  --feature-accent: oklch(0.65 0.21 165); /* Бирюзовый */

  /* Spacing */
  --section-padding-y: 5rem;
  --section-padding-y-lg: 8rem;
}
```

### Utility классы

Три готовых класса для градиентов:

```css
.text-gradient          /* Градиентный текст */
/* Градиентный текст */
/* Градиентный текст */
/* Градиентный текст */
.bg-gradient-primary    /* Градиентный фон */
.border-gradient; /* Градиентная рамка */
```

**Использование:**

```tsx
<h1 className="text-gradient">Заголовок с градиентом</h1>
```

---

## ✨ Анимации

### Framer Motion паттерны

#### 1. Fade-in + Slide-up (для заголовков)

```typescript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
```

#### 2. Stagger (для списков)

```typescript
// Используйте готовые варианты из shared/hooks/use-scroll-animation.ts
import {
  staggerContainer,
  staggerItem,
} from "@/shared/hooks/use-scroll-animation";

<motion.div variants={staggerContainer} initial="hidden" whileInView="show">
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {/* content */}
    </motion.div>
  ))}
</motion.div>;
```

#### 3. Hover эффекты

```typescript
whileHover={{ y: -5, scale: 1.02 }}
transition={{ type: "spring", stiffness: 300 }}
```

#### 4. Анимированный счетчик (StatCard)

Автоматически анимирует числовые значения при появлении в viewport.

---

## 🔧 Как изменять шаблон

### Быстрый старт

1. **Изменить брендинг:**

   - Замените "TaskFlow" на название вашего продукта
   - Обновите логотип в `Header` и `Footer`
   - Измените цвета в `globals.css`

2. **Изменить контент:**

   - Откройте нужный widget в `src/widgets/`
   - Найдите массив с данными (features, testimonials, etc.)
   - Замените текст и изображения

3. **Добавить/удалить секции:**

   ```typescript
   // src/app/page.tsx
   export default function Home() {
     return (
       <>
         <Header />
         <main>
           <HeroSection />
           {/* Добавьте или удалите секции здесь */}
           <YourCustomSection />
         </main>
         <Footer />
       </>
     );
   }
   ```

4. **Изменить порядок секций:**
   Просто поменяйте местами компоненты в `page.tsx`

---

### Создание новой секции

1. Создайте файл `src/widgets/your-section.tsx`:

```typescript
"use client";

import { SectionContainer } from "@/features/section-container";
import { SectionHeader } from "@/features/section-header";

export function YourSection() {
  return (
    <SectionContainer id="your-section">
      <SectionHeader
        title="Ваш заголовок"
        description="Описание"
        withGradient
      />

      {/* Ваш контент */}
    </SectionContainer>
  );
}
```

2. Импортируйте в `page.tsx`:

```typescript
import { YourSection } from "@/widgets/your-section";
```

3. Добавьте в композицию:

```typescript
<YourSection />
```

---

### Создание нового feature-компонента

1. Создайте файл `src/features/your-card.tsx`:

```typescript
"use client";

import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";

export interface YourCardProps {
  title: string;
  // ... ваши props
}

export function YourCard({ title }: YourCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-xl bg-card"
    >
      <h3>{title}</h3>
      {/* ... ваш контент */}
    </motion.div>
  );
}
```

2. Используйте в widget:

```typescript
import { YourCard } from "@/features/your-card";
```

---

## 📝 Чеклист для адаптации

- [ ] Изменить название продукта (TaskFlow → Ваше)
- [ ] Обновить логотип
- [ ] Изменить цветовую схему (globals.css)
- [ ] Заменить все текстовые плейсхолдеры
- [ ] Загрузить реальные изображения
- [ ] Обновить иконки (выбрать из lucide-react)
- [ ] Изменить количество фич/отзывов/членов команды
- [ ] Настроить цены и тарифы
- [ ] Обновить FAQ
- [ ] Добавить реальные ссылки в Footer
- [ ] Настроить соцсети
- [ ] Проверить адаптивность на всех размерах экрана
- [ ] Протестировать все анимации
- [ ] Добавить реальные ссылки CTA

---

## 🚀 Преимущества шаблона

✅ **Правильная FSD архитектура** - легко масштабировать и поддерживать  
✅ **Переиспользуемые компоненты** - DRY принцип  
✅ **Типизация TypeScript** - меньше ошибок  
✅ **Современные анимации** - Framer Motion  
✅ **Темная/светлая тема** - автоматически  
✅ **Полностью адаптивный** - от 320px до 4K  
✅ **Accessibility** - семантичный HTML, ARIA  
✅ **shadcn/ui** - 50+ готовых компонентов  
✅ **Чистый код** - комментарии и документация

---

## 🎯 Для ИИ-ассистентов

Этот шаблон специально оптимизирован для работы с ИИ:

1. **Понятная структура** - FSD методология
2. **Изолированные компоненты** - легко заменять
3. **Подробные props** - TypeScript интерфейсы
4. **Комментарии в коде** - объяснения назначения
5. **Примеры данных** - в каждом widget
6. **Модульность** - добавляй/удаляй секции без проблем

### Типичные задачи для ИИ:

**"Измени цвета на зеленый"**
→ Обнови переменные в `globals.css`

**"Добавь секцию с видео"**
→ Создай новый widget в `src/widgets/video-section.tsx`

**"Убери секцию Team"**
→ Удали `<TeamSection />` из `page.tsx`

**"Сделай 4 тарифа вместо 3"**
→ Добавь объект в массив `pricingPlans` в `pricing-section.tsx`

---

## 📦 Технологии

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Framer Motion** - Анимации
- **shadcn/ui** - UI компоненты
- **Lucide React** - Иконки
- **next-themes** - Темизация

---

## 🤝 Поддержка

Этот шаблон создан как база для ИИ-генерации уникальных лендингов. Изучите структуру, измените контент под ваш продукт, и получите профессиональную продающую страницу!

**Успешной адаптации! 🚀**
