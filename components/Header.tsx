import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { WHATSAPP_LINK } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('home')}>
             <img 
               src="https://cancerdepelebrasilia.com/wp-content/uploads/2025/11/Marca-d_a_ugua-cinza-removebg-preview.png" 
               alt="Dra. Thiara Lenzi" 
               className="h-16 w-auto"
             />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('sobre')} className="text-gray-600 hover:text-teal-600 transition-colors">Sobre</button>
            <button onClick={() => scrollTo('pilares')} className="text-gray-600 hover:text-teal-600 transition-colors">Diferenciais</button>
            <button onClick={() => scrollTo('passo-a-passo')} className="text-gray-600 hover:text-teal-600 transition-colors">O Procedimento</button>
            <button onClick={() => scrollTo('faq')} className="text-gray-600 hover:text-teal-600 transition-colors">Dúvidas</button>
            <Button onClick={openWhatsApp} variant="primary" className="py-2 px-4">
              Agendar Consulta
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-teal-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollTo('sobre')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">Sobre</button>
            <button onClick={() => scrollTo('pilares')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">Diferenciais</button>
            <button onClick={() => scrollTo('passo-a-passo')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">O Procedimento</button>
            <button onClick={() => scrollTo('faq')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">Dúvidas</button>
            <div className="pt-4 pb-2 px-3">
              <Button onClick={openWhatsApp} fullWidth>
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};