import React, { useState } from 'react'
import Data from './MapData'

let butt = [...new Set(Data.map((e)=>{return e.category}))];

export default function Map() {
  const [newitem]=useState(butt);
  const [item,setItem]=useState(Data);
  let filterItem = (category) =>{
   setItem (Data.filter((e)=>{
    return e.category===category;
   }))
   
  }
  return (
    <div className='container-fluid'>
      
      <div className='row mb-4 mt-3 bg-dark p-3 scroll'>
      {newitem.map((e)=>{
      return <button className='mx-auto btn btnhead btn-light col-12 col-sm-2 col-md-2 mt-1 mb-1' onClick={()=>{filterItem(e)}}>{e}</button>     
    })}
        <button className='mx-auto btn btnhead btn-light col-12 col-sm-2 col-md-2 mt-1 mb-1' onClick={()=>{setItem(Data)}}>All</button>
      </div>

      <div className='row g-4'>
        {item.map((e)=>{
          return(
          <>
          <div className="card col-12 col-sm-6 col-md-4 col-lg-3 scale shadow-lg ">
          <img className="card-img-top mx-auto " src={e.img} alt="cardimg" style={{width:'100%',height:300}} />
          <div className="card-body">
            <h4 className="card-title">{e.name}</h4>
            <h4 className="card-title">{e.price}</h4>
            <p className="card-text">{e.description}</p>
          <div><button className='btn btn-danger col-12 '>Order</button></div>
          </div>
        </div>
        </>
        )
        })}
        
      </div>
    </div>
  )
}
