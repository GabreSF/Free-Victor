import { FaInstagram } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import Aboutfto from '../assets/Aboutfto.jpg';

const About = () => {
  return (
    <div className="container mx-auto font-jost flex flex-col sm:flex-row items-center py-12">
      {/* Imagem em formato de círculo */}
      <div className="flex-shrink-0 mb-4 sm:mb-0">
        <a href="https://www.instagram.com/psi.victorbremm/" target="_blank" rel="noopener noreferrer">
          <img src={Aboutfto} alt="Imagem em formato de círculo" className="w-64 h-64 rounded-full shadow-xl" />
        </a>
        <div className="text-center mt-2 flex justify-center items-center">
          {/* Ícone do Instagram */}
          <a href="https://www.instagram.com/psi.victorbremm/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaInstagram className="text-3xl text-[#155e75]" />
          </a>
          {/* Ícone do Mapa */}
          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.392340260644!2d-51.2250452!3d-30.0296365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197981d088d805:0x93268f500315df08!2sN%C3%BAcleo%20de%20Psicologia%20Porto%20Alegre!5e0!3m2!1sen!2sbr!4v1676991292781!6e0" target="_blank" rel="noopener noreferrer">
            <FiMapPin className="text-3xl text-[#155e75]" />
          </a>
        </div>
      </div>
      
      {/* Texto à direita */}
      <div className="sm:ml-6 px-4">
        <h2 className="text-3xl font-bold text-[#155e75] mb-4 text-center">Sobre</h2>
        <p className="text-lg text-[#155e75] text-center">
          Olá, sou o Victor. Formado em psicologia pelo Centro Universitário Metodista IPA. Sigo a linha teórica da psicanálise, a qual é a base da minha proposta terapêutica. Tenho experiência em temáticas como; dependência química, relacionamentos codependentes, impotência sexual, ajustamento à doenças crônicas, dependência financeira, emocional ou prática dos pais etc.
          <br />
          <br />
          Se você está em busca de suporte psicológico e deseja explorar mais sobre minha abordagem, estou à disposição para conversarmos e discutirmos como posso auxiliar em sua saúde mental e autoconhecimento. Sinta-se à vontade para entrar em contato comigo e tirar suas dúvidas sobre como funciona a terapia, valores e sobre a minha atuação como psicólogo.
        </p>
      </div>
    </div>
  );
};

export default About;
