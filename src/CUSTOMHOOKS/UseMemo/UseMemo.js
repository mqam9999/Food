import React,{useState} from 'react'
import Custom from './Custom'

export default function UseMemo() {
    const [input,setinput]=useState(0)
    let {machine} = Custom({input})

  return (
    <div>
        <h1>{machine}</h1>
        <h2>{input}</h2>
        <button onClick={()=>setinput(input+1)}>+</button>
    </div>
  )
}
