// @ts-check
import { defineConfig, envField } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  env: {
    schema: {
      STRAPI_URL: envField.string({ context: 'server', access: 'public' })
    }
  },

  adapter: vercel()
});