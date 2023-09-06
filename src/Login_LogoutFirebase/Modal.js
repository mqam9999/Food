import React from 'react'
import {NavLink} from 'react-router-dom'


export default function Modal({setmodalshow}) {
    let close=()=>{
        setmodalshow(false)
    }
  return (
    <div>
      <div className="header">
        <div className="child">
            <div style={{display:'flex', justifyContent:'end'}}>
            <button className='mb-2' onClick={close} ><i class="fa-solid fa-xmark"></i></button>
            </div>
            <h5 className='modaltext'>Do you want to cancel this order.</h5>
            <div className='d-flex justify-content-center mt-3'>
                <NavLink to='/'><button className='btn btn-success me-3 px-3'>Yes</button></NavLink>
                <button className='btn btn-success px-3' onClick={close}>No</button>
            </div>
        </div>
      </div>
    </div>
  )
}
