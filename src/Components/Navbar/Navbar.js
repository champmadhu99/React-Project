import React from 'react'
import './Navbar'
import logo from '../../assets/logo.png'
import './Navbar.css'



const Navbar = () => {
  return (
    <nav className='container-fluid'>
        <img src={logo} alt='' className='logo'></img>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Pages</li>
            <li><button className='btn btn'>Contact</button></li>
        </ul>
      
    </nav>
  )
}

export default Navbar
