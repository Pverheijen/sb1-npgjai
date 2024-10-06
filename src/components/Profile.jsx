import React, { useState } from 'react'
import './Profile.css'

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [qrCode, setQrCode] = useState(null)

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
    setQrCode(null) // Reset QR code when toggling login
  }

  const generateQRCode = () => {
    const newQRCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=user${Date.now()}`
    setQrCode(newQRCode)
  }

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <div className="login-toggle">
        <label className="switch">
          <input type="checkbox" checked={isLoggedIn} onChange={toggleLogin} />
          <span className="slider round"></span>
        </label>
        <span>{isLoggedIn ? 'Logged In' : 'Logged Out'}</span>
      </div>
      {isLoggedIn && (
        <div className="profile-content">
          <p>Welcome to your profile! As a registered fundraiser, you can generate a personal QR code for accepting donations.</p>
          {qrCode && (
            <div className="qr-code-container">
              <img src={qrCode} alt="QR Code" className="qr-code" />
            </div>
          )}
          <button onClick={generateQRCode} className="generate-qr-btn">Generate QR Code</button>
        </div>
      )}
      {!isLoggedIn && (
        <p>Please log in to view your profile and generate a QR code.</p>
      )}
    </div>
  )
}

export default Profile