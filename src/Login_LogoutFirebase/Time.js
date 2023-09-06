import {useState} from 'react'

export default function Time() {
    const [ctime,setctime]=useState()
    
    setInterval(() => {
      let dj = new Date().toLocaleTimeString()
      setctime(dj)
    }, 1000);
    return [ctime]
}
