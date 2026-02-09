import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Tomato brings delicious meals to your home in minutes, blending speed with quality you can trust. With a sleek, modern interface and seamless ordering flow, it’s designed to delight customers and impress recruiters alike. More than just delivery, Tomato is about convenience, taste, and a brand experience that feels human, warm, and reliable.</p>
            <div className="footer-social-icons">
                <a href="https://github.com/Malik-Jalihal" target="_blank" rel="noopener noreferrer">
                    <img src={assets.github1} alt="GitHub" />
                </a>
                <a href="#" rel="noopener noreferrer">
                    <img src={assets.twitter_icon} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/malik-jalihal-b2823420a/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.linkedin_icon} alt="LinkedIn" />
                </a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>malikjalihal123@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
