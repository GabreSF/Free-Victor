import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-10 right-10 z-10">
      <a
        href="https://api.whatsapp.com/send?phone=5551994006177&text=Olá,%20vi%20seu%20perfil%20no%20Google%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20atendimentos"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-3 rounded-full shadow-lg flex items-center justify-center"
        style={{ width: '60px', height: '60px' }}
      >
        <FaWhatsapp className="h-12 w-12" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
