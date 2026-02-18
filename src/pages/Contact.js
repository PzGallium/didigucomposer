import React, { useState } from 'react';
import './Contact.css';

const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (FORMSPREE_ID) {
      setStatus('sending');
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
        if (res.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    } else {
      const mailto = `mailto:didigucomposer@gmail.com?subject=${encodeURIComponent(
        `Message from ${formData.name || 'Didi Gu website'}`
      )}&body=${encodeURIComponent(
        `${formData.message}\n\n— ${formData.name || ''} (${formData.email || 'no email provided'})`
      )}`;
      window.location.href = mailto;
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact</h1>
          <p className="contact-hero-tagline">Open to collaboration and commissions.</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {status === 'success' && (
                  <p className="contact-form-status contact-form-status--success" role="alert">
                    Your message has been sent successfully. Thank you.
                  </p>
                )}
                {status === 'error' && (
                  <p className="contact-form-status contact-form-status--error">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : FORMSPREE_ID ? 'Send' : 'Open email draft'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;