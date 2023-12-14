import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/watch2.png'

const Offers = () => {
  return (
    <div className='container'>
      <div className="offers">
        <div className="row">
            <div className="offers-left col-lg-6">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY ON  BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right col-lg-6">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
