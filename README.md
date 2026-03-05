# Boiledrez

A CLI tool to scaffold new React projects with a modern, opinionated setup.

## Features

The generated project includes:

- **React 19** with TypeScript
- **Vite 7** for fast development and builds
- **Vitest** with Testing Library for unit testing
- **ESLint 9** with TypeScript and React plugins
- **Path aliases** (`@components` points to `/src/components`)

## Prerequisites

- Node.js >= 20.19.0
- pnpm

## Usage

```bash
npx create-boiledrez my-app
cd my-app
pnpm dev
```

This will:
1. Create a new directory with your project name
2. Copy the template files
3. Install dependencies with pnpm

## Available Scripts

In the generated project, you can run:

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build for production |
| `pnpm test` | Run tests with Vitest |
| `pnpm lint` | Run ESLint |

## Project Structure

```
my-app/
├── src/
│   ├── components/
│   │   └── button/
│   │       └── button.component.tsx
│   ├── App.tsx
│   ├── App.spec.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
├── eslint.config.ts
└── package.json
```

## License

MIT
