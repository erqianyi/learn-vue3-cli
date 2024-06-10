import { App } from 'vue'
import { setupTailwindCSS } from './tailwindcss'
export function setupPlugins(app: App) {
  // 注册插件
  setupTailwindCSS()
}