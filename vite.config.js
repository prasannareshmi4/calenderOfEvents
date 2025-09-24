// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//       base: "./",
//       plugins: [react()],
// });


import { defineConfig } from 'vite';

export default defineConfig({
  base: './',   // 👈 Add this line
  build: {
    outDir: 'dist'
  }
});
