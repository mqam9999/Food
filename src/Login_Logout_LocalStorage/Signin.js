import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import {NavLink} from 'react-router-dom'


export default function Signin() {
  const Go = useNavigate();
  const [input,setinput] = useState({email:'',password:''});

  let Update = (e) =>{
    let {name,value}=e.target;
    setinput({...input,[name]:value})
  }

  useEffect(()=>{
    if(localStorage.getItem('login')){
      Go('/successfully')
}else{
  Go('/signin')
}
},[])

    let submit = async (e)=>{
      e.preventDefault();
      let getuserArr = localStorage.getItem('useryoutube');
     
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userLogin = userdata.filter((e)=>{
            return e.email === input.email && e.password === input.password
        });
        if (userLogin.length===0) {
            alert('invalid')
        }else{
            Go('/successfully')
            localStorage.setItem('login',JSON.stringify(getuserArr))
        }}
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
        <div><input type="email" className="form-control" placeholder="Enter email" onChange={Update} value={input.email} name="email"/></div><br />
        <div><input type="password" className="form-control" placeholder="Enter password" onChange={Update} value={input.password} name="password"/></div><br />
        
       <div className='d-flex justify-content-center'>
         <button type='submit' className='btn btn-success col-12 col-sm-3 '>Sign in</button>
        </div>
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
