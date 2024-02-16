import About from './components/About';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Sectiontext from './components/Sectiontext';
import WhatsAppButton from './components/WhatsAppButton';


function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Sectiontext/>
      <About/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}

export default App;
