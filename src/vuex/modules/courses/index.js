import * as getters from './getters'
import * as actions from './actions'

import {
  ALLCOURSES
} from './mutation-types'

const initialState = {
  courses: []
}

// mutations
const mutations = {
  [ALLCOURSES] (state, courses) {
    state.courses = courses
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
