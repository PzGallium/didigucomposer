import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page about-page">
      <section className="page-hero">
        <div className="container">
          <p className="page-kicker">About</p>
          <h1>Modern avant-garde composer</h1>
          <p className="page-subtitle">
            Exploring emotionally nuanced sonic storytelling through experimental
            sound design, interdisciplinary composition, and contemporary classical aesthetics.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container about-grid">
          <div className="about-main">
            <h2>Biography</h2>
            <p>
              Didi Gu is a modern avant-garde composer pursuing a PhD in Composition.
              Her work blends experimental techniques, acoustic textures, electronic elements,
              and emotional narrative structures.
            </p>
            <p>
              Through exploratory sound design and interdisciplinary approaches, I create
              compositions that navigate the space between traditional classical forms and
              contemporary experimental practices. Each work is a careful exploration of
              texture, emotion, and sonic narrative, informed by a thoughtful and sensitive
              approach to musical expression.
            </p>
            <p>
              Currently pursuing doctoral studies, my creative practice centers on
              forward-looking approaches to composition that honor both innovation and
              emotional depth. This site serves as a portfolio of my musical works and
              creative explorations.
            </p>

            <h3>Artistic approach</h3>
            <ul className="about-list">
              <li>Emotionally nuanced storytelling through sound and texture.</li>
              <li>
                Experimental techniques that serve expressive and narrative purposes.
              </li>
              <li>Interdisciplinary collaboration and cross-artform exploration.</li>
              <li>Balancing innovation with accessibility and emotional resonance.</li>
            </ul>
          </div>

          <aside className="about-sidebar">
            <div className="about-card">
              <h3>At a glance</h3>
              <ul>
                <li>PhD candidate in Music Composition</li>
                <li>Specializing in avant-garde and experimental composition</li>
                <li>Available for commissions and collaborations</li>
              </ul>
            </div>

            <div className="about-card">
              <h3>Current interests</h3>
              <ul>
                <li>Interdisciplinary composition and multimedia works</li>
                <li>Extended techniques and experimental sound design</li>
                <li>Emotional narrative structures in contemporary music</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default About;


