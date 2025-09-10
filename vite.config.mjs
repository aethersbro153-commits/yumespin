import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',   // ✅ build goes to dist (Vercel default)
    emptyOutDir: true
  }
});
