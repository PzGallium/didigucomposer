import React from 'react';
import './Press.css';

const Press = () => {
  return (
    <div className="press-page">
      <div className="press-hero">
        <div className="container">
          <h1>Press</h1>
          <p>Reviews, interviews, and press materials</p>
        </div>
      </div>

      <div className="press-content">
        <div className="container">
          {/* Press Kit */}
          <section className="press-kit">
            <h2>Press Kit</h2>
            <div className="press-kit-grid">
              <div className="press-kit-item">
                <h3>Biography</h3>
                <p>Comprehensive artist biography and background information</p>
                <a href="#" className="download-link">Download PDF</a>
              </div>
              <div className="press-kit-item">
                <h3>High-Resolution Photos</h3>
                <p>Professional headshots and performance images</p>
                <a href="#" className="download-link">Download ZIP</a>
              </div>
              <div className="press-kit-item">
                <h3>Discography</h3>
                <p>Complete list of recordings and compositions</p>
                <a href="#" className="download-link">Download PDF</a>
              </div>
              <div className="press-kit-item">
                <h3>Press Release</h3>
                <p>Latest press releases and announcements</p>
                <a href="#" className="download-link">Download PDF</a>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section className="reviews">
            <h2>Reviews</h2>
            <div className="reviews-grid">
              <div className="review-item">
                <div className="review-header">
                  <h3>"Ethereal Echoes" - The New York Times</h3>
                  <span className="review-date">December 15, 2024</span>
                </div>
                <div className="review-content">
                  <p>
                    "Didi's latest album is a masterwork of contemporary composition, 
                    seamlessly blending classical tradition with innovative electronic 
                    elements. Each track is a journey through memory and emotion, 
                    creating an immersive experience that lingers long after the 
                    final note fades."
                  </p>
                  <p className="reviewer">— Michael Johnson, Classical Music Critic</p>
                </div>
              </div>

              <div className="review-item">
                <div className="review-header">
                  <h3>"Urban Symphony" - The Guardian</h3>
                  <span className="review-date">October 22, 2023</span>
                </div>
                <div className="review-content">
                  <p>
                    "A bold and innovative work that captures the pulse of modern 
                    urban life. Didi's composition is both intellectually rigorous 
                    and emotionally resonant, demonstrating her mastery of orchestral 
                    writing and her deep understanding of contemporary culture."
                  </p>
                  <p className="reviewer">— Sarah Williams, Music Editor</p>
                </div>
              </div>

              <div className="review-item">
                <div className="review-header">
                  <h3>"Digital Dreams" - Pitchfork</h3>
                  <span className="review-date">September 8, 2023</span>
                </div>
                <div className="review-content">
                  <p>
                    "An experimental tour de force that pushes the boundaries of 
                    electronic music. Didi's innovative use of digital technology 
                    creates a soundscape that is both futuristic and deeply human, 
                    establishing her as a leading voice in contemporary electronic 
                    composition."
                  </p>
                  <p className="reviewer">— Alex Chen, Electronic Music Critic</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interviews */}
          <section className="interviews">
            <h2>Interviews</h2>
            <div className="interviews-grid">
              <div className="interview-item">
                <div className="interview-image interview-1"></div>
                <div className="interview-content">
                  <h3>NPR Music Interview</h3>
                  <p>"The Art of Composition in the Digital Age"</p>
                  <span className="interview-date">November 2024</span>
                  <a href="#" className="read-interview">Read Full Interview</a>
                </div>
              </div>
              <div className="interview-item">
                <div className="interview-image interview-2"></div>
                <div className="interview-content">
                  <h3>Gramophone Magazine</h3>
                  <p>"Bridging Classical and Contemporary"</p>
                  <span className="interview-date">October 2024</span>
                  <a href="#" className="read-interview">Read Full Interview</a>
                </div>
              </div>
              <div className="interview-item">
                <div className="interview-image interview-3"></div>
                <div className="interview-content">
                  <h3>BBC Radio 3</h3>
                  <p>"Composer of the Week"</p>
                  <span className="interview-date">September 2024</span>
                  <a href="#" className="read-interview">Listen to Interview</a>
                </div>
              </div>
            </div>
          </section>

          {/* Awards & Recognition */}
          <section className="awards-recognition">
            <h2>Awards & Recognition</h2>
            <div className="awards-grid">
              <div className="award-item">
                <div className="award-icon">🏆</div>
                <h3>Pulitzer Prize Finalist</h3>
                <p>For "Ethereal Echoes" (2024)</p>
                <span className="award-organization">The Pulitzer Prizes</span>
              </div>
              <div className="award-item">
                <div className="award-icon">🎵</div>
                <h3>Grammy Award Nomination</h3>
                <p>Best Contemporary Classical Composition (2023)</p>
                <span className="award-organization">Recording Academy</span>
              </div>
              <div className="award-item">
                <div className="award-icon">⭐</div>
                <h3>Grawemeyer Award</h3>
                <p>For "Urban Symphony" (2022)</p>
                <span className="award-organization">University of Louisville</span>
              </div>
            </div>
          </section>

          {/* Contact for Press */}
          <section className="press-contact">
            <h2>Press Inquiries</h2>
            <div className="press-contact-content">
              <p>
                For press inquiries, interview requests, or additional press materials, 
                please contact our press team.
              </p>
              <div className="press-contact-info">
                <div className="contact-item">
                  <h4>Press Contact</h4>
                  <p>Sarah Mitchell</p>
                  <p>Press Manager</p>
                  <p>Email: press@didimusic.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>
                <div className="contact-item">
                  <h4>Management</h4>
                  <p>David Chen</p>
                  <p>Artist Manager</p>
                  <p>Email: david@didimusic.com</p>
                  <p>Phone: +1 (555) 987-6543</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Press; 