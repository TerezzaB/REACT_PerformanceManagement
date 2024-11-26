import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig as defineTestConfig } from 'vitest/config';

// Vite config for regular app build
export default defineConfig({
  plugins: [react()],
  base: '/',
});

// Vitest config
export const testConfig = defineTestConfig({
  test: {
    globals: true, // we can use global testing methods like: describe.... 
    environment: 'jsdom', // in testing browser
    coverage: {
      provider: 'c8', // we can generate reports about code coverage
    },
  },
});
