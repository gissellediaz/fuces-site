import * as getters from './getters'
import * as actions from './actions'

import {
  ALLEVENTS,
  ADDEVENT
} from './mutation-types'

const initialState = {
  events: []
}

// mutations
const mutations = {
  [ALLEVENTS] (state, events) {
    state.events = events
  },
  [ADDEVENT] (state, event) {
    state.events.push(event)
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
