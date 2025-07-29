import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact</h1>
          <p>Get in touch with Didi</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                For booking inquiries, collaboration opportunities, or general questions, 
                please don't hesitate to reach out. I'd love to hear from you.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>hello@didimusic.com</p>
                    <p>booking@didimusic.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Available Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Location</h3>
                    <p>New York City, NY</p>
                    <p>Available for worldwide travel</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Didi</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">🎵</a>
                  <a href="#" className="social-icon">📷</a>
                  <a href="#" className="social-icon">🐦</a>
                  <a href="#" className="social-icon">📺</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="press">Press Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Booking Information */}
          <section className="booking-info">
            <h2>Booking Information</h2>
            <div className="booking-grid">
              <div className="booking-item">
                <h3>Solo Performances</h3>
                <p>Piano recitals, chamber music performances, and solo compositions</p>
                <ul>
                  <li>Concert halls and theaters</li>
                  <li>Private events and galas</li>
                  <li>Educational institutions</li>
                </ul>
              </div>
              <div className="booking-item">
                <h3>Orchestral Works</h3>
                <p>World premieres and performances of orchestral compositions</p>
                <ul>
                  <li>Symphony orchestras</li>
                  <li>Chamber orchestras</li>
                  <li>Festival appearances</li>
                </ul>
              </div>
              <div className="booking-item">
                <h3>Educational Programs</h3>
                <p>Masterclasses, workshops, and educational presentations</p>
                <ul>
                  <li>Music schools and conservatories</li>
                  <li>University programs</li>
                  <li>Community music organizations</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact; 