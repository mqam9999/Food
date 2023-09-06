import React, { createContext } from 'react';
import UseContext from './UseContext';

const Address = createContext();
const District = createContext();
export default function CreateContext() {
   
  return (
    <div>
      <Address.Provider value={"Asansol"}>
        <District.Provider value={"Paschim Bardhaman"}>
       <UseContext/>
       </District.Provider>
      </Address.Provider>
    </div>
  )
  }
export {Address,District} ;