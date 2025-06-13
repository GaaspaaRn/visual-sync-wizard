import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'
// ↓↓↓ ADIÇÃO DOS IMPORTS NECESSÁRIOS PARA O WORKBOX ↓↓↓
import { ExpirationPlugin } from 'workbox-expiration'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
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
      },
      // ↓↓↓ CORREÇÃO APLICADA NA ESTRUTURA DO WORKBOX ↓↓↓
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
              plugins: [
                new CacheableResponsePlugin({
                  statuses: [0, 200],
                }),
                new ExpirationPlugin({
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // 1 Ano
                }),
              ],
            },
          },
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.gstatic.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              plugins: [
                new CacheableResponsePlugin({
                  statuses: [0, 200],
                }),
                new ExpirationPlugin({
                  maxEntries: 30,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // 1 Ano
                }),
              ],
            },
          },
          {
            urlPattern: ({ url }) => url.origin === 'https://cdnjs.cloudflare.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdnjs-cache',
              plugins: [
                new CacheableResponsePlugin({
                  statuses: [0, 200],
                }),
                new ExpirationPlugin({
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 30 // 30 Dias
                }),
              ],
            },
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-avatar'] // Removi um item duplicado aqui para limpeza
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
})