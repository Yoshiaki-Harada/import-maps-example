import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3101,
  },
  build: {
    lib: {
      entry: './src/Mf1.tsx',
      name: 'Mf1Component', // グローバル変数として公開するライブラリの変数名
      fileName: 'mf1-component', // 生成するファイルのファイル名を指定します。
    },
  },
});

