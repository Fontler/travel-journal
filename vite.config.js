import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/travel-journal",
  plugins: [
  react(),
  Unfonts({ 
    google: {
      families: [
        {
          name: 'Inter',
          styles: 'wght@400;500;600;700'
        }
      ]
    }
   })
  ]
})