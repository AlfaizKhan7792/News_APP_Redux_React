import React from 'react'
import { Link } from 'react-router'

const PageNotFound = () => {
  return (
    <div className='w-100 h-100 text-center'>
   <span className='vh-75 d-flex align-items-center overflow-hidden'>
   <Link to="/" className="btn btn-md btn-success">Go To Home</Link>
   <img style={{height : "86vh"}} src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" />
   <Link to="/" className="btn btn-md btn-success">Go To Home</Link>
   </span>
    </div>
  )
}

export default PageNotFound
