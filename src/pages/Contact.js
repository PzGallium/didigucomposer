import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailto = `mailto:didi.gu.519@gmail.com?subject=${encodeURIComponent(
      `Message from ${formData.name || 'Didi Gu website'}`
    )}&body=${encodeURIComponent(
      `${formData.message}\n\n— ${formData.name || ''} (${formData.email || 'no email provided'})`
    )}`;
    window.location.href = mailto;
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Say hello</h1>
          <p>Quick note, idea, or opportunity—short messages are very welcome.</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in touch</h2>
              <p>
                For commissions, collaborations, or inquiries about my work, please feel
                free to reach out via email. I welcome thoughtful messages about
                potential projects and artistic collaborations.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">✉</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:didi.gu.519@gmail.com">
                        didi.gu.519@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">⏱</div>
                  <div className="contact-text">
                    <h3>Typical response time</h3>
                    <p>Within a few days for most messages.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Drop a quick note</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="How should I address you?"
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
                    placeholder="Where can I reply?"
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
                    placeholder="Tell me about your project or collaboration idea..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Open email draft
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