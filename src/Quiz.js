
import React, { useEffect } from 'react'
import './Quiz.css'
import { useState } from 'react'

export default function Quiz() {
   
  const [show,setshow]=useState();
  const [Light1,setLight1]=useState();
  const [Light2,setLight2]=useState();
  const [Light3,setLight3]=useState();
  const [Light4,setLight4]=useState();
  const [Light5,setLight5]=useState();
  const [Light6,setLight6]=useState();
  const [Light7,setLight7]=useState();
  const [Light8,setLight8]=useState();
  const [Light9,setLight9]=useState();
  const [Light10,setLight10]=useState();

  const [Score,setScore]=useState(0);
  const [input,setinput]=useState({opt1:'',opt2:'',opt3:'',opt4:'',opt5:'',opt6:'',opt7:'',opt8:'',opt9:'',opt10:''});

  const [Active1,setActive1]=useState(false);
  const [Active2,setActive2]=useState(false);
  const [Active3,setActive3]=useState(false);
  const [Active4,setActive4]=useState(false);
  const [Active5,setActive5]=useState(false);
  const [Active6,setActive6]=useState(false);
  const [Active7,setActive7]=useState(false);
  const [Active8,setActive8]=useState(false);
  const [Active9,setActive9]=useState(false);
  const [Active10,setActive10]=useState(false);

 

  let Update = (e)=>{  
    let {name,id}=e.target;
    setinput({...input,[name]:id})
  }

  let Submit1 = ()=>{
    input.opt1==='opt1'?setLight1('lightgreen'):setLight1('red')
    setshow(1);
    setActive1(true);
    input.opt1==='opt1'?setScore(Score+5):setScore(Score+0);
  }
  let Submit2 = ()=>{
    input.opt2==='opt1'?setLight2('lightgreen'):setLight2('red');
    setActive2(true)
    setshow(2)
    input.opt2==='opt1'?setScore(Score+5):setScore(Score+0);
  }
  let Submit3 = ()=>{
    input.opt3==='opt1'?setLight3('lightgreen'):setLight3('red');
    setActive3(true)
    setshow(3)
    input.opt3==='opt1'?setScore(Score+5):setScore(Score+0);
  }
  let Submit4 = ()=>{
    input.opt4==='opt1'?setLight4('lightgreen'):setLight4('red');
    setActive4(true)
    setshow(4)
    input.opt4==='opt1'?setScore(Score+5):setScore(Score+0);
  }
  let Submit5 = ()=>{
   input.opt5==='opt1'?setLight5('lightgreen'):setLight5('red');
   setActive5(true)
   setshow(5)
   input.opt5==='opt1'?setScore(Score+5):setScore(Score+0);
 }
 let Submit6 = ()=>{
   input.opt6==='opt1'?setLight6('lightgreen'):setLight6('red');
   setActive6(true)
   setshow(6)
   input.opt6==='opt1'?setScore(Score+5):setScore(Score+0);
 }
 let Submit7 = ()=>{
   input.opt7==='opt1'?setLight7('lightgreen'):setLight7('red');
   setActive7(true)
   setshow(7)
   input.opt7==='opt1'?setScore(Score+5):setScore(Score+0);
 }
 let Submit8 = ()=>{
   input.opt8==='opt1'?setLight8('lightgreen'):setLight8('red');
   setActive8(true)
   setshow(8)
   input.opt8==='opt1'?setScore(Score+5):setScore(Score+0);
 }
 let Submit9 = ()=>{
   input.opt9==='opt1'?setLight9('lightgreen'):setLight9('red');
   setActive9(true)
   setshow(9)
   input.opt9==='opt1'?setScore(Score+5):setScore(Score+0);
 }
 let Submit10 = ()=>{
   input.opt10==='opt1'?setLight10('lightgreen'):setLight10('red');
   setActive10(true)
   setshow(10)
   input.opt10==='opt1'?setScore(Score+5):setScore(Score+0);
 }

  useEffect(()=>{
   return setshow(0);
  },[setshow])


  return (
    <div className='container-fluid body pb-1'>
      <h1 className='text-center text-white fw-bold pt-2' style={{letterSpacing:'3px',fontFamily:'revert'}} >
         QUIZ
      </h1>
      <div>
         
      <div className='row d-flex justify-content-center py-4'>
        <button disabled={Active1} style={{backgroundColor:Light1, width:'60px',height:'60px',fontSize:'25px'}} onClick={()=>setshow(0)} className={`fw-bold p-3 mx-3 d-flex justify-content-center align-items-center ${show===0?'bg-warning':''}`}>1</button>
        <button disabled={Active2} style={{backgroundColor:Light2, width:'60px',height:'60px',fontSize:'25px'}} onClick={()=>setshow(1)} className={`fw-bold p-3 mx-3 d-flex justify-content-center align-items-center ${show===1?'bg-warning':''}`}>2</button>
        <button disabled={Active3} style={{backgroundColor:Light3, width:'60px',height:'60px',fontSize:'25px'}} onClick={()=>setshow(2)} className={`fw-bold p-3 mx-3 d-flex justify-content-center align-items-center ${show===2?'bg-warning':''}`}>3</button>
        <button disabled={Active4} style={{backgroundColor:Light4, width:'60px',height:'60px',fontSize:'25px'}} onClick={()=>setshow(3)} className={`fw-bold p-3 mx-3 d-flex justify-content-center align-items-center ${show===3?'bg-warning':''}`}>4</button>
        <button disabled={Active5} style={{backgroundColor:Light5, width:'60px',height:'60px',fontSize:'25px'}} onClick={()=>setshow(4)} className={`fw-bold p-3 mx-3 d-flex justify-content-center align-items-center ${show===4?'bg-warning':''}`}>5</button>
        <button disabled={Active6} style={{backgroundColor:Light6, width:'60px',height:'60px',fontSize:'25px'}} onClick={()=>setshow(5)} className={`fw-bold p-3 mx-3 d-flex justify-content-center align-items-center ${show===5?'bg-warning':''}`}>6</button>
        <button disabled={Active7} style={{backgroundColor:Light7, width:'60px',height:'60px',fontSize:'25px'}} onClick={()=>setshow(6)} className={`fw-bold p-3 mx-3 d-flex justify-content-center align-items-center ${show===6?'bg-warning':''}`}>7</button>
        <button disabled={Active8} style={{backgroundColor:Light8, width:'60px',height:'60px',fontSize:'25px'}} onClick={()=>setshow(7)} className={`fw-bold p-3 mx-3 d-flex justify-content-center align-items-center ${show===7?'bg-warning':''}`}>8</button>
        <button disabled={Active9} style={{backgroundColor:Light9, width:'60px',height:'60px',fontSize:'25px'}} onClick={()=>setshow(8)} className={`fw-bold p-3 mx-3 d-flex justify-content-center align-items-center ${show===8?'bg-warning':''}`}>9</button>
        <button disabled={Active10} style={{backgroundColor:Light10, width:'60px',height:'60px',fontSize:'25px'}} onClick={()=>setshow(9)} className={`fw-bold p-3 mx-3 d-flex justify-content-center align-items-center ${show===9?'bg-warning':''}`}>10</button>
      </div>


      <div className='queBox mx-auto bg-info col-12 col-sm-10 col-md-8 col-lg-6' >
      <div className='my-3 bg-info p-5' hidden={show!==0}>
        <p style={{fontSize:'25px',fontWeight:'bold',fontFamily:'revert',marginBottom:'10px'}}>
         Which of the following is used in React.js to increase performance?
         </p>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt1" id='opt1' value={input.opt1}  onChange={Update}/>Virtual DOM
           <label class="form-check-label" for="radio1"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt1" id='opt2' value={input.opt1} onChange={Update}/>Original DOM
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt1" id='opt2' value={input.opt1} onChange={Update}/>Both A and B
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt1" id='opt2' value={input.opt1} onChange={Update}/>None of the above
           <label class="form-check-label" for="radio2"></label>
        </div>
          <button disabled={!input.opt1}  className='mt-3 btn btn-dark' onClick={Submit1}>Submit</button>
      </div>

      <div className='my-3 bg-info p-5' hidden={show!==1}>
      <p style={{fontSize:'25px',fontWeight:'bold',fontFamily:'revert',marginBottom:'10px'}}>
         What is ReactJS?
      </p>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt2" id='opt2' value={input.opt2}  onChange={Update}/>Server-side framework
           <label class="form-check-label" for="radio1"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt2" id='opt1' value={input.opt2} onChange={Update}/>user-interface framework
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt2" id='opt2' value={input.opt2} onChange={Update}/>both A and B
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt2" id='opt2' value={input.opt2} onChange={Update}/>None of the above
           <label class="form-check-label" for="radio2"></label>
        </div>
          <button disabled={!input.opt2} className='mt-3 btn btn-dark' onClick={Submit2}>Submit</button>
      </div>

      <div className='my-3 bg-info p-5' hidden={show!==2}>
      <p style={{fontSize:'25px',fontWeight:'bold',fontFamily:'revert',marginBottom:'10px'}}>
         Identify the one which is used to pass data to components from outside
      </p>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt3" id='opt1' value={input.opt3}  onChange={Update}/>props
           <label class="form-check-label" for="radio1"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt3" id='opt2' value={input.opt3} onChange={Update}/>Render with arguments
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt3" id='opt2' value={input.opt3} onChange={Update}/>setState
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt3" id='opt2' value={input.opt3} onChange={Update}/>PropTypes
           <label class="form-check-label" for="radio2"></label>
        </div>
          <button disabled={!input.opt3} className='mt-3 btn btn-dark' onClick={Submit3}>Submit</button>
      </div>

      <div className='my-3 bg-info p-5' hidden={show!==3}>
      <p style={{fontSize:'25px',fontWeight:'bold',fontFamily:'revert',marginBottom:'10px'}}>
         Who created React.js ?
      </p>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt4" id='opt2' value={input.opt4}  onChange={Update}/>Jordan Mike
           <label class="form-check-label" for="radio1"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt4" id='opt2' value={input.opt4} onChange={Update}/>Tim Lee
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt4" id='opt2' value={input.opt4} onChange={Update}/>Jordan Lee
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt4" id='opt1' value={input.opt4} onChange={Update}/>Jordan Walke 
           <label class="form-check-label" for="radio2"></label>
        </div>
          <button disabled={!input.opt4} className='mt-3 btn btn-dark' onClick={Submit4}>Submit</button>
      </div>

      <div className='my-3 bg-info p-5' hidden={show!==4}>
      <p style={{fontSize:'25px',fontWeight:'bold',fontFamily:'revert',marginBottom:'10px'}}>
         In which language is React.js written?
      </p>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt5" id='opt2' value={input.opt5}  onChange={Update}/>Python
           <label class="form-check-label" for="radio1"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt5" id='opt2' value={input.opt5} onChange={Update}/>Java
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt5" id='opt1' value={input.opt5} onChange={Update}/>Javascript
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt5" id='opt2' value={input.opt5} onChange={Update}/>PHP
           <label class="form-check-label" for="radio2"></label>
        </div>
          <button disabled={!input.opt5} className='mt-3 btn btn-dark' onClick={Submit5}>Submit</button>
      </div>

      <div className='my-3 bg-info p-5' hidden={show!==5}>
      <p style={{fontSize:'25px',fontWeight:'bold',fontFamily:'revert',marginBottom:'10px'}}>
      What is Babel?
      </p>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt6" id='opt2' value={input.opt5}  onChange={Update}/>Both A and B
           <label class="form-check-label" for="radio1"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt6" id='opt2' value={input.opt6} onChange={Update}/>JavaScript transpiler.
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt6" id='opt2' value={input.opt6} onChange={Update}/>Javascript interpreter
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt6" id='opt1' value={input.opt6} onChange={Update}/>JavaScript compiler
           <label class="form-check-label" for="radio2"></label>
        </div>
          <button disabled={!input.opt5} className='mt-3 btn btn-dark' onClick={Submit6}>Submit</button>
      </div>

      <div className='my-3 bg-info p-5' hidden={show!==6}>
      <p style={{fontSize:'25px',fontWeight:'bold',fontFamily:'revert',marginBottom:'10px'}}>
      Identify the command used to create a react app.
      </p>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt7" id='opt2' value={input.opt7}  onChange={Update}/>npm install create-react-app
           <label class="form-check-label" for="radio1"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt7" id='opt1' value={input.opt7} onChange={Update}/>npm install -g create-react-app
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt7" id='opt2' value={input.opt7} onChange={Update}/>npm -g create-react-app
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt7" id='opt2' value={input.opt7} onChange={Update}/>None of the above
           <label class="form-check-label" for="radio2"></label>
        </div>
          <button disabled={!input.opt5} className='mt-3 btn btn-dark' onClick={Submit7}>Submit</button>
      </div>

      <div className='my-3 bg-info p-5' hidden={show!==7}>
      <p style={{fontSize:'25px',fontWeight:'bold',fontFamily:'revert',marginBottom:'10px'}}>
      Which of the following port is the default where webpack-dev-server runs?
      </p>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt8" id='opt1' value={input.opt8}  onChange={Update}/>8080
           <label class="form-check-label" for="radio1"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt8" id='opt2' value={input.opt8} onChange={Update}/>3000
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt8" id='opt2' value={input.opt8} onChange={Update}/>3306
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt8" id='opt2' value={input.opt8} onChange={Update}/>3030
           <label class="form-check-label" for="radio2"></label>
        </div>
          <button disabled={!input.opt5} className='mt-3 btn btn-dark' onClick={Submit8}>Submit</button>
      </div>

      <div className='my-3 bg-info p-5' hidden={show!==8}>
      <p style={{fontSize:'25px',fontWeight:'bold',fontFamily:'revert',marginBottom:'10px'}}>
      A state in React.js is also known as?
      </p>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt9" id='opt2' value={input.opt9}  onChange={Update}/>Permanent storage
           <label class="form-check-label" for="radio1"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt9" id='opt2' value={input.opt9} onChange={Update}/>External storage of the component
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt9" id='opt1' value={input.opt9} onChange={Update}/>The internal storage of the component
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt9" id='opt2' value={input.opt9} onChange={Update}/>All of the above
           <label class="form-check-label" for="radio2"></label>
        </div>
          <button disabled={!input.opt5} className='mt-3 btn btn-dark' onClick={Submit9}>Submit</button>
      </div>

      <div className='my-3 bg-info p-5' hidden={show!==9}>
      <p style={{fontSize:'25px',fontWeight:'bold',fontFamily:'revert',marginBottom:'10px'}}>
      How many elements can a valid react component return?
      </p>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt10" id='opt1' value={input.opt10}  onChange={Update}/>1
           <label class="form-check-label" for="radio1"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt10" id='opt2' value={input.opt10} onChange={Update}/>2
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt10" id='opt2' value={input.opt10} onChange={Update}/>3
           <label class="form-check-label" for="radio2"></label>
        </div>
        <div class="form-check fs-5 fw-bold">
           <input type="radio" class="form-check-input"  name="opt10" id='opt2' value={input.opt10} onChange={Update}/>4
           <label class="form-check-label" for="radio2"></label>
        </div>
          <button disabled={!input.opt5} className='mt-3 btn btn-dark' onClick={Submit10}>Submit</button>
      </div>

      <div className='my-3 bg-info p-5' hidden={show!==10}>
        <h2>YOUR TOTAL SCORES ARE : <b className='fs-1'>{Score} out of 50</b></h2>
        <h3><button className='my-4 px-4 py-1 shadow-lg' style={{borderRadius:'50px'}} onClick={()=>{
          setLight1('white');setLight2('white');setLight3('white');setLight4('white');setLight5('white');
          setLight6('white');setLight7('white');setLight8('white');setLight9('white');setLight10('white');
          setActive1(false);setActive2(false);setActive3(false);setActive4(false);setActive5(false);
          setActive6(false);setActive7(false);setActive8(false);setActive9(false);setActive10(false);
          setshow(0);
          setScore(0)
          setinput({opt1:'',opt2:'',opt3:'',opt4:'',opt5:'',opt6:'',opt7:'',opt8:'',opt9:'',opt10:''})
        }}><b>Play Again</b></button></h3>
      </div>
      </div>

      

    </div>
    </div>
  )
}
