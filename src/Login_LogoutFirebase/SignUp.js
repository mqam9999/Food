import React, { useEffect, useState } from 'react'
import { NavLink, Outlet} from 'react-router-dom'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth} from './firebase'
import { useNavigate } from 'react-router-dom'


export default function SignUp() {
  const [input,setinput] = useState({fname:'',lname:'',email:'',password:''});
  const [finish, setfinish] =useState()
  const [fname_show, setfname_show] =useState()
  const [lname_show, setlname_show] =useState()
  const [password_show, setpassword_show] =useState()
  const [errMsge,seterrMsge]=useState('')
  const Go = useNavigate();
  
 
  let Update = (e)=>{
    let name = e.target.name;
    let value= e.target.value;
    setinput({...input,[name]:value})
  }
  useEffect(()=>{
    if (input.fname.length<2 && input.fname.length>0){setfname_show(true)}else{setfname_show(false)}
    if (input.lname.length<2 && input.lname.length>0){setlname_show(true)}else{setlname_show(false)}
    if (input.password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")&&input.password.length>0){setpassword_show(true)}else{setpassword_show(false)}
  })
    
    
  

    let submit = async (e)=>{
      e.preventDefault();
      let {fname,lname,password}=input;
      if (
        fname.length<2 || 
        lname.length<2 ||
        password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$") 
        ) {
        alert("Please fill all the field properly")
      }else{

      createUserWithEmailAndPassword(auth,input.email,input.password)
      .then  ((res) =>{
        const user = res.user;
        updateProfile(user,{
          displayName:fname,
        });
        setfinish("Registration completed")
        setinput({fname:'',lname:'',email:'',password:''})
        Go('/addtocart')
      })
      .catch((err)=>{
        seterrMsge('Email already in used');
      })
    }}
  
  
  return (
    <div className="row">
      <div className='container bg-light  signupclass col-12 col-sm-10 col-md-6 ' >
      <form onSubmit={submit} method='POST' className='p-2' >
        <h3 className='text-center text-success mb-4'><b>Create an account</b></h3>
        <input type="text" autoComplete='off' className="form-control" placeholder="Enter First Name" onChange={Update} value={input.fname} name="fname"/>
        {fname_show?<p className='errorsuccessfullypage'>Enter minimum 2 character</p>:''} <br />
        <input type="text" autoComplete='off' className="form-control" placeholder="Enter Last Name" onChange={Update} value={input.lname} name="lname"/>
        {lname_show?<p className='errorsuccessfullypage'>Enter minimum 2 character</p>:''}<br />
        <div><input type="email" autoComplete='off' className="form-control" placeholder="Enter email" onChange={Update} value={input.email} name="email"/></div><br />
        <div><input type="password" autoComplete='off' className="form-control" placeholder="Enter password" onChange={Update} value={input.password} name="password"/></div>
        {password_show?<p className='errorsuccessfullypage'>Password must contain minimum 8 character, one lowercase letter, one uppercase letter, one number, one special character & no space.</p>:''}<br />

       
        <b><p className='text-danger text-center'>{errMsge}</p></b>
       <div className='d-flex justify-content-center'>
         <button type='submit' className='btn btn-success col-12 col-sm-3  '>Submit</button>
        </div>
        <div className='d-flex justify-content-center mt-2'>
            <span className='me-2 '>Already have an account</span>
            <NavLink className='text-success' style={{fontWeight:'bold'}} to='/signin'>Sign in</NavLink>
        </div>
        <div className='text-danger d-flex justify-content-center mx-auto mt-2' style={{fontWeight:'bold',fontSize:'20px'}}>{finish}</div>


      </form>

    </div>
    </div>
  )
}
