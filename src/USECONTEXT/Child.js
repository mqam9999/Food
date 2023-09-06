import React from 'react'
import { useContext } from 'react'
import SuperChild from './SuperChild'
import {Morning} from './Parent'


export default function Child() {
  let {EatBreakfast,Breakfasttime} = useContext(Morning);
  return (
    <div>
      <SuperChild/>
      <h1>He ate {EatBreakfast} at {Breakfasttime}</h1>
    </div>
  )
}
