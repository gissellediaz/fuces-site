export const getAllPeriods = state => {
  return state.periods
}

export const getPeriodId = (state, getters) => (id) => {
  return state.periods.find(period => period.id === id)
}
