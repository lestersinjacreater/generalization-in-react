# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```






src/
│── api/               # API service functions
│   ├── axios.ts       # Axios instance
│   ├── auth.ts        # Authentication API calls
│   ├── predictions.ts # Prediction API calls
│   ├── users.ts       # User API calls
│   ├── feedback.ts    # Feedback API calls
│
│── components/        # Reusable UI components
│   ├── Navbar.tsx     # Top navigation bar
│   ├── Footer.tsx     # Footer component
│   ├── Loader.tsx     # Loading spinner
│   ├── ProtectedRoute.tsx # Role-based route protection
│
│── pages/             # Pages for routing
│   ├── Home.tsx       # Landing page
│   ├── Login.tsx      # Login page
│   ├── Register.tsx   # Registration page
│   ├── Dashboard.tsx  # User dashboard
│   ├── AdminDashboard.tsx # Admin panel
│   ├── Predictions.tsx # Predictions list & form
│   ├── Feedback.tsx   # Feedback page
│
│── hooks/             # Custom React hooks
│   ├── useAuth.ts     # Authentication hook
│
│── context/           # Global state management
│   ├── AuthContext.tsx
│
│── routes/            # App Routes
│   ├── AppRoutes.tsx
│
│── utils/             # Utility functions
│── App.tsx            # Root component
│── main.tsx           # Entry point
│── index.css          # Global styles
│── tailwind.config.cjs # Tailwind config
│── vite.config.ts     # Vite config
