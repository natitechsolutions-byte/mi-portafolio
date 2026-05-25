import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import project1 from '../assets/peluqueria.webp'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Bella Nails Studio',
      desc: 'Aumentó sus reservas usando WhatsApp con una página web optimizada para clientes móviles.',
      image: project1,
      tags: ['Más clientes', 'WhatsApp', 'Responsive'],
      demo: '#',
    },
    {
      id: 2,
      title: 'Sistema de Reservas',
      desc: 'Automatizó sus citas y redujo pérdidas de clientes gracias a un sistema web rápido y simple.',
      image: project1,
      tags: ['Automatización', 'Reservas', 'Eficiencia'],
      demo: '#',
    },
    {
      id: 3,
      title: 'Landing de Negocio',
      desc: 'Página enfocada en convertir visitas en clientes reales con diseño claro y llamado a la acción.',
      image: project1,
      tags: ['Ventas', 'Conversión', 'Marketing'],
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="relative py-24 overflow-hidden text-white">
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-500/10 blur-3xl rounded-full"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-purple-300 font-semibold mb-3">
            Trabajos y demos
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
            Mis{' '}
            <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-purple-100">
            Resultados reales y diseños pensados para emprendedores y pequeños negocios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-3xl border border-purple-400/20 bg-white/5 backdrop-blur-xl
              shadow-[0_0_40px_rgba(168,85,247,0.15)]
              hover:border-purple-400/50 hover:shadow-[0_0_45px_rgba(168,85,247,0.28)]
              transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>

                <p className="text-sm mb-4 text-purple-100 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-purple-900/50 border border-purple-400/20 text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2
                    text-sm rounded-full bg-white/10 border border-purple-400/20 text-white
                    hover:bg-purple-700 hover:scale-105 transition-all duration-300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2
                    text-sm rounded-full text-white bg-gradient-to-r from-purple-700 via-purple-500 to-fuchsia-400
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.55)]
                    hover:scale-105 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects