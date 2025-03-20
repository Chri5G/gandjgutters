import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gandjgutters/', // replace '<your-repo-name>' with your actual repo name
  css: {
    postcss: {
     plugins: [tailwindcss()],
    },
   },
})
