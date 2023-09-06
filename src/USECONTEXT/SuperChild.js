import React from 'react'
import { useContext } from 'react';
import {Morning,Evening} from './Parent';

export default function SuperChild() {
  
    
    let {EatBreakfast,Breakfasttime,breakColor,setbreakColor} = useContext(Morning);
    let {EatLunch,Lunchtime,lunchColor,setlunchColor} = useContext(Evening);
    
  return (
    <div>
      <h2 style={{color:breakColor}}>I ate {EatBreakfast} at {Breakfasttime}</h2>
      <button onClick={()=>setbreakColor('red')}>ColorChange</button>
      <h2 style={{color:lunchColor}}>I ate {EatLunch} at {Lunchtime}</h2>
      <button onClick={()=>setlunchColor('green')}>ChangeColor</button>
    </div>
    
  )
}
