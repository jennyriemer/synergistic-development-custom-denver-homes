
import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Phone, Clock, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-24 px-6 animate-in fade-in duration-700">
        <div className="max-w-3xl mx-auto text-center py-24">
          <h1 className="text-5xl font-serif mb-8">Thank You.</h1>
          <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
            We have received your inquiry. Given our selective approach, we review each project thoroughly to ensure it aligns with our standards and current capacity. You can expect a response within 48 business hours.
          </p>
          <Button to="/">Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="uppercase tracking-[0.3em] text-xs text-gray-400 font-bold mb-4 block">Inquiry</span>
              <h1 className="text-5xl md:text-7xl font-serif mb-8">Start the <br /> <span className="italic">Conversation.</span></h1>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                Building a custom home is a significant undertaking. We are here to guide you through every architectural and financial decision. 
              </p>
              <p className="text-sm text-gray-400 font-medium italic">
                * Please note we are currently booking for late 2025 starts.
              </p>
            </div>

            <div className="space-y-8 border-t border-gray-100 pt-12">
               <div className="flex gap-6 items-start">
                 <div className="p-3 bg-gray-50"><Phone size={20} /></div>
                 <div>
                   <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Direct Line</h4>
                   <p className="text-lg font-serif">303.555.0123</p>
                 </div>
               </div>
               <div className="flex gap-6 items-start">
                 <div className="p-3 bg-gray-50"><Mail size={20} /></div>
                 <div>
                   <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Email</h4>
                   <p className="text-lg font-serif">office@synergistic-dev.com</p>
                 </div>
               </div>
               <div className="flex gap-6 items-start">
                 <div className="p-3 bg-gray-50"><Clock size={20} /></div>
                 <div>
                   <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Response Time</h4>
                   <p className="text-lg font-serif">24 - 48 Business Hours</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#fcfcfc] p-8 md:p-12 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-gray-200 py-3 px-1 focus:border-black outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                  <input required type="email" className="w-full bg-transparent border-b border-gray-200 py-3 px-1 focus:border-black outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
                  <input required type="tel" className="w-full bg-transparent border-b border-gray-200 py-3 px-1 focus:border-black outline-none transition-colors" placeholder="303-000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Project Type</label>
                  <select className="w-full bg-transparent border-b border-gray-200 py-3 px-1 focus:border-black outline-none transition-colors appearance-none">
                    <option>New Build</option>
                    <option>Remodel</option>
                    <option>Pop-Top</option>
                    <option>Multi-Unit</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Neighborhood / Location</label>
                  <input required type="text" className="w-full bg-transparent border-b border-gray-200 py-3 px-1 focus:border-black outline-none transition-colors" placeholder="e.g. Hilltop, Wash Park" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Desired Timeline</label>
                  <select className="w-full bg-transparent border-b border-gray-200 py-3 px-1 focus:border-black outline-none transition-colors appearance-none">
                    <option>Immediately</option>
                    <option>3 - 6 Months</option>
                    <option>6 - 12 Months</option>
                    <option>1 Year +</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Estimated Budget Range</label>
                <select className="w-full bg-transparent border-b border-gray-200 py-3 px-1 focus:border-black outline-none transition-colors appearance-none">
                  <option>$500k - $1M</option>
                  <option>$1M - $2.5M</option>
                  <option>$2.5M - $5M</option>
                  <option>$5M +</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Project Description</label>
                <textarea required rows={4} className="w-full bg-transparent border-b border-gray-200 py-3 px-1 focus:border-black outline-none transition-colors resize-none" placeholder="Tell us about your vision for the project..."></textarea>
              </div>

              <Button type="submit" className="w-full">
                Submit Inquiry <ArrowRight size={18} className="ml-3" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
