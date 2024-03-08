import React, { Component, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PrivateRoute(props) {
    const {Component}=props
    const navigate = useNavigate()
    useEffect(()=>{
        let token=localStorage.getItem("auth-token")
        if(!token){
             navigate("/")
        }
    });
  return (
    <div>
        <Component/>
        </div>
  )
}

export default PrivateRoute