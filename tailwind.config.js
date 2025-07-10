/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores primárias
        background: "hsl(0, 0%, 4%)",
        foreground: "hsl(0, 0%, 100%)",
        
        // Cores secundárias/acentos
        primary: {
          DEFAULT: "hsl(180, 100%, 50%)",
          foreground: "hsl(0, 0%, 4%)",
        },
        secondary: {
          DEFAULT: "hsl(0, 0%, 8%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        accent: {
          DEFAULT: "hsl(180, 100%, 50%)",
          foreground: "hsl(0, 0%, 4%)",
        },
        
        // Cores de utilidade
        muted: {
          DEFAULT: "hsl(0, 0%, 8%)",
          foreground: "hsl(0, 0%, 65%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 8%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        border: "hsl(0, 0%, 15%)",
        input: "hsl(0, 0%, 15%)",
        ring: "hsl(180, 100%, 50%)",
        
        // Cores de estado
        destructive: {
          DEFAULT: "hsl(0, 62%, 30%)",
          foreground: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 40px hsl(180, 100%, 50%)',
        'neon-sm': '0 0 20px hsl(180, 100%, 50%)',
      },
    },
  },
  plugins: [],
}