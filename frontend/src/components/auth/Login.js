import React from 'react'
import { login } from '../../lib/api'
import { setToken } from '../../lib/auth'
import { useHistory } from 'react-router-dom'

function Login() {
  const history = useHistory()
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = React.useState('')

  const handleChange = (e) => {
    setErrors('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await login(formData)
      console.log(res)
      setToken(res.data.token)
      history.push('/')
    } catch (err) {
      console.log(err.response)
      setErrors(err.response)
    }

  }
  return (
    <div className="form-wrapper">
      <form onSubmit={submitLogin}>
        <label>Email:</label>
        <input placeholder="Enter your email here" type="text" name="email" value={formData.email} onChange={handleChange} />

        <label>Password: </label>
        <input name="password" type="password" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login