import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">
            Histórias de Recuperação
          </h2>
          <p className="text-teal-100 max-w-2xl mx-auto">
            O conforto e a segurança de nossos pacientes são nossa prioridade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-white relative">
              <Quote className="absolute top-4 right-4 text-teal-400 opacity-20 w-10 h-10" />
              <p className="text-lg mb-6 italic font-light opacity-90">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-lg font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-bold text-sand-200">{testimonial.name}</p>
                  {testimonial.role && <p className="text-xs text-teal-200">{testimonial.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};