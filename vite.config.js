
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Plugins essenciais
  plugins: [
    react(),
    tailwindcss(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),

  // Configuração de alias (caminho relativo)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Configuração do servidor de desenvolvimento
  server: {
    host: "::",
    port: 8080,
  },
}))
