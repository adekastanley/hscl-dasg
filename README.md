# HR Management App

A modern, responsive HR Management application built with Next.js 15, designing to streamline human resource processes.

## Key Features

- **Dashboard Overview**: Comprehensive view of HR metrics and activities.
- **User Profile Management**: Easy-to-use interface for managing user details.
- **Responsive Sidebar Navigation**: Collapsible and intuitive navigation built for efficiency.
- **Modern UI/UX**: Polished design using Shadcn UI and customized Tailwind CSS.

## Tech Stack

This project leverages the latest web technologies for performance and scalability:

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [clsx](https://github.com/lukeed/clsx)
- **Components**: [Radix UI](https://www.radix-ui.com/) / [Lucide React](https://lucide.dev/) (Icons)
- **Package Manager**: pnpm

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (Latest LTS recommended)
- pnpm (Preferred) or npm/yarn/bun

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd hr-management-app
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    # or
    npm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    # or
    npm run dev
    ```

4.  **Open the app:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```bash
hr-management-app/
├── app/                  # Application source code (Next.js App Router)
│   ├── dashboard/        # Dashboard routes and screens
│   ├── globals.css       # Global styles and Tailwind directives
│   └── layout.tsx        # Root layout definition
├── components/           # Reusable UI components
│   ├── ui/               # Primitive components (buttons, inputs, etc.)
│   └── app-sidebar.tsx   # Main application sidebar
├── lib/                  # Utility functions and shared libraries
├── public/               # Static assets
└── package.json          # Project dependencies and scripts
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
