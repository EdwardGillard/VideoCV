import React from 'react'
import { useHistory } from 'react-router-dom'
import { register } from '../../lib/api'

function Register() {
  const history = useHistory()
  const [formData, setFormData] = React.useState({
    userName: '',
    email: '',
    password: '',
    gender: 'Male',
    passwordConfirmation: '',
    jobseeker: true
  })
  const [errors, setErrors] = React.useState('')

  const handleChange = (e) => {
    setErrors('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await register(formData)
      console.log(res)
      history.push('/login')
    } catch (err) {
      console.log(err.response)
      setErrors(err.response)
    }
  }

  console.log(formData)
  return (
    <div className="form-wrapper">
      <form onSubmit={submitRegister}>

        <label>Email:</label>
        <input 
          placeholder="Enter your email here" 
          type="text" 
          name="email" 
          value={formData.email} 
          onChange={handleChange}
        ></input>

        <label>Username:</label>
        <input 
          placeholder="Enter your username here" 
          type="text" name="userName" 
          value={formData.userName} 
          onChange={handleChange}
        ></input>

        <label>Gender:</label>
        <select type="text" name="gender" value={formData.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label>Password:</label>
        <input name="password" type="password" onChange={handleChange} />

        <label>Confirm Password:</label>
        <input name="passwordConfirmation" type="passwordConfirmation" onChange={handleChange} />

        <label>Are you a job Seeker?</label>
        <select type="text" name="jobseeker" value={formData.jobseeker} onChange={handleChange}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button type="submit">Submit</button>


      </form>
    </div>

  )
}

export default Register