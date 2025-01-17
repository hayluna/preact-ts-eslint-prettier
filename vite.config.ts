import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), checker({ typescript: true }), tsconfigPaths()],
});
