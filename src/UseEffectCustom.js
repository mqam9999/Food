
import { useEffect } from 'react'


export default function UseEffectCustom({input}) {
 useEffect(()=>{
  document.title = `chats ${input}`
 },[input])
 

}
