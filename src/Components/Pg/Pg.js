import React from 'react'
import './Pg.css'
import program1 from '../../assets/pr1.jfif'
import program2 from '../../assets/pr2.jfif'
import program3 from '../../assets/pr3.jfif'

const Pg = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program1}alt=''></img>
        </div>

        <div className='program'>
            <img src={program2}alt=''></img>
        </div>

        <div className='program'>
            <img src={program3}alt=''></img>
        </div>
      
    </div>
  )
}

export default Pg
