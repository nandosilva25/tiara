import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-xl font-bold text-sand-200">Dra. Thiara Lenzi</h3>
          <p className="text-gray-400 text-sm mt-1">CRM-DF 12345 | RQE 12345</p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Responsável Técnico: Dra. Thiara Lenzi
          </p>
        </div>
      </div>
    </footer>
  );
};