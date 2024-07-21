import React from 'react'
import './Item.css'
import p1 from '../../assets/item2.jfif'
import p2 from '../../assets/item3.jfif'

const Item = () => {
  return (
    <section>
        <div className='container'>
        <div className="col-lg-12 mx-5">
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <div>
                <img
                  className="rounded-circle align-items-center my-3"
                  src={p1}
                  
                  alt="..."
                  width="200"
                  height="200"
                />
              </div>
              <div>
                <img
                  className="rounded-circle align-items-center"
                  src={p2}
                  
                  alt="..."
                  width="200"
                  height="200"
                />
              </div>
            </div>

            <div className="col-lg-6 ">
              <div>
                <div className="card my-5">
                  <div className="card-body">
                    <h5 className="card-title">
                      Latest news from cafe coffee shop
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque, maiores!
                    </p>
                    <a href="#" className="btn btn-light btn-sm mx-5 "> Travel</a>
                    <a href="#" className="btn btn-light btn-sm mx-3"> Food</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="card">
                  <div className="card-body mb-3">
                    <h5 className="card-title">
                      Latest news from cafe coffee shop
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque, maiores!
                    </p>
                    <a href="#" className="btn btn-light btn-sm mx-5"> Travel</a>
                    <a href="#" className="btn btn-light btn-sm mx-3"> Food</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
            
        
    </section>
  )
}

export default Item
