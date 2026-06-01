import {
  Store,
  UserRound,
  QrCode,
  CheckCircle,
  Palette,
  Smartphone,
  MessageCircle,
  FilePenLine,
  Globe,
  GraduationCap,
} from 'lucide-react'

const Servicios = () => {
  const servicios = [
    {
      number: '01',
      icon: <Store size={46} />,
      title: 'Página para',
      highlight: 'tu negocio',
      description:
        'Muestra tus servicios, horarios, ubicación y formas de contacto en una página profesional.',
      ideal: ['Peluquerías', 'Pastelerías', 'Salones de belleza', 'Técnicos', 'Tiendas', 'Emprendimientos'],
    },
    {
      number: '02',
      icon: <UserRound size={46} />,
      title: 'Página',
      highlight: 'profesional',
      description:
        'Muestra quién eres, tu experiencia, tus trabajos y cómo contactarte.',
      ideal: ['Técnicos', 'Freelancers', 'Diseñadores', 'Consultores', 'Profesionales independientes', 'Creativos'],
    },
    {
      number: '03',
      icon: <QrCode size={46} />,
      title: 'Menú digital',
      highlight: 'con código QR',
      description:
        'Tus clientes escanean un código QR y pueden ver tu menú desde cualquier celular.',
      ideal: ['Restaurantes', 'Food Trucks', 'Cafeterías', 'Comida rápida'],
    },
  ]

  const incluye = [
    { icon: <Palette />, title: 'Diseño personalizado' },
    { icon: <Smartphone />, title: 'Adaptación celular y PC' },
    { icon: <MessageCircle />, title: 'Botón WhatsApp' },
    { icon: <FilePenLine />, title: 'Formulario de contacto' },
    { icon: <Globe />, title: 'Publicación en internet' },
    { icon: <GraduationCap />, title: 'Ayuda para aprender a usarla' },
  ]

  return (
    <section id="servicios" className="relative overflow-hidden text-white py-20">
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-500/10 blur-3xl rounded-full"></div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-fuchsia-400 font-semibold tracking-widest uppercase">
            Desarrollo web
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Nuestros servicios
          </h2>
          <p className="text-purple-100 max-w-2xl mx-auto mt-4">
            Creamos páginas web simples, modernas y pensadas para hacer crecer tu emprendimiento.
          </p>
        </div>

        <div className="space-y-6 max-w-6xl mx-auto">
          {servicios.map((service) => (
            <div
              key={service.number}
              className="rounded-3xl border border-purple-500/50 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_35px_rgba(168,85,247,0.18)]"
            >
              <div className="grid md:grid-cols-[90px_120px_1fr_1.3fr] gap-6 items-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-800 to-fuchsia-600 flex items-center justify-center text-4xl font-bold shadow-[0_0_25px_rgba(168,85,247,0.45)]">
                  {service.number}
                </div>

                <div className="w-24 h-24 rounded-full border border-fuchsia-400/70 bg-purple-950/50 flex items-center justify-center text-fuchsia-300 shadow-[0_0_30px_rgba(217,70,239,0.25)]">
                  {service.icon}
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase">
                    {service.title}
                  </h3>
                  <h4 className="text-2xl md:text-3xl font-bold uppercase text-fuchsia-400 mt-1">
                    {service.highlight}
                  </h4>
                  <p className="text-purple-100 mt-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="md:border-l md:border-purple-500/30 md:pl-8">
                  <h5 className="text-fuchsia-300 font-bold text-xl mb-4">
                    Ideal para:
                  </h5>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.ideal.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-purple-50">
                        <CheckCircle size={20} className="text-fuchsia-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 mb-6">
          <h3 className="text-2xl md:text-3xl font-bold uppercase">
            Todos nuestros sitios incluyen
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {incluye.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-purple-500/40 bg-white/5 p-5 text-center backdrop-blur-xl"
            >
              <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-gradient-to-br from-purple-700 to-fuchsia-500 flex items-center justify-center text-white shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                {item.icon}
              </div>
              <h4 className="font-bold text-sm uppercase">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios