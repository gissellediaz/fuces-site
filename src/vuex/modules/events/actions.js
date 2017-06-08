import {
  ALLEVENTS,
  ADDEVENT,
  CAROUSEL,
  MOREEVENTS,
  NEXTEVENTS,
  CHANGEEVENT
} from './mutation-types'
import moment from 'moment'
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

export function moreEvents ({ commit }, skip) {
  return new Promise((resolve, reject) => {
    axios.get('/events?skip=' + skip + '&limit=6')
    .then(response => {
      console.log(response.data)
      commit(MOREEVENTS, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function getNextEvents ({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/events?limit=6&sort=start_date%20ASC&where={"start_date":{">":"' + moment().format() + '"}}')
    .then(response => {
      commit(NEXTEVENTS, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function getEventBySlugApi ({ commit }, slug) {
  return new Promise((resolve, reject) => {
    axios.get('events?where={"slug":"' + slug + '"}')
    .then(response => {
      commit(ADDEVENT, response.data[0])
      resolve(response.data[0])
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function changeCarouselStatus ({ commit }, data) {
  return new Promise((resolve, reject) => {
    axios.put('events/' + data.event.id, {carousel: data.status})
    .then(response => {
      console.log(response.data)
      commit(CHANGEEVENT, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}
