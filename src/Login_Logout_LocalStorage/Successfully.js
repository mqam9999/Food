import React,{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Successfully() {
  let H = new Date().getHours();
  let M=new Date().getMinutes();
  let S=new Date().getSeconds();
  const [input,setinput] = useState({fname:'',lname:'',email:'',password:'',number:'',address:''});
  const [finish, setfinish] =useState()
 
  const [store, setstore] =useState([])
  const [fname_show, setfname_show] =useState()
  const [lname_show, setlname_show] =useState()
  const [email_show, setemail_show] =useState()
  const [password_show, setpassword_show] =useState()
  const [number_show, setnumber_show] =useState()
  let move = useNavigate()
  
    let Logout = ()=>{
        localStorage.removeItem('login')
        move('/')
    }
    useEffect(()=>{
      if(localStorage.getItem('login')){
        move('/successfully')
  }else{
    move('/signin')
  }
  },[])
    

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
  let MUpdate = (e)=>{
    let name = e.target.name;
    let value= e.target.value;
    if (input.number.length<10){setnumber_show(true)}else{setnumber_show(false)}
    setinput({...input,[name]:value})
  }
  let AddUpdate = (e)=>{
    let name = e.target.name;
    let value= e.target.value;
    setinput({...input,[name]:value})
  }
  

    let submit = async (e)=>{
      e.preventDefault();
      let {fname,lname,email,password,number}=input;
      if (
        fname.length<4 || 
        lname.length<2 ||
        email.length<4 ||
        password.search("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$") ||
        number.length<10
        ) {
        alert("Please fill all the field properly")
      }else{
      let bond = {...input,id:new Date().getTime().toString(),time:H+':'+M+':'+S}
      setstore([...store,bond])
      setinput({fname:'',lname:'',email:'',password:'',number:'',address:''})
      setfinish("Submitted")
      setInterval(() => {
        setfinish("")
      }, 5000);
     
      let Data = await fetch('https://food-60ee1-default-rtdb.firebaseio.com/Food.json',{
        method:'POST',
        headers: {
          'Context-Type' : 'Application/json',
        },
        body:JSON.stringify(bond)
      });
      Data();
    }
  }
  return (
    <>
      
      <button className='btn btn-success float-end mt-2 me-5' onClick={Logout}>Logout</button><br /><br />
      
      <div className="row ">
      <div className=' bg-light container col-11 col-sm-10 col-md-8 ' >
      <form onSubmit={submit} method='POST' className='p-2' >
        <h3 className='text-center text-success mb-4'><b>Order food</b></h3>
        <input type="text" className="form-control" placeholder="Enter First Name" onChange={FUpdate} value={input.fname} name="fname"/>
        {fname_show?<p>Enter minimum 4 character</p>:''} <br />
        <input type="text" className="form-control" placeholder="Enter Last Name" onChange={LUpdate} value={input.lname} name="lname"/>
        {lname_show?<p>Enter minimum 2 character</p>:''}<br />
        <div><input type="email" className="form-control" placeholder="Enter email" onChange={EUpdate} value={input.email} name="email"/></div>
        {email_show?<p>Type email properly</p>:''}<br />
        <div><input type="password" className="form-control" placeholder="Enter password" onChange={PUpdate} value={input.password} name="password"/></div>
        {password_show?<p>password case-sensitive</p>:''}<br />
        <div><input type="number" className="form-control" placeholder="Mobile Number" onChange={MUpdate} value={input.number} name="number"/></div>
        {number_show?<p>enter 10 digit number</p>:''}<br />
        <div><textarea name="address" className="form-control" placeholder="Address" onChange={AddUpdate} value={input.address}  rows="5"></textarea></div>

       

       <div className='d-flex justify-content-center mt-3'>
         <button type='submit' className='btn btn-success col-12 col-sm-3  '>Submit</button>
        </div>
        <div className='text-danger d-flex justify-content-center mx-auto mt-2'>{finish}</div>


      </form>
    </div>
    </div><br /><br />
    </>
  )
}
