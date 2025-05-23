
---

```markdown
# Next News Portal

A modern, responsive news portal built with **Next.js**, **React 19**, **Tailwind CSS**, and **Radix UI**. This portal provides a structured layout with reusable components for presenting and navigating news content.

---

## 📑 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

---

## 📘 Introduction

The **Next News Portal** is designed to be a scalable and customizable news publishing platform using the latest frontend technologies. It leverages server-side rendering and API routes from Next.js for efficient and fast content delivery.

---

## 🚀 Features

- ⚡ Built with **Next.js 15**
- 💄 UI powered by **Tailwind CSS** and **Radix UI**
- 🔄 Server-side rendering and routing
- 🧩 Modular component-based architecture
- 📱 Responsive and mobile-friendly layout
- 📰 News fetching logic with `fetchNews.ts`

---

## 📁 Folder Structure

```

src/
├── app/
│   ├── about/
│   ├── contact/
│   └── news/
├── assets/                 # Static assets
├── components/
│   ├── news/
│   └── shared/
│       ├── Banner.tsx
│       ├── Footer.tsx
│       ├── MobileMenu.tsx
│       ├── Navbar.tsx
│       ├── NewsCard.tsx
│       └── NewsLetter.tsx
├── context/               # React context logic
├── lib/
│   └── fetchNews.ts       # News fetching utility
├── ui/                    # UI components
├── layout.tsx
├── page.tsx
├── globals.css

````

---

## 🛠️ Installation

Ensure you have **Node.js >= 18** installed.

```bash
git clone https://github.com/your-username/next-news-portal.git
cd next-news-portal
npm install
````

---

## ▶️ Usage

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

---

## 📦 Dependencies

### Runtime

* `next@15.3.2`
* `react@19.0.0`
* `react-dom@19.0.0`
* `tailwind-merge`
* `@radix-ui/react-*`
* `lucide-react`
* `clsx`
* `class-variance-authority`
* `react-icons`

### Dev Dependencies

* `eslint`, `eslint-config-next`, `@eslint/eslintrc`
* `tailwindcss`, `@tailwindcss/postcss`, `tw-animate-css`
* `typescript`
* `@types/*`

---

## ⚙️ Configuration

* **Tailwind CSS**: Configured via PostCSS and utility classes.
* **ESLint**: Configured with Next.js' ESLint config.
* **TypeScript**: Enabled with strict types.

---

## 📌 Examples

### Fetching News

```ts
import { fetchNews } from "@/lib/fetchNews";

const news = await fetchNews("technology");
```

### Shared Components Usage

```tsx
import Navbar from "@/components/shared/Navbar";
import NewsCard from "@/components/shared/NewsCard";
```

---

## 🧰 Troubleshooting

* Ensure you're using Node.js version 18 or later.
* If Tailwind styles aren't loading, verify that `globals.css` is imported correctly.
* If `next dev` fails, try deleting `.next` and reinstalling dependencies:

```bash
rm -rf .next
npm install
```

---

## 👥 Contributors

* **Your Name** – [your-email@example.com](mailto:your-email@example.com)

> Want to contribute? Open an issue or submit a PR!

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

```

---

```
