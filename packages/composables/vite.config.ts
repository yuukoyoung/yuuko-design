import { defineConfig } from 'vitest/config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
    cache: { dir: 'node_modules/.vitest' },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['cjs', 'es'],
      fileName: (format) => `composables.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
