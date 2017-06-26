import * as getters from './getters'
import * as actions from './actions'

import {
  ALLPERIODS,
  ADDPERIOD
} from './mutation-types'

const initialState = {
  periods: []
}

// mutations
const mutations = {
  [ALLPERIODS] (state, periods) {
    state.periods = periods
  },
  [ADDPERIOD] (state, period) {
    state.periods.push(period)
  }
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations
}
