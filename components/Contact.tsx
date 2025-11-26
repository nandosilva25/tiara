import React, { useState } from 'react';
import { Button } from './Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-teal-700 font-bold mb-6">
              Entre em Contato
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Sua saúde e bem-estar são prioridade. Agende uma avaliação para discutir o melhor tratamento para o seu caso.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-charcoal">Endereço</h4>
                  <p className="text-gray-600">Centro Médico Júlio Adnet<br/>SEPS 710/910, Bloco A, Sala 330<br/>Brasília - DF</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-charcoal">Telefone / WhatsApp</h4>
                  <p className="text-gray-600">(61) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-charcoal">E-mail</h4>
                  <p className="text-gray-600">contato@drathiaralenzi.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-charcoal">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 08h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-sand-50 p-8 rounded-2xl shadow-lg border border-sand-200">
            {status === 'success' ? (
               <div className="text-center py-12">
                 <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 </div>
                 <h3 className="text-2xl font-bold text-teal-800 mb-2">Mensagem Enviada!</h3>
                 <p className="text-gray-600">Entraremos em contato em breve para confirmar seu agendamento.</p>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-shadow" placeholder="Seu nome" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input required type="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-shadow" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / Celular</label>
                    <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-shadow" placeholder="(61) 99999-9999" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-shadow" placeholder="Gostaria de agendar uma consulta sobre..." />
                </div>

                <Button type="submit" fullWidth className="text-lg py-4">
                  Enviar Solicitação
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Seus dados estão protegidos e serão utilizados apenas para este contato.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};