import logo from "../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#B87905] via-[#F7D77A] to-[#B87905] py-8 md:py-10">

      {/* Puntitos derecha */}
      <div className="absolute right-0 top-0 h-full w-[320px] overflow-hidden">
        <div className="pixel-pattern"></div>
      </div>
      {/* Logo circular */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6 md:gap-12 relative z-10">
       

        <div className="text-center md:text-left">
          <h2 className="font-Montserrat text-[#111] text-lg md:text-2xl">
            ¿LISTO PARA LLEVAR TU NEGOCIO AL SIGUIENTE NIVEL?
          </h2>

          <p className="text-[#111]/80 mt-1 text-sm md:text-base">
            Hablemos de tu proyecto y hagámoslo realidad.
          </p>

          <a
            href="https://wa.me/56989305299"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 bg-[#111] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-black transition"
          >
            <FaWhatsapp />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;