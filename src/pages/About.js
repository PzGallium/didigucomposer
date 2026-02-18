import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About</h1>
        </div>
      </section>

      <section className="page-section about-section">
        <div className="container about-inner">
          <div className="about-photo-wrap">
            <img
              src="/about-photo.png"
              alt="Didi Gu"
              className="about-photo"
            />
          </div>
          <div className="about-main">
            <h2>Biography</h2>
            <p>
              Didi Gu is a Chinese American composer currently based in Florida. After graduating from New England Conservatory for her bachelor&apos;s degree, and getting her master&apos;s degree at Manhattan School of Music, she is now pursuing her PhD at University of Florida. Didi has been fortunate to study with a distinguished group of private mentors who have shaped her musical voice. Her teachers include James Paul Sain, Reiko Füting, John Mallia, Kati Agocs, and Cynthia van Maanen.
            </p>
            <p>
              Didi&apos;s music has been featured in international festivals and workshops across the United States, Europe, and China, including the CCI Workshop, Valencia International Performing Arts Summer Festival, Vienna Contemporary Composers Festival, Atlantic Music Festival. Alongside her compositional work, Didi is deeply engaged in music education. She currently serves as a Teaching Assistant at University of Florida and has several years of experience teaching music theory and piano in both institutional and private settings. Her recent honors include the Manhattan Prize for String Quartet Composition and the New Chamber Ballet Commission Prize.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


