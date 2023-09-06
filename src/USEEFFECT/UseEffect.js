import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function UseEffect() {
    const [input,setinput]=useState(0);
    const [enter,setenter]=useState(0);

    useEffect(()=>{
        alert('hi')
        document.title=`Chat (${input})`
    },[input])
  return (
    <div>
      <h2>{input}</h2>
      <button onClick={()=>setinput(input+1)}>+</button>

      <h2>{enter}</h2>
      <button onClick={()=>setenter(enter-1)}>+</button>
    </div>
  )
}
