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
      className="relative overflow-hidden py-24 scroll-mt-28"
    >
      <div className="absolute top-10 left-0 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-500/10 blur-3xl rounded-full"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-8 lg:px-14">
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-white/5 border border-purple-400/20 backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.18)] px-6 py-12 md:px-16 md:py-16 text-center">

          <div className="flex justify-center items-center gap-2 mb-5 text-purple-300 font-semibold">
            <Sparkles size={18} />
            Contacto
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>

          <p className="text-purple-100 max-w-2xl mx-auto leading-relaxed mb-10 text-base sm:text-lg">
            Escríbeme y trabajemos juntas en una página web moderna,
            profesional y adaptada a tu emprendimiento.
          </p>

          <a
            href="https://wa.me/56989305299"
            target="_blank"
            rel="noreferrer"
          >
            <button className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-purple-700 via-purple-500 to-fuchsia-500 text-white font-semibold text-lg shadow-lg hover:shadow-[0_0_45px_rgba(168,85,247,0.7)] hover:scale-105 transition-all duration-300">
              <MessageCircle size={22} />
              Hablar por WhatsApp
            </button>
          </a>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
            <a
              href="https://www.instagram.com/natitechsolutions/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-purple-200 hover:text-white transition-all duration-300"
            >
              <FaInstagram size={24} />
              <span className="font-medium">@natitechsolutions</span>
            </a>

            <a
              href="mailto:natitechsolutions@gmail.com"
              className="flex items-center gap-3 text-purple-200 hover:text-white transition-all duration-300 break-all"
            >
              <Mail size={24} />
              <span className="font-medium">natitechsolutions@gmail.com</span>
            </a>
          </div>

          <div className="mt-12 pt-6 border-t border-purple-400/20">
            <p className="text-sm text-purple-300">
              Tecnología que impulsa tu negocio 🚀
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact