import React from 'react'
import UseAuthStatus from '../hooks/UseAuthStatus'
import Loading from '../Pages/Loading'
import { Navigate, Outlet } from 'react-router'

const PrivateRoute = () => {

    const {LoggedIn , CheckStatus} = UseAuthStatus()

    if(CheckStatus){
        return <Loading />
    }


  return LoggedIn ? <Outlet /> : <Navigate to={"/login"} /> 
}

export default PrivateRoute
