import { sveltekit } from '@sveltejs/kit/vite';

import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

export default defineConfig((): UserConfig => {
  return {
    plugins: [sveltekit()],
    server: {
      host: '0.0.0.0',
      port: 5173,
    },
  };
});
