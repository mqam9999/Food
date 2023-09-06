import React, { useState } from 'react'

export default function CardNetflixSIGNUP() {
    const [input,setInput]=useState({firstname:"",lastname:"",email:"",password:"",number:"",altnumber:""});
    const [store,setStore]=useState([]);
    const [submitted,setsubmitted]=useState();

    const [firstshow,setFirstshow]=useState(false)
    const [lastshow,setLastshow]=useState(false)
    const [emailshow,setEmailshow]=useState(false)
    const [passwordshow,setPasswordshow]=useState(false)
    const [numbershow,setNumbershow]=useState(false)
    const [altnumbershow,setAltnumbershow]=useState(false)
    


    let Update = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        if (input.firstname.length<6) {
          setFirstshow(true)
        }else(setFirstshow(false))
        

        if (input.lastname.length<4) {
          setLastshow(true)
        }else(setLastshow(false))
        

        if (input.email.length<6) {
          setEmailshow(true)
        }else(setEmailshow(false))
        

        if (input.password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")) {
          setPasswordshow(true)
        }else(setPasswordshow(false))
        

        if (input.number.length<10) {
          setNumbershow(true)
        }else(setNumbershow(false))
        

        if (input.altnumber.length<10) {
          setAltnumbershow(true)
        }else(setAltnumbershow(false))
        

        setInput({...input,[name]:value})
    };

     let Submit = (e)=>{
       e.preventDefault();
       if (input.firstname.length<6 || input.lastname.length<4 || input.email.length<6 || input.password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$") || input.number.length<10 || input.altnumber.length<10) {
        alert("PLEASE FILL ALL THE INPUT FIELD")
       }else{
        let bond = {...input, id: new Date().getTime().toString()}
        setStore([...store,bond])
        setInput({firstname:"",lastname:"",email:"",password:"",number:"",altnumber:""})
        setsubmitted("REGISTRATION COMPLETED")
        setTimeout(() => {
          setsubmitted("")
        }, 6000);
       }

     }

    

  return (
    <div className='container-fluid bb'>
    <div className='SignUp container p-3'>
      <form onSubmit={Submit}>
        <h2 className='sign  text-center'><b>SIGN UP</b></h2>
  <div className="row">
    <div className="col-12 col-sm-12 col-md-6">
      <input type="text" className="form-control mt-2" placeholder="Enter First Name" name="firstname" value={input.firstname} onChange={Update}/>
      {firstshow?<span className='text-warning'>Minimum 6 character required</span>:""}
    </div>
    <div className="col-12 col-sm-12 col-md-6">
      <input type="text" className="form-control mt-2" placeholder="Enter Last Name" name="lastname" value={input.lastname} onChange={Update}/>
      {lastshow?<span className='text-warning'>Minimum 4 character required</span>:""}
    </div>
    <div className="col-12 col-sm-12 col-md-6">
      <input type="email" className="form-control mt-2" placeholder="Enter Email Address" name="email" value={input.email} onChange={Update}/>
      {emailshow?<span className='text-warning'>Please enter your email correctly</span>:""}
    </div>
    <div className="col-12 col-sm-12 col-md-6">
      <input type="password" className="form-control mt-2" placeholder="Enter Password" name="password" value={input.password} onChange={Update}/>
      {passwordshow?<span className='text-warning'>Password must contain minimum 8 character, one lowercase letter, one uppercase letter, one number, one special character & no space.</span>:""}
    </div>
    <div className="col-12 col-sm-12 col-md-6">
      <input type="number" className="form-control mt-2" placeholder="Enter Mobile No." name="number" value={input.number} onChange={Update}/>
      {numbershow?<span className='text-warning'>Minimum 10 number required</span>:""}
    </div>
    <div className="col-12 col-sm-12 col-md-6">
      <input type="number" className="form-control mt-2" placeholder="Enter Alt. Mob. No." name="altnumber" value={input.altnumber} onChange={Update}/>
      {altnumbershow?<span className='text-warning'>Minimum 10 number required</span>:""}
    </div>
    <button className='btn btn-danger mt-2 col-4 text-center mx-auto mt-3' type='Submit' >REGISTER</button>
  </div>
  
  <span className='REG'>{submitted}</span>
  
</form>
</div>
    </div>
  )
}
