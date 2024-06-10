import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupPlugins } from './plugins'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  // 注册插件
  setupPlugins(app)

  await router.isReady() // 等待路由准备就绪
  app.mount('#app')
}

bootstrap()
