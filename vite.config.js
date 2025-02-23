import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import markdown from 'vite-plugin-md';


export default defineConfig({
  plugins: [react(), markdown()], // ✅ Correct usage
  assetsInclude: ['**/*.md'], // Allow .md files as assets
  base: '/', 
  server: {
    host: true, // Listen on all network interfaces
    port: 5173, // You can change the port if needed
  }

})
