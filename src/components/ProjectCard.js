import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, subtitle, description, tech, link, linkLabel }) => {
  return (
    <article className="project-card">
      <header className="project-card-header">
        <h3 className="project-card-title">{title}</h3>
        {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
      </header>
      <p className="project-card-description">{description}</p>
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
        <a
          href={link}
          className="project-card-link"
          target="_blank"
          rel="noreferrer"
        >
          {linkLabel || 'View work'}
        </a>
      )}
    </article>
  );
};

export default ProjectCard;


