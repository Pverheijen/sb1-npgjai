import React from 'react'
import CharityList from './CharityList'
import Testimonials from './Testimonials'
import ProductInfo from './ProductInfo'

const charities = [
  { id: 1, name: 'Red Cross', description: 'Providing emergency assistance, disaster relief, and disaster preparedness education' },
  { id: 2, name: 'UNICEF', description: 'Working in over 190 countries and territories to save children\'s lives' },
  { id: 3, name: 'World Wildlife Fund', description: 'International organization working on issues regarding conservation, research and restoration of the environment' },
]

function Home() {
  return (
    <div>
      <h1>Welcome to Charity QR</h1>
      <ProductInfo />
      <h2>Charities that we work with</h2>
      <CharityList charities={charities} />
      <Testimonials />
    </div>
  )
}

export default Home