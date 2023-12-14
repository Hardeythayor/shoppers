import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/watch3.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-6 hero-left">
                    <h2>NEW ARRIVALS ONLY</h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p>New</p>
                            <img src={hand_icon} alt="" />
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <div>Latest Collection</div>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-6 d-flex justify-content-end hero-right">
                    <img src={hero_img} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
