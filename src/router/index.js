import Vue from 'vue'
import Router from 'vue-router'
import Courses from '@/components/site/Courses'
import Course from '@/components/site/Course'
import Events from '@/components/site/Events'
import Event from '@/components/site/Event'
import Home from '@/components/site/Home'
import Login from '@/components/admin/Login'
import LayoutAdmin from '@/components/admin/LayoutAdmin'
// import Dashboard from '@/components/admin/Dashboard'
import CoursesAdmin from '@/components/admin/courses/CoursesAdmin'
import PeriodsAdmin from '@/components/admin/periods/PeriodsAdmin'
import NewCourse from '@/components/admin/courses/NewCourse'
import EditCourse from '@/components/admin/courses/EditCourse'
import EventsAdmin from '@/components/admin/events/EventsAdmin'
import Settings from '@/components/admin/settings/Settings'
import NewEvent from '@/components/admin/events/NewEvent'
import EditEvent from '@/components/admin/events/EditEvent'
import Messages from '@/components/admin/messages/Messages'
import Site from '@/components/site/Site'
import AboutUs from '@/components/site/AboutUs'
import Contact from '@/components/site/Contact'

function requireAuth (to, from, next) {
  if (!localStorage.token) {
    next({
      name: 'Login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

Vue.use(Router)

export default new Router({
  mode: 'history',
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
          path: '/eventos/:slug',
          name: 'Event',
          component: Event
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
      beforeEnter: requireAuth,
      children: [
        // {
        //   path: '',
        //   name: 'Dashboard',
        //   component: Dashboard
        // },
        {
          path: 'cursos',
          name: 'CoursesAdmin',
          component: CoursesAdmin
        },
        {
          path: 'periodos',
          name: 'PeriodsAdmin',
          component: PeriodsAdmin
        },
        {
          path: 'cursos/crear-curso',
          name: 'NewCourse',
          component: NewCourse
        },
        {
          path: 'cursos/:slug/editar',
          name: 'EditCourse',
          component: EditCourse
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
          path: 'eventos/:slug/editar',
          name: 'EditEvent',
          component: EditEvent
        },
        {
          path: 'configuracion',
          name: 'Settings',
          component: Settings
        },
        {
          path: 'mensajes',
          name: 'Messages',
          component: Messages
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
