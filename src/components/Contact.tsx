import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState("");

  const phone = "+56989305299";
  const email = "natitechsolutions@gmail.com";
  const instagram = "https://www.instagram.com/natitechsolutions";

  const copyToClipboard = async (text:any, type:any) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);

      setTimeout(() => {
        setCopied("");
      }, 1800);
    } catch (error) {
      console.log("No se pudo copiar", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-r from-[#B87905] via-[#F7D77A] to-[#B87905] py-12 md:py-14"
    >
      {/* Puntitos derecha */}
      <div className="absolute right-0 top-0 h-full w-[320px] overflow-hidden opacity-50">
        <div className="pixel-pattern"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#111] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">
            Contacto
          </p>

          <h2 className="font-Montserrat font-extrabold text-[#111] text-2xl md:text-4xl leading-tight">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>

          <p className="text-[#111]/75 mt-4 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Hablemos de tu proyecto y creemos una página web moderna,
            profesional y adaptada a tu negocio.
          </p>

          {/* Botón WhatsApp */}
          <a
            href="https://wa.me/56989305299"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-7 bg-[#111] text-white px-7 py-4 rounded-full text-sm font-bold shadow-[0_18px_40px_rgba(0,0,0,0.22)] hover:bg-black hover:-translate-y-1 transition-all duration-300"
          >
            <FaWhatsapp size={18} />
            Escríbenos por WhatsApp
          </a>

          {/* Íconos contacto */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {/* Copiar celular */}
            <button
              type="button"
              onClick={() => copyToClipboard(phone, "phone")}
              title="Copiar número"
              className="group relative w-13 h-13 md:w-14 md:h-14 rounded-full bg-white/90 border border-white/70 shadow-[0_12px_30px_rgba(0,0,0,0.16)] flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <FaPhoneAlt size={18} />

              {copied === "phone" && (
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[11px] px-3 py-1 rounded-full whitespace-nowrap">
                  Número copiado
                </span>
              )}
            </button>

            {/* Instagram */}
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              title="Ver Instagram"
              className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-white/90 border border-white/70 shadow-[0_12px_30px_rgba(0,0,0,0.16)] flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <FaInstagram size={21} />
            </a>

            {/* Copiar correo */}
            <button
              type="button"
              onClick={() => copyToClipboard(email, "email")}
              title="Copiar correo"
              className="group relative w-13 h-13 md:w-14 md:h-14 rounded-full bg-white/90 border border-white/70 shadow-[0_12px_30px_rgba(0,0,0,0.16)] flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <FaEnvelope size={20} />

              {copied === "email" && (
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[11px] px-3 py-1 rounded-full whitespace-nowrap">
                  Correo copiado
                </span>
              )}
            </button>
          </div>

          <p className="mt-7 text-xs md:text-sm text-[#111]/65">
            Haz click en los íconos para copiar o visitar el contacto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;