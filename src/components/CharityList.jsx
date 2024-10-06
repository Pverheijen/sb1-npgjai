import React from 'react'
import { Link } from 'react-router-dom'
import './CharityList.css'

function CharityList({ charities }) {
  return (
    <div>
      <div className="charity-list">
        {charities.map((charity) => (
          <div key={charity.id} className="charity-item">
            <div className="charity-image-placeholder"></div>
            <h3>{charity.name}</h3>
            <p>{charity.description}</p>
            <Link to="/charities" className="more-info-btn">More Information</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CharityList