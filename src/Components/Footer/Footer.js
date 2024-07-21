import React from 'react'
import './Footer.css'
import c1 from '../../assets/logo.png'
import c2 from '../../assets/f1.png'
import c3 from '../../assets/f2.png'
import c4 from '../../assets/f3.png'

const Footer = () => {
  return (
    <section className='footer-section  '>
        <div className='footer container'>
        
        <div className='footer-text '>
            <img src={c1} alt='' className='logo-img  position-absolute top-30 start-50'></img>
            <div className='row position-absolute top-50 start-50 '>
                <h5 className='text-light px-5 '>Social With Us</h5>
            <img src={c2} alt='' className='logo ' ></img>
            <img src={c3} alt='' className='logo'></img>
            <img src={c4} alt='' className='logo' ></img>

            </div>
            </div>

        </div>

        <div className='container position-absolute top-50 start-0'>
            <h2>About Us</h2>
            <h6>Kenan Foundation Asia is a non-profit organization <br/>with a network of partnerships. Sustainable Development. </h6>
            <h2 className='py-3'>Newsletter</h2>
            <button className='btn btn-dark'>Enter email</button>
        </div>
        
    </section>
  )
}

export default Footer
