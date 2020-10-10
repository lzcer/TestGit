import Vue from 'vue'
import Router from 'vue-router'
import A from '@/components/a.vue'
import B from '@/components/b.vue'
import Home from '@/components/home.vue'
import NotFound from '@/components/404.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: '404',
      component: NotFound
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        { path: '/a', component: A },
        { path: '/b', component: B }
      ]
    }
  ]
})
