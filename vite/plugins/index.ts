import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import { setupMockPlugin } from './mock'
export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()]
  // Add more plugins here as needed
  console.log(env.VITE_API_URL)
  plugins.push(setupMockPlugin(isBuild))
  return plugins
}