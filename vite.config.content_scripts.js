import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig((opt) => {
  console.info(opt);
  return {
    root: 'src',
    build: {
      outDir: '../dist',
      emptyOutDir: false,
      rollupOptions: {
        input: {
          content_scripts: resolve(__dirname, 'src/content_scripts.ts'),
        },
        output: {
          entryFileNames: '[name].js',
          inlineDynamicImports: true,
        },
      },
    },
  };
});
