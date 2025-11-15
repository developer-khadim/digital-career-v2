import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, Tag } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl border border-primary animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-primary/50 backdrop-blur-sm border-b border-gray-800 p-6 flex items-center justify-between z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Project Image */}
            {project.image && (
              <div className="rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            )}

            {/* Project Meta */}
            <div className="flex flex-wrap gap-4">
              {project.date && (
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{project.date}</span>
                </div>
              )}
              {project.category && (
                <div className="flex items-center gap-2 text-gray-400">
                  <Tag className="w-4 h-4" />
                  <span className="text-sm">{project.category}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-primary/10 border border-primary/30 text-primary rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Live Link */}
            {project.liveLink && (
              <div className="pt-4 border-t border-gray-800">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primaryHigh text-secondary rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
