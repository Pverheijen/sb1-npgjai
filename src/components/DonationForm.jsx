import React, { useState } from 'react'

function DonationForm({ charity }) {
  const [amount, setAmount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Donation of $${amount} to ${charity.name} by ${name} (${email})`)
    alert('Thank you for your donation!')
    setAmount('')
    setName('')
    setEmail('')
  }

  return (
    <div className="form-container">
      <h2>Donate to {charity.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount ($):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="confirm-btn">Confirm Donation</button>
      </form>
    </div>
  )
}

export default DonationForm