import { Sparkles } from 'lucide-react'

const About = () => {

  return (
    <section
      id="about"
      className='relative overflow-hidden flex items-center py-24'
    >

      {/* Glow decorativo */}
      <div className='absolute top-20 left-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full'></div>
      <div className='absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-500/10 blur-3xl rounded-full'></div>

      <div className='container relative z-10 mx-auto flex px-4 sm:px-8 lg:px-14
        flex-col lg:flex-row items-center justify-between gap-14'>

        {/* TEXTO */}
        <div className='lg:w-1/2 w-full flex flex-col items-center
          lg:items-start text-center lg:text-left'>

          <div className='flex items-center gap-2 mb-4 text-purple-300 font-semibold'>
            <Sparkles size={18} />
            Sobre NatiTechSolutions
          </div>

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

        {/* CARD VISUAL */}
        <div className='lg:w-1/2 w-full flex justify-center'>

          <div
            className='relative rounded-3xl
            bg-white/5
            border border-purple-400/20
            backdrop-blur-xl
            p-8
            shadow-[0_0_50px_rgba(168,85,247,0.2)]
            max-w-md'
          >

            <div className='absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full'></div>

            <h3 className='text-2xl font-bold text-white mb-6'>
              ¿Qué hago?
            </h3>

            <div className='space-y-4'>

              <div className='p-4 rounded-2xl bg-purple-900/30 border border-purple-400/20'>
                <h4 className='font-semibold text-purple-300 mb-1'>
                  💻 Soporte Técnico
                </h4>

                <p className='text-sm text-purple-100'>
                  Optimización, formateo, limpieza y configuración de equipos.
                </p>
              </div>

              <div className='p-4 rounded-2xl bg-purple-900/30 border border-purple-400/20'>
                <h4 className='font-semibold text-purple-300 mb-1'>
                  🌐 Desarrollo Web
                </h4>

                <p className='text-sm text-purple-100'>
                  Landing pages, portfolios y páginas para emprendedores.
                </p>
              </div>

              <div className='p-4 rounded-2xl bg-purple-900/30 border border-purple-400/20'>
                <h4 className='font-semibold text-purple-300 mb-1'>
                  🚀 Presencia Digital
                </h4>

                <p className='text-sm text-purple-100'>
                  Soluciones modernas para mejorar tu imagen online.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About