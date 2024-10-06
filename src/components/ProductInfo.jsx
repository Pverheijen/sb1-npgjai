import React from 'react'
import { FaQrcode, FaShieldAlt, FaChartLine } from 'react-icons/fa'
import './ProductInfo.css'

function ProductInfo() {
  return (
    <section className="product-info">
      <h2>QR Code Generation for Charity Fundraisers</h2>
      <p>Our product helps people who raise funds for charities by going door-to-door. We provide a simple and efficient way to generate personalized QR codes that donors can scan to make quick and secure donations.</p>
      <div className="features">
        <div className="feature">
          <FaQrcode className="feature-icon" />
          <h3>Easy Generation</h3>
          <p>Create your personal QR code with just a few clicks.</p>
        </div>
        <div className="feature">
          <FaShieldAlt className="feature-icon" />
          <h3>Secure Donations</h3>
          <p>Ensure safe and transparent transactions for donors.</p>
        </div>
        <div className="feature">
          <FaChartLine className="feature-icon" />
          <h3>Track Progress</h3>
          <p>Monitor your fundraising efforts in real-time.</p>
        </div>
      </div>
    </section>
  )
}

export default ProductInfo