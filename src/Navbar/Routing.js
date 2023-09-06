import React from 'react'
import Home from './Home'
import Blog from './Blog'
import About from './About'
import New1 from './New1'
import New2 from './New2'
import New3 from './New3'
import Navbar from './Navbar'

import { Routes, Route } from "react-router-dom";

export default function Routing() {
  return (
    <>
      <Navbar/>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/new1" exact={<New1 />} />
          <Route path="/new2" exact={<New2 />} />
          <Route path="/new3" exact={<New3 />} />
          
        
      </Routes>
    </>
  )
}
