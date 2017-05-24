// import axios from 'axios'
// export default axios.create({
//   baseURL: 'http://localhost:1337/',
//   timeout: 5000,
//   headers: {
//     'Bearer': localStorage.token,
//     'content-type': 'application/json',
//     'Accept': 'application/json',
//     'Access-Control-Allow-Origin': '*'
//   }
// })
import axios from 'axios'
var baseURL = 'http://api-fuces.bitgee.com/'

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:1337/'
}

export default axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + localStorage.token,
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
