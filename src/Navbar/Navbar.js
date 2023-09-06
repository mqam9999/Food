import React from 'react'
import {NavLink} from 'react-router-dom'
// import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    {/* <NavLink className="navbar-brand" href="/">Logo</NavLink> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">BLOG</NavLink>
        </li>  
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle btn-active" exact to="/dropdown"  data-bs-toggle="dropdown">Dropdown</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/new1">New1</NavLink></li>
            <li><NavLink className="dropdown-item" to="/new2">New2</NavLink></li>
            <li><NavLink className="dropdown-item" to="/new3">New3</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
