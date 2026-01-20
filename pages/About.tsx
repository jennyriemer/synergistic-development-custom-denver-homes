
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <span className="uppercase tracking-[0.3em] text-xs text-gray-400 font-bold mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Elevating Denver <span className="italic">Residential Construction.</span></h1>
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                Synergistic Development was founded on a simple premise: homeowners deserve a professional, transparent, architecturally driven experience when building a custom home or undertaking a major remodel in Denver.
              </p>
              <p>
                We are not a volume builder. We work exclusively with individual homeowners on custom homes in Denver, Colorado, whole-home renovations, additions, and large-scale remodeling. Our team applies disciplined planning, documentation, and jobsite management—so your project stays organized, communicated, and built to a high standard.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src="/projects/washington/578%20S%20Washington%20St%20Denver%20CO-large-002-11-Exterior%20Front-1500x1000-72dpi.jpg" className="w-full h-[600px] object-cover" alt="Architectural Detail" />
            <div className="absolute -bottom-12 -left-12 bg-[#d4cfc9] p-12 hidden lg:block max-w-xs">
               <p className="font-serif text-2xl italic">"Our goal isn't just to build a house, but to craft a legacy piece of the Denver skyline."</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40">
           <div className="space-y-6">
             <h3 className="text-xl font-bold uppercase tracking-widest border-b border-black pb-4">Our Values</h3>
             <p className="text-gray-500 leading-relaxed">Clear budgeting and decision-making, uncompromising craftsmanship, and a commitment to homes that feel intentional—now and years from now.</p>
           </div>
           <div className="space-y-6">
             <h3 className="text-xl font-bold uppercase tracking-widest border-b border-black pb-4">Our Neighborhoods</h3>
             <p className="text-gray-500 leading-relaxed">Deeply rooted in Washington Park, Hilltop, Bonnie Brae, the Highlands, and Cherry Creek—and experienced throughout the surrounding Front Range. We understand the permitting, zoning, and existing-home conditions that shape large-scale home remodels in Denver.</p>
           </div>
           <div className="space-y-6">
             <h3 className="text-xl font-bold uppercase tracking-widest border-b border-black pb-4">Our Partners</h3>
             <p className="text-gray-500 leading-relaxed">We collaborate with Denver architects, designers, engineers, and specialty trades who share our standards. That team structure supports smoother planning, tighter execution, and a better homeowner experience.</p>
           </div>
        </div>

        <div className="bg-[#1a1a1a] text-white p-12 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif mb-6">Who We Work With</h2>
            <p className="text-gray-400 text-lg">We are a strong fit for homeowners planning a custom home, addition, pop-top, or whole-home renovation—projects where design coordination, detailed planning, and high-quality execution matter. If you value clear communication, documented decisions, and a structured process, our team will be a strong long-term partner.</p>
          </div>
          <div className="flex flex-col space-y-4 text-sm uppercase tracking-[0.2em]">
            <span className="flex items-center gap-4"><MapPin size={16} /> Denver, Colorado</span>
            <span className="flex items-center gap-4"><Phone size={16} /> 303.555.0123</span>
            <span className="flex items-center gap-4"><Mail size={16} /> hello@synergistic-dev.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
