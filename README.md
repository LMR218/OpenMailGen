
## OpenMailGen 📧

OpenMailGen is a professional email generator built with **Next.js 16**,
**Mantine UI**, and **TypeScript**. It helps users create structured,
professional emails for various scenarios (HR requests, meetings, time off,
etc.) with support for multiple languages.

## 🚀 Features

- **Static Site Generation (SSG)**: Fast, SEO-friendly static pages for all
  locales.
- **Internationalization (i18n)**: Full support for **English** and **Arabic**
  (RTL), powered by `next-intl`.
- **Responsive Design**: Mobile-first UI with a custom **Burger Menu** and
  responsive AppShell.
- **Template System**: Modular template engine for defining email structures
  (Time Off, HR, Meetings).
- **Themes**: Light/Dark mode toggling with persisted preference.
- **Developer Experience**:
  - **Typescript** for type safety.
  - **Husky** for git hooks (pre-commit testing, pre-push building).
  - **ESLint** & **Prettier** for code quality.
  - **Jest** for unit testing.
  - **Turbopack** for fast development.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [Mantine v8](https://mantine.dev/)
- **i18n**: [next-intl](https://next-intl-docs.vercel.app/)
- **Styling**: CSS Modules + Mantine Styles
- **Icons**: [@tabler/icons-react](https://tabler.io/icons)
- **Testing**: Jest + React Testing Library
- **Tooling**: pnpm, Husky, PostCSS

## 📦 Installation

This project uses [pnpm](https://pnpm.io/).

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 📜 Scripts

| Script                | Description                                         |
| :-------------------- | :-------------------------------------------------- |
| `pnpm dev`            | Start development server with Turbopack             |
| `pnpm build`          | Build the application for production (SSG)          |
| `pnpm start`          | Start production server                             |
| `pnpm test`           | Run typecheck, lint, prettier check, and unit tests |
| `pnpm lint`           | Run ESLint and Stylelint                            |
| `pnpm prettier:write` | Format all files with Prettier                      |
| `pnpm analyze`        | Analyze bundle size                                 |

## 🌍 Internationalization (SSG)

This project uses **[locale] segment routing** to generate static pages for
each language.

- `/en` - English version
- `/ar` - Arabic version
- `/` - Default locale (English)

Configuration is located in the `i18n/` directory.

## 📚 Documentation

Template contributors should follow
[docs/adding-templates.md](docs/adding-templates.md).

## 🧪 Git Hooks (Husky)

- **pre-commit**: Runs `pnpm test` (ensures code quality before commit).
- **pre-push**: Runs `pnpm build` (ensures build success before push).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.
