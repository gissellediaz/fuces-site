import * as getters from './getters'
import * as actions from './actions'

import {
  ALLCOURSES,
  ADDCOURSES
} from './mutation-types'

const initialState = {
  courses: []
}

// mutations
const mutations = {
  [ALLCOURSES] (state, courses) {
    state.courses = courses
  },
  [ADDCOURSES] (state, courses) {
    state.courses = [
      ...state.courses,
      ...courses
    ]
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
