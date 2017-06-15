import {
  ALLCOURSES,
  ADDCOURSES,
  DELETECOURSE
} from './mutation-types'

import axios from '../../../services/axios'

export function getAllCourses ({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/courses?limit=6')
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

export function findCourses ({ commit }, text) {
  return new Promise((resolve, reject) => {
    axios.get('/courses?where={"title":{"contains":"' + text + '"}}&limit=6')
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

export function moreCourses ({ commit }, skip) {
  return new Promise((resolve, reject) => {
    axios.get('/courses?skip=' + skip + '&limit=6')
    .then(response => {
      console.log(response.data)
      commit(ADDCOURSES, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function storeCourse ({ commit }, newCourse) {
  return new Promise((resolve, reject) => {
    axios.post('/courses', newCourse)
    .then(response => {
      console.log(response.data)
      commit(ADDCOURSES, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function deleteCourse ({ commit }, data) {
  return new Promise((resolve, reject) => {
    axios.delete('courses/' + data)
    .then(response => {
      commit(DELETECOURSE, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}
