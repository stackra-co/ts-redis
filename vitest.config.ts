/**
 * @fileoverview Vitest configuration for @stackra-inc/ts-redis package
 *
 * This configuration sets up the testing environment for the package,
 * including test globals, jsdom environment, coverage reporting, and path aliases.
 *
 * @module @stackra-inc/ts-redis
 * @category Configuration
 */

import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./__tests__/vitest.setup.ts'],
    include: ['__tests__/**/*.{test,spec}.{ts,tsx}'],
    passWithNoTests: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'dist/', '**/*.test.ts', '**/*.test.tsx', '**/*.config.ts'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Stub peer dependencies for testing — the real mocks are in vitest.setup.ts
      '@stackra-inc/ts-support': path.resolve(__dirname, './__tests__/__mocks__/ts-support.ts'),
      '@stackra-inc/ts-container': path.resolve(__dirname, './__tests__/__mocks__/ts-container.ts'),
    },
  },
});
