import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repository =
  process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'shakti_portfolio';
const isUserPageRepo = repository?.endsWith('.github.io');

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === 'production' && !isUserPageRepo
      ? `/${repository}/`
      : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
