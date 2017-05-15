import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Courses from '@/components/Courses'
import Events from '@/components/Events'
import Login from '@/components/admin/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cursos',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/eventos',
      name: 'Events',
      component: Events
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
