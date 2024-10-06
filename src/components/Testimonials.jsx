import React, { useState, useEffect } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "The QR code system has made fundraising so much easier and safer! I can focus on connecting with donors instead of worrying about cash handling.",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Charity QR's ease of use is unmatched. Generating QR codes on-the-go has streamlined our fundraising process significantly.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    text: "Thanks to Charity QR, our door-to-door campaigns are more efficient than ever. Donors appreciate the quick and secure method of giving.",
  },
]

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Fundraisers Say</h2>
      <div className="testimonial-carousel">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-item ${index === currentTestimonial ? 'active' : ''}`}
          >
            <div className="testimonial-image-placeholder"></div>
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials