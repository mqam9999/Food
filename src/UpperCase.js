import React, { useRef, useState } from 'react'
import './Delete.css'

export default function UpperCase() {
    let ref = useRef()
    const [input,setinput]=useState({fname:''})
    let Update = (e)=>{
        let {name,value} = e.target;
        setinput({...input,[name]:value})
    }
    let Show = ()=>{
        ref.current.value=input.fname.toUpperCase()
        // setinput(input.fname.toUpperCase())
        
    }
  return (
    <div>
      <input type="text" value={input.fname} name='fname' onChange={Update} ref={ref}/>
      <button onClick={Show}>Show</button>
    </div>
  )
}
