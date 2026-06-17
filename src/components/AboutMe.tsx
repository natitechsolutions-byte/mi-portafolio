import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

import fotoNatalia from "../assets/nati.png";

const AboutMe = () => {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden bg-white py-14 md:py-16"
    >
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#C89B3C]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
          
          {/* FOTO */}
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#C89B3C]/25 via-transparent to-black/10 rounded-[2rem] blur-2xl" />

            <div className="relative rounded-[2rem] overflow-hidden bg-[#0B0B0B] shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
              <img
                src={fotoNatalia}
                alt="Natalia Varela - NatiTechSolutions"
                className="w-full h-[390px] md:h-[430px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-2">
                  Natalia Varela
                </h3>

                <p className="text-[#E8C878] text-sm font-semibold">
                  Ingeniera de Ejecución en Informática
                </p>
              </div>
            </div>
          </div>

          {/* TEXTO */}
          <div className="text-center lg:text-left">
            <p className="text-[#C89B3C] font-bold tracking-[0.35em] text-xs uppercase mb-4">
              Sobre mí
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-black leading-tight mb-6 max-w-2xl mx-auto lg:mx-0">
              Experiencia técnica para crear sitios web con propósito
            </h2>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Soy{" "}
                <strong className="text-black">Natalia Varela</strong>, 
                Ingeniera de Ejecución en Informática y creadora de{" "}
                <strong className="text-black">NatiTechSolutions</strong>.
              </p>

              <p>
                Cuento con experiencia en desarrollo de soluciones digitales,
                diseño de interfaces, documentación y colaboración con equipos
                de trabajo en proyectos reales.
              </p>

              <p>
                He participado en proyectos para empresas como{" "}
                <strong className="text-black">Clever by Bice</strong> y{" "}
                <strong className="text-black">Banco Bice</strong>, fortaleciendo
                mi enfoque profesional, ordenado y orientado a resultados.
              </p>

              <p>
                Hoy aplico esa experiencia para ayudar a empresas, emprendedores
                y profesionales a tener una presencia digital clara, moderna y
                confiable.
              </p>
            </div>

            {/* ETIQUETAS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-7">
              <div className="inline-flex items-center gap-2 bg-[#FAF7EF] border border-[#C89B3C]/25 rounded-full px-4 py-2 text-sm font-semibold text-black">
                <Code2 size={17} className="text-[#C89B3C]" />
                Desarrollo web
              </div>

              <div className="inline-flex items-center gap-2 bg-[#FAF7EF] border border-[#C89B3C]/25 rounded-full px-4 py-2 text-sm font-semibold text-black">
                <BriefcaseBusiness size={17} className="text-[#C89B3C]" />
                Experiencia real
              </div>

              <div className="inline-flex items-center gap-2 bg-[#FAF7EF] border border-[#C89B3C]/25 rounded-full px-4 py-2 text-sm font-semibold text-black">
                <BadgeCheck size={17} className="text-[#C89B3C]" />
                Atención cercana
              </div>
            </div>

            {/* FRASE */}
            <div className="mt-7 border-l-4 border-[#C89B3C] pl-5 max-w-2xl mx-auto lg:mx-0">
              <p className="text-black font-bold text-base md:text-lg leading-relaxed">
                “Mi objetivo es crear sitios web que se vean profesionales,
                transmitan confianza y ayuden a cada negocio a destacar.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;