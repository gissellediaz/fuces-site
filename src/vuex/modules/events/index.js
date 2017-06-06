import * as getters from './getters'
import * as actions from './actions'

import {
  ALLEVENTS,
  ADDEVENT,
  CAROUSEL,
  MOREEVENTS,
  NEXTEVENTS
} from './mutation-types'

const initialState = {
  events: [],
  carousel: [],
  nextEvents: []
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
  },
  [MOREEVENTS] (state, events) {
    state.events = [
      ...state.events,
      ...events
    ]
  },
  [NEXTEVENTS] (state, nextEvents) {
    state.nextEvents = nextEvents
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
