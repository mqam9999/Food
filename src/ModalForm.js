import React from 'react'

export default function ModalForm(props) {
    let {Update, Add, input,EditAndAdd,addshow,editshow,setOpenForm}=props;
    let {name,age}=input;
  return (
   <>
    
    <div className='header'>
      <form >
      <div className='child row'>
        <i style={{display:'flex',justifyContent:'end'}} onClick={()=>setOpenForm(false)} class="mb-2 fa-solid fa-circle-xmark"></i>
      <input required type="text" className='form-control col-12 my-1' name='name' value={name} onChange={Update} placeholder='Item'/>
      <textarea rows={4} required type="text" className='form-control col-12 my-1' name='age' value={age} onChange={Update} placeholder='Description'/>
      {addshow&&<button className='btn btn-primary col-12 col-sm-10 my-1 mx-auto' onClick={Add}>Add</button>}
      {editshow&&<button className='btn btn-primary col-12 col-sm-10 my-1 mx-auto' onClick={EditAndAdd}>Edit</button>}
    </div>
      </form>
    </div>

   </>
  )
}
