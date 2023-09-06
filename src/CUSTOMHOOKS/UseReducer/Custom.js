
import { useReducer } from 'react'

export default function Custom() {
    let reducer = (state,action)=>{
        if (action.type==='INC') {
            state = state+1
        }
        if (state>0 && action.type==='DEC') {
            state = state-1
        }
        return state
    }
    const [state,dispatch] = useReducer(reducer,0)

    let INC = ()=>{
      dispatch({type:'INC'})
    }
    let DEC = ()=>{
        dispatch({type:'DEC'})
      }
      return {state,INC,DEC}
 
}
