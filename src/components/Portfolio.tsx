import { FiExternalLink } from "react-icons/fi";
import img from "../assets/Asesoria-alexandra.png"

const Portfolio = () => {
  const projects = [
    {
      title: "Asesoría Alexandra",
      category: "Web Profesional",
      description:
        "Sitio web corporativo para servicios contables, tributarios y laborales.",
      img: img,
      url: "https://natitechsolutions-byte.github.io/asesorias-alexandra/",
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#C89B3C] font-bold tracking-[0.25em] text-sm">
          PORTAFOLIO
        </p>

        <h2 className=" font-Montserrat
                font-bold text-3xl md:text-5xl  mt-4">
          Proyecto destacado
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {projects.map((project) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.10)] border border-[#C89B3C]/10 hover:-translate-y-1 transition"
            >
              <div className="h-56 overflow-hidden bg-gray-100">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-black">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {project.category}
                  </p>
                </div>

                <FiExternalLink
                  size={18}
                  className="text-[#C89B3C]"
                />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;