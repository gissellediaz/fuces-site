import {
  ALLPERIODS,
  ADDPERIOD
} from './mutation-types'

import axios from '../../../services/axios'

export function getAllPeriods ({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/periods?limit=6')
    .then(response => {
      commit(ALLPERIODS, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function storePeriod ({ commit }, newCourse) {
  return new Promise((resolve, reject) => {
    axios.post('/periods', newCourse)
    .then(response => {
      axios.get('/periods/' + response.data.id)
      .then(response2 => {
        commit(ADDPERIOD, response2.data)
        resolve(response.data)
      })
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function storeStudent ({ commit }, student) {
  return new Promise((resolve, reject) => {
    axios.post('/periods/' + student.period + '/students', student)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}
