import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'

export default function NavBar() {
  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 fixed-top  ">
  <div className="container-fluid">
    <a className="navbar-brand f-1" href="#">Weather-App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto pe-3 mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
        <li className="nav-item pe-5">
          <Link className="nav-link" to="weather" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to="search">Search</Link>
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
  </>
  
}
