import React,{useState} from 'react'
import Function from './Function'
import Custom from './Custom'

export default function UseCallback() {
    const [input,setinput]=useState(0)
    const [enter,setenter]=useState(0)
    let {machine} = Custom(enter)
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
