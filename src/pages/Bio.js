import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <div className="bio-page">
      <div className="bio-hero">
        <div className="container">
          <h1>Biography</h1>
          <p className="bio-intro">
            A journey through music, innovation, and artistic expression
          </p>
        </div>
      </div>

      <div className="bio-content">
        <div className="container">
          <div className="bio-grid">
            <div className="bio-main">
              <section className="bio-section">
                <h2>Early Life & Education</h2>
                <p>
                  Born into a family of musicians, Didi's passion for music was ignited at an early age. 
                  Growing up in New York City, she was exposed to a diverse range of musical styles, from 
                  classical to jazz, which would later influence her unique compositional voice.
                </p>
                <p>
                  Didi began formal piano studies at the age of five and quickly demonstrated exceptional 
                  talent. By the age of twelve, she was composing original pieces and performing in local 
                  venues. Her early compositions showed a remarkable maturity and emotional depth that 
                  belied her young age.
                </p>
              </section>

              <section className="bio-section">
                <h2>Musical Education</h2>
                <div className="education-item">
                  <h3>Juilliard School</h3>
                  <p className="degree">Master of Music in Composition</p>
                  <p className="year">2018 - 2020</p>
                  <p>
                    Studied under renowned composers and developed a distinctive voice that bridges 
                    classical tradition with contemporary innovation. Graduated with honors and received 
                    the prestigious Juilliard Composition Prize.
                  </p>
                </div>
                
                <div className="education-item">
                  <h3>Manhattan School of Music</h3>
                  <p className="degree">Bachelor of Music in Piano Performance</p>
                  <p className="year">2014 - 2018</p>
                  <p>
                    Majored in piano performance while also pursuing composition studies. Performed 
                    extensively as a soloist and chamber musician, developing a deep understanding 
                    of musical interpretation and expression.
                  </p>
                </div>
              </section>

              <section className="bio-section">
                <h2>Professional Career</h2>
                <p>
                  Since graduating from Juilliard, Didi has established herself as one of the most 
                  innovative composers of her generation. Her work spans multiple genres, from classical 
                  orchestral pieces to experimental electronic compositions.
                </p>
                <p>
                  She has collaborated with leading orchestras including the New York Philharmonic, 
                  the Los Angeles Philharmonic, and the London Symphony Orchestra. Her compositions 
                  have been performed at prestigious venues worldwide, including Carnegie Hall, 
                  Royal Albert Hall, and the Sydney Opera House.
                </p>
                <p>
                  In addition to her work as a composer, Didi is an accomplished performer, regularly 
                  appearing as a soloist and chamber musician. She is also a passionate educator, 
                  teaching composition and piano at the Juilliard School and conducting masterclasses 
                  internationally.
                </p>
              </section>

              <section className="bio-section">
                <h2>Artistic Philosophy</h2>
                <p>
                  Didi's artistic philosophy centers on the belief that music should be both 
                  intellectually stimulating and emotionally resonant. She strives to create works 
                  that challenge listeners while remaining accessible and engaging.
                </p>
                <p>
                  Her compositions often explore themes of memory, transformation, and the human 
                  condition. She draws inspiration from literature, visual art, and personal 
                  experiences, creating music that tells stories and evokes powerful emotions.
                </p>
                <p>
                  "Music is the most direct form of communication between souls," says Didi. 
                  "Through composition, I seek to create bridges between different worlds, 
                  cultures, and experiences, using sound as a universal language."
                </p>
              </section>
            </div>

            <div className="bio-sidebar">
              <div className="sidebar-section">
                <h3>Awards & Recognition</h3>
                <ul className="awards-list">
                  <li>
                    <span className="award-year">2023</span>
                    <span className="award-title">Pulitzer Prize Finalist</span>
                    <span className="award-description">For "Ethereal Echoes"</span>
                  </li>
                  <li>
                    <span className="award-year">2022</span>
                    <span className="award-title">Grammy Award Nomination</span>
                    <span className="award-description">Best Contemporary Classical Composition</span>
                  </li>
                  <li>
                    <span className="award-year">2021</span>
                    <span className="award-title">Grawemeyer Award</span>
                    <span className="award-description">For "Urban Symphony"</span>
                  </li>
                  <li>
                    <span className="award-year">2020</span>
                    <span className="award-title">Juilliard Composition Prize</span>
                    <span className="award-description">Graduation Award</span>
                  </li>
                  <li>
                    <span className="award-year">2019</span>
                    <span className="award-title">ASCAP Morton Gould Award</span>
                    <span className="award-description">Young Composer Award</span>
                  </li>
                </ul>
              </div>

              <div className="sidebar-section">
                <h3>Residencies & Fellowships</h3>
                <ul className="residencies-list">
                  <li>MacDowell Colony Fellow (2023)</li>
                  <li>Yaddo Artist Residency (2022)</li>
                  <li>Bogliasco Foundation Fellow (2021)</li>
                  <li>American Academy in Rome Fellow (2020)</li>
                </ul>
              </div>

              <div className="sidebar-section">
                <h3>Current Positions</h3>
                <ul className="positions-list">
                  <li>Composer-in-Residence, New York Philharmonic (2023-present)</li>
                  <li>Faculty Member, Juilliard School (2021-present)</li>
                  <li>Artistic Director, Contemporary Music Collective (2022-present)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio; 