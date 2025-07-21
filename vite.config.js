import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      crypto: false, 
    },
  },
});
