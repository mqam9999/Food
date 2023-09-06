import React from 'react'
import Custom from './Custom'

export default function UseRef() {
    let {Update,REF,RESET} = Custom()
  return (
    <div>
      <input type="text" ref={REF} /><br /><br />
      <button onClick={Update}>Change</button>
      <button onClick={RESET}>Change</button>
    </div>
  )
}
