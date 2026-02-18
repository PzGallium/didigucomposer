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
          <p className="hero-kicker">Modern Avant-Garde Composer</p>
          <h1 className="hero-title">Didi Gu</h1>
          <p className="hero-subtitle">
            Emotionally nuanced sonic storytelling through experimental sound design,
            interdisciplinary composition, and contemporary classical aesthetics.
          </p>
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

      {/* About Preview */}
      <section className="home-section home-about">
        <div className="container">
          <div className="home-section-header">
            <h2>About</h2>
            <p>
              Didi Gu is a modern avant-garde composer pursuing a PhD in Composition.
              Her work blends experimental techniques, acoustic textures, electronic elements,
              and emotional narrative structures.
            </p>
          </div>
          <div className="home-two-column">
            <p>
              Through exploratory sound design and interdisciplinary approaches, I create
              compositions that navigate the space between traditional classical forms and
              contemporary experimental practices. Each work is a careful exploration of
              texture, emotion, and sonic narrative.
            </p>
            <p>
              Currently pursuing doctoral studies in Music Composition, my creative practice
              centers on thoughtful, sensitive, and forward-looking approaches to musical
              expression.
            </p>
          </div>
          <Link to="/about" className="home-link">
            Read the full story ↗
          </Link>
        </div>
      </section>

      {/* Skills */}
      <section className="home-section home-skills">
        <div className="container">
          <div className="home-section-header">
            <h2>Artistic Focus</h2>
            <p>
              A blend of experimental techniques, acoustic exploration, and electronic
              elements focused on emotionally resonant and texturally rich compositions.
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Experimental Sound Design</h3>
              <p>
                Exploring unconventional timbres, extended techniques, and innovative
                approaches to acoustic and electronic sound generation.
              </p>
              <ul>
                <li>Extended instrumental techniques</li>
                <li>Electronic sound synthesis &amp; processing</li>
                <li>Textural and timbral exploration</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Interdisciplinary Composition</h3>
              <p>
                Creating works that bridge musical composition with other art forms,
                exploring narrative structures and emotional depth.
              </p>
              <ul>
                <li>Collaborative multimedia projects</li>
                <li>Narrative and programmatic composition</li>
                <li>Cross-artform integration</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Modern Classical Aesthetics</h3>
              <p>
                Balancing contemporary experimental practices with classical forms,
                creating works that feel both innovative and grounded.
              </p>
              <ul>
                <li>Contemporary classical forms</li>
                <li>Avant-garde composition techniques</li>
                <li>Emotional and textural exploration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="home-section home-projects">
        <div className="container">
          <div className="home-section-header">
            <h2>Selected Works</h2>
            <p>
              A selection of recent compositions and sound projects. See the full catalog
              on the works page.
            </p>
          </div>
          <div className="projects-preview-grid">
            <div className="projects-preview-card">
              <h3>Echoes of Memory</h3>
              <p>
                An experimental chamber work exploring the intersection of acoustic
                textures and electronic processing, creating a dialogue between past and present.
              </p>
              <span className="pill">Chamber Music</span>
              <span className="pill">Electroacoustic</span>
            </div>
            <div className="projects-preview-card">
              <h3>Urban Fragments</h3>
              <p>
                A multimedia composition blending field recordings, instrumental writing,
                and spatial audio design to capture the emotional landscape of contemporary city life.
              </p>
              <span className="pill">Multimedia</span>
              <span className="pill">Soundscape</span>
            </div>
            <div className="projects-preview-card">
              <h3>Textural Variations</h3>
              <p>
                A series of short pieces focusing on timbral exploration and extended
                techniques, examining the emotional resonance of texture in musical form.
              </p>
              <span className="pill">Solo Works</span>
              <span className="pill">Extended Techniques</span>
            </div>
          </div>
          <Link to="/projects" className="home-link">
            Explore all works ↗
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="home-section home-contact-cta">
        <div className="container">
          <div className="home-contact-card">
            <h2>Let&apos;s create together</h2>
            <p>
              I&apos;m open to collaborations, commissions, and interdisciplinary projects.
              If you&apos;re interested in commissioning a work or exploring collaborative
              possibilities, I&apos;d love to hear from you.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;