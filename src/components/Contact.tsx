import {
  MessageCircle,
  Mail,
  Sparkles
} from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'

const Contact = () => {

  return (
    <section
      id="contact"
      className='relative flex items-center overflow-hidden py-24'
    >

      {/* Glow decorativo */}
      <div className='absolute top-10 left-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full'></div>
      <div className='absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-500/10 blur-3xl rounded-full'></div>

      <div className='container relative z-10 mx-auto px-4 sm:px-8 lg:px-14'>

        <div
          className='max-w-4xl mx-auto
          rounded-3xl
          bg-white/5
          border border-purple-400/20
          backdrop-blur-xl
          shadow-[0_0_50px_rgba(168,85,247,0.18)]
          p-8 md:p-14 text-center'
        >

          <div className='flex justify-center items-center gap-2 mb-4 text-purple-300 font-semibold'>
            <Sparkles size={18} />
            Contacto
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white'>
            ¿Quieres una página web que impulse tu negocio?
          </h2>

          <p className='mb-10 text-purple-100 max-w-2xl mx-auto leading-relaxed'>
            Escríbeme y te ayudaré a crear una presencia digital moderna,
            profesional y pensada para conseguir más clientes.
          </p>

          {/* Botón WhatsApp */}
          <a
            href="https://wa.me/56989305299"
            target="_blank"
            rel="noreferrer"
          >

            <button
              className='flex items-center gap-3 mx-auto px-8 py-4 rounded-full
              border border-purple-400 bg-white/10 text-white font-semibold text-lg
              hover:bg-purple-600
              hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]
              hover:scale-105 transition-all duration-300 shadow-lg'
            >

              <MessageCircle size={22} />
              Hablar por WhatsApp

            </button>

          </a>

          {/* Redes */}
          <div className='mt-12 grid md:grid-cols-2 gap-6'>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/natitechsolutions/"
              target="_blank"
              rel="noreferrer"
              className='group rounded-2xl
              bg-purple-900/20
              border border-purple-400/20
              p-6
              hover:border-purple-400/50
              hover:bg-purple-900/30
              transition-all duration-300'
            >

              <div className='flex items-center justify-center gap-3 mb-3 text-purple-300'>
                <FaInstagram size={24} />
                <h3 className='text-xl font-semibold'>
                  Instagram
                </h3>
              </div>

              <p className='text-purple-100 group-hover:text-white transition'>
                @natitechsolution
              </p>

            </a>

            {/* Correo */}
            <a
              href="mailto:natitechsolution@gmail.com"
              className='group rounded-2xl
              bg-purple-900/20
              border border-purple-400/20
              p-6
              hover:border-purple-400/50
              hover:bg-purple-900/30
              transition-all duration-300'
            >

              <div className='flex items-center justify-center gap-3 mb-3 text-purple-300'>
                <Mail size={24} />
                <h3 className='text-xl font-semibold'>
                  Correo
                </h3>
              </div>

              <p className='text-purple-100 break-all group-hover:text-white transition'>
                natitechsolution@gmail.com
              </p>

            </a>

          </div>

          {/* Footer */}
          <div className='mt-12 pt-6 border-t border-purple-400/20'>

            <p className='text-sm text-purple-300'>
              Tecnología que impulsa tu negocio 🚀
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact