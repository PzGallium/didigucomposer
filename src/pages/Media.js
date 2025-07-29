import React from 'react';
import './Media.css';

const Media = () => {
  return (
    <div className="media-page">
      <div className="media-hero">
        <div className="container">
          <h1>Media</h1>
          <p>Listen, watch, and experience Didi's music</p>
        </div>
      </div>

      <div className="media-content">
        <div className="container">
          {/* Featured Album */}
          <section className="featured-album">
            <h2>Latest Release</h2>
            <div className="album-card">
              <div className="album-cover">
                <div className="album-image"></div>
                <div className="play-button">▶</div>
              </div>
              <div className="album-info">
                <h3>Ethereal Echoes</h3>
                <p className="album-year">2024</p>
                <p className="album-description">
                  A groundbreaking album that explores themes of memory, transformation, and the 
                  ethereal nature of human consciousness. This collection of compositions bridges 
                  classical tradition with contemporary innovation.
                </p>
                <div className="album-tracks">
                  <h4>Track Listing</h4>
                  <ol>
                    <li>Prelude in Memory (8:32)</li>
                    <li>Ethereal Echoes (12:15)</li>
                    <li>Transformation Suite (15:42)</li>
                    <li>Dreamscape Variations (10:28)</li>
                    <li>Luminous (6:45)</li>
                    <li>Epilogue: Awakening (9:17)</li>
                  </ol>
                </div>
                <div className="album-actions">
                  <button className="btn-listen">Listen on Spotify</button>
                  <button className="btn-listen">Listen on Apple Music</button>
                  <button className="btn-listen">Purchase Album</button>
                </div>
              </div>
            </div>
          </section>

          {/* Music Videos */}
          <section className="music-videos">
            <h2>Music Videos</h2>
            <div className="videos-grid">
              <div className="video-item">
                <div className="video-thumbnail">
                  <div className="video-image video-1"></div>
                  <div className="play-overlay">▶</div>
                </div>
                <h3>Ethereal Echoes - Official Video</h3>
                <p>Directed by acclaimed filmmaker Sarah Chen</p>
                <span className="video-duration">12:15</span>
              </div>
              <div className="video-item">
                <div className="video-thumbnail">
                  <div className="video-image video-2"></div>
                  <div className="play-overlay">▶</div>
                </div>
                <h3>Live at Carnegie Hall</h3>
                <p>Performance of "Urban Symphony" with NY Philharmonic</p>
                <span className="video-duration">18:32</span>
              </div>
              <div className="video-item">
                <div className="video-thumbnail">
                  <div className="video-image video-3"></div>
                  <div className="play-overlay">▶</div>
                </div>
                <h3>Behind the Music: Digital Dreams</h3>
                <p>Documentary about the creation process</p>
                <span className="video-duration">25:45</span>
              </div>
            </div>
          </section>

          {/* Live Performances */}
          <section className="live-performances">
            <h2>Live Performances</h2>
            <div className="performances-grid">
              <div className="performance-item">
                <div className="performance-image perf-1"></div>
                <div className="performance-info">
                  <h3>New York Philharmonic</h3>
                  <p>Carnegie Hall, New York</p>
                  <p>World Premiere of "Ethereal Echoes"</p>
                  <span className="performance-date">December 2023</span>
                </div>
              </div>
              <div className="performance-item">
                <div className="performance-image perf-2"></div>
                <div className="performance-info">
                  <h3>London Symphony Orchestra</h3>
                  <p>Royal Albert Hall, London</p>
                  <p>Performance of "Urban Symphony"</p>
                  <span className="performance-date">October 2023</span>
                </div>
              </div>
              <div className="performance-item">
                <div className="performance-image perf-3"></div>
                <div className="performance-info">
                  <h3>Chamber Music Recital</h3>
                  <p>Wigmore Hall, London</p>
                  <p>Piano and String Quartet</p>
                  <span className="performance-date">September 2023</span>
                </div>
              </div>
            </div>
          </section>

          {/* Audio Samples */}
          <section className="audio-samples">
            <h2>Audio Samples</h2>
            <div className="samples-grid">
              <div className="sample-item">
                <div className="sample-info">
                  <h3>Prelude in Memory</h3>
                  <p>From "Ethereal Echoes" (2024)</p>
                </div>
                <div className="audio-player">
                  <div className="audio-progress">
                    <div className="progress-bar"></div>
                  </div>
                  <div className="audio-controls">
                    <button className="play-btn">▶</button>
                    <span className="time">0:00 / 8:32</span>
                  </div>
                </div>
              </div>
              <div className="sample-item">
                <div className="sample-info">
                  <h3>Urban Symphony - Movement I</h3>
                  <p>From "Urban Symphony" (2023)</p>
                </div>
                <div className="audio-player">
                  <div className="audio-progress">
                    <div className="progress-bar"></div>
                  </div>
                  <div className="audio-controls">
                    <button className="play-btn">▶</button>
                    <span className="time">0:00 / 12:15</span>
                  </div>
                </div>
              </div>
              <div className="sample-item">
                <div className="sample-info">
                  <h3>Digital Dreams</h3>
                  <p>From "Digital Dreams" (2023)</p>
                </div>
                <div className="audio-player">
                  <div className="audio-progress">
                    <div className="progress-bar"></div>
                  </div>
                  <div className="audio-controls">
                    <button className="play-btn">▶</button>
                    <span className="time">0:00 / 6:45</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Media; 