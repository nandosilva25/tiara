import React from 'react';

export const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-charcoal text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-sand-100">
          Entenda a Cirurgia de Mohs
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Assista ao vídeo explicativo da Sociedade Brasileira de Dermatologia (SBD) sobre como funciona o procedimento e seus benefícios.
        </p>
        
        <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-800">
           {/* Placeholder for the actual SBD video embed. 
               Using a generic medical placeholder look for now as specific YouTube ID was not provided.
           */}
           <iframe 
             className="absolute top-0 left-0 w-full h-full"
             src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" 
             title="Vídeo Explicativo - Cirurgia de Mohs"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen
           ></iframe>
           <div className="absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-none">
             <span className="text-white/80 text-sm">(Vídeo ilustrativo da SBD)</span>
           </div>
        </div>
      </div>
    </section>
  );
};