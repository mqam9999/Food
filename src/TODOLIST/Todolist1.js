import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Todolist1() {
    const[input,setinput]=useState({name:''});
    const[store,setstore]=useState([]);
    const[editbtn,seteditbtn]=useState(false);
    const[tackleId,settackleId]=useState();
    useEffect(()=>{
        if(localStorage.getItem('todo')){
            setstore(JSON.parse(localStorage.getItem('todo')))   
}},[])

    let Update=(e)=>{
        let {name,value}=e.target;
        setinput({...input,[name]:value})
    }
    
    let Add = ()=>{
        if(editbtn){
            setstore(store.map((e)=>{
                if (e.id===tackleId){
                    return {...e,input}
                }return e
            }))
            setinput({name:''})
            seteditbtn(false)
            settackleId()
            
        }
        else{
            let ID={id:new Date().getTime().toString(),input}
            setstore([...store,ID])
            setinput({name:''})
            localStorage.setItem('todo',JSON.stringify([...store,ID])) 
        } 
    }
    let Delete=(i)=>{
        let todos=store.filter((e)=>{
                return  e.id!==i 
        })
        setstore(todos)
        localStorage.setItem('todo',JSON.stringify(todos))
    }
    let Edit=(id)=>{
        let todoss=store.find((e)=>{
                return  e.id===id     
        })
        setinput(todoss.input)
        seteditbtn(true)
        settackleId(id)
    }
    
    
  return (
    <div>
      <input type="text" name='name' value={input.name} placeholder='Add list' onChange={Update}/>
      {
        editbtn?
        <button onClick={Add}>Update</button>:
       <button disabled={!input.name} onClick={Add}>+</button>
      }
      

      <div>
        {store.map((e,i)=>{
            return (
        <div key={i} className='d-flex'>
            <h6>{e.input.name}</h6>
            <h6><i class="fa-solid fa-trash ms-4" onClick={()=>Delete(e.id)}></i></h6>
            <h6><i class="fa-solid fa-pen-to-square ms-4" onClick={()=>Edit(e.id)}></i></h6>
        </div>
            )
        })}
      </div>

    
      
    </div>
  )
}
