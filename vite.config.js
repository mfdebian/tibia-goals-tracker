import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    server: {
      open: true,
      host: 'localhost',
      port: 3000,
    },
    build: {
      outDir: 'build',
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
    ],
    test: {
      environment: 'jsdom',
      testMatch: ['./tests/**/*.test.jsx'],
      globals: true,
    },
  };
});
