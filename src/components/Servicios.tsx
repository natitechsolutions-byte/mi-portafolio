import {
  MonitorCog,
  HardDriveDownload,
  Gauge,
  Brush,
  Folder,
  BadgeCheck,
  Globe,
  LayoutTemplate,
  UserRound,
  Users,
  MenuSquare,
  ShieldCheck,
  Zap,
  Heart,
} from 'lucide-react'

interface ServiceBoxProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  items: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
  footer: string
}

interface FeatureProps {
  icon: React.ReactNode
  title: string
  text: string
}

const Servicios = () => {
  const soporteTecnico = [
    {
      icon: <MonitorCog />,
      title: 'Formateo Windows',
      description: 'Instalación de Windows 10 y 11.',
    },
    {
      icon: <HardDriveDownload />,
      title: 'Instalación de drivers',
      description: 'Controladores actualizados para tu equipo.',
    },
    {
      icon: <Gauge />,
      title: 'Optimización notebook',
      description: 'Mejor rendimiento y mayor velocidad.',
    },
    {
      icon: <Brush />,
      title: 'Limpieza de software',
      description: 'Eliminación de virus y programas innecesarios.',
    },
    {
      icon: <Folder />,
      title: 'Respaldo de archivos',
      description: 'Protección de información importante.',
    },
    {
      icon: <BadgeCheck />,
      title: 'Instalación de Office',
      description: 'Instalación y configuración. El cliente debe contar con licencia válida.',
    },
  ]

  const desarrolloWeb = [
    {
      icon: <LayoutTemplate />,
      title: 'Landing pages',
      description: 'Creamos páginas modernas y atractivas diseñadas para captar clientes y potenciar tu negocio.',
    },
    {
      icon: <UserRound />,
      title: 'Portfolios',
      description: 'Diseños profesionales para mostrar tus proyectos, servicios y experiencia de manera elegante.',
    },
    {
      icon: <Users />,
      title: 'Páginas para emprendedores',
      description: 'Soluciones digitales pensadas para pequeños negocios que buscan crecer y tener presencia online.',
    },
    {
      icon: <MenuSquare />,
      title: 'Menús digitales',
      description: 'Menús interactivos y visuales para restaurantes, cafeterías y emprendimientos gastronómicos etc.',
    },
  ]

  return (
    <section id="servicios" className="relative overflow-hidden text-white">

      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-500/10 blur-3xl rounded-full"></div>

      <div className="container relative z-10 mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Servicios que ofrece NatiTechSolutions
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <ServiceBox
            icon={<MonitorCog size={42} />}
            title="Soporte Técnico"
            subtitle="Soluciones rápidas y efectivas para tu equipo."
            items={soporteTecnico}
            footer="Seguridad, rendimiento y confianza para tu equipo."
          />

          <ServiceBox
            icon={<Globe size={42} />}
            title="Desarrollo Web"
            subtitle="Páginas modernas que impulsan tu negocio."
            items={desarrolloWeb}
            footer="Diseños modernos, responsivos y adaptados a tu negocio."
          />

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">

          <Feature icon={<ShieldCheck />} title="Confiable" text="Trabajo seguro y garantizado." />
          <Feature icon={<Zap />} title="Rápido" text="Soluciones efectivas." />
          <Feature icon={<BadgeCheck />} title="Profesional" text="Atención dedicada y de calidad." />
          <Feature icon={<Heart />} title="A tu medida" text="Soluciones adaptadas a tus necesidades." />

        </div>

      </div>
    </section>
  )
}

const ServiceBox = ({ icon, title, subtitle, items, footer }:ServiceBoxProps) => {
  return (
    <div className="rounded-3xl border border-purple-500/40 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.18)]">

      <div className="flex items-center gap-5 mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-700 to-fuchsia-500 flex items-center justify-center text-white shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          {icon}
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold">
            {title}
          </h3>
          <p className="text-purple-200 mt-2">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 border-b border-purple-500/20 pb-4 last:border-b-0">

            <div className="min-w-12 h-12 rounded-full bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center text-white">
              {item.icon}
            </div>

            <div>
              <h4 className="font-bold text-lg">
                {item.title}
              </h4>
              <p className="text-purple-100 text-sm">
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-purple-900/40 border border-purple-400/30 p-4 text-purple-100 font-semibold">
        {footer}
      </div>

    </div>
  )
}

const Feature = ({ icon, title, text }: FeatureProps) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/5 border border-purple-400/20 p-5 backdrop-blur-xl">
      <div className="w-12 h-12 rounded-full border border-purple-400 flex items-center justify-center text-purple-300">
        {icon}
      </div>

      <div>
        <h4 className="font-bold text-white">
          {title}
        </h4>
        <p className="text-sm text-purple-200">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Servicios;