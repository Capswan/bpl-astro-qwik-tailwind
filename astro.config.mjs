import { defineConfig } from 'astro/config';
import qwikdev from "@qwikdev/astro";
import node from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev(), tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});