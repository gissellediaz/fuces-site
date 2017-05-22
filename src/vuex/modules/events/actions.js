import {
  ALLEVENTS,
  ADDEVENT,
  CAROUSEL
} from './mutation-types'

import axios from '../../../services/axios'

export function getAllEvents ({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/events?limit=6')
    .then(response => {
      console.log(response.data)
      commit(ALLEVENTS, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function storeEvent ({ commit }, NewEvent) {
  return new Promise((resolve, reject) => {
    axios.post('/events', NewEvent)
    .then(response => {
      console.log(response.data)
      commit(ADDEVENT, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function getEventsInCarousel ({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/events?where={"carousel": true}')
    .then(response => {
      console.log(response.data)
      commit(CAROUSEL, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}
