import React, { useState } from 'react';
import MusicPlayer from '../components/MusicPlayer';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const storageAudioUrl = (fileName) =>
  `https://firebasestorage.googleapis.com/v0/b/didigucomposer.firebasestorage.app/o/${encodeURIComponent(fileName)}?alt=media`;

const orchestralWorks = [
  {
    title: 'There, Blurred (2025)',
    subtitle: 'For accordion and orchestra.',
    description: '',
    tech: [],
    link: 'https://youtu.be/xzfFH4jBfHk?si=nu1_AJ1WxTltUC4q',
    linkLabel: 'Watch on YouTube',
  },
];

const chamberWorks = [
  {
    title: '4 Studies (2026)',
    subtitle: 'For clarinet, violin, cello, and piano.',
    description: '',
    tech: [],
    link: '',
    linkLabel: '',
  },
  {
    title: 'Undercurrent (2025)',
    subtitle: 'For violin, piano, and dance.',
    description: '',
    tech: [],
    link: '',
    linkLabel: '',
  },
  {
    title: 'Earth knows (2025)',
    subtitle: 'For alto flute, viola d\'amore, organ, and percussion.',
    description: '',
    tech: [],
    link: '',
    linkLabel: '',
  },
  {
    title: 'Washerwoman (2025)',
    subtitle: 'For clarinet, violin, cello, and piano.',
    audioUrl: storageAudioUrl('Didi Gu – Washerwoman.mp3'),
    audioType: 'audio/mpeg',
    description: '',
    tech: [],
    link: '',
    linkLabel: '',
  },
  {
    title: 'Where Quiet Lives Gather (2025)',
    subtitle: 'For soprano, flute, clarinet, violin, cello, percussion, and piano.',
    audioUrl: storageAudioUrl('Gu - Where Quiet Lives Gather.wav'),
    audioType: 'audio/wav',
    description: '',
    tech: [],
    link: '',
    linkLabel: '',
  },
  {
    title: 'AIWS (2024)',
    subtitle: 'For string quartet.',
    audioUrl: storageAudioUrl('071324_Mivos-DidiGu-AIWS.wav'),
    audioType: 'audio/wav',
    description: '',
    tech: [],
    link: '',
    linkLabel: '',
  },
  {
    title: 'Rivulet (2024)',
    subtitle: 'For flute, bass clarinet, alto saxophone, piano, percussion, violin, cello, and double bass.',
    description: '',
    tech: [],
    link: '',
    linkLabel: '',
  },
  {
    title: 'spORes (2024)',
    subtitle: 'For oboe, clarinet, bassoon, french horn, trumpet, violin, viola, cello, and double bass.',
    description: '',
    tech: [],
    link: 'https://youtu.be/teK5ZKA61OI?si=ACOjW0KwUa6gA1od',
    linkLabel: 'Watch',
  },
  {
    title: 'Ci Cycle (2022)',
    subtitle: 'For flute, bassoon, violin, viola, and cello.',
    description: '',
    tech: [],
    link: '',
    linkLabel: '',
  },
  {
    title: 'A Die that Never Stops Rolling (2022)',
    subtitle: 'For viola, piano, and percussion.',
    description: '',
    tech: [],
    link: '',
    linkLabel: '',
  },
  {
    title: 'Unknown emotion (2018)',
    subtitle: 'For clarinet, violin, cello, and piano.',
    description: '',
    tech: [],
    link: '',
    linkLabel: '',
  },
];

const soloWorks = [
  {
    title: 'Sonder (2025)',
    subtitle: 'For marimba.',
    description: '',
    tech: [],
    link: '',
    linkLabel: '',
  },
  {
    title: 'A Portrait, a Relic and a Green Striped Dress (2022)',
    subtitle: 'For flute.',
    description: '',
    tech: [],
    link: '',
    linkLabel: '',
  },
];

const Projects = () => {
  const [activeTrack, setActiveTrack] = useState(null);

  const playRecording = (project) => {
    setActiveTrack({
      title: project.title,
      subtitle: project.subtitle,
      src: project.audioUrl,
      type: project.audioType,
    });
  };

  const renderProject = (project) => (
    <ProjectCard
      key={project.title}
      {...project}
      onListen={project.audioUrl ? () => playRecording(project) : undefined}
      isAudioActive={activeTrack?.src === project.audioUrl}
    />
  );

  return (
    <div className={`page projects-page${activeTrack ? ' projects-page--with-player' : ''}`}>
      <section className="page-hero page-hero-works">
        <div className="container">
          <div className="page-hero-works-inner">
            <div>
              <h1>Works</h1>
            </div>
            <p className="page-hero-works-tagline">
              <a href="#orchestral-works" className="page-hero-works-anchor">Orchestral</a>
              <span className="page-hero-works-dot"> · </span>
              <a href="#chamber-works" className="page-hero-works-anchor">Chamber</a>
              <span className="page-hero-works-dot"> · </span>
              <a href="#solo-works" className="page-hero-works-anchor">Solo</a>
            </p>
          </div>
        </div>
      </section>

      <section className="works-section">
        <div className="container">
          <h2 id="orchestral-works" className="works-section-title">Orchestral works</h2>
          <div className="projects-grid">
            {orchestralWorks.length > 0 ? (
              orchestralWorks.map(renderProject)
            ) : (
              <p className="works-section-empty">—</p>
            )}
          </div>
        </div>
      </section>

      <section className="works-section">
        <div className="container">
          <h2 id="chamber-works" className="works-section-title">Chamber works</h2>
          <div className="projects-grid">
            {chamberWorks.map(renderProject)}
          </div>
        </div>
      </section>

      <section className="works-section">
        <div className="container">
          <h2 id="solo-works" className="works-section-title">Solo works</h2>
          <div className="projects-grid">
            {soloWorks.map(renderProject)}
          </div>
        </div>
      </section>
      {activeTrack && (
        <MusicPlayer
          track={activeTrack}
          onClose={() => setActiveTrack(null)}
        />
      )}
    </div>
  );
};

export default Projects;


