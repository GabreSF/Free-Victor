import React from 'react';
import { motion } from 'framer-motion';
import ftovictor01 from "../assets/ftovictor01.jpg";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#05183c] to-[#0C15A1] py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between shadow-2xl" style={{ minHeight: '400px', paddingTop: '72px' }}>
      {/* Texto em cima em todas as telas */}
      <div className="max-w-xl sm:order-1 mb-8 sm:mb-0 sm:mr-8 sm:mt-4">
        <h1 className="text-4xl font-semibold font-jost text-[#F9F9F9] mb-4 sm:mt-0">Victor Bremm da Silva</h1>
        <h2 className='text-[#F9F9F9] font-jost mb-4 font-medium text-xl border-b-2 border-[#155e75]'>Psicólogo Clínico CRP 07/37963</h2>
        <p className="text-lg font-jost text-[#F9F9F9]">Psicoterapia de Orientação Psicanalítica | Modalidades Presencial e Online | Atendimentos para Adolescentes | Adultos e Idosos.</p>
      </div>

      {/* Foto embaixo em todas as telas */}
      <div className="max-w-sm sm:order-2">
        <motion.img
          src={ftovictor01}
          alt="Imagem de exemplo"
          className="rounded-full"
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
          // Adicione um ponto de interrupção para ajustar a animação em telas menores
          whileHover={{ scale: 1.1 }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
