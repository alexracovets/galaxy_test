# Galaxy Test

Frontend застосунок на **Next.js (App Router)** з компонентною архітектурою **Atomic Design**.

## Стек

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4 + tw-animate-css
- Framer Motion (анімації)
- react-fast-marquee (бігаюча строка)
- class-variance-authority + tailwind-merge (варіанти стилів)

## Архітектура

UI організований за **Atomic Design**:

- `atoms` — дрібні атомарні компоненти (кнопки, текст, лінки, інпути)
- `molecules` — комбінації атомів (навігація, блоки хедера)
- `organisms` — секції сторінки (Hero, Header, ContractPosts тощо)
- `templates` — макети сторінок (обгортки/каркас)
- `pages` — композиція сторінок із секцій

Додатково:
- `src/hooks` — кастомні хуки
- `src/ui/styles` — глобальні стилі
- `src/ui/types` — типи/інтерфейси
- `app/api` — API-ендпоїнти (наприклад `app/api/contracts`)

## Структура проєкту (скорочено)

```
app/
  page.tsx
  api/
src/
  hooks/
  ui/
    components/
      atoms/
      molecules/
      organisms/
      templates/
      pages/
    styles/
    types/
```

## Запуск проєкту

1) Встановити залежності:

```bash
npm install
```

2) Запустити дев-сервер:

```bash
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000).

## Збірка та продакшн

```bash
npm run build
npm run start
```

## Лінт і форматування

```bash
npm run lint
npm run format
```
