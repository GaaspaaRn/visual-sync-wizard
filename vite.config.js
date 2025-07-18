
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { componentTagger } from "lovable-tagger"
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react()]
  
  if (mode === 'development') {
    plugins.push(componentTagger())
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: "::",
      port: 8080,
    },
    optimizeDeps: {
      force: true
    },
    build: {
      rollupOptions: {
        external: []
      }
    },
    esbuild: {
      target: 'es2015'
    }
  }
})
