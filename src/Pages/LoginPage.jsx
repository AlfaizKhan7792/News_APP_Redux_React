import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../features/Auth/AuthSlice'
import { Link, useNavigate } from 'react-router'
import Loading from './Loading'

const LoginPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user , isLoading} = useSelector((state) => state.Auth)

    const [formData , setFormData] = useState({
        email : "",
        password : ""
    })

    const handleChange = (e) =>{
        setFormData({...formData , [e.target.name] : e.target.value})
    }

const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(LoginUser(formData))
}

useEffect(() =>{
if(user){
navigate("/")
}
},[user])

if(isLoading){
    return <Loading />
}

  return (
    <>
        <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card shadow-lg p-4" style={{ width: "28rem" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name='email'
              onChange={handleChange}
              value={formData?.email}
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
              value={formData?.password}
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default LoginPage
