
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <span className="uppercase tracking-[0.3em] text-xs text-gray-400 font-bold mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Elevating the Denver <span className="italic">Built-Environment.</span></h1>
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
              <p>
                Synergistic Development was founded on a simple premise: custom home building should be a professional, transparent, and architecturally driven experience.
              </p>
              <p>
                We aren't a volume builder. We are a boutique firm focused on high-performance homes and sophisticated urban infill. Our team brings a rigorous management style typically reserved for commercial construction into the custom residential world.
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
             <p className="text-gray-500 leading-relaxed">Radical transparency in budgeting, uncompromising craftsmanship in execution, and a commitment to long-term architectural relevance.</p>
           </div>
           <div className="space-y-6">
             <h3 className="text-xl font-bold uppercase tracking-widest border-b border-black pb-4">Our Neighborhoods</h3>
             <p className="text-gray-500 leading-relaxed">Deeply rooted in Hilltop, Washington Park, Bonnie Brae, and the Highlands. We understand the specific zoning and historic nuances of Denver's elite enclaves.</p>
           </div>
           <div className="space-y-6">
             <h3 className="text-xl font-bold uppercase tracking-widest border-b border-black pb-4">Our Partners</h3>
             <p className="text-gray-500 leading-relaxed">We work exclusively with Denver's premier architects and most disciplined trades. Our relationships are built on years of shared high standards.</p>
           </div>
        </div>

        <div className="bg-[#1a1a1a] text-white p-12 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif mb-6">Who We Work With</h2>
            <p className="text-gray-400 text-lg">We thrive when working with homeowners who value design, expect professional project management, and understand that quality takes time. Our ideal projects are those that push architectural boundaries.</p>
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
