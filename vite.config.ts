import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import jsconfigPaths from "vite-jsconfig-paths";
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [jsconfigPaths()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
})
