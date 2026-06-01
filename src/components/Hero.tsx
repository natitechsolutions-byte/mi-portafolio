import {
  ExternalLink,
  MessageCircle,
  Sparkles
} from 'lucide-react'

import logo from '../assets/logo.png'

const Hero = () => {

  return (
    <section
      id='home'
      className='relative overflow-hidden pt-32 md:pt-36 pb-20 scroll-mt-28'
    >

      {/* Glow decorativo */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full'></div>
      <div className='absolute bottom-20 right-10 w-80 h-80 bg-fuchsia-500/20 blur-3xl rounded-full'></div>

      <div
        className='container relative z-10 mx-auto
        px-4 sm:px-8 lg:px-14
        flex flex-col lg:flex-row
        items-center justify-between
        gap-14'
      >

        {/* TEXTO */}
        <div
          className='lg:w-1/2 w-full
          flex flex-col
          items-center lg:items-start
          text-center lg:text-left'
        >

          <div className='flex items-center gap-2 mb-4 text-purple-300 font-semibold'>
            <Sparkles size={18} />
            NatiTechSolutions
          </div>

          <h1
            className='text-4xl sm:text-5xl lg:text-6xl
            font-bold text-white leading-tight mb-6'
          >

            Creamos páginas web para hacer crecer tu negocio.

          </h1>

          <p
            className='text-purple-100 text-lg
            leading-relaxed max-w-xl mb-8'
          >

            Ayudamos a emprendedores y pequeños negocios a destacar en Internet con páginas web modernas, profesionales y adaptadas a sus necesidades.

          </p>

          {/* BOTONES */}
          <div
            className='flex flex-col sm:flex-row
            justify-center lg:justify-start
            gap-4'
          >

            <a href="#projects">

              <button
                className='inline-flex items-center justify-center
                text-white
                bg-gradient-to-r from-purple-700 via-purple-500 to-fuchsia-400
                py-3 px-8 rounded-full
                text-base sm:text-lg font-semibold
                hover:shadow-[0_0_40px_rgba(168,85,247,0.8)]
                hover:scale-105 transition-all duration-300'
              >

                <ExternalLink className='w-5 h-5 mr-2' />
                Ver proyectos

              </button>

            </a>

            <a
              href="https://wa.me/56989305299"
              target="_blank"
              rel="noreferrer"
            >

              <button
                className='flex items-center gap-2
                px-6 py-3 rounded-full
                bg-white/10
                border border-purple-400
                text-white font-semibold
                hover:bg-purple-600
                hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]
                hover:scale-105
                transition-all duration-300 shadow-lg'
              >

                <MessageCircle size={18} />
                Hablar por WhatsApp

              </button>

            </a>

          </div>

        </div>

        {/* LOGO */}
        <div
          className='lg:w-1/2 w-full
          flex justify-center'
        >

          <div
            className='relative
            rounded-3xl
            bg-white/5
            border border-purple-400/20
            backdrop-blur-xl
            shadow-[0_0_60px_rgba(168,85,247,0.25)]
            p-6'
          >

            <div className='absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full'></div>

            <img
              src={logo}
              alt="NatiTechSolutions"
              className='w-full max-w-[400px] object-contain
              hover:scale-105 transition-all duration-500'
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero