import Vue from 'vue'
import Router from 'vue-router'
import Courses from '@/components/site/Courses'
import Course from '@/components/site/Course'
import Events from '@/components/site/Events'
import Home from '@/components/site/Home'
import Login from '@/components/admin/Login'
import LayoutAdmin from '@/components/admin/LayoutAdmin'
import Dashboard from '@/components/admin/Dashboard'
import CoursesAdmin from '@/components/admin/courses/CoursesAdmin'
import EventsAdmin from '@/components/admin/events/EventsAdmin'
import Settings from '@/components/admin/settings/Settings'
import NewEvent from '@/components/admin/events/NewEvent'
import Site from '@/components/site/Site'
import AboutUs from '@/components/site/AboutUs'
import Contact from '@/components/site/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Site,
      children: [
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
          path: '/cursos/:slug',
          name: 'Course',
          component: Course
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
      path: '/admin',
      component: LayoutAdmin,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'cursos',
          name: 'CoursesAdmin',
          component: CoursesAdmin
        },
        {
          path: 'eventos',
          name: 'EventsAdmin',
          component: EventsAdmin
        },
        {
          path: 'eventos/crear-evento',
          name: 'NewEvent',
          component: NewEvent
        },
        {
          path: 'configuracion',
          name: 'Settings',
          component: Settings
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
