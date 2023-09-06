import React from 'react';
import Card from './Card.js';
import CardData from './CardData';
import {Link} from 'react-router-dom'


export default function CardNetflix() {
  return (
    <>
    <div className='bg text-center py-3'>
      
        <div className='main d-flex justify-content-center'>
            <span><h1 style={{color:"red"}}><b className='marg'> NETLIX TOP MOVIES</b></h1></span>
            <span className='login text-white float-end d-flex'>
                <a className="nav-link" href="https://www.netflix.com/in/login"><button className='fst btn btn-danger'>SIGN IN</button> </a>
                <Link className="nav-link" to="/CardNetflixSIGNUP"><button className=' btn btn-danger'>SIGN UP</button></Link>
            </span>
        </div> 
        




      <div className=' cardmargin row container mx-auto '>
        {CardData.map((e)=>{
            return <Card 
                 img={e.img}
                 title={e.title}
                 link={e.link}
            />
        })}
        </div>
        </div>
    </>
  )
}
