import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react'

const Navbar = () => {

    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    {/*Lista de link , No repites código -> usas .map()*/ }
    const navItems = [
        { name: 'Inicio', link: '#home' },
        { name: 'Acerca de', link: '#about' },
        { name: 'Servicios Web', link: '#servicios' },
        { name: 'Proyectos', link: '#projects' },
        { name: 'Contacto', link: '#contact' },
    ];

    const darkColors = {
        navBg: 'bg-linear-to-br from-gray-700 to-black',
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        textHover: 'text-purple-300',
        textActive: 'text-purple-400',
        indicator: 'from-purple-600 to-fuchsia-400',
        button: 'from-purple-600 to-fuchsia-400'

    }
    const colors = darkColors;

    {/*Marca sección activa
Cierra menú móvil*/}
    const handleNavClick = (itemName: any) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    }
    return (
        <div className='fixed top-0 left-0 w-full z-[9999] border-b border-purple-500/10'>
            <motion.nav
                //Framer Motion (animaciones)
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative flex w-full items-center justify-center ${colors.navBg}
                backdrop-blur-lg rounded-none px-4 lg:px-14 py-4 lg:py-5 shadow-lg`}>
                <div className='flex items-center justify-between w-full space-x-6 lg:space-x-8'>
                    {/*Logo */}
                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2">
                        <span className={`text-xl font-bold ${colors.textPrimary}`}>
                            Nati <span className='bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent'>TechSolutions.</span>
                        </span>

                    </motion.a>
                    {/*Navigation Items*/}

                    <div className='hidden lg:flex items-center space-x-6'>
                        {/*Recorres el array y generas links dinámicamente*/}
                        {navItems.map((item) => (
                            <a key={item.name}
                                href={item.link}
                                onClick={() => handleNavClick(item.name)}
                                className='relative'>
                                <motion.span
                                    /*Si coincide:
                                      cambia color
                                     muestra indicador*/
                                    className={`font-medium transition-colors duration-300 
                                ${activeSection === item.name.toLowerCase()
                                            ? colors.textActive
                                            : `${colors.textSecondary} hover:text-purple-500`
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}>
                                    {item.name}
                                </motion.span>
                                {activeSection == item.name.toLowerCase() && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className={`absolute -bottom-1 left-0
                                    right-0 h-0.5 bg-linear-to-r rounded-full
                                    ${colors.indicator}`}>

                                    </motion.div>
                                )}
                            </a>
                        ))}
                    </div>

                    {/*Mobile Menu Button */}
                    <div className='flex lg:hidden items-center space-x-4 px-2'>
                        <motion.button
                            whileHover={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='p-2  rounded-lg bg-gray-700'
                        >
                            {isMenuOpen ? (
                                <X className='w-5 h-5 text-white' />
                            ) : (
                                <Menu className='w-5 h-5 text-white' />
                            )}
                        </motion.button>
                    </div>
                </div>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-20 left-4 right-4 z-50 rounded-2xl border-b border-purple-500/20 bg-gray-950/95 backdrop-blur-lg shadow-2xl p-4 "
                    >
                        <div className="flex flex-col gap-3">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.link}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => handleNavClick(item.name)}
                                    className={`block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-200
                                                hover:border hover:border-purple-400
                                                hover:bg-white/5
                                                ${activeSection === item.name.toLowerCase()
                                            ? 'border border-purple-500 bg-white/5'
                                            : 'border border-transparent'
                                        }
`}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}


            </motion.nav></div>
    )
}

export default Navbar