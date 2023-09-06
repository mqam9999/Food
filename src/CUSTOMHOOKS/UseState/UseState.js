import React from 'react'
import Custom from './Custom'

export default function UseState() {
  let {input,Update,Updates} = Custom()
  return (
    <div>
      <h2>{input}</h2>
      <button onClick={Update}>+</button>
      <button onClick={Updates}>-</button>
    </div>
  )
}
