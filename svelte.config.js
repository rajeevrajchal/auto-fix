// Tauri doesn't have a Node.js server to do proper SSR
// so we will use adapter-static to prerender the app (SSG)
// See: https://v2.tauri.app/start/frontend/sveltekit/ for more info
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess({
    scss: {
      prependData: `@import 'src/style/global.scss';`,
    },
  }),
  kit: {
    adapter: adapter(),
    alias: {
      "@style": "./src/style/*",
      "@comp": "./src/lib/components/*",
      "@atoms": "./src/lib/atoms/*",
      "@assets": "./src/lib/assets/*",
      "@tools": "./src/lib/tools/*",
      "@theme": "./src/lib/tools/style/*",
      "@query": "./src/lib/queries/*",
      "@const": "./src/lib/constants/*",
      "@queries": "./src/lib/queries/*",
      "@icon": "./src/lib/icons/*",
    },
  },
};

export default config;
