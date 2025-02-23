import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()], // ✅ Correct usage
  base: '/', 
  server: {
    host: true, // Listen on all network interfaces
    port: 5173, // You can change the port if needed
  }

})
