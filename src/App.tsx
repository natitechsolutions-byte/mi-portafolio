import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Servicios';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

const App = () => {




  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [])


  return (
    //Cambia el fondo según el modo
    <div className="bg-gradient-to-br from-white via-[#FAFAFA] to-[#F5F5F5] min-h-screen">
      <Navbar />
      <Hero />
      <Services/>
      <AboutMe/>
      <Process/>
      <Portfolio/>
      <Footer/>
      
    </div>
  )
}

export default App