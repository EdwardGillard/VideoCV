import axios from 'axios'

import { getToken } from './auth'


//* get header to send for secure route
const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

//* POST login to backend
export const login = (data) => {
  return axios.post(`/api/login`, data)
}

//* POST register to backend
export const register = (data) => {
  return axios.post(`/api/register`, data)
}

//* GET CURRENT USER PROFILE  
export const userDash = () => {
  return axios.get('/api/profile', withHeaders())
}