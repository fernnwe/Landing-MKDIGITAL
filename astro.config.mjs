import { defineConfig } from 'astro/config';
import icon from "astro-icon";

export default defineConfig({
  site: "https://mkdigitalnic.com",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  integrations: [
    icon({
      include: {
        mdi: ["*"],
        "simple-icons": ["*"]
      }
    })
  ]
});
