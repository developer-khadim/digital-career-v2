import React from 'react';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-8xl container mx-auto py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Projects</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Explore our portfolio of successful projects and see how we've helped businesses transform.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-colors">
              <div className="h-48 bg-gradient-to-r from-lime-400 to-green-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                <p className="text-gray-400 mb-4">
                  Brief description of the project and the solutions we provided.
                </p>
                <button className="text-lime-400 hover:text-lime-300 flex items-center gap-2">
                  View case study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;