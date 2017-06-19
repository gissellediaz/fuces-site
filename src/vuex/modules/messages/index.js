import * as getters from './getters'
import * as actions from './actions'
import _ from 'lodash'

import {
  ALLMESSAGES,
  ADDMESSAGE,
  UPDATEMESSAGE
} from './mutation-types'

const initialState = {
  messages: []
}

// mutations
const mutations = {
  [ALLMESSAGES] (state, messages) {
    state.messages = messages
  },
  [ADDMESSAGE] (state, message) {
    state.messages.push(message)
  },
  [UPDATEMESSAGE] (state, message) {
    let index = _.findIndex(state.messages, {id: message.id})
    state.messages.splice(index, 1, message)
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
