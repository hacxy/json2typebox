import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      formats: ['es', 'cjs'],
      entry: './src/index.ts',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['@sinclair/typebox-codegen', '@hacxy/json2ts']
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [dts()]
});
