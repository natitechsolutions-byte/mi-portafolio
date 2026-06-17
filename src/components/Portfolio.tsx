import { FiExternalLink } from "react-icons/fi";
import img from "../assets/Asesoria-alexandra.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Asesoría Alexandra",
      category: "Web profesional",
      description:
        "Sitio web corporativo desarrollado para presentar servicios contables, tributarios y laborales de forma clara, elegante y profesional.",
      img: img,
      url: "https://asesoriasalexandra.cl/",
    },
  ];

  return (
    <section id="portfolio" className="relative overflow-hidden py-14 md:py-16 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-[#C89B3C] font-bold tracking-[0.25em] text-xs md:text-sm uppercase">
            Portafolio
          </p>

          <h2 className="font-Montserrat font-bold text-3xl md:text-5xl mt-4 text-black">
            Proyecto destacado
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Una muestra real del trabajo realizado, enfocada en diseño profesional,
            presencia digital y experiencia de usuario.
          </p>
        </div>

        <div className="mt-14 max-w-5xl mx-auto">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver proyecto ${project.title}`}
              className="group block rounded-[2rem] border border-[#C89B3C]/15 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(0,0,0,0.14)]"
            >
              <div className="grid lg:grid-cols-[1.15fr_0.85fr] items-center">
                
                {/* Imagen */}
                <div className="relative overflow-hidden bg-[#FAF7EF]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-[260px] sm:h-[340px] lg:h-[430px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay para que se note clickable */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />

                  <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/95 shadow-lg flex items-center justify-center text-[#C89B3C] transition-all duration-300 group-hover:bg-[#C89B3C] group-hover:text-white group-hover:scale-110">
                    <FiExternalLink size={22} />
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-7 sm:p-9 lg:p-10 text-left">
                  <span className="inline-flex items-center rounded-full bg-[#FAF7EF] border border-[#C89B3C]/25 px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase text-[#C89B3C]">
                    {project.category}
                  </span>

                  <h3 className="mt-5 text-2xl md:text-3xl font-extrabold text-black">
                    {project.title}
                  </h3>

                  <div className="w-12 h-[2px] bg-[#C89B3C] mt-4 mb-5"></div>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#C89B3C] px-6 py-3 text-white text-sm font-bold shadow-[0_14px_35px_rgba(200,155,60,0.30)] transition-all duration-300 group-hover:gap-4 group-hover:bg-black">
                    Ver proyecto
                    <FiExternalLink size={17} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;