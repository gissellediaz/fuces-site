import Vue from 'vue'
import Router from 'vue-router'
import Courses from '@/components/site/Courses'
import Events from '@/components/site/Events'
import Home from '@/components/site/Home'
import Login from '@/components/admin/Login'
import Site from '@/components/site/Site'
import AboutUs from '@/components/site/AboutUs'
import Contact from '@/components/site/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Site',
      component: Site,
      children: [
        {
          path: '',
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
          path: '/nosotros',
          name: 'AboutUs',
          component: AboutUs
        },
        {
          path: '/contacto',
          name: 'Contact',
          component: Contact
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
