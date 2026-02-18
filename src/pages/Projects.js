import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Echoes of Memory',
      subtitle: 'Chamber work for strings and electronics',
      description:
        'An experimental composition exploring the intersection of acoustic textures and electronic processing, creating a dialogue between past and present through layered sonic memories.',
      tech: ['Chamber Music', 'Electroacoustic', 'String Quartet'],
      link: '#',
      linkLabel: 'Program notes coming soon',
    },
    {
      title: 'Urban Fragments',
      subtitle: 'Multimedia soundscape composition',
      description:
        'A work blending field recordings, instrumental writing, and spatial audio design to capture the emotional landscape of contemporary city life through fragmented sonic narratives.',
      tech: ['Multimedia', 'Soundscape', 'Spatial Audio'],
      link: '#',
      linkLabel: 'Listen to excerpt',
    },
    {
      title: 'Textural Variations',
      subtitle: 'Series for solo instruments',
      description:
        'A collection of short pieces focusing on timbral exploration and extended techniques, examining the emotional resonance of texture in musical form across different instrumental voices.',
      tech: ['Solo Works', 'Extended Techniques', 'Contemporary'],
      link: '#',
      linkLabel: 'Score preview',
    },
    {
      title: 'Interstitial Spaces',
      subtitle: 'Electroacoustic exploration',
      description:
        'An ongoing series investigating the spaces between sound and silence, using electronic processing to reveal hidden textures within acoustic sources.',
      tech: ['Electroacoustic', 'Experimental', 'Sound Design'],
      link: '#',
      linkLabel: 'In progress',
    },
  ];

  return (
    <div className="page projects-page">
      <section className="page-hero">
        <div className="container">
          <p className="page-kicker">Works</p>
          <h1>Selected compositions &amp; sound projects</h1>
          <p className="page-subtitle">
            A collection of musical works, experimental compositions, and sound design
            projects. Many are under active development—detailed program notes are forthcoming.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;


