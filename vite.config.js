import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { splitVendorChunkPlugin } from "vite";
import dotenv from "dotenv";

dotenv.config();


// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), splitVendorChunkPlugin()],
  optimizeDeps: {
    include: ['react', 'react-dom'],
    bundleNodeModules: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  build: {
    chunkSizeWarningLimit: 2500,
  },
  define: {
    "process.env": {},
    __VALUE__: `"${process.env.VALUE}"`,
    "process.env.VITE_SERVICE_ID": JSON.stringify(process.env.VITE_SERVICE_ID),
    "process.env.VITE_TEMPLATE_ID": JSON.stringify(
      process.env.VITE_TEMPLATE_ID
    ),
    "process.env.VITE_PUBLIC_KEY": JSON.stringify(process.env.VITE_PUBLIC_KEY),
  },
})
