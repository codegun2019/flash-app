# Flash App

A modern Next.js application built with TypeScript, Tailwind CSS, and Radix UI components.

## 🚀 Features

- **Next.js 15.1.0** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Modern UI Components** - Accordion, Dialog, Dropdown, and more
- **Responsive Design** - Mobile-first approach
- **Theme Support** - Dark/light mode with next-themes

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Package Manager**: Yarn

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/codegun2019/flash-app.git
   cd flash-app
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Run development server**
   ```bash
   yarn dev
   ```

4. **Build for production**
   ```bash
   yarn build
   ```

## 🔧 Configuration

### PostCSS Configuration
The project uses `@tailwindcss/postcss` for PostCSS integration with Tailwind CSS.

### Tailwind CSS
Tailwind CSS is configured with custom animations and responsive utilities.

## 📁 Project Structure

```
flash-app/
├── app/                    # Next.js App Router
├── components/            # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## 🚀 Deployment

The app is configured for deployment on Vercel with proper build settings.

### Build Commands
- `yarn build` - Creates production build
- `yarn start` - Starts production server
- `yarn lint` - Runs ESLint

## 🐛 Troubleshooting

### Recent Build Fix (December 2024)
The project was successfully fixed from a PostCSS plugin error by:
1. **Installing `@tailwindcss/postcss`** - Required for Tailwind CSS v4+ PostCSS integration
2. **Updating PostCSS config** - Changed from `tailwindcss: {}` to `'@tailwindcss/postcss': {}`
3. **Resolving dependency conflicts** - Removed duplicate packages and package-lock.json
4. **Using Yarn exclusively** - Prevents package manager conflicts

### Common Issues

1. **PostCSS Plugin Error**: Ensure `@tailwindcss/postcss` is installed
2. **Dependency Conflicts**: Use only Yarn (remove package-lock.json if present)
3. **Build Failures**: Clear node_modules and reinstall dependencies
4. **Tailwind CSS v4 Compatibility**: Use proper PostCSS plugin configuration

### Solutions

```bash
# Clear dependencies and reinstall
rm -rf node_modules yarn.lock
yarn install

# Clear Next.js cache
rm -rf .next
yarn build

# Fix PostCSS configuration
# Ensure postcss.config.mjs uses '@tailwindcss/postcss': {}
```

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Please contact the maintainers for contribution guidelines.

---

**Built with ❤️ using Next.js and modern web technologies**

**Last Updated**: December 2024 - Fixed PostCSS plugin compatibility issues
