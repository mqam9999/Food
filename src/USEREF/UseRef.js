import React from 'react'
import { useRef } from 'react'

export default function UseRef() {
    let REF = useRef()

    let Update = ()=>{
      
        REF.current.focus()
        REF.current.style.backgroundColor='red'
        REF.current.style.color='white'
        REF.current.value='UseRef'
        REF.current.style.fontWeight='bold'
        REF.current.style.fontSize='50px'
    }
    
  return (
    <div>
      <input className='ghgh' style={{"background-color":"red"}} type="text"  ref={REF} />
      <button onClick={Update}>UseREf</button>

      {/* <h2 ref={REF}>nice</h2>
      <button onClick={Update}>UseREf</button> */}
    </div>
  )
}
