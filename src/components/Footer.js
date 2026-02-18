import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Didi Gu</h3>
              <p>
                Modern avant-garde composer pursuing a PhD in Composition. Creating
                emotionally nuanced sonic storytelling through experimental sound design
                and interdisciplinary composition.
              </p>
              <div className="social-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  GH
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  in
                </a>
                <a
                  href="mailto:hello@didicomposer.dev"
                  className="social-link"
                >
                  ✉
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Navigate</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Works</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact</h4>
              <p>
                <a href="mailto:didi.gu.519@gmail.com">
                  didi.gu.519@gmail.com
                </a>
              </p>
              <p>Available for commissions and collaborations.</p>
              <p>PhD candidate in Music Composition</p>
            </div>

            <div className="footer-newsletter">
              <h4>Current Work</h4>
              <p>
                Developing new compositions, exploring interdisciplinary projects, and
                pursuing doctoral research. Reach out for commissions or collaborations.
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; {year} Didi Gu. All rights reserved.</p>
              <div className="footer-bottom-links">
                <span>Composer &amp; Sound Artist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;