import React from 'react'
import {NavLink} from 'react-router-dom'
import './Delete.css'
// import $ from 'jquery'



export default function Delete() {

  return (
    <div className='container-fluid'>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </nav>

      <body>
        <div id='home' className='d-flex justify-content-center align-items-center bg-info text-white' style={{width:'100%',height:'100vh'}}>
          <h1>Home</h1>
        </div>
      </body>
    </div>
  )
}
