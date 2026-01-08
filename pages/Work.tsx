
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

const Work: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories: (ProjectCategory | 'All')[] = ['All', 'New Build', 'Remodel', 'Pop-Top', 'Multi-Unit'];

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Premium Editorial Header */}
      <section className="relative pt-48 pb-24 px-6 bg-white overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Title & Filters */}
          <div className="lg:col-span-7">
            <span className="uppercase tracking-[0.3em] text-xs text-gray-400 font-bold mb-4 block">Archive</span>
            <h1 className="text-5xl md:text-8xl font-serif mb-16 leading-none tracking-tight">Selected <br /> Works</h1>
            
            <div className="flex flex-wrap gap-6 md:gap-12 pb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`uppercase tracking-widest text-[10px] md:text-xs font-bold transition-all relative pb-2 ${
                    filter === cat 
                      ? 'text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black' 
                      : 'text-gray-400 hover:text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-200 hover:after:w-full after:transition-all'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Column: Minimalist Descriptor & Stats Block */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-500 font-light leading-relaxed italic">
                A curated collection of residences that define the modern Denver landscape through architectural integrity and technical precision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 pt-12 border-t border-gray-100">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Service Area</span>
                <span className="text-xl font-serif">Denver Metro & Front Range</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Methodology</span>
                <span className="text-xl font-serif">Full Design-Build Delivery</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Timeline</span>
                <span className="text-xl font-serif">2009 — Present</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {filteredProjects.map((project) => (
              <Link key={project.id} to={`/work/${project.id}`} className="group flex flex-col">
                <div className="overflow-hidden mb-8 aspect-[4/5] bg-gray-100 shadow-sm relative transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">{project.category}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-300">{project.location}</span>
                  </div>
                  <h3 className="text-2xl font-serif leading-tight group-hover:underline underline-offset-8 decoration-gray-200">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light line-clamp-2">{project.description}</p>
                  <div className="pt-4 overflow-hidden">
                    <div className="w-8 h-px bg-black group-hover:w-full transition-all duration-700 origin-left"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-gray-400 font-serif italic text-xl">No projects found in this category. Check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Work;
