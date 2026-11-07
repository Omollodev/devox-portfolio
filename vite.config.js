import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Output stays in `build/` so the Vercel project settings keep working.
export default defineConfig({
  plugins: [react()],
  build: { outDir: "build", sourcemap: false },
  server: { port: 3000 },
});
