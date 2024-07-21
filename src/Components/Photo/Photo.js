import React from 'react'
import './Photo.css'
import g1 from '../../assets/p1.jfif'
import g2 from '../../assets/p2.jfif'
import g3 from '../../assets/p3.jfif'
import g4 from '../../assets/pr3.jfif'

const Photo = () => {
  return (
    <section>
        <div className='container align-items-center '>
            <div className='row'>
                <div className='col-6 left' >
                    <img src={g1} alt='' width="380" height="250" className='py-3 '></img>
                    <img src={g2} alt=''width="380" height="250"></img>
                </div>
                <div className='col-6 right'>
                    <img src={g3} alt='' width="400" height="250" className='py-3'></img>
                    <img src={g4} alt=''width="400" height="250"></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Photo


