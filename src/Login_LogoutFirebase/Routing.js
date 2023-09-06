import React, { useEffect, useState } from 'react'
import {Routes, Route, Navigate,  } from "react-router-dom";
import SignUp from './SignUp'
import Signin from './Signin'
import Home from './Home'
import Successfully from './Successfully'
import ForgetPassword from './ForgetPassword';
import AddtoCart from './AddtoCart';
import OrderCompletion from './OrderCompletion'
import Payment from './Payment'
import MyOrder from './MyOrder'

export default function Routing() {
  const [addCart,setAddCart]=useState([])
  const [cart2order,setcart2order]=useState([]);
  
  
  return (
    <>
      <Routes>
          <Route path='/' element={<Home setItemCart={setAddCart} ItemCart={addCart}/>}/>

          <Route path='/signin' element={<Signin/>}/>
          <Route path='/addtocart' element={<AddtoCart ItemCart={addCart} setItemCart={setAddCart} setcart2order={setcart2order}/>}/>
          <Route path='/signup/' element={<SignUp/>}/>
          <Route path='/successfully' element={<Successfully cart2order={cart2order} setcart2order={setcart2order}/>}/>
          <Route path='/*' element={<Navigate to='/' />}/>
          <Route path='/forgetpassword' element={<ForgetPassword/>}/>
          <Route path='/payment' element={<Payment setcart2order={setcart2order}  cart2order={cart2order}/>}/>
          <Route path='/ordercompletion' element={<OrderCompletion  cart2order={cart2order} setcart2order={setcart2order}/>}/>
          <Route path='/myorder' element={<MyOrder cart2order={cart2order}/>}/>
      </Routes>
    </>
  )
}
