
import React, { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import { PROJECTS } from '../constants';
import { ChevronRight, ArrowRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Synergistic Development transformed our vision into a reality that exceeded every expectation. Their attention to detail in the framing and finish work is second to none in Denver.",
    author: "The Andersons",
    project: "Hilltop Custom Build"
  },
  {
    quote: "Professional, transparent, and remarkably disciplined. They managed our complex renovation with zero surprises and total clarity from start to finish.",
    author: "Sarah J.",
    project: "Wash Park Renovation"
  },
  {
    quote: "The most organized construction team we've ever worked with. Their process-driven approach made building our dream home a genuinely enjoyable experience.",
    author: "Mark & Elena",
    project: "Cherry Creek Modern"
  }
];

const HERO_IMAGES = [
  '/projects/sunnyside/210217IMG_1548.jpg',
  '/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-001-9-Exterior%20Front-1500x1000-72dpi.jpg',
  '/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-003-20-Exterior%20Front%20Entry-1500x1000-72dpi.jpg',
  '/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-004-3-Front%20Porch-1500x1000-72dpi.jpg'
];

const PREVIEW_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description: "An initial deep dive into your vision, site feasibility, and project goals to ensure a perfect alignment."
  },
  {
    number: "02",
    title: "Design & Plan",
    description: "Collaborative architectural refinement where every finish and structural detail is resolved on paper."
  },
  {
    number: "03",
    title: "The Build",
    description: "Disciplined site management and master-level craftsmanship executed with surgical precision."
  },
  {
    number: "04",
    title: "Handover",
    description: "A seamless transition to your new residence, backed by our commitment to long-term quality and care."
  }
];

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [heroIndex, setHeroIndex] = useState(0);

    useEffect(() => {
    const id = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once visible, we can stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-scale');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={containerRef} className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="Synergistic Development project"
              className={`absolute inset-0 w-full h-full object-cover brightness-50 transition-opacity duration-1000 ease-in-out ${idx === heroIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-[6px] w-[28px] transition-all duration-300 ${idx === heroIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight animate-in slide-in-from-bottom-8 duration-1000">
            Built for the <br /> <span className="italic">Denver Life.</span>
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
            Crafting architectural residences through a process rooted in transparency, discipline, and uncompromising detail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
            <Button to="/contact">Start Your Project</Button>
            <Button to="/work" variant="outline" className="text-white border-white hover:bg-white hover:text-black">View Our Work</Button>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="reveal">
              <span className="uppercase tracking-[0.3em] text-xs text-gray-400 font-bold mb-4 block">Reputation Built on Trust</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Selective by Design. <br /> Professional by Trade.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We believe in quality over volume. By taking on a limited number of projects each year, we ensure every home receives the rigorous management and architectural integrity it deserves. Our deep knowledge of Denver’s unique neighborhoods allows us to navigate complex builds with ease.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
                <div>
                  <div className="text-3xl font-serif mb-1">15+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-serif mb-1">Denver Metro</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400">Exclusive Focus</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img src="/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-008-3-Kitchen-1500x1000-72dpi.jpg" className="reveal-scale aspect-[3/4] object-cover w-full transition-all duration-700 shadow-lg" alt="Architectural Detail" />
               <img src="/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-008-6-Living%20Room-1500x1000-72dpi.jpg" className="reveal-scale delay-200 aspect-[3/4] object-cover w-full mt-12 transition-all duration-700 shadow-lg" alt="Interior Detail" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview Section (How We Work) */}
      <section className="py-24 bg-white overflow-hidden border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Visual Column */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden group reveal-scale">
                <img 
                  src="/projects/mariposa/kyliefitts_3640mariposast_web_9.jpg" 
                  alt="Architectural Planning" 
                  className="w-full h-full object-cover brightness-90 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 border-[20px] border-white/10 group-hover:border-transparent transition-all duration-700"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7">
              <div className="mb-16 reveal">
                <span className="uppercase tracking-[0.3em] text-xs text-gray-400 font-bold mb-4 block">Methodology</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">How We <br /> Work</h2>
                <p className="text-gray-600 mb-8 leading-relaxed max-w-xl">
                  Our process is engineered to eliminate surprises and maximize transparency. We guide you through four essential stages to bring your vision to life.
                </p>
                <Button to="/process" variant="outline" className="group">
                  Explore Our Process <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {PREVIEW_STEPS.map((step, idx) => (
                  <div key={idx} className={`space-y-4 group reveal delay-${(idx + 1) * 100}`}>
                    <div className="text-3xl font-serif text-gray-200 group-hover:text-black transition-colors duration-500">
                      {step.number}
                    </div>
                    <h4 className="text-lg font-bold uppercase tracking-wider">{step.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
            <div className="max-w-xl">
              <span className="uppercase tracking-[0.3em] text-xs text-gray-400 font-bold mb-4 block">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif">Featured Projects</h2>
            </div>
            <Button to="/work" variant="outline">View All Work</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.slice(0, 4).map((project, idx) => (
              <div key={project.id} className={`group cursor-pointer reveal delay-${(idx % 2 + 1) * 100}`}>
                <div className="overflow-hidden mb-6 aspect-[16/10] bg-gray-200 shadow-sm">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">{project.category} — {project.location}</span>
                    <h3 className="text-2xl font-serif">{project.title}</h3>
                  </div>
                  <div className="p-2 bg-gray-50 group-hover:bg-black group-hover:text-white transition-colors">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#f9f8f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="uppercase tracking-[0.3em] text-xs text-gray-400 font-bold mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif">Client Reflections</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className={`bg-white p-12 border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500 reveal delay-${(idx + 1) * 100}`}>
                <div>
                  <Quote size={32} className="text-gray-200 mb-8" />
                  <p className="text-xl font-serif italic text-gray-700 leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">{t.author}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">{t.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="/projects/sunnyside/210217IMG_1539.jpg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
          <h2 className="text-4xl md:text-6xl font-serif mb-12">Ready to define <br /><span className="italic">your space?</span></h2>
          <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto font-light">
            We are currently accepting inquiries for custom builds and major renovations for 2025. Let’s discuss your vision.
          </p>
          <Button to="/contact" variant="secondary" className="px-12 py-5">
            Request a Consultation <ArrowRight size={18} className="ml-3" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;