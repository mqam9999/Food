import React from 'react'
import {Routes, Route, Navigate,  } from "react-router-dom";
import SignUp from './SignUp'
import Signin from './Signin'
import Home from './Home'
import Successfully from './Successfully'

export default function Routing() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/successfully' element={<Successfully/>}/>
          <Route path='/*' element={<Navigate to='/' />}/>
      </Routes>
    </>
  )
}
