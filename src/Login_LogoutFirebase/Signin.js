import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import {auth} from './firebase'
import {getAuth} from "firebase/auth"


export default function Signin() {
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
  if (user) {
    Go('/addtocart')
  } else {
     Go('/signin') 
  }})
},[Signin]);

  const Go = useNavigate();
  const [errMsge,seterrMsge]=useState('')
  const [input,setinput] = useState({email:'',password:''});

  let Update = (e) =>{
    let {name,value}=e.target;
    setinput({...input,[name]:value})
  }

    let submit = async (e)=>{
      e.preventDefault();
      
      signInWithEmailAndPassword(auth,input.email,input.password)
      .then((res) =>{
        Go(`/addtocart`);
        console.log(res);
      })
      .catch((err)=>{
        seterrMsge('Invalid email and password');
        
      })
    }
  
  

    

  
  return (
    <>
    <div className="row container signinclass mx-auto ">
      <div className='col-12 col-sm-12 col-md-10 col-lg-5 mt-2 mx-auto my-5'>
        <img src="https://img.freepik.com/free-vector/safe-food-delivery-order-receive_23-2148549716.jpg?w=2000" alt="/" width='100%'/>
      </div>
      <div className='col-12 col-sm-12 col-md-10 col-lg-5 bg-light mt-2 mx-auto rounded-4 my-5'>
      <form onSubmit={submit} method='POST' className='p-2' >
        <h3 className='text-center text-success mb-4 '><b>Sign In</b></h3>
        <div><input type="email" autoComplete='on' className="form-control" placeholder="Enter email" onChange={Update} value={input.email} name="email"/></div><br />
        <div><input type="password" autoComplete='off' className="form-control" placeholder="Enter password" onChange={Update} value={input.password} name="password"/></div>
        <b><p className='text-danger text-center'>{errMsge}</p></b>
       <div className='d-flex justify-content-center mt-4'>
         <button type='submit' className='btn btn-success col-12 col-sm-3 '>Sign in</button>
        </div>
  
        <NavLink className='d-flex justify-content-center mt-2' to='/forgetpassword'>forget password</NavLink>
        <div className='d-flex justify-content-center mt-2'>
          <span className='me-2'>Don't have an account</span>
           <NavLink className='text-success' style={{fontWeight:'bold'}} to='/signup'>SignUp</NavLink>
        </div>
      </form>
    </div>
    </div>
    </>
  )
}
