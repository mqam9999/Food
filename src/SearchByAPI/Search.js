import React, {useState} from 'react';

export default function Search() {
  const [find,setFind]= useState();
  let Update = (e)=>{setFind(e.target.value)}

  return (
    <div className='container'>
       <div className="container">
        <div className="mobileMar">
          <div className="topbtn"><button className='circle1'></button><button className='circle1'></button></div>
          <div className="mobilePad">
            
          <div className='input'><input type="text" placeholder='Search' name='search' value={find} onChange={Update} /></div>
          <div className={find===""?null:'img'}>{find===""?null:<img src={`https://source.unsplash.com/400x400/?${find}`} alt="img"/>}</div>

          </div>
          <div className='d-flex justify-content-center btn1'><button className='btntab'></button></div>
        </div>
       </div>
     </div>
  )
}
