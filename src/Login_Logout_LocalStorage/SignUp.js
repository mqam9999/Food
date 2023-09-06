import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function SignUp() {
  const [input,setinput] = useState({fname:'',lname:'',email:'',password:''});
  const [finish, setfinish] =useState()
 
  const [store, setstore] =useState([])
  const [fname_show, setfname_show] =useState()
  const [lname_show, setlname_show] =useState()
  const [email_show, setemail_show] =useState()
  const [password_show, setpassword_show] =useState()

  

  let FUpdate = (e)=>{
    let name = e.target.name;
    let value= e.target.value;
    if (input.fname.length<4){setfname_show(true)}else{setfname_show(false)}
    setinput({...input,[name]:value})
  }
  let LUpdate = (e)=>{
    let name = e.target.name;
    let value= e.target.value;
    if (input.lname.length<2){setlname_show(true)}else{setlname_show(false)}
    setinput({...input,[name]:value})
  }
  let EUpdate = (e)=>{
    let name = e.target.name;
    let value= e.target.value;
    if (input.email.length<4){setemail_show(true)}else{setemail_show(false)}
    setinput({...input,[name]:value})
  }
  let PUpdate = (e)=>{
    let name = e.target.name;
    let value= e.target.value; 
    if (input.password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")){setpassword_show(true)}else{setpassword_show(false)}
    setinput({...input,[name]:value})
  }
  

    let submit = async (e)=>{
      e.preventDefault();
      let {fname,lname,email,password}=input;
      if (
        fname.length<4 || 
        lname.length<2 ||
        email.length<4 ||
        password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$") 
        ) {
        alert("Please fill all the field properly")
      }else{
      let bond = {...input,id:new Date().getTime().toString()}
      setstore([...store,bond])
      setinput({fname:'',lname:'',email:'',password:''})
      setfinish("Registration completed")
      setInterval(() => {
        setfinish("")
      }, 5000);
     
      localStorage.setItem('useryoutube',JSON.stringify([...store,input]));
    }}
  
  
  return (
    <div className="row">
      <div className='container bg-light  signupclass col-12 col-sm-10 col-md-6 ' >
      <form onSubmit={submit} method='POST' className='p-2' >
        <h3 className='text-center text-success mb-4'><b>Create an account</b></h3>
        <input type="text" className="form-control" placeholder="Enter First Name" onChange={FUpdate} value={input.fname} name="fname"/>
        {fname_show?<p>Enter minimum 4 character</p>:''} <br />
        <input type="text" className="form-control" placeholder="Enter Last Name" onChange={LUpdate} value={input.lname} name="lname"/>
        {lname_show?<p>Enter minimum 2 character</p>:''}<br />
        <div><input type="email" className="form-control" placeholder="Enter email" onChange={EUpdate} value={input.email} name="email"/></div>
        {email_show?<p>Type email properly</p>:''}<br />
        <div><input type="password" className="form-control" placeholder="Enter password" onChange={PUpdate} value={input.password} name="password"/></div>
        {password_show?<p>password case-sensitive</p>:''}<br />

       

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
