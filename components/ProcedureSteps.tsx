import React from 'react';
import { STEPS } from '../constants';

export const ProcedureSteps: React.FC = () => {
  return (
    <section id="passo-a-passo" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-teal-700 font-bold mb-4">
            O Procedimento Passo a Passo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A técnica de Mohs é meticulosa. Entenda como garantimos a cura com o máximo de segurança em cada etapa.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sand-200"></div>

          <div className="space-y-12">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Side */}
                  <div className="w-full md:w-1/2 p-4 md:px-8">
                    <div className={`bg-sand-50 p-6 rounded-xl shadow-sm border-l-4 border-teal-600 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="text-xl font-bold text-teal-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Number Bubble Center */}
                  <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 my-4 md:my-0 bg-teal-600 rounded-full shadow-lg z-10 border-4 border-white">
                    <span className="text-white font-bold text-xl md:text-2xl">{step.number}</span>
                  </div>

                  {/* Empty Side for Balance */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};