import React from 'react'
import CustomHooks from './CustomHooks'
import CallbackFunction from './CallbackFunction'

export default function Main() {
    const {Update,input,Updates,enter,REF,RefClick, state, UseReducer,memo,UseMemo,MemoFunc,callback,
        UseCallback,newCallbackFunction} = CustomHooks()
        
  return (
    <div className='container'>
      <div className='UseState and UseEfect'>
         <h2>{input}</h2>
         <button onClick={Update}>+ UseState</button>
         <h2>{enter}</h2>
         <button onClick={Updates}>- UseState</button>
      </div><br />

      <div className='UseRef'>
         <input type="text" ref={REF} /><br />
         <button onClick={RefClick}>UseRef</button>
      </div>

      <div className='UseReducer'>
         <h2>{state}</h2>
         <button onClick={UseReducer}>TextChange (UseReducer)</button>
      </div>

      <div className='UseMemo'>
         <h4>{MemoFunc}</h4>
         <h2>{memo}</h2>
         <button onClick={UseMemo}>UseMemo</button>
      </div>

      <div className='UseCallback'>
        <CallbackFunction newCallbackFunction={newCallbackFunction}/>
         <h2>{callback}</h2>
         <button onClick={UseCallback}>UseCallback</button>
      </div>
    </div>
  )
}
