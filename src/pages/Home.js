import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background" />
        <div className="hero-content">
          <p className="hero-kicker">composer</p>
          <h1 className="hero-title">Didi Gu</h1>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              View works
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Let&apos;s collaborate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;