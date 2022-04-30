import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginScreen } from '../auth/LoginScreen'
import { RegisterScreen } from '../auth/RegisterScreen'

export const AuthRouter = () => {

  return (
    <>
        <Routes>
            <Route path='login' element={<LoginScreen/>} />
            <Route path='register' element={<RegisterScreen/>} />
            
            <Route path='*' element={<LoginScreen/>} />
        </Routes>
    </>
  )
}
