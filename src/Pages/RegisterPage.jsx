import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterUser } from '../features/Auth/AuthSlice'
import { Link, useNavigate } from 'react-router'
import Loading from './Loading'

const RegisterPage = () => {

    const dispatch = useDispatch()
const navigate = useNavigate()
    const {user , isLoading , isError , message} = useSelector(state => state.Auth)

    const [formData , setFormData] = useState({
        name : "",
        phone : "",
        email : "",
        password : "",
        confirmPassword : ""
    })

    const handleChange = (e) =>{
        setFormData({...formData , [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(RegisterUser(formData))
    }

    useEffect(() =>{
if(user){
  navigate("/")
}
if(isError){
  console.log(message);
}
    },[isError , message , user])

    if(isLoading){
      return <Loading />
    }

  return (
    <>
        <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card shadow-lg p-4" style={{ width: "28rem" }}>
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name='name'
              onChange={handleChange}
              value={formData.name}
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Mobile Number
            </label>
            <input
              type="phone"
              name='phone'
              onChange={handleChange}
              value={formData.phone}
              className="form-control"
              id="phone"
              placeholder="Enter your Mobile Number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name='email'
              onChange={handleChange}
              value={formData.email}
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name='password'
              onChange={handleChange}
              value={formData.password}
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name='confirmPassword'
              onChange={handleChange}
              value={formData.confirmPassword}
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default RegisterPage
