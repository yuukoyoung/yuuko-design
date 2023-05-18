import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      outputDir: ['./dist/es', './dist/lib'],
    }),
    viteStaticCopy({
      targets: [
        {
          src: './types/global.d.ts',
          dest: '.',
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es'],
    },
    emptyOutDir: false,
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
