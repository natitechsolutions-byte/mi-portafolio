import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/footer.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0B0B0B] text-white">
      {/* Rayas izquierda */}
      {/* Líneas decorativas izquierda */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-[260px] pointer-events-none opacity-70">
        <svg
          viewBox="0 0 260 180"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path d="M-80 160 C 20 40, 80 20, 260 -20" fill="none" stroke="#C89B3C" strokeWidth="1" />
          <path d="M-60 170 C 30 55, 95 35, 270 -5" fill="none" stroke="#C89B3C" strokeWidth="1" opacity="0.7" />
          <path d="M-40 180 C 40 70, 110 50, 280 10" fill="none" stroke="#C89B3C" strokeWidth="1" opacity="0.5" />
          <path d="M-20 190 C 50 85, 125 65, 290 25" fill="none" stroke="#C89B3C" strokeWidth="1" opacity="0.35" />
        </svg>
      </div>

      {/* Líneas decorativas derecha */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-[300px] pointer-events-none opacity-80">
        <svg
          viewBox="0 0 300 180"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path d="M40 190 C 150 90, 220 45, 340 -20" fill="none" stroke="#C89B3C" strokeWidth="1" />
          <path d="M65 200 C 170 105, 235 60, 355 -5" fill="none" stroke="#C89B3C" strokeWidth="1" opacity="0.7" />
          <path d="M90 210 C 190 120, 250 75, 370 10" fill="none" stroke="#C89B3C" strokeWidth="1" opacity="0.5" />
          <path d="M115 220 C 210 135, 265 90, 385 25" fill="none" stroke="#C89B3C" strokeWidth="1" opacity="0.35" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-6">
        <div className="grid md:grid-cols-[0.7fr_1.4fr_1fr] items-center gap-6">

          <div className="flex justify-center md:justify-start items-center ">
            <img
              src={logo}
              alt="NatiTech Solutions"
              className="w-24 md:w-40 object-contain"
            />

            <div className="hidden md:block h-16 w-px bg-[#C89B3C]/30"></div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-[#C89B3C] text-[10px] font-bold tracking-[0.35em] uppercase">
              Contacto
            </p>

            <h2 className="font-Montserrat
                font-bold text-3xl md:text-3xl mt-2 leading-tight">
              Hablemos de tu proyecto
            </h2>

            <p className="text-white/70 mt-3 text-sm max-w-md mx-auto md:mx-0 leading-relaxed">
              Cuéntame qué necesitas y te ayudaré a encontrar la mejor solución para tu negocio.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <a
              href="https://wa.me/56989305299"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C89B3C] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-[#0B0B0B] transition"
            >
              <FaWhatsapp />
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 grid sm:grid-cols-3 gap-4 text-xs md:text-sm text-white/80">
          <a
            href="tel:+56989305299"
            className="flex justify-center items-center gap-2 hover:text-[#C89B3C]"
          >
            <FaPhoneAlt className="text-[#C89B3C]" />
            +56 9 8930 5299
          </a>

          <a
            href="https://www.instagram.com/natitechsolutions"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 hover:text-[#C89B3C]"
          >
            <FaInstagram className="text-[#C89B3C]" />
            @natitechsolutions
          </a>

          <a
            href="mailto:natitechsolutions@gmail.com"
            className="flex justify-center items-center gap-2 hover:text-[#C89B3C]"
          >
            <FaEnvelope className="text-[#C89B3C]" />
            natitechsolutions@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;