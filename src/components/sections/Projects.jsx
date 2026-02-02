import { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { sampleProjects } from '../../data/projects';

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const projects = sampleProjects; // Will be replaced with Supabase data later

  const showMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="projects" className="section bg-[var(--bg-secondary)]">
      <div className="container mx-auto">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          A collection of things I've built
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleCount).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < projects.length && (
          <div className="text-center mt-10">
            <button onClick={showMore} className="btn btn-secondary">
              Show More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
