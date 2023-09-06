import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Function from './Function'

export default function UseCallback() {
  const [input,setinput] = useState(0);
  const [enter,setenter] = useState(0);
  let machine = useCallback(()=>{

  },[input])
  return (
    <div>
      <Function machine={machine}/>
      <h2>{input}</h2>
      <button onClick={()=>setinput(input+1)}>+</button>
      <h2>{enter}</h2>
      <button onClick={()=>setenter(enter+1)}>+</button>
    </div>
  )
}
