import React from 'react'
import CharityList from './CharityList'

const charities = [
  { id: 1, name: 'Red Cross', description: 'Providing emergency assistance, disaster relief, and disaster preparedness education' },
  { id: 2, name: 'UNICEF', description: 'Working in over 190 countries and territories to save children\'s lives' },
  { id: 3, name: 'World Wildlife Fund', description: 'International organization working on issues regarding conservation, research and restoration of the environment' },
  { id: 4, name: 'Doctors Without Borders', description: 'International humanitarian medical non-governmental organisation' },
  { id: 5, name: 'The Nature Conservancy', description: 'Global environmental organization working to create a world where people and nature can thrive' },
]

function Charities() {
  return (
    <div>
      <h1>Our Charities</h1>
      <p>Explore our list of verified charities and choose a cause to support:</p>
      <CharityList charities={charities} />
    </div>
  )
}

export default Charities