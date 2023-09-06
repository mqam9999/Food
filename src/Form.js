import React, { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [input,setinput] = useState({fname:'',lname:'',email:'',password:'',cpassword:'',number:'',gender:'',qualification:'',Relocate:'',WFH:''});
  const [finish, setfinish] =useState()
  const [store, setstore] =useState([])
  const [fname_show, setfname_show] =useState()
  const [lname_show, setlname_show] =useState()
  const [email_show, setemail_show] =useState()
  const [password_show, setpassword_show] =useState()
  const [cpassword_show, setcpassword_show] =useState()
  const [radio_show, setradio_show] =useState()
  const [number_show, setnumber_show] =useState()
  const [qualification_show, setqualification_show] =useState()

  let Radio = (e)=>{
    let id = e.target.id;
    let name = e.target.name;
    setinput({...input,[name]:id})
  }
  let Update = (e)=>{
    let name = e.target.name;
    let value= e.target.value;
    setinput({...input,[name]:value})
  }
  useEffect(()=>{
  if (input.fname.length<4&&input.fname.length>0){setfname_show(true)}else{setfname_show(false)}
  if (input.lname.length<2&&input.lname.length>0){setlname_show(true)}else{setlname_show(false)}
  if (input.email.length<4&&input.email.length>0){setemail_show(true)}else{setemail_show(false)}
   if (input.password.length>0&&input.password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")){setpassword_show(true)}else{setpassword_show(false)}
   if(input.cpassword.length>0&&input.cpassword!==input.password){setcpassword_show(true)}else{setcpassword_show(false)} 
   if (input.number.length<10&&input.number.length>0){setnumber_show(true)}else{setnumber_show(false)}
  },[input])
  
    let DUpdate=(e)=>{
      let name = e.target.name
      let checked= e.target.checked
      setinput({...input,[name]:checked})
    };

    let submit = async (e)=>{
      e.preventDefault();
      if (input.gender===''){setradio_show(true)}else{setradio_show(false)}
      if (input.qualification.search('[a-z A-Z 0-9]')){setqualification_show(true)}else{setqualification_show(false)}
      if (
        input.fname.length<4 || 
        input.lname.length<2 ||
        input.email.length<4 ||
        input.password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$") ||
        input.cpassword!==input.password ||
        input.qualification.search('[a-z A-Z 0-9]')||
        input.gender==='' ||
        input.number.length<10) {
        toast("Please fill all the field properly")
      }else{
  let bond = {...input, id:new Date().getTime().toString()}
      setstore([...store,bond])
      setinput({fname:'',lname:'',email:'',password:'',cpassword:'',number:'',gender:'',qualification:'',Relocate:'',WFH:''})
      setfinish("Form Submitted")
      toast("Form Submitted")
      setInterval(() => {
        setfinish("")
      }, 5000);

        let {fname,lname,email,password,cpassword,number,gender,qualification,Relocate,WFH} = input;
        const res = await fetch ('https://zain-81ebf-default-rtdb.firebaseio.com/ZAIN.json',{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            fname,lname,email,password,cpassword,number,gender,qualification,Relocate,WFH,
          }),
        }
        );
        res();
    }}
  
  
  return (
    <div className='container bg-light mt-2'>
      <form onSubmit={submit} method='POST' className='p-2' >
        <h3 className='text-center text-danger mb-4'>Registration Form</h3>
        <input type="text" className="form-control" placeholder="Enter First Name" onChange={Update} value={input.fname} name="fname"/>
        {fname_show?<p className='text-danger'>Enter minimum 4 character</p>:''} <br />
        <input type="text" className="form-control" placeholder="Enter Last Name" onChange={Update} value={input.lname} name="lname"/>
        {lname_show?<p className='text-danger'>Enter minimum 2 character</p>:''}<br />
        <div><input type="email" className="form-control" placeholder="Enter email" onChange={Update} value={input.email} name="email"/></div>
        {email_show?<p className='text-danger'>Type email properly</p>:''}<br />
        <div><input type="password" className="form-control" placeholder="Enter password" onChange={Update} value={input.password} name="password"/></div>
        {password_show?<p className='text-danger'>Password must contain minimum 8 character, one lowercase letter, one uppercase letter, one number, one special character & no space</p>:''}<br />
  
        <div><input type="password" className="form-control" placeholder="Confirm password" onChange={Update} value={input.cpassword} name="cpassword"/></div>
        {cpassword_show?<p className='text-danger'>password and confirm password should be match</p>:''}<br />
        <div><input type="number" className="form-control" placeholder="Enter Mobile Number" onChange={Update} value={input.number} name="number"/></div>
        {number_show?<p className='text-danger'>Enter minimum 10 numbers</p>:''}<br />
        <input type="radio" className="form-check-input" id="Male" name="gender" value={input.gender} onChange={Radio}/>
        <label className="form-check-label ms-2 me-4" for="radio1">Male</label><br />
        <input type="radio" className="form-check-input" id="Female" name="gender" value={input.gender} onChange={Radio}/>
        <label className="form-check-label ms-2 me-4" for="radio2">Female</label><br />
        <input type="radio" className="form-check-input" id="Transgender" name="gender" value={input.gender} onChange={Radio}/>
        <label className="form-check-label ms-2" for="radio3">Transgender</label>
        {radio_show?<p className='text-danger'>Please select gender</p>:''}<br /><br />
        <select required onChange={Update} value={input.qualification} name='qualification' className="form-select">
          <option >--- Qualification ---</option>
          <option >10th</option>
          <option >12th</option>
          <option >Graduation</option>
          <option >Under Graduation</option>
        </select>
        {qualification_show?<p className='text-danger'>check</p>:''}
       <input className="form-check-input me-2 mt-3" type="checkbox"  name="Relocate" onChange={DUpdate} checked={input.Relocate}/>
       <label className="form-check-label mt-3">Relocate</label><br />

       <input className="form-check-input me-2" type="checkbox" name="WFH" onChange={DUpdate} checked={input.WFH} />
       <label className="form-check-label">WFH</label><br /><br />

       

       <div className='d-flex justify-content-center'>
         <button type='submit' className='btn btn-primary col-12 col-sm-2 '>Submit</button>
        </div>
        <div className='text-danger d-flex justify-content-center mx-auto mt-2'>{finish}</div>
        

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
      </form>
    </div>
  )
}
