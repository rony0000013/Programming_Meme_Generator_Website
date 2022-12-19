import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Programming_Meme_Generator_Website/',
  plugins: [react()]
})
