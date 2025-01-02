import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        // Silence legacy JS API warnings
        sassOptions: {
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },
  },
});
