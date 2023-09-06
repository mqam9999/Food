import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

export default function UseMemo() {
    const [input,setinput]=useState(0)
   
let memo = useMemo(()=>{
    return input
},[input])
    
  return (
    <div>
        <h2>{memo}</h2>
        <h4>{input}</h4>
        <button onClick={()=>setinput(input+1)}>+</button>
    </div>
  )
}
