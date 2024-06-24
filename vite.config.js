import { defineConfig } from 'vite'
import oxlintPlugin from 'vite-plugin-oxlint'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), oxlintPlugin()]
})
