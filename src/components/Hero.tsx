
import { FaWhatsapp } from "react-icons/fa";
import mockup from "../assets/mockup.png";
import {
  LuZap,
  LuMonitorSmartphone,
  LuShieldCheck,
  LuHeadphones,
} from "react-icons/lu";
import type { IconType } from "react-icons";


const Hero = () => {
  
  const items: [IconType, string, string][] = [
    [LuZap, "Rápido", "y Eficiente"],
    [LuMonitorSmartphone, "100%", "Responsivo"],
    [LuShieldCheck, "Seguro", "y Confiable"],
    [LuHeadphones, "Soporte", "Personalizado"],
  ];

  return (
    <section
      id="home"
      className="relative mt-36 md:mt-36   overflow-hidden"
    >
      <div
        className="
          max-w-7xl mx-auto px-6
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-8
          items-center
        "
      >
        {/* TEXTO */}
        <div className="relative z-20 order-1 w-full text-center lg:text-left">
          <p className="text-[#C89B3C] font-extrabold tracking-[0.18em] text-xs mb-3">
            NATITECH SOLUTIONS
          </p>

          <div className="max-w-[680px] mx-auto lg:mx-0">
            <h1
              className="
                font-Montserrat
                font-bold
                text-[34px]
                sm:text-[44px]
                md:text-[58px]
                lg:text-[58px]
                xl:text-[55px]
                leading-[1]
                sm:leading-[0.98]
                tracking-[-0.04em]
              "
            >
              <span className="block sm:whitespace-nowrap">
                PÁGINAS WEB MODERNAS
              </span>
              <span className="block text-[#C89B3C]">PARA EMPRESAS Y EMPRENDEDORES</span>
            
            </h1>
          </div>

          <p className="mt-5 md:mt-6 text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Diseñamos sitios web elegantes, rápidos y adaptados a celular, tablet y computador, pensados para transmitir confianza y fortalecer la presencia digital de tu negocio.
          </p>

          <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://wa.me/56989305299"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-[240px] bg-[#C89B3C] text-white px-6 md:px-7 py-4 rounded-xl font-bold shadow-xl hover:bg-[#a77f2d] transition flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={20} />
              Solicitar Cotización
            </a>

            <a
              href="#portfolio"
              className="w-full sm:w-[240px] border border-[#C89B3C] text-[#111] px-6 md:px-7 py-4 rounded-xl font-bold hover:bg-[#C89B3C] hover:text-white transition text-center"
            >
              Ver Portafolio
            </a>
          </div>

          <div className="mt-9 md:mt-10 grid grid-cols-4 gap-2 md:gap-7">

          {items.map(([Icon, title, text]) => (
            <div
              key={title}
              className="flex flex-col items-center text-center"
            >
              <Icon className="text-[#C89B3C] w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" />

              <p className="font-semibold text-[10px] sm:text-xs md:text-sm mt-1">
                {title}
              </p>

              <p className="text-[8px] sm:text-[9px] md:text-xs text-gray-500 leading-tight">
                {text}
              </p>
            </div>
          ))}
        </div>
        </div>

        {/* IMAGEN */}
        <div className="relative z-10 order-2 w-full flex justify-center lg:justify-end">
          <img
            src={mockup}
            alt="NatiTech Solutions"
            className="
              mt-6 lg:mt-0
              w-full
              max-w-[320px]
              sm:max-w-[420px]
              md:max-w-[520px]
              lg:max-w-[680px]
              object-contain
              lg:-ml-20
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;