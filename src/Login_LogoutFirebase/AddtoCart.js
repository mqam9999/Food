import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Scrollbar } from 'react-scrollbars-custom'
import { useNavigate } from 'react-router-dom'
import {getAuth} from "firebase/auth"
import {auth} from './firebase'
import {NavLink} from 'react-router-dom'
import {signOut } from "firebase/auth"
import {onAuthStateChanged } from "firebase/auth"


export default function AddtoCart(props) {
   const [Itemshow,setItemshow,]=useState()
    let {setItemCart,ItemCart} = props;
    const [user,setuser]=useState();
    const [showcheckout,setshowcheckout]=useState();
    const [ctime,setctime]=useState()
   let updateTime=()=>{
   let now= new Date().toLocaleTimeString()
   setctime(now)
}
setInterval(updateTime, 1000);
let date = new Date().toDateString()

const navigate = useNavigate();
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
  if (user) {
    navigate('/addtocart')
    setuser(user.displayName)
  } else {
    navigate('/signin')
  }
});
},[navigate]);

let Logout = ()=>{
  const auth = getAuth();
  signOut(auth).then(() => {
  navigate('/')
  }).catch(() => {
  });
}  
  
    useEffect(()=>{
        if(localStorage.getItem('Item'))
        setItemCart(JSON.parse(localStorage.getItem('Item')))
     },[])
     useEffect(()=>{
      if (ItemCart.length>0){setItemshow(false)}else{setItemshow(true)}
      if (ItemCart.length>0){setshowcheckout(true)}else{setshowcheckout(false)}
     },[ItemCart])
     
     let DeleteItem=(id)=>{
      let deletetodo = ItemCart.filter((e)=>{
        return e.id!==id
      })
      setItemCart(deletetodo)
      localStorage.setItem('Item',JSON.stringify(deletetodo))
     }
     let INC = (id)=>{
      let inc = ItemCart.map((e)=>{
        return e.id===id?{...e,quantity:e.quantity+1}:e
      })
      setItemCart(inc)
      localStorage.setItem('Item',JSON.stringify(inc))
     }
     let DEC = (id)=>{
      let dec =ItemCart.map((e)=>{
        return e.id===id?{...e,quantity:e.quantity>1?e.quantity-1:e.quantity(1)}:e
      })
      setItemCart(dec)
      localStorage.setItem('Item',JSON.stringify(dec))
     }
     let subtotal= ItemCart.reduce((iniVal,e)=>{
      iniVal = iniVal+ e.price * e.quantity
      return iniVal
     },0)

    let ProceedOrder=(ItemCart)=>{
      props.setcart2order([ItemCart])
    }
     
      
  return (
    <div className='Cart pb-5'>
      <div className='container'>

      <div className=' row pt-2 text-center my-auto mx-auto'>
        <h6 className='col-12 col-sm-12 col-md-2 col-lg-2 my-auto my-1 text-secondary'><b>{ctime}</b></h6>
        <h6 className='col-12 col-sm-12 col-md-3 col-lg-2 my-auto my-1 text-secondary'><b>{date}</b></h6>
        <span className='col-12 col-sm-12 col-md-1 col-lg-4 '></span>
        <h6 className=' col-12 col-sm-12 col-md-4 col-lg-3 my-auto float-end my-1'><b>Welcome {user}</b></h6>
        <button className='btncolor1 btn btn-success col-10 col-sm-12 col-md-2 col-lg-1 mx-auto my-1' onClick={Logout}><b>Logout</b></button>
      </div><br /><br />

      <Link to='/'style={{textDecoration:'none'}}>
        <button style={{background:'transparent',border:'0px',marginTop:'-25px'}} className='d-flex pt-3'>
         <i class="fa-sharp fa-solid fa-arrow-left mt-2 me-2 "></i>
         <p className='fs-5'>Continue Shopping</p>
         </button>
      </Link>
         <hr style={{marginTop:'-0.5px'}}/>

        <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 text-center">
          <h3>Shopping Cart</h3>
          <p>You have {ItemCart.length} items in Shopping Cart</p>
        </div>
      

      <div className='CartBlock d-flex justify-content-center shadow-lg 'style={{height:'450px'}} >
        <div className=' container mx-5 my-2  '>

        

        <Scrollbar style={{height:'100%'}}>
          <hr className='listheader' style={{marginTop:'-15px'}} />

        {Itemshow?
          <div className='d-flex justify-content-center align-items-center'>
            <h1 className='H1'>You have no items in your cart.</h1>
          </div>:
       ItemCart.map((e,i)=>{
        return(
          
          <div key={i}>
         <div className="row mx-auto my-auto ">
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 mx-auto my-auto d-flex py-1 justify-content-center align-items-center">
            <img src={e.img}  height='110px' style={{width:'110px'}}  className='mx-auto my-auto col-12' />
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 mx-auto my-auto text-center py-1">
            <h5 className='mx-auto my-auto'>{e.name}</h5>
            <p className='mx-auto my-auto'>{e.category}</p>
          </div>
          
          <div className="col-12 col-sm-12 col-md-3 col-lg-2 mx-auto my-auto text-center py-1 flex" >
            <p className='smallscreen mx-auto my-auto'>Quantity</p>
            <button onClick={()=>DEC(e.id)} className='mx-auto my-auto ' style={{border:'0px',background:'transparent'}}>-</button>
             <input className='mx-auto my-auto text-center border border-0' value={e.quantity} type="text" style={{width:'30px',outline:'none'}}/>
             <button onClick={()=>INC(e.id)} className='mx-auto my-auto' style={{border:'0px',background:'transparent'}}>+</button>
          </div>
          <div className="col-12 col-sm-12 col-md-1 col-lg-2 mx-auto my-auto text-center  py-1  " >
            <p className='smallscreen mx-auto my-auto'>Price</p>
            <h5 className='mx-auto my-auto flex'>${e.price}</h5>
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 mx-auto my-auto text-center  py-1 flex" >
            <p className='smallscreen mx-auto my-auto'>Total Price</p>
           <h5 className='mx-auto my-auto'>{e.quantity * e.price}</h5>
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 mx-auto my-auto text-center py-1" >
            <button onClick={()=>DeleteItem(e.id)} className='mx-auto my-auto'>Delete</button>
          </div>
         </div>
         <hr />
         </div>
        )
      })}
      </Scrollbar>
      </div>
      
      </div>

      {showcheckout?
      <div className='mainCartTotal '>
        <div className='CartTotal mt-4 '>
          <tr className='border  shadow-lg p-2 borders'>
            <td >
              <h5 className=' mt-1 me-3'> Sub Total: </h5>
              <h6 style={{marginBottom:'-5px'}}  className=' mt-1 me-3'>Delivery fee:</h6>
              <hr />
              <h4 style={{marginTop:'-10px'}}  className=' me-3'> <b>Order Total:</b></h4>
            </td>
            <td>
              <h5><b>{subtotal}</b></h5>
              <h6 style={{marginBottom:'-5px'}} ><b>+ 40</b></h6>
              <hr  />
              <h4 style={{marginTop:'-10px'}}  ><b>{subtotal + 40}</b></h4>
            </td>

            
            <div className='btncheckout'>
               <NavLink to='/successfully'><button onClick={()=>ProceedOrder(ItemCart)}><b>CHECKOUT</b></button></NavLink>
            </div>
           
          </tr>
        </div>
        
      </div>:
      ''}
      
      </div>
    </div>
  )
}
