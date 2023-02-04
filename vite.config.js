import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
		minify: 'esbuild',
		target: "esnext"
	},
	outDir: "dist",
	assetsInlineLimit: 0,
	rollupInputOptions: {
	  input: "src/main.jsx",
	},
	rollupOutputOptions: {
	  format: "es",
	  file: "dist/bundle.js",
	},
  plugins: [react()]
})
