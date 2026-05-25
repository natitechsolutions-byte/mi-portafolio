import { ExternalLink, MessageCircle, Sparkles } from 'lucide-react'
import logo from '../assets/logo.png'

const Hero = ({ darkMode }) => {
    const theme = {
        textPrimary: darkMode ? 'text-white' : 'text-gray-900',
        textSecondary: darkMode ? 'text-purple-100' : 'text-gray-700',
    }

    return (
        <div className='relative overflow-hidden flex flex-col'>

            {/* Luces decorativas tipo logo */}
            <div className='absolute top-20 left-10 w-72 h-72 bg-purple-600/30 blur-3xl rounded-full'></div>
            <div className='absolute bottom-20 right-10 w-80 h-80 bg-fuchsia-500/20 blur-3xl rounded-full'></div>

            <section id='home' className='body-font z-10'>
                <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>

                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>

                        <div className='flex items-center gap-2 mb-4 text-purple-300 font-semibold'>
                            <Sparkles size={18} />
                            NatiTech Solutions
                        </div>

                        <h1 className={`text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}>
                            Transformo ideas en páginas web modernas y profesionales
                        </h1>

                        <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}>
                            Soporte técnico y soluciones digitales para emprendedores y pequeños negocios.
                        </p>

                        <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'>

                            <a href="#projects" className='w-full sm:w-auto'>
                                <button className='w-full sm:w-auto inline-flex items-center justify-center text-white
                  bg-gradient-to-r from-purple-700 via-purple-500 to-fuchsia-400
                  py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold
                  hover:shadow-[0_0_40px_rgba(168,85,247,0.8)]
                  hover:scale-105 transition-all duration-300'>

                                    <ExternalLink className='w-5 h-5 mr-2' />
                                    Ver proyectos
                                </button>
                            </a>

                            <a href="https://wa.me/56989305299" target="_blank">
                                <button className='flex items-center gap-2 px-6 py-3 rounded-full
                  bg-white/10 border border-purple-400 text-gray font-semibold
                  hover:bg-purple-600 hover:scale-105 transition-all duration-300 shadow-lg'>

                                    <MessageCircle size={18} />
                                    Hablar por WhatsApp
                                </button>
                            </a>

                        </div>

                    </div>

                    {/* logo */}
                    <div className='relative flex items-center justify-center w-full h-full p-6'>

                        <img
                            src={logo}
                            alt="NatiTechSolutions"
                            className='relative w-[390px] h-[320px] sm:w-[460px] sm:h-[460px]
                            rounded-3xl bg-white/10 border border-purple-400/30
                            backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.4)]
                            flex items-center justify-center'
                        />

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Hero