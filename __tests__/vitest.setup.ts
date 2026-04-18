/**
 * @fileoverview Vitest setup file for @stackra/ts-redis package
 *
 * Peer dependencies (@stackra/ts-container, @stackra/ts-support) are
 * mocked via resolve aliases in vitest.config.ts pointing to
 * __tests__/__mocks__/*.ts files.
 *
 * This setup file handles any additional global test configuration.
 *
 * @module @stackra/ts-redis
 * @category Configuration
 */

import 'vitest/globals';
