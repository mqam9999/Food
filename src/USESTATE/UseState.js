import React, {useState} from 'react'

export default function UseState() {
    const [color,setcolor]=useState('green');
    const [input,setinput]=useState();
  return (
    <div>
      <input type="text" style={{backgroundColor:color}}/>
      <button onClick={()=>setcolor('red')}>=</button>

      <h2>{input}</h2>
      <button onClick={()=>setinput('laptop')}>=</button>
    </div>
  )
}
