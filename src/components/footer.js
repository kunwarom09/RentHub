import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_upper_container">
      <div className="footer_logo">
        <div className="logo">
        Rent Hub
        </div>
        <p>Rent up a property, Earn and find the best space for yourself at RentHub </p>        
      </div>
      <div className="footer_links">
        <ul className="land_lords">
          <h1>For Landlords</h1>
          <li><a href="">Featured</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Add your Property</a></li>
        </ul>
        <ul className="renters">
          <h1>For Renters</h1>
          <li><a href="">Register</a></li>
          <li><a href="">View Properties</a></li>
          <li><a href="">About Us</a></li>
        </ul>
        <ul className="social_media">
          <h1>Social Media</h1>
          <li><a href="">Facebook</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Terms of Use</a></li>
        </ul>
      </div>
      </div>
      <div className="footer_down_container">
      RentHub Copyright © 2025 - All Rights Reserved
      </div>
    </div>
  )
}

export default footer