import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-sand-100 overflow-hidden min-h-[90vh] flex items-center">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-sand-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-teal-700 font-bold leading-tight">
            Diagnóstico de câncer de pele?
            <span className="block text-charcoal text-2xl md:text-3xl mt-4 font-normal">
              A cirurgia de Mohs oferece até 99% de taxa de cura com a máxima preservação da sua aparência.
            </span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              Dra. Thiara Lenzi, dermatologista e cirurgiã dermatológica especializada em Mohs em Brasília.
            </p>
            <p className="text-base text-gray-600 border-l-4 border-sand-200 pl-4">
              Você, paciente, é acompanhado com atenção individualizada, unindo ciência, experiência e sensibilidade no cuidado com a pele e com a saúde.
            </p>
          </div>

          <div className="pt-4">
            <Button onClick={scrollToContact} className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              Agendar Avaliação Especializada
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white aspect-[4/5] max-w-md mx-auto">
             {/* TODO: IMPORTANTE - Substitua o URL abaixo pelo link da imagem da Dra. Thiara enviada */}
             <img 
               src="https://cancerdepelebrasilia.com/wp-content/uploads/2025/11/foto-tiara.jpeg" 
               alt="Dra. Thiara Lenzi - Cirurgiã de Mohs" 
               className="object-cover w-full h-full"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 md:right-8 bg-white p-4 rounded-lg shadow-xl max-w-[200px]">
            <p className="text-sm font-bold text-teal-700">Alta Precisão</p>
            <p className="text-xs text-gray-600">Controle microscópico de 100% das margens.</p>
          </div>
        </div>

      </div>
    </section>
  );
};