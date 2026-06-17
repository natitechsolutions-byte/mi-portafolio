import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/footer.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0B0B0B] text-white"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-14">
        {/* Caja principal */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.35)] overflow-hidden">
          
          {/* Parte superior */}
          <div className="grid lg:grid-cols-[0.8fr_1.4fr_1fr] gap-8 lg:gap-10 items-center px-6 sm:px-8 lg:px-10 py-9 lg:py-10">
            
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="flex items-center gap-6">
                <img
                  src={logo}
                  alt="NatiTech Solutions"
                  className="w-28 sm:w-32 lg:w-36 object-contain"
                />

                <div className="hidden lg:block h-20 w-px bg-[#C89B3C]/30" />
              </div>
            </div>

            {/* Texto */}
            <div className="text-center lg:text-left">
              <p className="text-[#C89B3C] text-[11px] font-bold tracking-[0.35em] uppercase">
                Contacto
              </p>

              <h2 className="font-Montserrat font-extrabold text-3xl md:text-4xl mt-3 leading-tight">
                Hablemos de tu proyecto
              </h2>

              <p className="text-white/65 mt-4 text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Cuéntame qué necesitas y te ayudaré a crear una presencia web
                profesional, clara y adaptada a tu negocio.
              </p>
            </div>

            {/* Botón */}
            <div className="flex justify-center lg:justify-end">
              <a
                href="https://wa.me/56989305299"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#C89B3C] text-white px-7 py-4 rounded-full text-sm font-bold shadow-[0_18px_45px_rgba(200,155,60,0.25)] hover:bg-white hover:text-[#0B0B0B] transition-all duration-300 hover:-translate-y-1"
              >
                <FaWhatsapp className="text-lg" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* Contactos */}
          <div className="border-t border-white/10 px-6 sm:px-8 lg:px-10 py-6">
            <div className="grid md:grid-cols-3 gap-4">
              
              <a
                href="tel:+56989305299"
                className="group flex items-center justify-center md:justify-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/75 hover:border-[#C89B3C]/40 hover:bg-[#C89B3C]/10 hover:text-white transition-all duration-300"
              >
                <span className="w-9 h-9 rounded-full bg-[#C89B3C]/15 flex items-center justify-center text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition">
                  <FaPhoneAlt size={14} />
                </span>
                +56 9 8930 5299
              </a>

              <a
                href="https://www.instagram.com/natitechsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center md:justify-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/75 hover:border-[#C89B3C]/40 hover:bg-[#C89B3C]/10 hover:text-white transition-all duration-300"
              >
                <span className="w-9 h-9 rounded-full bg-[#C89B3C]/15 flex items-center justify-center text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition">
                  <FaInstagram size={15} />
                </span>
                @natitechsolutions
              </a>

              <a
                href="mailto:natitechsolutions@gmail.com"
                className="group flex items-center justify-center md:justify-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/75 hover:border-[#C89B3C]/40 hover:bg-[#C89B3C]/10 hover:text-white transition-all duration-300"
              >
                <span className="w-9 h-9 rounded-full bg-[#C89B3C]/15 flex items-center justify-center text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition">
                  <FaEnvelope size={15} />
                </span>
                <span className="break-all">natitechsolutions@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Parte inferior */}
          <div className="border-t border-white/10 px-6 sm:px-8 lg:px-10 py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/45">
              <p>
                © {year} NatiTechSolutions. Todos los derechos reservados.
              </p>

              <p>
                Páginas web modernas para empresas, emprendedores y profesionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;