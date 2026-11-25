import React, { useState } from 'react';
import MusicPlayer from '../components/MusicPlayer';
import ProjectCard from '../components/ProjectCard';
import useWorks from '../hooks/useWorks';
import { formatWorkTitle } from '../data/defaultWorks';
import './Projects.css';

const categoryLabels = {
  orchestral: 'Orchestral works',
  chamber: 'Chamber works',
  solo: 'Solo works',
};

const Projects = () => {
  const [activeTrack, setActiveTrack] = useState(null);
  const { works } = useWorks();

  const playRecording = (work) => {
    setActiveTrack({
      title: formatWorkTitle(work),
      subtitle: work.subtitle,
      src: work.audioUrl,
      type: work.audioType,
    });
  };

  const renderProject = (work) => (
    <ProjectCard
      key={work.id}
      {...work}
      title={formatWorkTitle(work)}
      tech={work.tech || []}
      onListen={work.audioUrl ? () => playRecording(work) : undefined}
      isAudioActive={activeTrack?.src === work.audioUrl}
    />
  );

  return (
    <div className={`page projects-page${activeTrack ? ' projects-page--with-player' : ''}`}>
      <section className="page-hero page-hero-works">
        <div className="container">
          <div className="page-hero-works-inner">
            <div><h1>Works</h1></div>
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

      {Object.entries(categoryLabels).map(([category, label]) => {
        const categoryWorks = works.filter((work) => work.category === category);
        return (
          <section className="works-section" key={category}>
            <div className="container">
              <h2 id={`${category}-works`} className="works-section-title">{label}</h2>
              <div className="projects-grid">
                {categoryWorks.length > 0
                  ? categoryWorks.map(renderProject)
                  : <p className="works-section-empty">—</p>}
              </div>
            </div>
          </section>
        );
      })}

      {activeTrack && (
        <MusicPlayer track={activeTrack} onClose={() => setActiveTrack(null)} />
      )}
    </div>
  );
};

export default Projects;
