
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    // O plugin componentTagger foi removido para simplificar o build.
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
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
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
  // A seção 'build' foi removida para usar as configurações padrão do Vite.
  // Isso deve ajudar a resolver o erro de permissão do esbuild.
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['lenis', 'gsap']
  }
}))
