
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxOpen]);

  if (!project) {
    return (
      <div className="pt-40 pb-24 px-6 text-center">
        <h1 className="text-4xl font-serif mb-8">Project Not Found</h1>
        <Link to="/work" className="text-black underline">Back to Portfolio</Link>
      </div>
    );
  }

  const openLightbox = (idx: number) => {
    setCurrentImageIdx(idx);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    if (project.gallery) {
      setCurrentImageIdx((currentImageIdx + 1) % project.gallery.length);
    }
  };

  const prevImage = () => {
    if (project.gallery) {
      setCurrentImageIdx((currentImageIdx - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  return (
    <div className="animate-in fade-in duration-1000 pt-32 lg:pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-16">
          <Link to="/work" className="inline-flex items-center text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors group">
            <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Selected Works
          </Link>
        </div>

        {/* Project Header: Clean & Modern */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4">
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold px-3 py-1 bg-gray-50 text-gray-500">
                {project.category}
              </span>
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-gray-300">
                / {project.location}, CO
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-none tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Project Facts: Minimalist Sidebar */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-32 space-y-12">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Project Facts</h4>
              </div>
              <dl className="grid grid-cols-1 gap-10">
                {(project.facts || [
                  { label: 'Location', value: project.location },
                  { label: 'Status', value: 'Completed' }
                ]).map((fact, idx) => (
                  <div key={idx} className="flex flex-col">
                    <dt className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">{fact.label}</dt>
                    <dd className="text-xl font-serif">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </header>

        {/* Hero Image Section */}
        <div className="mb-32">
          <div className="aspect-[21/9] overflow-hidden bg-gray-50">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 text-[10px] uppercase tracking-widest text-gray-300 text-right">
            EXTERIOR FACADE — NORTHWEST ASPECT
          </div>
        </div>

        {/* Gallery Section with Editorial Rhythm */}
        <section className="space-y-16">
          <div className="flex items-baseline gap-4">
            <h3 className="text-2xl font-serif">Visual Narrative</h3>
            <div className="flex-grow h-px bg-gray-50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
            {project.gallery ? project.gallery.map((img, idx) => {
              // Create specific spans for visual rhythm (mix of large, portrait, and wide)
              const spans = [
                'md:col-span-12', // Hero wide
                'md:col-span-7',  // Landscape
                'md:col-span-5',  // Portrait
                'md:col-span-4',  // Grid small
                'md:col-span-4',  // Grid small
                'md:col-span-4',  // Grid small
                'md:col-span-6',  // Medium square
                'md:col-span-6',  // Medium square
                'md:col-span-12', // Wide
                'md:col-span-8',  // Large
                'md:col-span-4'   // Tall
              ];
              const spanClass = spans[idx % spans.length];

              return (
                <div 
                  key={idx} 
                  onClick={() => openLightbox(idx)}
                  className={`${spanClass} overflow-hidden cursor-zoom-in group relative bg-gray-100 shadow-sm transition-transform duration-500 hover:-translate-y-1`}
                >
                  <img 
                    src={`${img}?auto=format&fit=crop&q=85&w=1200`} 
                    alt={`Project Perspective ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{ minHeight: '400px', maxHeight: '700px' }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white text-[10px] uppercase tracking-widest font-bold">
                    View Larger
                  </div>
                </div>
              );
            }) : (
              <div className="col-span-12 py-32 text-center border border-dashed border-gray-200">
                <p className="text-gray-400 font-light italic">Detailed gallery forthcoming for {project.title}.</p>
              </div>
            )}
          </div>
        </section>

        {/* Footer Navigation: Premium CTA */}
        <footer className="mt-40 pt-24 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
             <h4 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">Architecture is a <br /><span className="italic">conversation.</span></h4>
             <Link to="/contact" className="inline-block bg-black text-white px-12 py-5 uppercase text-xs tracking-[0.2em] font-bold hover:bg-gray-800 transition-all">
               Begin Your Project
             </Link>
          </div>
          <div className="space-y-6">
            <p className="text-gray-500 font-light leading-relaxed italic text-lg">
              "Working with Synergistic allowed us to push our design boundaries while maintaining absolute confidence in the technical execution."
            </p>
            <div className="flex flex-col">
               <span className="text-xs font-bold uppercase tracking-widest">Client Testimonial</span>
               <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">{project.title} Residence</span>
            </div>
            <div className="pt-8">
              <Link to="/work" className="text-xs uppercase tracking-widest font-bold border-b border-black pb-2 hover:text-gray-500 hover:border-gray-500 transition-all">
                Return to Portfolio
              </Link>
            </div>
          </div>
        </footer>
      </div>

      {/* Lightbox Modal: Full Screen Experience */}
      {lightboxOpen && project.gallery && (
        <div 
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 md:p-12 animate-in fade-in duration-300"
          onClick={() => setLightboxOpen(false)}
        >
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-8 right-8 p-4 text-black hover:scale-110 transition-transform z-[110]"
          >
            <X size={28} />
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={prevImage}
              className="absolute left-0 p-4 text-gray-300 hover:text-black hover:scale-110 transition-all z-[110]"
            >
              <ChevronLeft size={64} strokeWidth={0.5} />
            </button>
            
            <img 
              src={`${project.gallery[currentImageIdx]}?auto=format&fit=crop&q=95&w=2400`}
              alt="High-resolution project detail"
              className="max-w-full max-h-full object-contain"
            />
            
            <button 
              onClick={nextImage}
              className="absolute right-0 p-4 text-gray-300 hover:text-black hover:scale-110 transition-all z-[110]"
            >
              <ChevronRight size={64} strokeWidth={0.5} />
            </button>
          </div>
          
          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-end border-t border-gray-100 pt-8">
            <div className="hidden md:block">
              <span className="block text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-1">Current Perspective</span>
              <span className="font-serif italic text-gray-700">{project.title} Detail</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.5em] font-bold">
              {currentImageIdx + 1} <span className="text-gray-200 mx-2">/</span> {project.gallery.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
