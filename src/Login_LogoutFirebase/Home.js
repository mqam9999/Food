
import React,{ useState,useEffect}  from 'react'
import {NavLink} from 'react-router-dom'
import Data from './MapData'
import {auth} from './firebase'
import {getAuth} from "firebase/auth"
import {onAuthStateChanged } from "firebase/auth"
import {signOut } from "firebase/auth"
import { useNavigate } from 'react-router-dom'


let butt = [...new Set(Data.map((e)=>{return e.category}))];

export default function Home(props) {
  let {setItemCart,ItemCart}=props;
  
  const [user,setuser]=useState()
  const [newitem]=useState(butt);
  const [Cart,SetCart]=useState(false);
  const [showbadge,Setshowbadge]=useState();
  const [Log,SetLog]=useState(false);
  const [item,setItem]=useState(Data);


  let navigate = useNavigate()
  let filterItem = (category) =>{
   setItem (Data.filter((e)=>{
    return e.category===category;
   }))
  }
 
 
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
  if (user) {
    setuser(user.displayName)
    SetLog(true)
    SetCart(true)
  } else {
    
  }
});
},[]);

let Logout = ()=>{
  const auth = getAuth();
  signOut(auth).then(() => {
  navigate('/')
  SetCart(false)
  SetLog(false)
  setuser('')
  }).catch((error) => {console.log(error);
  });
}  






let AddItem =(e)=>{
  let ID = {id:new Date().getTime().toString(),...e}
  setItemCart([...ItemCart,ID])
  localStorage.setItem('Item',JSON.stringify([...ItemCart,{...e,quantity:1}]))
  }  


useEffect(()=>{
   if(localStorage.getItem('Item'))
   setItemCart(JSON.parse(localStorage.getItem('Item')));
},[])

useEffect(()=>{
  if (ItemCart.length>0) {Setshowbadge(true)}else{Setshowbadge(false)}
},[ItemCart.length])


  
  return (
    <div className='Home'>
  <div className='container pt-3'>
          <div className='smallDisplay Name '>
            <div className='container'>
              {user?<span className='displayName col-12 col-sm-12 col-md-2  font'><b>Welcome {user}</b></span>:''}
               
            {Log?
            <button className='btncolor text-dark fw-bold mrgn col-12 col-sm-12 col-md-2 col-lg-2 col-xl-1   btn btn-success ms-2  float-end mt-2' onClick={Logout}>Logout</button>:
            <NavLink to='/signin'>
            <button className='btncolor text-dark fw-bold mrgn col-12 col-sm-12 col-md-2 col-lg-1  btn btn-success ms-2  float-end mt-2'>Signin</button>
            </NavLink>
            }
            
            
            {
               Cart?
               <NavLink to='/addtocart'>
              <button className='btncolor text-dark fw-bold mrgn col-12 col-sm-12 col-md-2 col-lg-2 col-xl-1   btn btn-success  float-end  mt-2' >Cart {showbadge?<span class="badge rounded-pill bg-dark text-white ms-1 " style={{fontSize:'13px'}}>{ItemCart.length}</span>:''}</button>
              </NavLink>:
              <NavLink to='/signup'>
              <button className='btncolor text-dark fw-bold mrgn col-12 col-sm-12 col-md-2 col-lg-1  btn btn-success ms-2  float-end  mt-2'>SignUp</button>
              </NavLink>
            }
              </div>
              
            

          </div> <br /><br />

    <div className='BODY1 '>
         <div className='row  mb-4 mt-3 bg-dark p-3 scroll'>
             {newitem.map((e)=>{
             return <button className='mx-auto btn btnhead btn-light col-12 col-sm-2 col-md-2 mt-1 mb-1' onClick={()=>{filterItem(e)}}>{e}</button>     
             })}
              <button className='mx-auto btn btnhead btn-light col-12 col-sm-2 col-md-2 mt-1 mb-1' onClick={()=>{setItem(Data)}}>All</button>
         </div>

          <div className='mapMain row g-4'>
            {item.map((e,i)=>{
              return(
              <>
              <div key={i} className=" card col-12 col-sm-6 col-md-4 col-lg-3 scale shadow-lg ">
                    <img className="card-img-top mx-auto " src={e.img} alt="cardimg" style={{width:'100%',height:300}} />
                <div className="card-body">
                    <h4 className="card-title">{e.name}</h4>
                    <h4 className="card-title">${e.price}</h4>
                    <p className="card-text">{e.description}</p>
                    <NavLink style={{fontWeight:'bold'}} to='/signin'><button onClick={()=>AddItem(e)} className='btn btn-danger col-12 '>Order</button></NavLink>
                    {Cart?<button className='btn btn-danger col-12 mt-1' onClick={()=>AddItem(e)}>Add to Cart</button>:''}
                </div>
              </div>
              </>
              )})}
          </div>
          
             
          
    </div>
      
      
  </div>
  </div>
  )
}
