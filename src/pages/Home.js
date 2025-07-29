import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">DIDI</h1>
          <p className="hero-subtitle">Musician • Composer • Performer</p>
          <div className="hero-cta">
            <Link to="/media" className="btn-primary">Listen Now</Link>
            <Link to="/bio" className="btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Bio Excerpt */}
      <section className="bio-excerpt">
        <div className="container">
          <div className="bio-content">
            <h2>About Didi</h2>
            <p>
              A visionary musician whose innovative approach to composition bridges classical 
              tradition with contemporary expression. With over a decade of experience in 
              performance and composition, Didi has established a unique voice in the 
              contemporary music scene.
            </p>
            <Link to="/bio" className="read-more">Read Full Biography →</Link>
          </div>
        </div>
      </section>

      {/* Latest Work */}
      <section className="latest-work">
        <div className="container">
          <h2>Latest Work</h2>
          <div className="work-grid">
            <div className="work-item">
              <div className="work-image work-1"></div>
              <h3>Ethereal Echoes</h3>
              <p>Latest album exploring themes of memory and transformation</p>
              <span className="work-date">2024</span>
            </div>
            <div className="work-item">
              <div className="work-image work-2"></div>
              <h3>Urban Symphony</h3>
              <p>Collaborative piece with the City Chamber Orchestra</p>
              <span className="work-date">2023</span>
            </div>
            <div className="work-item">
              <div className="work-image work-3"></div>
              <h3>Digital Dreams</h3>
              <p>Experimental electronic composition</p>
              <span className="work-date">2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="events-list">
            <div className="event-item">
              <div className="event-date">
                <span className="day">15</span>
                <span className="month">DEC</span>
              </div>
              <div className="event-details">
                <h3>Winter Concert Series</h3>
                <p>Carnegie Hall, New York</p>
                <span className="event-time">8:00 PM</span>
              </div>
              <a href="#" className="event-tickets">Get Tickets</a>
            </div>
            <div className="event-item">
              <div className="event-date">
                <span className="day">22</span>
                <span className="month">JAN</span>
              </div>
              <div className="event-details">
                <h3>Composer's Workshop</h3>
                <p>Juilliard School, New York</p>
                <span className="event-time">2:00 PM</span>
              </div>
              <a href="#" className="event-tickets">Register</a>
            </div>
            <div className="event-item">
              <div className="event-date">
                <span className="day">08</span>
                <span className="month">FEB</span>
              </div>
              <div className="event-details">
                <h3>Album Release Concert</h3>
                <p>Blue Note Jazz Club, New York</p>
                <span className="event-time">9:00 PM</span>
              </div>
              <a href="#" className="event-tickets">Get Tickets</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 