import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      {/* <div className="container"> */}
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>ROLEXCOSPORT</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <a href='https://www.instagram.com/rolex?igsh=YzAwZjE1ZTI0Zg==' 
              className="footer-icons-container" target='_blank' rel="noreferrer">
                <img src={instagram_icon} alt="" />
            </a>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright &copy;{new Date().getFullYear()} - All rights reserved</p>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Footer
