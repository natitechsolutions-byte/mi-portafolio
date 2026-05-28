import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';
import Contact from './components/Contact';
import Servicios from './components/Servicios';

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
    <div className='
      bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'>
      <Navbar />
      <Hero />
      <About />
      <Servicios />
      {/*  <Projects /> */}
      <Contact />
    </div>
  )
}

export default App