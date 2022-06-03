import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
  const token = localStorage.getItem('@DeliveryStore:token')
  if (token) {
    return true
  } else {
    return false
  }
}


const ProtectedRoutes=() =>{

  const token = useAuth()

  return token ? <Outlet/> : <Navigate to="/home"/>
}

export default ProtectedRoutes;
