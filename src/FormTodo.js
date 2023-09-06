import React, { useState } from 'react'

export default function FormTodo() {
    const [input,setinput]=useState({fname:'',city:'',country:''});
    const [store,setstore]=useState([]);
    const [getid,setgetid]=useState();
   
    let Update=(e)=>{
     let {name,value}=e.target;
     setinput({...input,[name]:value})
    }
    let Add = ()=>{
        let ID = {id:new Date().getTime().toString(),input}
        setstore([...store,ID])
        setinput({fname:'',city:'',country:''})
    }
    let UPDATEDATA = ()=>{
        setstore(store.map((e)=>{
            return e.id===getid?{...e,input}:e   
        }))
        setinput({fname:'',city:'',country:''})
    }
    let EDIT = (id) =>{
        let EditedItem = store.find((e)=>{
            return e.id===id
        })
        setinput(EditedItem.input)
        setgetid(id)
    }
    
  return (
    <div className='m-5'>
      
      <input type="text" placeholder='First name' name='fname' value={input.fname} onChange={Update} /><br />
      <input type="text" placeholder='Last name' name='city' value={input.city} onChange={Update} /><br />
      <input type="text" placeholder='Description' name='country' value={input.country} onChange={Update} /><br />

      <button onClick={Add}>Submit</button>
      <button onClick={UPDATEDATA}>UPDATE</button>

            {/* -----------SHOWING---------- */}
      <div>
        {store.map((e)=>{
            return(
                <>
        <span>Name :</span> <span><input type="text" value={e.input.fname} /></span><br />
        <span>City :</span> <span><input type="text" value={e.input.city}/></span><br />
        <span>Country :</span> <span><input type="text" value={e.input.country}/></span><br />
        <button onClick={()=>EDIT(e.id)}>EDIT</button>
                </>
            )
        })}
      </div>

      
    </div>
  )
}
