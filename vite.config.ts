import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: process.env.NODE_ENV === 'production' ? '/Tbimdemo/' : '/',
      server: {
        port: 5173,
        host: '0.0.0.0',
        strictPort: true,
        allowedHosts: [
          '.gitpod.dev',
          '.gitpod.io',
        ],
        hmr: {
          protocol: 'wss',
          host: process.env.GITPOD_WORKSPACE_URL?.replace('https://', '').replace(/\/$/, '') 
            ? `5173-${process.env.GITPOD_WORKSPACE_URL.replace('https://', '').replace(/\/$/, '')}`
            : 'localhost',
          clientPort: 443,
        },
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
