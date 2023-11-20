import { defineConfig } from 'astro/config';
import qwikdev from "@qwikdev/astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});