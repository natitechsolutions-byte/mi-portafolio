import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../assets/footer.png";

const Footer = () => {
  const [copied, setCopied] = useState("");
  const year = new Date().getFullYear();

  const phone = "+56989305299";
  const email = "natitechsolutions@gmail.com";
  const instagram = "https://www.instagram.com/natitechsolutions";

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);

      setTimeout(() => {
        setCopied("");
      }, 1600);
    } catch (error) {
      console.log("No se pudo copiar", error);
    }
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0B0B0B] text-white"
    >
      {/* Luces decorativas suaves */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[320px] bg-[#C89B3C]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-48 right-0 w-[360px] h-[360px] bg-[#C89B3C]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-9 md:py-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl px-6 md:px-9 py-8 md:py-9 shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
          
          {/* Parte principal compacta */}
          <div className="grid lg:grid-cols-[auto_1fr_auto] items-center gap-7 lg:gap-10">
            
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={logo}
                alt="NatiTech Solutions"
                className="w-40 md:w-50 object-contain"
              />
            </div>

            {/* Texto */}
            <div className="text-center lg:text-left">
              <p className="text-[#C89B3C] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">
                Contacto
              </p>

              <h2 className="font-Montserrat font-extrabold text-2xl md:text-4xl leading-tight">
                Hablemos de tu proyecto
              </h2>

              <p className="text-white/60 mt-3 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Cuéntame qué necesitas y creemos una página web profesional,
                clara y adaptada a tu negocio.
              </p>
            </div>

            {/* Botón + íconos */}
            <div className="flex flex-col items-center lg:items-end gap-5">
              <a
                href="https://wa.me/56989305299"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C89B3C] text-white px-6 py-3.5 rounded-full text-sm font-bold shadow-[0_16px_35px_rgba(200,155,60,0.26)] hover:bg-white hover:text-[#0B0B0B] hover:-translate-y-1 transition-all duration-300"
              >
                <FaWhatsapp size={17} />
                Contactar
              </a>

              {/* Íconos solos */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => copyToClipboard(phone, "phone")}
                  title="Copiar número"
                  className="relative w-11 h-11 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center text-[#C89B3C] hover:bg-[#C89B3C] hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <FaPhoneAlt size={15} />

                  {copied === "phone" && (
                    <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-white text-black text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                      Número copiado
                    </span>
                  )}
                </button>

                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  title="Ir a Instagram"
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center text-[#C89B3C] hover:bg-[#C89B3C] hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <FaInstagram size={19} />
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard(email, "email")}
                  title="Copiar correo"
                  className="relative w-11 h-11 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center text-[#C89B3C] hover:bg-[#C89B3C] hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <FaEnvelope size={17} />

                  {copied === "email" && (
                    <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-white text-black text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                      Correo copiado
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Parte inferior compacta */}
          <div className="mt-7 pt-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40 text-center md:text-left">
            <p>© {year} NatiTechSolutions. Todos los derechos reservados.</p>
            <p>Páginas web modernas para empresas, emprendedores y profesionales.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;