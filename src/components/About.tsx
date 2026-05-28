const About = () => {

  return (
    <section
      id="about"
      className='container relative z-10 mx-auto px-6'
    >

      {/* Glow decorativo */}
      <div className='absolute top-20 left-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full'></div>
      <div className='absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-500/10 blur-3xl rounded-full'></div>

      <div className='container relative z-10 mx-auto flex px-4 sm:px-8 lg:px-14
        flex-col lg:flex-row items-center justify-between gap-14'>

        {/* TEXTO */}
        <div className='w-full max-w-4xl mx-auto flex flex-col items-center text-center'>

          <h2
            className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white'
            data-aos='fade-up'
          >
            Tecnología y soluciones digitales para emprendedores
          </h2>

          <p
            className='mb-6 max-w-xl text-purple-100 leading-relaxed'
            data-aos='fade-up'
            data-aos-delay='200'
          >

            NatiTechSolutions es un emprendimiento orientado al soporte técnico computacional
            y soluciones digitales para emprendedores y pequeños negocios.

          </p>

          <p
            className='mb-6 max-w-xl text-purple-100 leading-relaxed'
            data-aos='fade-up'
            data-aos-delay='300'
          >

            Ofrezco servicios de formateo, optimización e instalación de software para notebooks
             y Pc además de creación de páginas web, landing pages y presencia digital
            para negocios que necesitan mejorar su imagen y visibilidad online.

          </p>

        </div>


      </div>
    </section>
  )
}

export default About