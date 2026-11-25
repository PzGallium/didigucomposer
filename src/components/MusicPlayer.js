import React, { useEffect, useRef, useState } from 'react';
import './MusicPlayer.css';

function formatTime(value) {
  if (!Number.isFinite(value) || value < 0) return '0:00';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

const MusicPlayer = ({ track, onClose }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    setCurrentTime(0);
    setDuration(0);
    setHasError(false);
    audio.load();

    const playPromise = audio.play();
    if (playPromise?.then) {
      playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }

    return () => audio.pause();
  }, [track]);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    if (audio.paused) {
      const playPromise = audio.play();
      if (playPromise?.catch) playPromise.catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  };

  const seek = (event) => {
    const nextTime = Number(event.target.value);
    if (!audioRef.current) return;
    audioRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <aside className="music-player" aria-label="Music player">
      <audio
        ref={audioRef}
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setHasError(true);
          setIsPlaying(false);
        }}
      >
        <source src={track.src} type={track.type} />
      </audio>

      <div className="music-player-track">
        <span className="music-player-eyebrow">Now playing</span>
        <span className="music-player-title">{track.title}</span>
      </div>

      <button
        type="button"
        className="music-player-play"
        onClick={togglePlayback}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        disabled={hasError}
      >
        <span aria-hidden>{isPlaying ? 'Ⅱ' : '▶'}</span>
      </button>

      <div className="music-player-timeline">
        <span className="music-player-time">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={Math.min(currentTime, duration || 0)}
          onChange={seek}
          disabled={!duration || hasError}
          aria-label="Recording progress"
          style={{ '--player-progress': `${progress}%` }}
        />
        <span className="music-player-time">{formatTime(duration)}</span>
      </div>

      {hasError && <span className="music-player-error">Unable to play recording.</span>}

      <button
        type="button"
        className="music-player-close"
        onClick={onClose}
        aria-label="Close player"
      >
        <span aria-hidden>×</span>
      </button>
    </aside>
  );
};

export default MusicPlayer;
