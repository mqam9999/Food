import React from 'react'
import { useEffect } from 'react'
import { Scrollbar } from 'react-scrollbars-custom'
import {NavLink} from 'react-router-dom'

export default function OrderCompletion(props) {

    useEffect(()=>{
        if(localStorage.getItem('Item'))
        props.setcart2order(JSON.parse(localStorage.getItem('Item')))
})

     let subtotal= props.cart2order.reduce((iniVal,e)=>{
      iniVal = iniVal+ e.price * e.quantity
      return iniVal
     },0)

  return (
    <div className='container'>
      <div className='row mb-3'>
        <div className="float-start mt-3">
          <h3><b>Order Successfully !</b></h3>
          <h5>Please be pateint your order will be delivered to your doorstep within a 30 minutes.</h5>
          <p>You have Ordered {props.cart2order.length} items.</p>
        </div>
        
      

      <div className='CartBlock d-flex justify-content-center shadow-lg 'style={{height:'450px'}} >
        <div className=' container mx-5 my-2  '>

        

        <Scrollbar style={{height:'100%'}}>
          <hr className='listheader' style={{marginTop:'-15px'}} />

        
       {props.cart2order.map((e,i)=>{
        return(
          
          <div key={i}>
         <div className="row mx-auto my-auto ">
          <div className="col-12 col-sm-12 col-md-3 col-lg-2 mx-auto my-auto d-flex py-1 justify-content-center align-items-center">
            <img src={e.img}  height='80px' style={{width:'150px'}}  className='mx-auto my-auto widthimg col-10 ' />
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 mx-auto my-auto text-center py-1">
            <h5 className='mx-auto my-auto'>{e.name}</h5>
            <p className='mx-auto my-auto'>{e.category}</p>
          </div>
          
          <div className="col-12 col-sm-12 col-md-3 col-lg-2 mx-auto my-auto text-center py-1 flex" >
            <p className='smallscreen mx-auto my-auto'>Quantity</p>         
             <input className='mx-auto my-auto text-center border border-0 ' value={e.quantity} type="text" style={{width:'30px',outline:'0px'}}/>
          </div>
          <div className="col-12 col-sm-12 col-md-1 col-lg-2 mx-auto my-auto text-center  py-1  " >
            <p className='smallscreen mx-auto my-auto'>Price</p>
            <h5 className='mx-auto my-auto flex'>${e.price}</h5>
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 mx-auto my-auto text-center  py-1 flex" >
            <p className='smallscreen mx-auto my-auto'>Total Price</p>
           <h5 className='mx-auto my-auto'>{e.quantity * e.price}</h5>
          </div>
         </div>
         <hr />
         </div>
        )
      })}
      </Scrollbar>
      </div>
      
      </div>


      <div className='mainCartTotal '>
        <div className='CartTotal mt-3 '>
              <h4 className='border  shadow-lg p-2 borders' style={{marginTop:'-10px'}} > <b>Paid: {subtotal+40}</b></h4>
        </div>
      </div>
            <span className='d-flex justify-content-center continuebook '>
              <NavLink to='/'><button className='btncolor'><b>Continue booking</b></button>  </NavLink>
            </span>
        </div> 
    </div>
  )
}
