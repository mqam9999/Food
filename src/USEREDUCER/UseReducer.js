import React from 'react'
import { useReducer } from 'react'

export default function UseReducer() {
    let reducer = (state,action) =>{
        if (action.type==='INC') {
           state = state +1
        }
        if (state>0 && action.type==='DEC') {
           state = state -1
        }
        return state
       }
       
    let reducers = (Colorstate,action) =>{
        if (action.type==='ColorChange') {
            return Colorstate='green'
        }
    }
    const [state,dispatch] = useReducer(reducer,0)
    const [Colorstate,Colordispatch] = useReducer(reducers,'red')
    

  return (
    <div>
      <h1 style={{color:Colorstate}}>{state}</h1>
      <button onClick={()=>dispatch({type:'INC'})}>INC</button>
      <button onClick={()=>dispatch({type:'DEC'})}>DEC</button>

      <button onClick={()=>Colordispatch({type:'ColorChange'})}>ColorChange</button>
    </div>
  )
}
