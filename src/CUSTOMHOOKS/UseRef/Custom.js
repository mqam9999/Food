import { useRef } from 'react'

export default function Custom() {
    let REF = useRef()

    let Update = ()=>{
        REF.current.focus()
        REF.current.style.color='white'
        REF.current.style.backgroundColor='black'
        REF.current.style.fontWeight='bold'
        REF.current.style.fontSize='50px'
    }

    let RESET = ()=>{
        REF.current.value=''
    }
  return {Update,REF,RESET}
}
