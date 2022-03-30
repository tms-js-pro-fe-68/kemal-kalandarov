import axios from 'axios'

export default axios.create({
  baseURL: 'https://tms-js-pro-back-end.herokuapp.com/api/',
  headers: { Authorization: `Token ${sessionStorage.token}` },
})
