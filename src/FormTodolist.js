import React, { useState } from 'react'
import ModalForm from './ModalForm'
import './FormTodolist.css'
import waterfall from '../src/Waterfall.mp4'

export default function FormTodolist() {
  const [input,setinput]=useState({name:'',age:''});
  const [list,setlist]=useState([]);
  const [OpenForm,setOpenForm]=useState(false);
  const [tackleId,settackleId]=useState();
  const [editshow,seteditshow]=useState(false);
  const [addshow,setaddshow]=useState();
  let Update = (e)=>{
    let {name,value}=e.target;
    setinput({...input,[name]:value})
  }
  let Add =(e)=>{
    e.preventDefault();
    if (input.name.length<1||input.age.length<1) {
      alert('fill input field')
    }else{
      let ID ={id:new Date().getTime().toString(),...input}
    setlist([...list,ID])
    setOpenForm(false)
    setinput({name:'',age:''})
    }
  }
  let Delete = (id)=>{
    let process = list.filter((e)=>{
      return e.id!==id
    })
    setlist(process)
  }
  
    let AddForm = ()=>{
       OpenForm===true?setOpenForm(false):setOpenForm(true)
       AddForm?setaddshow(true):setaddshow(false)
       seteditshow(false)
       }
    
      let Edit = (id)=>{
        let edit=list.find((e)=>{
          return e.id===id
        })
        seteditshow(true)
        setaddshow(false)
        setOpenForm(true)
        setinput(edit)
        settackleId(id)
      }

  let {name,age}=input;
  let EditAndAdd=(e)=>{
    e.preventDefault();
    if (name.length<1||age.length<1) {
      alert('fill input field')
    }else{
      setlist(list.map((e)=>{
        if (e.id===tackleId) {
          return {...e,name,age}
        }
        return e
      }))
      setinput({name:'',age:''})
      setOpenForm(false)
      settackleId()
    }
  }
  

  return (
    <div className='container-fluid m-0 p-0'>
      <div className='TodoWater'>
        <video src={waterfall} autoPlay loop muted></video>
      </div>
      
      <div className='main'>
      <button className='btn btn-primary mt-2' onClick={AddForm}>Add Task</button>

{OpenForm&&
<ModalForm Update={Update} Add={Add} input={input} editshow={editshow} EditAndAdd={EditAndAdd} addshow={addshow} setOpenForm={setOpenForm}/>
}


{
    list.map((e,i)=>{
return<div key={i} className='row d-flex justify-content-center my-3 mx-auto p-2'>

     <div className='col-12 col-sm-12 col-md-7 col-lg-6'>
      <div className="row bg-warning box">
      <span className='col-12 mx-auto'>
       <input type="text" placeholder='Item' className='form-control  my-1' name='name' value={e.name}  />
     </span>
     <span className='col-12 mx-auto'>
       <textarea rows={6} type="text" placeholder='Description' className='form-control my-1' name='age' value={e.age} />
     </span>
       <div className='row mx-auto'>
       <button className='btn btn-primary col-12 col-sm-12 col-md-5  mx-auto my-1' onClick={()=>Edit(e.id)}>Edit</button>
       <button className='btn btn-primary col-12 col-sm-12 col-md-5 mx-auto my-1' onClick={()=>Delete(e.id)}>Delete</button>
       </div>
       
      </div>
     </div>

     </div>
    
    })
}
      </div>

    </div>
  )
}
