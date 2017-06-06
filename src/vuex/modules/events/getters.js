export const getAllEvents = state => {
  return state.events
}

export const getEventsInCarousel = state => {
  return state.carousel
}

export const getEventBySlug = (state, getters) => (slug) => {
  return state.events.find(event => event.slug === slug)
}

export const getNextEvents = state => {
  return state.nextEvents
}
