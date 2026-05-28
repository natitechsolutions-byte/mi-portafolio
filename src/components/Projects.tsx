import { ExternalLink, Clock3 } from 'lucide-react'

const Projects = () => {

    const projects = [
        {
            title: 'Landing page Cafetería',
            description:
                'Diseño moderno y responsive para un negocio local con menú, ubicación y contacto por WhatsApp.',
            status: 'Próximamente',
        },
        {
            title: 'Menú digital restaurante',
            description:
                'Proyecto pensado para restaurantes y cafeterías con categorías y experiencia visual moderna.',
            status: 'En desarrollo',
        },
        {
            title: 'Portfolio profesional',
            description:
                'Sitio web elegante y minimalista para mostrar servicios y presencia profesional online.',
            status: 'Próximamente',
        },
    ]

    return (
        <section
            id="projects"
            className="relative overflow-hidden py-24"
        >

            {/* Glow decorativo */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-500/10 blur-3xl rounded-full"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-8 lg:px-14">

                {/* TITULO */}
                <div className="text-center mb-16">
                    <span className="text-purple-300 font-semibold">
                        Mis proyectos
                    </span>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-5">
                        Próximos trabajos y diseños
                    </h2>

                    <p className="max-w-2xl mx-auto text-purple-100 text-lg leading-relaxed">
                        Algunos proyectos y diseños que estoy desarrollando para
                        futuros clientes y emprendimientos.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="
                group relative overflow-hidden
                rounded-3xl border border-purple-500/20
                bg-white/5 backdrop-blur-xl
                p-7 transition-all duration-300
                hover:border-purple-400/40
                hover:-translate-y-2
              "
                        >

                            {/* Glow hover */}
                            <div className="
                absolute inset-0 opacity-0
                bg-linear-to-br from-purple-500/10 to-fuchsia-500/10
                transition-opacity duration-300
                group-hover:opacity-100
              "></div>

                            <div className="relative z-10">

                                <div className="flex items-center justify-between mb-6">
                                    <div className="
                    w-14 h-14 rounded-2xl
                    bg-linear-to-br from-purple-600 to-fuchsia-500
                    flex items-center justify-center
                    shadow-lg
                  ">
                                        <ExternalLink className="text-white" size={26} />
                                    </div>

                                    <span className="
                    flex items-center gap-2
                    text-sm text-purple-200
                    bg-purple-500/10
                    border border-purple-500/20
                    px-3 py-1 rounded-full
                  ">
                                        <Clock3 size={14} />
                                        {project.status}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-purple-100 leading-relaxed">
                                    {project.description}
                                </p>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Projects