import {
  ALLMESSAGES,
  ADDMESSAGE,
  UPDATEMESSAGE
} from './mutation-types'
import axios from '../../../services/axios'

export function getAllMessages ({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/messages?limit=20')
    .then(response => {
      commit(ALLMESSAGES, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function storeMessage ({ commit }, message) {
  return new Promise((resolve, reject) => {
    axios.post('/messages', message)
    .then(response => {
      commit(ADDMESSAGE, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}

export function updateMessage ({ commit }, message) {
  return new Promise((resolve, reject) => {
    axios.put('/messages/' + message.id, message)
    .then(response => {
      commit(UPDATEMESSAGE, response.data)
      resolve(response.data)
    })
    .catch(error => {
      console.log('error')
      reject(error)
    })
  })
}
