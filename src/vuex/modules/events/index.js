import * as getters from './getters'
import * as actions from './actions'
import _ from 'lodash'

import {
  ALLEVENTS,
  ADDEVENT,
  CAROUSEL,
  MOREEVENTS,
  NEXTEVENTS,
  CHANGEEVENT,
  DELETEEVENT
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
  },
  [CHANGEEVENT] (state, event) {
    let index = _.findIndex(state.events, {id: event.id})
    state.events.splice(index, 1, event)
  },
  [DELETEEVENT] (state, event) {
    let index = _.findIndex(state.events, {id: event.id})
    state.events.splice(index, 1)
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
