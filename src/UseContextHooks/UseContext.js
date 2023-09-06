import React, { useContext } from 'react'
import {Address,District} from './CreateContext'

export default function UseContext() {
    let place = useContext(Address)
    let district = useContext(District)
  return (
    <div>
      <h1>I live in {place} and my district is {district}</h1>
    </div>
  )
}
