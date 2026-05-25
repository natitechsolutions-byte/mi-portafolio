import { motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react'

{/* Props (comunicación con App) 
    recibir darkMode
    ejecutar toggleDarkMode
    Es comunicación padre → hijo*/}
interface NavbarProps {
    darkMode: boolean;
}

const Navbar = ({ darkMode }: NavbarProps) => {

    {/* activeSection: qué sección está activa
         isMenuOpen: menú móvil abierto/cerrado*/}
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    {/*Lista de link , No repites código -> usas .map()*/ }
    const navItems = [
        { name: 'Inicio', link: '#home' },
        { name: 'Acerca de mi', link: '#about' },
        { name: 'Servicios', link: '#servicios' },
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
    const handleNavClick = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    }
    return (
        <div className='flex justify-center w-full fixed z-50 mt-4'>
            <motion.nav
                //Framer Motion (animaciones)
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center justify-center ${colors.navBg}
            backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>
                <div className='flex items-center justify-between w-full space-x-6 lg:space-x-8'>
                    {/*Logo */}
                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2">
                        <span className={`text-xl font-bold ${colors.textPrimary}`}>
                            Nati <span className='text-purple-500'>TechSolutions.</span>
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

                    <div className='flex items-center space-x-2'>
                        {/*Dark mode Toogle */}
                       
                        {/*Button*/}
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`hidden lg:block px-6 py-2 font-semiboald rounded-full bg-linear-to-r ${colors.button}
                        text-white shadow-md hover:shadow-lg transition-shadow`}>
                            Trabajemos juntos


                        </motion.a>
                    </div>
                    {/*Mobile Menu Button */}
                    <div className='flex lg:hidden items-center space-x-4 px-2'>
                        <motion.button
                            whileHover={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2  rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                        >
                            {isMenuOpen ? (
                                <X className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
                            ) : (
                                <Menu className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
                            )}
                        </motion.button>
                    </div>
                </div>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute top-full left-0 right-0 mt-2 lg:hidden
                        ${darkMode ? 'bg_gray-900/95'
                                : 'bg-white/95'
                            } backdrop-blur-lg rounded-xl shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'
                            }`}
                    >

                        <div className='px-4 py-3 space-y-2'>

                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => handleNavClick(item.name)}
                                    className='block'>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className={`py-3 px-4 rounded-lg text-center 
                                ${activeSection === item.name.toLowerCase()
                                                ? darkMode ? 'bg-gray-800' : 'bg-purple-50'
                                                : ''
                                            }`}>

                                        <span
                                            className={`font-medium ${activeSection === item.name.toLowerCase()
                                                ? colors.textActive
                                                : colors.textSecondary
                                                }`}> {item.name}</span>
                                    </motion.div>
                                </a>
                            ))}
                            <motion.a
                                href='#contact'
                                onClick={() => setIsMenuOpen(false)}
                                whileTap={{ scale: 0.95 }}
                                className={`block py-3 px-4 text-center font-semiboald
                            rounded-lg bg-linear-to-r ${colors.button}
                            text-white shadow-md
                         `}>
                                Trabajemos juntos
                            </motion.a>
                        </div>
                    </motion.div>
                )}


            </motion.nav></div>
    )
}

export default Navbar