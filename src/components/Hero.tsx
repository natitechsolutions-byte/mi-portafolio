import { FaWhatsapp } from "react-icons/fa";
import mockup from "../assets/mockup.png";
import {
  LuZap,
  LuMonitorSmartphone,
  LuShieldCheck,
  LuHeadphones,
} from "react-icons/lu";
import type { IconType } from "react-icons";

type FeatureItem = {
  icon: IconType;
  title: string;
  text: string;
};

const Hero = () => {
  const items: FeatureItem[] = [
    {
      icon: LuZap,
      title: "Rápido",
      text: "Carga optimizada",
    },
    {
      icon: LuMonitorSmartphone,
      title: "100%",
      text: "Adaptado a móvil",
    },
    {
      icon: LuShieldCheck,
      title: "Seguro",
      text: "Diseño confiable",
    },
    {

      icon: LuHeadphones,
      title: "Soporte",
      text: "Apoyo continuo",

    },
  ];

  return (
    <section
      id="home"
      className="relative mt-28 md:mt-36 overflow-hidden"
    >
      <div
        className="
          max-w-7xl mx-auto px-6
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-0
          items-center
        "
      >
        {/* TEXTO */}
        <div className="relative z-20 order-1 w-full text-center lg:text-left">
          <p className="text-[#C89B3C] font-extrabold tracking-[0.18em] text-xs mb-3">
            NATITECH SOLUTIONS
          </p>

          <div className="max-w-[760px] mx-auto lg:mx-0">
            <h1
              className="
    font-['Montserrat']
    font-bold
    text-[34px]
    sm:text-[40px]
    md:text-[54px]
    lg:text-[48px]
    xl:text-[52px]
    2xl:text-[56px]
    leading-[0.95]
    tracking-[-0.04em]
  "
            >
              <span className="block 2xl:whitespace-nowrap">
                PÁGINAS WEB MODERNAS
              </span>

              <span className="block text-[#C89B3C]">
                PARA EMPRESAS Y EMPRENDEDORES
              </span>
            </h1>
          </div>

          <p className="mt-5 md:mt-6 text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Diseñamos sitios web rápidos, elegantes y adaptados a celular para
            ayudarte a transmitir confianza y atraer clientes.
          </p>

          {/* BOTONES */}
          <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://wa.me/56989305299"
              target="_blank"
              rel="noreferrer"
              className="
                w-full sm:w-[240px]
                bg-[#C89B3C] text-white
                px-6 md:px-7 py-4
                rounded-xl font-bold
                shadow-[0_14px_35px_rgba(200,155,60,0.35)]
                hover:bg-[#a77f2d]
                hover:-translate-y-1
                transition
                flex items-center justify-center gap-2
              "
            >
              <FaWhatsapp size={20} />
              Solicitar Cotización
            </a>

            <a
              href="#portfolio"
              className="
                w-full sm:w-[240px]
                border border-[#C89B3C]/70
                text-[#111]
                px-6 md:px-7 py-4
                rounded-xl font-bold
                hover:bg-[#C89B3C]
                hover:text-white
                hover:-translate-y-1
                shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                transition
                text-center
              "
            >
              Ver Portafolio
            </a>
          </div>

          {/* BENEFICIOS - MOBILE */}
          <div
            className="
    mt-8
    grid grid-cols-2
    gap-3
    max-w-[430px]
    mx-auto
    lg:hidden
  "
          >
            {items.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="
        group relative overflow-hidden
        rounded-2xl
        border border-[#C89B3C]/20
        bg-white
        px-3 py-4
        shadow-[0_12px_35px_rgba(0,0,0,0.06)]
      "
              >
                <div className="relative flex flex-col items-center text-center">
                  <div
                    className="
            w-10 h-10
            rounded-2xl
            bg-gradient-to-br from-[#F6DE9A] to-[#C89B3C]
            flex items-center justify-center
            shadow-[0_10px_25px_rgba(200,155,60,0.28)]
            mb-3
          "
                  >
                    <Icon className="text-white w-5 h-5" />
                  </div>

                  <p className="font-extrabold text-[12px] text-[#111] leading-none">
                    {title}
                  </p>

                  <p className="mt-1 text-[10px] text-gray-500 leading-tight">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BENEFICIOS - WEB */}
          <div
            className="
              hidden lg:grid
              mt-7
              grid-cols-4
              max-w-[620px]
              rounded-2xl
              border border-[#C89B3C]/20
              bg-white/90
              backdrop-blur-xl
              shadow-[0_18px_45px_rgba(0,0,0,0.06)]
              overflow-hidden
            "
          >
            {items.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className={`
                  group
                  relative
                  px-3 py-4
                  flex flex-col items-center justify-center
                  text-center
                  hover:bg-[#C89B3C]/5
                  transition
                  ${index !== items.length - 1 ? "border-r border-[#C89B3C]/15" : ""}
                `}
              >
                <div
                  className="
                    w-10 h-10
                    rounded-xl
                    bg-gradient-to-br from-[#F6DE9A] to-[#C89B3C]
                    flex items-center justify-center
                    shadow-[0_10px_25px_rgba(200,155,60,0.25)]
                    mb-2
                  "
                >
                  <Icon className="text-white w-5 h-5" />
                </div>

                <p className="font-extrabold text-[14px] text-[#111] leading-none">
                  {title}
                </p>

                <p className="mt-1 text-[12px] text-gray-500 leading-tight">
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
              md:max-w-[500px]
              lg:max-w-[550px]
              object-contain
              lg:-ml-20
              lg:translate-y-3
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;