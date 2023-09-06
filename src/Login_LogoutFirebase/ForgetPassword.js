import React from 'react'
import { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgetPassword() {
    const [input,setinput]=useState({email:''});
    const [show,setshow]=useState();
    let Update = (e)=>{
        let {name,value}=e.target;
        setinput({...input,[name]:value})
    }

    let Reset = ()=>{
        const auth = getAuth();
        sendPasswordResetEmail(auth, input.email)
          .then(() => {
            setshow('Password reset link sent to your email')
          })
          .catch((error) => {
            setshow('Invalid email')
          });
    }
  return (
    
    <div className='resetpasswordParent bg-info d-flex justify-content-center align-items-center'>
    <div className='resetpasswordChild px-4 py-5 border-1 rounded-5 text-center bg-dark col-10 col-sm-6 col-md-6 col-lg-4 '>
        
      <input type="email" placeholder='Enter your email' name='email' value={input.email} onChange={Update}       className='outline-0 border-0 shadow-none form-control text-center fw-bold fontsizeinput' />
      <p className='text-warning mt-2 fontinvalid'><b>{show}</b></p>
      <button className='btn btn-light' onClick={Reset}><b>Reset Password</b></button>

    </div>
    </div>

  )
}
