import {
  ALLCOURSES
} from './mutation-types'

import axios from '../../../services/axios'

export function getAllCourses ({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/courses')
    .then(response => {
      console.log(response.data)
      commit(ALLCOURSES, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}
