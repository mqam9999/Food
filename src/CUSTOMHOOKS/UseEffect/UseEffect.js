import React from 'react'
import Custom from './Custom'
import {useState} from 'react'

export default function UseEffect() {
    const [input,setinput]=useState(0)
    Custom(input)

  return (
    <div>
      <h2>{input}</h2>
      <button onClick={()=>setinput(input+1)}>+</button>
    </div>
  )
}
