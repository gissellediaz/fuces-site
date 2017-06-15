import * as getters from './getters'
import * as actions from './actions'
import _ from 'lodash'

import {
  ALLCOURSES,
  ADDCOURSES,
  DELETECOURSE
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
  },
  [DELETECOURSE] (state, course) {
    let index = _.findIndex(state.courses, {id: event.id})
    state.courses.splice(index, 1)
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
