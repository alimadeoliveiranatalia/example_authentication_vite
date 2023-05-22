import { defineConfig, loadEnv } from 'vite'
import { config } from 'dotenv'
import react from '@vitejs/plugin-react'

config();
// https://vitejs.dev/config/

export default defineConfig(
  ({ command, mode}) => {
    
    const env = loadEnv(mode, process.cwd(), '')
    
    return {
      plugins: [
        react()
      ],
      /*server: {
        host: true,
        port: 5173
      }*/
      define: {
        __APP_ENV__: env.APP_ENV
      }
    }
  }
  
)
