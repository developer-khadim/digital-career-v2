import React from 'react';
import { Users, Target, Lightbulb, Award } from 'lucide-react';
import { team, testimonials } from '../Data/data';
import TestimonialCard from '../components/Services/TestimonialCard';


const About = () => {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-8xl container mx-auto  py-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're a team of passionate creators dedicated to delivering exceptional digital experiences that drive results.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-400 mb-6">
                Founded in 2015, Creatix began as a small team of designers and developers with a shared vision: to create digital experiences that truly matter.
              </p>
              <p className="text-gray-400 mb-6">
                Over the years, we've grown into a full-service digital agency, but our core values remain the same: creativity, innovation, and a commitment to excellence.
              </p>
              <p className="text-gray-400">
                Today, we work with clients ranging from startups to Fortune 500 companies, helping them navigate the ever-evolving digital landscape.
              </p>
            </div>
            <div className="w-full h-full flex items-center justify-center rounded-xl">
              <img src="/dc.png" alt="" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-lime-400 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-400">
                We constantly explore new ideas and technologies to stay ahead of the curve.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-lime-400 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-400">
                We believe the best results come from working closely with our clients and team.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-lime-400 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-400">
                We strive for perfection in everything we do, no matter how small.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-lime-400 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-400">
                We conduct business with honesty and transparency in all our relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
           {team.map((member) => (
  <div key={member.id} className="bg-gray-900 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
    <div className="aspect-square bg-gradient-to-br from-primary/30 via-primary/10 to-third/30 relative overflow-hidden">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        onError={(e) => {
          e.target.style.display = 'none';
          const fallback = document.createElement('div');
          fallback.className = 'flex items-center justify-center h-full';
          fallback.innerHTML = `<div class="w-32 h-32 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center"><span class="text-4xl font-bold text-primary">${member.name.charAt(0)}</span></div>`;
          e.target.parentElement.appendChild(fallback);
        }}
      />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{member.name}</h3>
      <p className="text-lime-400 mb-3 font-semibold">{member.role}</p>
      <p className="text-gray-400 text-sm">
        Bringing expertise and passion to deliver exceptional digital solutions.
      </p>
    </div>
  </div>
))}

          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <h2 className="max-w-8xl container mx-auto  text-3xl font-bold text-center mb-16">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;