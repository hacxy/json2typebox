import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      formats: ['es', 'cjs'],
      entry: './src/index.ts',
      name: 'UTILS',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['@sinclair/typebox-codegen']
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [dts()]
});
