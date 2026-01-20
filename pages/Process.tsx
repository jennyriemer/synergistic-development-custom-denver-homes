
import React, { useEffect, useRef, useState } from 'react';
import { PROCESS_STEPS } from '../constants';
import Button from '../components/Button';
import { ProcessStep } from '../types';

const PROCESS_IMAGES = [
  "/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-003-20-Exterior%20Front%20Entry-1500x1000-72dpi.jpg", // Step 01
  "/projects/lakewood/7377%20Highland%20Drive%20Lakewood-large-011-2-Kitchen-1500x1000-72dpi.jpg", // Step 02
  "/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-007-17-Dining%20Room-1500x1000-72dpi.jpg", // Step 03
  "/projects/s%20penn/982%20S%20Pennsylvania%20St%20Denver-large-036-38-Back%20Yard-1500x1000-72dpi.jpg", // Step 04
  "/projects/emerson%202/925%20S%20Emerson%20St%20Denver%20CO-large-004-14-Living%20Room-1500x1000-72dpi.jpg", // Step 05
];

interface StepItemProps {
  step: ProcessStep;
  index: number;
  image: string;
}

const StepItem: React.FC<StepItemProps> = ({ step, index, image }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={elementRef}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Step Number */}
      <div className="lg:col-span-1">
        <span className={`text-6xl font-serif block sticky top-32 transition-colors duration-1000 ${
          isVisible ? 'text-black' : 'text-gray-200'
        }`}>
          {step.number}
        </span>
      </div>

      {/* Step Content */}
      <div className="lg:col-span-6 space-y-6">
        <h2 className={`text-3xl md:text-4xl font-serif uppercase tracking-wider transition-colors duration-1000 ${
          isVisible ? 'text-black' : 'text-gray-400'
        }`}>
          {step.title}
        </h2>
        <div className={`prose prose-lg leading-relaxed font-light transition-colors duration-1000 ${
          isVisible ? 'text-gray-600' : 'text-gray-400'
        }`}>
          <p>{step.description}</p>
          <p className={`text-sm italic mt-4 transition-colors duration-1000 ${
            isVisible ? 'text-gray-400' : 'text-gray-300'
          }`}>
            {index === 0 && "During this phase, we look at zoning constraints, budgetary expectations, and stylistic goals. We proceed only when alignment is absolute."}
            {index === 1 && "The most critical work happens on paper. We coordinate with elite architects and engineers to ensure every spatial detail is resolved before mobilization."}
            {index === 2 && "We utilize open-book accounting and meticulous bid comparisons, ensuring total fiscal clarity before a single shovel hits the ground."}
            {index === 3 && "Disciplined site management, daily digital logs, and proactive problem solving. We manage the complexity so you don't have to."}
            {index === 4 && "Our relationship continues beyond the keys. We provide a comprehensive digital home manual and structured check-ins for the life of the home."}
          </p>
        </div>
      </div>

      {/* Step Visual */}
      <div className="lg:col-span-5">
        <div className="relative overflow-hidden shadow-2xl">
          <img 
            src={/^https?:\/\//.test(image) ? `${image}?auto=format&fit=crop&q=80&w=1200` : image} 
            alt={step.title}
            className={`w-full h-[400px] object-cover transition-all duration-1000 transform ${
              isVisible ? 'grayscale-0 brightness-100 scale-100' : 'grayscale brightness-90 scale-105'
            }`}
          />
          <div className={`absolute inset-0 transition-colors duration-1000 ${
            isVisible ? 'bg-transparent' : 'bg-black/5'
          }`}></div>
        </div>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="max-w-3xl mb-24 animate-in fade-in duration-1000">
          <span className="uppercase tracking-[0.3em] text-xs text-gray-400 font-bold mb-4 block">The Methodology</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Architecture First. <br /> Planning Always.</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Construction is a complex coordination of thousands of variables. Our process is designed to bring order to that complexity through radical transparency and relentless planning.
          </p>
        </div>

        {/* Process Steps List */}
        <div className="space-y-32">
          {PROCESS_STEPS.map((step, index) => (
            <StepItem 
              key={index} 
              step={step} 
              index={index} 
              image={PROCESS_IMAGES[index]} 
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-40 p-12 lg:p-24 bg-[#fcfcfc] border border-gray-100 flex flex-col items-center text-center">
           <h3 className="text-3xl md:text-4xl font-serif mb-8">Have questions about your specific project?</h3>
           <p className="text-gray-500 mb-12 max-w-xl font-light">
             Every home is unique. We are happy to walk through our project management platform and show you exactly how we handle communication, budgets, and schedules.
           </p>
           <Button to="/contact">Book a Process Walkthrough</Button>
        </div>
      </div>
    </div>
  );
};

export default Process;
