// import axios from 'axios'

// const api = axios.create({
//   baseURL: 'https://tms-js-pro-back-end.herokuapp.com/api/',
// })

// api.setup = key => {
//   api.defaults.headers.Authorization = `Token ${key}`
// }

// export default api

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://tms-js-pro-back-end.herokuapp.com/api/',
  headers: {
    Authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbWFsa2FsYW5kYXJvdkBnbWFpbC5jb20iLCJpZCI6IjYxMDJiOWMxMmFhYTkwMGMwZTI2OGFkZSIsImV4cCI6MTY1Njk1Mzc0MiwiaWF0IjoxNjUxNzY5NzQyfQ.WaycD5Sf_1Tk8kl1ReSQw5rnQigm_3Zh8xktRkmyDIg`,
  },
})

export default api
