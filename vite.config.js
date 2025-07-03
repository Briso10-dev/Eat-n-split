import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightest: '#fff4e6',
        light: '#ffe8cc',
        medium: '#ffa94d',
        dark: '#ff922b',
      }
    }
  },
  plugins: [
    react(),
    tailwindcss()
  ],
})
