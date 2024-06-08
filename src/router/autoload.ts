import { RouteRecordRaw } from 'vue-router'

const layouts = import.meta.glob('../layouts/*.vue', { eager: true })
const views = import.meta.glob('../views/**/*.vue', { eager: true })

function getRoutes () {
  const layoutRoutes = [] as RouteRecordRaw[]

  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module as { default: any })
    route.children = getChildrenRoutes(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}

function getChildrenRoutes(layoutRoutes: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoutes.name as string}`)) {
      const route = getRouteByModule(file, module as { default: any })
      routes.push(route)
    }
  })
  return routes
}

function getRouteByModule(file: string, module: {[key:string]:any}) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route = {
    name: name.replace('/', '.'),
    path: `/${name}`,
    component: (module ).default,
  } as RouteRecordRaw

  return Object.assign(route, module.default?.route)
}


export default getRoutes()
