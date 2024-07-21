import React from 'react'
import './About.css'
import about1 from '../../assets/about.jfif'




const About = () => {
  return (
    <section className='about'>
      <div className='container '>
        <div className='row float-end'>

          <div className='col-6 '>
          <img src={about1} className='about-img '></img>
          </div>
         <div className='col-5 px-4'>
         <h1 className='text1 '>We Telecast our 
            Coffee Making Live</h1>
            <h5 className='text1 py-2'>We are here to deliver the best coffee for you</h5>
            <h6 className='text1 py-4 '>Free brown video play icon. Customize and download brown 
video play icon. Brown video icons. Brown video play png and
brown video play transparent for download.</h6>

         </div>
        </div>
      </div>
    </section>





)
}

export default About
