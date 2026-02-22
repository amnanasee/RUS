import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" className='footer-logo'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum consectetur dolor aliquam distinctio quasi facilis id officia minus, et sequi, possimus reprehenderit adipisci dolorem voluptates in suscipit, quaerat vitae inventore.</p>
                <div className="footer-social-icons">
                    <FontAwesomeIcon icon={faSquareFacebook} />
                    <FontAwesomeIcon icon={faSquareLinkedin}/>
                    <FontAwesomeIcon icon={faXTwitter} />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+94 761196961</li>
                        <li>usama@gmail.com</li>
                    </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright © 2026 All Right Reserved</p>
    </div>
  )
}

export default Footer