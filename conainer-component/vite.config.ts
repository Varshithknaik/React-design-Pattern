import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/current-user": {
      //   // Specify the path you want to proxy
      //   target: "http://localhost:9090",
      //   changeOrigin: true,
      // },
      "/api": {
        // Proxy all requests starting with /api
        target: "http://localhost:9090",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Adjust the path as needed
      },
    },
  },
});
