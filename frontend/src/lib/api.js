import axios from 'axios'

//* POST login to backend
export const login = (data) => {
  return axios.post(`/api/login`, data)
}

//* POST register to backend
export const register = (data) => {
  return axios.post(`/api/register`, data)
}