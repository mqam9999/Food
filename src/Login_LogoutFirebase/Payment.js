import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Payment() {
  
  
  
  let navigate = useNavigate();
  const [input,setinput]=useState({fname:'',lname:'',cardnumber:'',cvv:'',validMM:'',validYYYY:''});
  const [store,setstore]=useState([]);
  let Update = (e)=>{
    let name=e.target.name;
    let value=e.target.value.toUpperCase();
    setinput({...input,[name]:value})
  }
  let HandleSubmit=(e)=>{
    e.preventDefault();
    let { cardnumber, cvv, validMM, validYYYY} = input;
    if (cardnumber.length<16 || cardnumber.length>16 || cvv.length<3 ||cvv.length>3  ||  validMM.length<2 ||validMM.length>2 ||  validYYYY.length<4||validYYYY.length>4 ){
      alert("please fill all the input properly")
    }else{
      setTimeout(() => {
        let ID = {id:new Date().getTime().toString(),...input}
      setstore([...store,ID])
      navigate('/OrderCompletion')
      }, 2000);
    }
  }
  return (
    
    <div className='container'>
      <div className="row d-flex justify-content-center my-4 ">
        <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 ">

        <div><h3 className='text-center text-success'><b>Payment</b></h3></div>

<div className='mt-3 bgpayment' style={{border:'1px solid white', padding:'20px',borderRadius:'15px'}}>
    <div ><h6><b>CREDIT/DEBIT CARD</b></h6></div>
<hr />

<form onSubmit={HandleSubmit}>
    <div className="row mt-3">
      <div className="col-12 col-sm-6 my-1">
         <h6>First name</h6>
         <input autoComplete='off' required placeholder='First name' type="text" name='fname' value={input.fname} onChange={Update} className="form-control shadow-none"/>
      </div>
      <div className="col-12 col-sm-6 my-1">
         <h6>Last name</h6>
         <input autoComplete='off' required placeholder='Last name' type="text" name='lname' value={input.lname} onChange={Update} className="form-control shadow-none"/>
      </div>
      <div className="col-12 col-sm-8 my-1">
         <h6>Card number</h6>
         <span className='d-flex paymentborder bg-white'>
         <i class="fa-solid fa-credit-card fs-4 d-flex justify-content-center align-items-center ms-2"></i>
         <input autoComplete='off' placeholder='0000 0000 0000 0000' name='cardnumber' value={input.cardnumber} onChange={Update} type="number"  className="form-control paymentinput shadow-none"/>
         </span>
      </div><div className="col-12 col-sm-4 my-1">
         <h6>CVV</h6>
         <span className='d-flex paymentborder bg-white'>
         <i class="fa-regular fa-credit-card fs-4 d-flex justify-content-center align-items-center ms-2"></i>
         <input autoComplete='off' placeholder='***' type="number" name='cvv' value={input.cvv} onChange={Update}  className="form-control paymentinput shadow-none"/>
         </span>
      </div>
      <div>
        <img src={'https://www.bobfinancial.com/images/EternaVisaCard2.png'} alt="/" style={{width:'40px',borderRadius:'4px'}} className='me-2'/>
        <img src={"https://images.moneycontrol.com/static-mcnews/2021/11/Axis-bank_ace-credit-card-690x435.jpeg?impolicy=website&width=1600&height=900"} alt="/" style={{width:'40px', height:'25px',borderRadius:'4px'}} className='me-2'/>
        <img src={'https://www.ucobank.com/images/UCO-Bank-SimplySAVE-SBI-Card.jpg'} alt="/" style={{width:'40px',borderRadius:'4px'}} className='me-2'/>
      </div>
      <div className="col-12 col-sm-3 col-md-4 col-lg-3 mt-2 d-flex  align-items-center">
         <h6>Valid untill</h6>
      </div>
      <div className="col-12 col-sm-7 col-md-6 my-2 d-flex paymentborder bg-white">
         <input placeholder='MM' type="number" name='validMM' value={input.validMM} onChange={Update} className='form-control shadow-none paymentinput'/><h5 className='mt-1'>/</h5>
         <input placeholder='YYYY' type="number" name='validYYYY' value={input.validYYYY} onChange={Update} className='form-control shadow-none paymentinput'/>
      </div>
      <div className='text-center'>
        <button className='btn btn-success col-12 col-sm-4 col-md-4 col-lg-3 mt-3 '>Payment</button>
      </div>

    </div>
    </form>
</div>



        </div>
      </div>
    </div>
    
  )
}
