import React from 'react'
import './Gallery.css'
import g1 from '../../assets/p1.jfif'
import g2 from '../../assets/p2.jfif'
import g3 from '../../assets/p3.jfif'
import g4 from '../../assets/p4.jfif'

const gallery = () => {
  return (
    <section>
        <div className='container'>
            <div className='row'>
                <div className='col-5'>
                    <img src={g1} alt=''></img>
                    <img src={g2} alt=''></img>
                </div>
                <div className='col-5'>
                    <img src={g3} alt=''></img>
                    <img src={g4} alt=''></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default gallery
