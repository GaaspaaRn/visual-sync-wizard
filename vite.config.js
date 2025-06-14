import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // Plugins essenciais
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // Mantendo apenas o manifesto para garantir que o build passe
      manifest: {
        name: 'Gruv Label - Agenciamento de Artistas Megafunk',
        short_name: 'Gruv Label',
        description: 'Agência especializada em bookings e agenciamento de DJs de megafunk em Joinville, SC',
        theme_color: '#1DB954',
        background_color: '#121212',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  
  // Configuração de alias (caminho relativo)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Configuração do servidor de desenvolvimento
  server: {
    host: "0.0.0.0", // Alterado para um padrão mais comum que "::"
    port: 8080,
  },

  // A seção 'build' e 'optimizeDeps' foram removidas intencionalmente.
  // Vamos deixar o Vite usar suas configurações padrão, que são otimizadas
  // e menos propensas a causar erros de permissão.
})