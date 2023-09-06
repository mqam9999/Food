import React, { useEffect, useState } from 'react'

export default function MyOrder(props) {
    let {cart2order}=props;
    const [mystate,setmystate]=useState([]);
    useEffect(()=>{
        setmystate([cart2order])
        
        if (localStorage.getItem('new')) {
            setmystate(JSON.parse(localStorage.getItem('new')))
        }
    },[])



  return (
    <div>
      <h1>MyOrder</h1>
      {mystate.map((e)=>{console.log(e);
        return (
            <>
            <h5>{e.name}</h5>
            <h5>{e.price}</h5>
            </>
        )
      })}
    </div>
  )
}
