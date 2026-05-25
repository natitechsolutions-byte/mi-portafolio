import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Servicios from './components/Servicios';

const App = () => {

  {/*darkMode: guarda si está en modo oscuro o claro
    setDarkMode: función para cambiarlo*/}

  const [darkMode, setDarkMode] = useState(true)


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    //Activa modo oscuro por defecto
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() =>{
    AOS.refresh();
  },[darkMode])


  return (
    //Cambia el fondo según el modo
    <div className={
      darkMode
        ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
        : 'bg-linear-to-br from-gray-50 to-blue-50 '}>
      <Navbar darkMode={darkMode} />
      <Hero darkMode={darkMode}/>
      <About />
      <Servicios />
     {/*  <Projects /> */}
      <Contact />
    </div>
  )
}

export default App