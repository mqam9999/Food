
import { useMemo } from 'react'

export default function Custom({input}) {
  let machine = useMemo(()=>{
    document.title=`chat (${input})`
    return input
  },[input])
  return {machine}
}
