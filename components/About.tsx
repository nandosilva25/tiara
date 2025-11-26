import React from 'react';
import { Award, BookOpen, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
             <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-sand-200 rounded-tl-3xl z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-teal-600 rounded-br-3xl z-0 opacity-20"></div>
                <img 
                  src="https://cancerdepelebrasilia.com/wp-content/uploads/2025/11/1B0A0247c.jpga_.jpeg" 
                  alt="Dra. Thiara Lenzi em atendimento" 
                  className="relative z-10 w-full rounded-xl shadow-lg object-cover h-[400px]" 
                />
             </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-teal-700 font-bold">
              Expertise e Cuidado Humanizado
            </h2>
            <p className="text-lg text-gray-700 italic">
              "A Cirurgia de Mohs é uma técnica que exige formação específica e experiência."
            </p>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A Dra. Thiara Lenzi é dermatologista e cirurgiã dermatológica, com mestrado em câncer de pele não melanoma, e credenciamento oficial pela Sociedade Brasileira de Cirurgia Dermatológica (SBCD) para a realização da Cirurgia Micrográfica de Mohs.
              </p>
              <p>
                Com mais de 15 anos de atuação no tratamento do câncer de pele em Brasília, inclusive em serviço público, alia conhecimento científico a uma prática clínica cuidadosa e ética, sempre priorizando o bem-estar e a segurança de cada paciente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <Award className="w-8 h-8 text-teal-600 mb-2" />
                <span className="text-sm font-semibold">Credenciamento SBCD</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <BookOpen className="w-8 h-8 text-teal-600 mb-2" />
                <span className="text-sm font-semibold">Mestrado em Oncologia Cutânea</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <Heart className="w-8 h-8 text-teal-600 mb-2" />
                <span className="text-sm font-semibold">+15 Anos de Experiência</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};