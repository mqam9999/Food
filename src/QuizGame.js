import React, { useState } from 'react'
import Data from './QuizData'

export default function QuizGame() {
    const [nmbr,setnmbr]=useState(0)
    // const [topbtncolors,settopbtncolors]=useState(false)
    const [score,setscore]=useState(0)
    const [Result,setResult]=useState(false)
    const [colors,setcolors]=useState()
    


    let Next=(e)=>{
        e.preventDefault();
        nmbr<Data.length-1?setnmbr(nmbr+1):setResult(true);
        setcolors(false)
        colors===Data[nmbr].answer?setscore(score+5):setscore(score+0)
    }
    let PlayAgain=()=>{
        setResult(false)
        setscore(0)
        setcolors(false)
        setnmbr(0)
    }
    

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center' style={{width:'100vw',height:'100vh',backgroundColor:'navy'}}>
      <div>
         
      {/* <div className='d-flex justify-content-center py-4'>
        {Data.map((e,i)=>{
            return <button onClick={()=>{setINC(nmbr+1);settopbtncolors(i+true)}} key={i} style={{width:'60px',height:'60px',fontSize:'25px'}} className={`${topbtncolors===i+true?'bg-warning':''} fw-bold p-3 mx-3 d-flex justify-content-center align-items-center `}>{e.No}</button>
        })}
      </div> */}

      {Result?
    <div className=' bg-info p-5'>
      <h2>YOUR TOTAL SCORES ARE : <b className='fs-1'>{score} out of {Data.length*5}</b></h2>
      <h3><button onClick={PlayAgain} className='my-4 px-4 py-1 shadow-lg' style={{borderRadius:'50px'}}>Play Again</button></h3>
    </div>
    :
    <div  className=' mx-auto bg-info' style={{width:'500px',height:'300px'}}>
           {/* <h1>{score}</h1> */}
      <div className=' bg-info p-5' >
        
        <h3 >{nmbr+1}. {Data[nmbr].question}</h3>
        {Data[nmbr].Options.map((e,i)=>{return <button onClick={()=>setcolors(i+true)} className={`w-100 m-1 ${colors===i+true?'bg-warning':''}`} key={i}>{e}</button>})}
        <button disabled={!colors} onClick={Next} className='mt-3' >Submit</button>
        
      </div>
    </div>
     }
      

    </div>
    </div>
  )
}
