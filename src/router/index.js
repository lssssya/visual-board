import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router.config.js'

Vue.use(Router)

const createRoute = routes => {
  return routes.reduce((processedRoutes, currentRoute) => {
    processedRoutes.push(processRouteObj(currentRoute))
    return processedRoutes
  }, [])
}

const processRouteObj = ({ children, component, ...args }) => {
  return Object.assign({
    component: resolve => require([`@/pages/${component}`], resolve),
    children: children ? createRoute(children) : []
  }, args)
}

const BASE_URL = '/ed-EbKB'

const router = new Router({
  mode: 'history',
  base: BASE_URL,
  routes: createRoute(routes)
})

export default router
