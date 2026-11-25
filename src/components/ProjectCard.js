import React, { useState } from 'react';
import './ProjectCard.css';

function getYouTubeVideoId(url) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&]+)/);
  return m ? m[1] : null;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  tech,
  link,
  linkLabel,
  audioUrl,
  audioType,
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoId = link ? getYouTubeVideoId(link) : null;
  const isYouTube = Boolean(videoId);

  const handleAudioPlay = (event) => {
    document.querySelectorAll('audio').forEach((audio) => {
      if (audio !== event.currentTarget) audio.pause();
    });
  };

  return (
    <article className="project-card">
      <header className="project-card-header">
        <h3 className="project-card-title">{title}</h3>
        {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
      </header>
      {description && <p className="project-card-description">{description}</p>}
      {audioUrl && (
        <div className="project-card-audio">
          <span className="project-card-media-label">Listen</span>
          <audio
            controls
            preload="metadata"
            className="project-card-audio-player"
            aria-label={`${title} recording`}
            onPlay={handleAudioPlay}
          >
            <source src={audioUrl} type={audioType} />
            Your browser does not support audio playback.
          </audio>
        </div>
      )}
      {tech && tech.length > 0 && (
        <ul className="project-card-tags">
          {tech.map((tag) => (
            <li key={tag} className="project-card-tag">
              {tag}
            </li>
          ))}
        </ul>
      )}
      {link && (
        <>
          {isYouTube ? (
            showVideo && videoId ? (
              <div className="project-card-video-inline">
                <div className="project-card-video-wrap">
                  <iframe
                    title={title}
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="project-card-video-iframe"
                  />
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="project-card-thumb"
                onClick={() => setShowVideo(true)}
                aria-label={linkLabel || 'Watch'}
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt=""
                  className="project-card-thumb-img"
                />
                <span className="project-card-thumb-play" aria-hidden>▶</span>
              </button>
            )
          ) : (
            <a
              href={link}
              className="project-card-link"
              target="_blank"
              rel="noreferrer"
            >
              {linkLabel || 'View work'}
            </a>
          )}
        </>
      )}
    </article>
  );
};

export default ProjectCard;


