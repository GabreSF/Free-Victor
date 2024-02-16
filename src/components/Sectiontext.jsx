import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SectionText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('section-text');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > sectionTop - windowHeight + sectionHeight / 2 && scrollY < sectionTop + sectionHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="section-text"
      className="container mx-auto text-center py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-4xl font-jost text-[#155e75] font-bold mb-4">Psicoterapia</h1>
      <p className="items-center font-jost text-[#155e75] justify-center mx-4 text-lg lg:text-xl">
        Atuo com uma proposta psicanalítica adaptada para atender às demandas da clínica contemporânea. Minha abordagem envolve uma participação mais ativa, de maneira que posso oferecer insights e sugestões, promovendo uma colaboração dinâmica para lidar com os desafios da vida.
        <br />
        <br />
        A terapia ajudará você a perceber o que impede a mudança e a lidar com diversas situações. Meu objetivo é proporcionar uma compreensão mais profunda dos desejos e da origem dos sentimentos, acompanhada da construção de novas perspectivas de vida.
      </p>
    </motion.div>
  );
};

export default SectionText;
