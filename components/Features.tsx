import React from 'react';
import { Target, Shield, Microscope, Activity } from 'lucide-react';
import { PILLARS } from '../constants';

const icons = {
  Target: Target,
  Shield: Shield,
  Microscope: Microscope,
  Activity: Activity
};

export const Features: React.FC = () => {
  return (
    <section id="pilares" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-teal-700 font-bold mb-4">
            Por que escolher a Cirurgia Micrográfica de Mohs
          </h2>
          <div className="h-1 w-24 bg-sand-200 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((pillar, index) => {
            const Icon = icons[pillar.icon];
            return (
              <div 
                key={index} 
                className="group p-8 rounded-xl bg-sand-50 border border-transparent hover:border-sand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-teal-600/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                  <Icon className="w-8 h-8 text-teal-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-teal-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};