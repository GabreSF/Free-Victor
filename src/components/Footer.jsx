import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r font-jost from-[#0C15A1] to-[#030A73] text-[#F9F9F9] py-2 px-2 w-full">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="mb-4 md:mb-0 overflow-hidden">
            {/* Substituição da imagem pelo texto "Psicólogo Victor Bremm" */}
            <h2 className="text-2xl justify-center text-center font-bold mb-2 font-dancing-script">Psicólogo Victor Bremm</h2>
          </div>
          <div className="text-center md:text-left md:w-1/3 flex flex-col">
            <h2 className="text-lg justify-center text-center font-bold mb-2">Agende sua consulta!</h2>
            <p className='justify-center text-center'>
              <FaMapMarkerAlt className="inline mr-2" />
              Endereço: Núcleo de Psicologia Porto Alegrense, R. dos Andradas, 1656 - Sala 301 - Centro Histórico, Porto Alegre - RS, 90020-012
            </p>
            <p className='justify-center text-center'>
              <FaPhone className="inline mr-2" />
              Telefone: (51) 99400-6177
            </p>
            <p className='justify-center text-center'>
              <FaEnvelope className="inline mr-2" />
              Email: bremmvictor@gmail.com
            </p>
            <a 
              href="https://www.linkedin.com/in/Teste/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F9F9F9] hover:text-[#DEDEDE] transition duration-300 justify-center text-center"
            >
              <FaLinkedin className="inline mr-2" />
              LinkedIn
            </a>
           
            <a
              href="https://wa.me/5551994006177"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F9F9F9] hover:text-[#DEDEDE] transition duration-300 justify-center text-center"
            >
              <FaWhatsapp className="inline mr-2" />
              Whatsapp
            </a>
          </div>
          <div className="w-full md:w-1/3">
            <iframe
              title="Google Maps"
              className="w-full h-96 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.392340260644!2d-51.2250452!3d-30.0296365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197981d088d805:0x93268f500315df08!2sN%C3%BAcleo%20de%20Psicologia%20Porto%20Alegre!5e0!3m2!1sen!2sbr!4v1676991292781!6e0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
