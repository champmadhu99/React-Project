import React from 'react'
import './Idea.css'
import r1 from '../../assets/item4.jfif'
import r2 from '../../assets/item5.jfif'

const Idea = () => {
  return (
    <section className='idea-section'>
        <div className='container '>
            <div className='row '>
            <div className="col-lg-5 ms-auto my-4">
              <div className="card " >
                <div className="card-body">
                  <div>
                    <img
                      className="rounded-circle mx-auto d-block"
                      src={r1}
                      alt="..."
                      width="80"
                      height="60"
                    />
                    <h5 className="card-title text-center">Special title treatment</h5>
                  </div>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 ms-auto my-4">
              <div className="card " >
                <div className="card-body">
                  <div>
                    <img
                      className="rounded-circle mx-auto d-block"
                      src={r2}
                      alt="..."
                      width="80"
                      height="60"
                    />
                    <span></span>
                    <h5 className="card-title text-center">Special title treatment</h5>
                  </div>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
            </div>
        </div>

        <div className='container cups  px-5 '>
            <div className='row'>
                
                <div className='col-7  p-4 '>
                    <div className='d-flex  align-item-center justify-content-between '>
                    <h3 >Daily Visitors</h3>
                    <h3>Reveiws</h3>
                    <h3>Coffee cups</h3>
                    </div>

                    <div className='d-flex  align-item-center justify-content-between '>
                    <h3  className=''>205</h3>
                    <h3>100</h3>
                    <h3>25355</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Idea
