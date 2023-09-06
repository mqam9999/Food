import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import Child from './Child'

    let Morning = createContext()
    let Evening = createContext()

export default function Parent() {
    const [breakColor,setbreakColor]=useState('pink');
    const [lunchColor,setlunchColor]=useState('pink');
    
  return (
    <div>
      <Morning.Provider value={{EatBreakfast:'breakfast',Breakfasttime:'9am',breakColor:breakColor,setbreakColor:setbreakColor}}>
        <Evening.Provider value={{EatLunch:'Lunch',Lunchtime:'2pm',lunchColor:lunchColor,setlunchColor:setlunchColor}}>
            <Child/>
        </Evening.Provider>
      </Morning.Provider>
    </div>
  )
}
export {Morning,Evening};