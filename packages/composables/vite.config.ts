import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';

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
  plugins: [
    dts({
      entryRoot: './src',
      outputDir: ['./dist/es', './dist/lib'],
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          preserveModulesRoot: './src',
          exports: 'named',
          dir: './dist/es',
          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: './src',
          exports: 'named',
          dir: './dist/lib',
          globals: {
            vue: 'Vue',
          },
        },
      ],
    },
  },
});
