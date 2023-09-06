import {useState} from 'react'

export default function Custom() {
    const [input,setinput]=useState(0)

    let Update = ()=>{
        setinput(input+1)
    }
    let Updates = ()=>{
        setinput(input>0?input-1:input(0))
    }
    return {input,Update,Updates}
}
