import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../Data/data';
import ProjectModal from '../components/UI/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-8xl container mx-auto py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Projects</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Explore our portfolio of successful projects and see how we've helped businesses transform.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
              <div className="h-48 bg-gradient-to-r from-lime-400 to-green-500 flex items-center justify-center">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-2xl font-bold text-secondary">{project.title}</span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <button 
                  onClick={() => handleViewProject(project)}
                  className="text-lime-400 hover:text-lime-300 flex items-center gap-2 font-semibold transition-all hover:gap-3"
                >
                  View case study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;