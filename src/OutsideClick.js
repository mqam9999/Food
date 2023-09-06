import React, { useEffect, useRef, useState } from 'react'

export default function OutsideClick() {
  let menuref = useRef()
  
  const [open,setopen]=useState()
  let Update=()=>{
    open===true?setopen(false):setopen(true)
  }

  useEffect(()=>{
    let handler =(e)=>{
      if (!menuref.current.contains(e.target)) {
      setopen(false)
      }
    }
    document.addEventListener('mousedown',handler);
    return()=>{document.removeEventListener('mousedown',handler)}
  },[])

  return (
    <div >
      <div  className='menu-container' ref={menuref} style={{width:'100px',height:'200px',border:'1px solid white'}}>
       <button onClick={Update}>Shutter</button>
     {open?
     <div style={{width:'100px',height:'150px',border:'1px solid black'}}>
     
       <span >
        <h4>Hello!</h4>
        <h3>Nice to see you.</h3>
       </span>

     </div>:''}
       </div>
    </div>
  )
}
