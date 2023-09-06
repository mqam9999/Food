import React from 'react'
import Custom from './Custom'

export default function UseReducer() {
    let {state,INC,DEC} = Custom()
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={INC}>+</button>
      <button onClick={DEC}>-</button>
    </div>
  )
}
