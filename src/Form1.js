import React, { useState } from 'react'

export default function Form1() {
    
    const [finish,setFinish]=useState();
    const [store,setStore] = useState([]);
     const [input,setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        confirmEmail : "",
        password : "",
        confirmPassword : "",
        mobileNumber : "",
        AltMobNumber : "",
        qualification : "",
        address : ""
     });
    
     let Update = (e)=>{
        let {name,value}=e.target;
        setInput({...input, [name] : value})
     };
     let Submit = (e)=>{
        e.preventDefault();
        let bond = {...input, id:new Date().getTime().toString()}
        setStore([...store,bond])
        setInput({firstname: "",
        lastname: "",
        email: "",
        confirmEmail : "",
        password : "",
        confirmPassword : "",
        mobileNumber : "",
        AltMobNumber : "",
        qualification : "",
        address : ""});
        setFinish("FORM SUBMITTED")

     };


  return (
    <>
      <form onSubmit={Submit} className='container bg-warning'>
        
        <div className='row mx-auto p-2'>
        <h4 className='text-center mb-5 bg-dark py-1 text-white'><b>REGISTRATION FORM</b></h4>

        <div className=' row'>
            <span className='col-12 col-sm-12 col-md-12 col-lg-2 my-auto mt-2' style={{fontSize:18}}>
                <label for="firstname" className="form-label "><b>First Name:</b> </label>
            </span>
            <span className='col-12 col-sm-12 col-md-12 col-lg-4 my-auto'>
                <input type="text" className="form-control" id="firstname" placeholder="Enter First Name" name="firstname" value={input.firstname} onChange={Update}/>
            </span>

            <span className='col-12 col-sm-12 col-md-12 col-lg-2 my-auto mt-2' style={{fontSize:18}}>
                <label for="lastname" className="form-label "><b>Last Name:</b> </label>
            </span>
            <span className='col-12 col-sm-12 col-md-12 col-lg-4 my-auto'>
                <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name" name="lastname" value={input.lastname} onChange={Update}/>
            </span>
        </div>


        <div className=' row mt-3'>
            <span className='col-12 col-sm-12 col-md-12 col-lg-2 my-auto mt-2' style={{fontSize:18}}>
                <label for="email" className="form-label "><b>Email:</b> </label>
            </span>
            <span className='col-12 col-sm-12 col-md-12 col-lg-4 my-auto'>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={input.email} onChange={Update}/>
            </span>

            <span className='col-12 col-sm-12 col-md-12 col-lg-2 my-auto mt-2 ' style={{fontSize:18}}>
                <label for="confirmEmail" className="form-label "><b>Confirm Email:</b> </label>
            </span>
            <span className='col-12 col-sm-12 col-md-12 col-lg-4 my-auto'>
                <input type="email" className="form-control" id="confirmEmail" placeholder="Confirm email" name="confirmEmail" value={input.confirmEmail} onChange={Update}/>
            </span>
        </div>

        <div className=' row mt-3'>
            <span className='col-12 col-sm-12 col-md-12 col-lg-2 my-auto mt-2' style={{fontSize:18}}>
                <label for="password" className="form-label "><b>Password:</b> </label>
            </span>
            <span className='col-12 col-sm-12 col-md-12 col-lg-4 my-auto'>
                <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" value={input.password} onChange={Update}/>
            </span>

            <span className='col-12 col-sm-12 col-md-12 col-lg-2 my-auto mt-2 ' style={{fontSize:18}}>
                <label for="confirmPassword" className="form-label "><b>Confirm Password:</b></label>
            </span>
            <span className='col-12 col-sm-12 col-md-12 col-lg-4 my-auto'>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" name="confirmPassword" value={input.confirmPassword} onChange={Update}/>
            </span>
        </div>

        <div className=' row mt-3'>
            <span className='col-12 col-sm-12 col-md-12 col-lg-2 my-auto mt-2' style={{fontSize:18}}>
                <label for="mobileNumber" className="form-label "><b>Mobile No. :</b></label>
            </span>
            <span className='col-12 col-sm-12 col-md-12 col-lg-4 my-auto'>
                <input type="number" className="form-control" id="mobileNumber" placeholder="Enter Mobile No." name="mobileNumber" value={input.mobileNumber} onChange={Update}/>
            </span>

            <span className='col-12 col-sm-12 col-md-12 col-lg-2 my-auto mt-2 ' style={{fontSize:18}}>
                <label for="AltMobNumber" className="form-label "><b>Alt. Mobile No. :</b></label>
            </span>
            <span className='col-12 col-sm-12 col-md-12 col-lg-4 my-auto'>
                <input type="number" className="form-control" id="AltMobNumber" placeholder="Alt. Mobile No." name="AltMobNumber" value={input.AltMobNumber} onChange={Update}/>
            </span>
        </div>

        <div className=' row mt-3'>
            <span className='col-12 col-sm-12 col-md-12 col-lg-2 my-auto mt-2' style={{fontSize:18}}>
                <label for="qualification" className="form-label "><b>Qualification :</b></label>
            </span>
            <span className='col-12 col-sm-12 col-md-12 col-lg-4 mt-1'>
                <select class="form-select" name="qualification" id="qualification" value={input.qualification} onChange={Update}>
                    <option>---</option>
                    <option>10th</option>
                    <option>12th</option>
                    <option>Diploma</option>
                    <option>Under Graduation</option>
                    <option>Post Graduation</option>
                    <option>Bachelor of Technology</option>
                    <option>Master of Technology</option>
                </select>
            </span>
            <span className='col-12 col-sm-12 col-md-12 col-lg-2 my-auto mt-2 ' style={{fontSize:18}}>
                <label for="address" className="form-label "><b>Address :</b></label>
            </span>
            <span className='col-12 col-sm-12 col-md-12 col-lg-4 my-auto'>
                <textarea class="form-control" name="address" id="address" cols="30" rows="5" value={input.address} onChange={Update}></textarea>
            </span>
        </div>

        <button className='btn btn-dark col-2 mx-auto mt-4 mb-4'  type='Submit'><b>Submit</b></button>
        
        </div>
        <h1 className='text-center'>{finish}</h1>

        {store.map((e)=>{
        return(
            <>
            <p>{e.firstname}</p>
            <p>{e.lastname}</p>
            <p>{e.email}</p>
            <p>{e.password}</p>
            </>
        )
})}
        

      </form>

    </>
  )
}
