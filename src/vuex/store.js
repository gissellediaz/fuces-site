import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import events from './modules/events'
import courses from './modules/courses'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    courses,
    events
  },
  strict: debug
})
