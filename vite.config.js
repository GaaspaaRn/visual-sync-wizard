
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // Plugins essenciais
  plugins: [
    react(),
    tailwindcss(),
  ],
  
  // Configuração de alias (caminho relativo)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Configuração do servidor de desenvolvimento
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
})
