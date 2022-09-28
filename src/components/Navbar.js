import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
    
      <Link to={`/register`}>
        Register
      </Link>
      <br/>
      <Link to={`/login`}>
      Login</Link>
    </div>
  )
}

export default Navbar
