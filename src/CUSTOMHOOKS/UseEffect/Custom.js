
import { useEffect } from 'react'


export default function Custom(input) {
    
  useEffect(()=>{
   alert('hi')
   document.title = `chat ${input}`
  })
}
