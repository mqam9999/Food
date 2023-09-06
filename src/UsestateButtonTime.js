import React, {useState} from 'react'

export default function UsestateButtonTime() {
 
  let time = new Date().toLocaleTimeString();

  const [count, setCount]= useState(time);

const Update= ()=>{
  let time = new Date().toLocaleTimeString();
  setCount(time);
}
setInterval(Update,1000);
   
        
  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={Update}>Click me</button>s */}
    </div>
  )
}
