import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-contant">
            <div className="footer-contant-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ullam explicabo. Excepturi voluptate labore delectus optio cupiditate eaque debitis ipsam ea, sapiente sed illo id, iste reprehenderit rerum inventore voluptatibus!</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-contant-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-contant-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-222-333-555</li>
                    <li>tomato@contact.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer