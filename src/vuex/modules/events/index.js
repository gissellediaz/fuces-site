import * as getters from './getters'
import * as actions from './actions'

import {
  ALLEVENTS,
  ADDEVENT,
  CAROUSEL
} from './mutation-types'

const initialState = {
  events: [],
  carousel: []
}

// mutations
const mutations = {
  [ALLEVENTS] (state, events) {
    state.events = events
  },
  [ADDEVENT] (state, event) {
    state.events.push(event)
  },
  [CAROUSEL] (state, events) {
    state.carousel = events
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
