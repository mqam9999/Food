import { useRef } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function CustomHooks(value) {
    const [input,setinput]=useState(value=0)
    const [enter,setenter]=useState(value=10)
    const [memo,setmemo]=useState(value=0)
    const [callback,setcallback]= useState(value=0)
    const REF = useRef()
    let reducer=(state,action)=>{
        if (action.type==='ChangeText') {
            return state='Monday'
        }
    }
    const [state,dispatch]=useReducer(reducer,'Sunday')

    useEffect(()=>{
        alert('useEffect')
        document.title=`chats ${input}`
    },[input])

    let Update = ()=>{
        setinput(input+1)
    }
    let Updates = ()=>{
        setenter(enter>0?enter-1:enter(0))
    }
    let RefClick = ()=>{
        REF.current.focus()
        REF.current.style.color='white'
        REF.current.style.backgroundColor='Black'
        REF.current.style.fontWeight='Bold'
        REF.current.style.fontSize='40px'
    }
    let UseReducer = ()=>{
        dispatch({type:'ChangeText'})
    }
    let UseMemo=()=>{
        setmemo(memo+1)
    }
    let MemoFunc = useMemo(()=>{
            return memo
    },[memo])
    let UseCallback = ()=>{
        setcallback(callback+1)
    }
    let newCallbackFunction = useCallback(()=>{
    },[callback])


    return {Update,input,Updates,enter,REF,RefClick,state,UseReducer,memo,UseMemo,MemoFunc,callback,
            UseCallback,newCallbackFunction}
}
