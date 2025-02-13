import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from other devices on the same network
    port: 5173, // Default Vite port (change if needed)
    strictPort: true, // Ensures it fails if the port is taken
    cors: true, // Enables CORS for WebRTC signaling
  },
  preview: {
    host: true, // Allows access in preview mode
    port: 4173, // Change as needed
  }
});
