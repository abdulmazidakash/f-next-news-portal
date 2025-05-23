### ✅ `README.md`

```md
# 📰 Next News Portal

A modern and responsive news portal built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, and **Radix UI**. This project showcases a clean and interactive user interface for delivering breaking news, articles, and more.

---

## 🚀 Features

- ⚡️ Built with Next.js 15 using **Turbopack** for fast development
- 🎨 Styled using **Tailwind CSS 4** with animation support via `tw-animate-css`
- 🧩 Modular and reusable UI components with **Radix UI**
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🌙 Light & Dark theme support (optional)
- 📡 Remote image loading support (e.g. Unsplash, TheMealDB)
- ✅ ESLint and TypeScript support for maintainable code

---

## 📂 Folder Structure (Example)

```

next-news-portal/
│
├── components/        # Reusable UI components
├── pages/             # Next.js pages (routes)
├── public/            # Static files
├── styles/            # Global styles (e.g., Tailwind)
├── utils/             # Utility functions
├── types/             # TypeScript types
├── eslint.config.mjs  # ESLint configuration
├── next.config.ts     # Next.js configuration
└── tailwind.config.ts # TailwindCSS configuration

````

---

## 🛠️ Tech Stack

| Name                      | Description                                      |
| ------------------------- | ------------------------------------------------ |
| **Next.js 15**            | React framework for production apps             |
| **React 19**              | Core UI library                                 |
| **Tailwind CSS 4**        | Utility-first CSS framework                     |
| **Radix UI**              | Accessible, composable UI primitives            |
| **Lucide Icons**          | Icon set built for React                        |
| **ESLint + TypeScript**   | Code quality and type safety                    |

---

## 📦 Installation

Make sure you have **Node.js (v18 or higher)** and **pnpm / npm / yarn** installed.

```bash
git clone https://github.com/your-username/next-news-portal.git
cd next-news-portal
pnpm install # or npm install or yarn
````

---

## 💻 Usage

### Run the development server

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
pnpm start
```

---

## 🧪 Linting

```bash
pnpm lint
```

To ignore ESLint errors during production build:

```ts
// inside next.config.ts
eslint: {
  ignoreDuringBuilds: true,
}
```

---

## 🔗 Remote Images

Supports loading from:

* `https://images.unsplash.com/**`
* `https://www.themealdb.com/**`

Configured in `next.config.ts`.

---

## 🧱 UI Libraries

* `@radix-ui/react-*` — Accessible components
* `lucide-react` — Icon system
* `clsx`, `class-variance-authority` — Utility class merging
* `tailwind-merge` — Prevent class conflicts
* `tw-animate-css` — Built-in animation support

---

## 👨‍💻 Author

**Abdul Mazid Akash**
📧 [Email Me](mailto:your-email@example.com)
🌐 [Portfolio Website](https://yourportfolio.com)
🐱 [GitHub](https://github.com/your-username)

---

## 📜 License

MIT License. Feel free to use and modify this project as you like.


