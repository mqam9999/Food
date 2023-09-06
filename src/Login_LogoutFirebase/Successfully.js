import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {signOut } from "firebase/auth"
import {getAuth} from "firebase/auth"
import {onAuthStateChanged } from "firebase/auth"
import { Scrollbar } from 'react-scrollbars-custom'
import { useEffect } from 'react'
import Modal from './Modal'
import StateDistrict from './StateDistrict'





export default function Successfully(props) {
  let {cart2order,setcart2order}=props;
  const [ctime,setctime]=useState()
  const [modalshow,setmodalshow]=useState(false)

    let open=()=>{
      setmodalshow(true)
    }
  let updateTime=()=>{
   let now= new Date().toLocaleTimeString()
   setctime(now)
}
setInterval(updateTime, 1000);
  
  const Go = useNavigate();
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
  if (user) {
    // Go('/successfully')
    setuser(user.displayName)
  } else {
     Go('/signin')
  }
});
},[]);

const [user,setuser]=useState();
let H = new Date().getHours();
let M = new Date().getMinutes();
let S = new Date().getSeconds();
let date = new Date().toDateString()


  const [input,setinput] = useState({fname:'',lname:'',email:'',number:'',address:'',city:'',pincode:'',district:'',state:''});
  
 
  const [store, setstore] =useState([])
  const [fname_show, setfname_show] =useState()
  const [lname_show, setlname_show] =useState()
  const [state_show, setstate_show] =useState()
  const [number_show, setnumber_show] =useState()
  let navigate = useNavigate()
  
    let Logout = ()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
        navigate('/')
        }).catch(() => {
        });
    }  
        
  let Update = (e)=>{
    let name = e.target.name;
    let value= e.target.value;
    setinput({...input,[name]:value})
  }
  useEffect(()=>{
    if (input.fname.length<2 && input.fname.length>0){setfname_show(true)}else{setfname_show(false)}
    if (input.lname.length<2 && input.lname.length>0){setlname_show(true)}else{setlname_show(false)}
    if (input.number.length<10 && input.number.length>0){setnumber_show(true)}else{setnumber_show(false)}
  },[input])
    
    
  
  

  let Add = (cart2order)=>{ console.log(cart2order);
    setcart2order([cart2order])
  }

    let submit = async (e)=>{
      e.preventDefault();
      if (input.state.search("[A-Z a-z]")){setstate_show(true)}else{setstate_show(false)}
      let {fname,lname,number,state}=input;
      if (
        fname.length<2 || 
        lname.length<2 ||
        state.search("[A-Z a-z]")||
        number.length<10
        ) {
        alert("Please fill all the field properly")
      }else{
        navigate('/payment')
        setcart2order([cart2order])
      let time = H+':'+M+':'+S
      let bond = {...input,id:new Date().getTime().toString(),time,date}
      setstore([...store,bond])
      setinput({fname:'',lname:'',email:'',number:'',address:'',city:'',pincode:'',district:'',state:''})
      
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
  useEffect(()=>{
    if(localStorage.getItem('Item'))
    setcart2order(JSON.parse(localStorage.getItem('Item')))
 },[cart2order])
    let totalAmount = cart2order.reduce((iniVal,e)=>{
      iniVal = iniVal + e.quantity * e.price
      return iniVal
    },0)


  return (
    <div className='Home'>
    <div className='container'> 
  
      
      <div className='row pt-2 text-center my-auto'>
        <h6 className='col-12 col-sm-12 col-md-2 col-lg-2 my-auto my-1 text-light'><b>{ctime}</b></h6>
        <h6 className='col-12 col-sm-12 col-md-3 col-lg-2 my-auto my-1 text-light'><b>{date}</b></h6>
        <span className='col-12 col-sm-12 col-md-1 col-lg-4 '></span>
        <h6 className=' col-12 col-sm-12 col-md-4 col-lg-3 my-auto float-end my-1 text-light'><b>Welcome {user}</b></h6>
        <button className='btncolor text-dark fw-bold btn btn-success col-10 col-sm-12 col-md-2 col-lg-1 mx-auto my-1' onClick={Logout}>Logout</button>
      </div><br /><br />


      <div className='container'>
      <div className="row text-center mx-auto">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 my-2  tablebg" style={{height:"330px"}}> 
        
        <Scrollbar style={{height:'100%'}}>
        <h5 className='mx-3 pt-1'  style={{fontWeight:'revert'}}>
          Order Details
        </h5>
        
      <table className="table  ">
    <thead>
      <tr style={{fontWeight:'revert',backgroundColor:'lightgreen',position:'sticky', top:'0'}}>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total Price</th>
      </tr>
    </thead>
    <tbody>
      {cart2order.map((e)=>{
        return<tr>
        <td><h5>{e.name}</h5></td>
        <td><h5>{e.quantity}</h5></td>
        <td><h5>{e.price}</h5></td>
        <td><h5>{e.quantity*e.price}</h5></td>
      </tr>
      })}
    </tbody>
  </table>
  </Scrollbar>
  
        </div>
        <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>

        <div className="col-12 col-sm-12 col-md-3 col-lg-3 my-2 tablebg " style={{height:'80px',display:'flex',justifyContent:'center',alignItems:"center"}}>
          <h3 className='totalAmount'>Total Amount: <b>{totalAmount}</b></h3>
        </div>
      </div>
      </div>


      <div className=" p-3">
      <div className=' bg-warning col-12 col-sm-12 col-md-10 col-lg-8 p-5' >
      <form onSubmit={submit} method='POST' className='p-2' >
      
        <h3 className='text-center text-success mb-4'><b>Delivery details</b></h3>
      <div className='row'>
      <div className='col-12 col-sm-12 col-md-6'>
        <input required type="text" autoComplete='off' className="form-control" placeholder="Enter First Name" onChange={Update} value={input.fname} name="fname"/>
        {fname_show?<p className='errorsuccessfullypage'>Enter minimum 2 character</p>:''} <br />
      </div>
      <div className='col-12 col-sm-12 col-md-6'>
        <input required type="text" autoComplete='off' className="form-control" placeholder="Enter Last Name" onChange={Update} value={input.lname} name="lname"/>
        {lname_show?<p className='errorsuccessfullypage'>Enter minimum 2 character</p>:''}<br />
      </div>
      <div className='col-12 col-sm-12 col-md-6'>
        <div><input required type="email" autoComplete='off' className="form-control" placeholder="Enter email" onChange={Update} value={input.email} name="email"/></div><br />
      </div>
      <div className='col-12 col-sm-12 col-md-6'>
        <div><input required type="number" autoComplete='off' className="form-control" placeholder="Mobile Number" onChange={Update} value={input.number} name="number"/></div>
        {number_show?<p className='errorsuccessfullypage'>enter 10 digit number</p>:''}<br />
      </div>
        <h5 className='text-success'><b>Address:</b></h5>
      <div className='col-12 col-sm-12 col-md-6'>
        <div><textarea required name="address" autoComplete='off' className="form-control" placeholder="Address" onChange={Update} value={input.address}  rows="2"></textarea></div><br />
      </div>

      <div className='col-12 col-sm-12 col-md-6'>
        <div><input type="text" required name="city" autoComplete='off' className="form-control" placeholder="City" onChange={Update} value={input.city} ></input></div><br />
      </div>
      <div className='col-12 col-sm-12 col-md-6'>
        <div><input type="number" required name="pincode" autoComplete='off' className="form-control" placeholder="Pincode ex:-410025" onChange={Update} value={input.pincode} ></input></div><br />
      </div>
      <div className='col-12 col-sm-12 col-md-6'>
        <div><input type="text" required name="district" autoComplete='off' className="form-control" placeholder="District" onChange={Update} value={input.district} ></input></div><br />
      </div>
        <div>
        <select required className="form-select" name='state' onChange={Update} value={input.state} placeholder='State'> 
              <option>-----State-----</option>
             {StateDistrict.map((e)=>{
                return <><option>{e}</option></>
             })}
        </select>
        {state_show?<p className='errorsuccessfullypage'>Please select state</p>:''}
        </div>

        </div>

     
        <div className='d-flex justify-content-center mt-3'>
        <button onClick={()=>Add(cart2order)} type='submit' className='btn btn-success'>Confirm Order</button>
        </div>

      </form>
        <div className=' d-flex justify-content-center'>
           <button className='btn btn-danger px-3' onClick={open}>Cancel Order</button>
        </div>
         {modalshow && <Modal setmodalshow={setmodalshow}/>}
    </div>
    </div><br /><br />
    </div>

    </div>
  )
}
