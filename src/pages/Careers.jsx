import React from 'react';
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-8xl container mx-auto py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Join Our Team</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Be part of a dynamic team that's shaping the future of digital innovation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Why Work With Us?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovative Projects</h3>
                  <p className="text-gray-400">
                    Work on cutting-edge projects with the latest technologies and creative challenges.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Collaborative Culture</h3>
                  <p className="text-gray-400">
                    Join a supportive team that values collaboration, learning, and growth.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Career Growth</h3>
                  <p className="text-gray-400">
                    Access to training, conferences, and opportunities for professional development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
            <div className="space-y-4">
              {['Senior Frontend Developer', 'UI/UX Designer', 'Backend Engineer', 'Project Manager'].map((job, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-colors">
                  <h3 className="text-xl font-bold mb-2">{job}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Full-time</span>
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Remote</span>
                  </div>
                  <button className="text-lime-400 hover:text-lime-300 flex items-center gap-2">
                    View details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;