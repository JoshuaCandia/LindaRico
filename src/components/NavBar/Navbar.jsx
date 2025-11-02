import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { BiHomeAlt2 } from 'react-icons/bi'
import { RiContactsLine } from 'react-icons/ri'
import { SiCountingworkspro } from 'react-icons/si'
import { motion } from 'framer-motion'
import DropDownNav from './DropDownNav'
import { siteConfig } from '../../config/siteConfig'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar
      disableAnimation
      className='bg-white border-b border-gray-100 h-[10vh] shadow-sm'
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Mobile menu toggle */}
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        />
      </NavbarContent>

      {/* Mobile logo */}
      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand>
          <Link to='/' aria-label='Ir a inicio'>
            <motion.div
              className='flex items-center gap-2'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiCountingworkspro className='text-[27px] text-BlueNormal' />
              <p className='font-bold text-[24px] text-BlueNormal'>LR</p>
            </motion.div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navbar */}
      <NavbarContent className='hidden gap-8 sm:flex' justify='start'>
        <NavbarBrand>
          <Link to='/' aria-label='Ir a inicio'>
            <motion.div
              className='flex items-center gap-4'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiCountingworkspro className='text-[32px] text-BlueNormal' />
              <p className='font-bold text-[32px] text-BlueNormal'>
                {siteConfig.company.name}
              </p>
            </motion.div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-8' justify='end'>
        <NavbarItem>
          <Link
            to='/'
            className='text-[18px] font-medium text-gray-700 hover:text-BlueNormal transition-colors duration-200 relative group'
            aria-label='Ir a página de inicio'
          >
            Inicio
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-BlueNormal transition-all duration-200 group-hover:w-full'></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <DropDownNav />
        </NavbarItem>
        <NavbarItem>
          <Link
            to='/contacto'
            className='text-[18px] font-medium text-gray-700 hover:text-BlueNormal transition-colors duration-200 relative group'
            aria-label='Ir a página de contacto'
          >
            Contacto
            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-BlueNormal transition-all duration-200 group-hover:w-full'></span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to='/contacto'
              className='px-6 py-2 bg-gradient-to-r from-BlueNormal to-BlueSemiLight text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200'
              aria-label='Botón de contacto'
            >
              Consultar
            </Link>
          </motion.div>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className='bg-white pt-6'>
        <NavbarMenuItem className='flex flex-col gap-6'>
          <Link
            className='w-full text-[20px] font-medium text-gray-700 hover:text-BlueNormal transition-colors duration-200'
            to='/'
            onClick={() => setIsMenuOpen(false)}
            aria-label='Ir a página de inicio'
          >
            <motion.div
              className='flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50'
              whileTap={{ scale: 0.95 }}
            >
              <BiHomeAlt2 className='text-2xl' />
              <p>Inicio</p>
            </motion.div>
          </Link>

          <div className='pl-3'>
            <DropDownNav onItemClick={() => setIsMenuOpen(false)} />
          </div>

          <Link
            className='w-full text-[20px] font-medium text-gray-700 hover:text-BlueNormal transition-colors duration-200'
            to='/contacto'
            onClick={() => setIsMenuOpen(false)}
            aria-label='Ir a página de contacto'
          >
            <motion.div
              className='flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50'
              whileTap={{ scale: 0.95 }}
            >
              <RiContactsLine className='text-2xl' />
              <p>Contacto</p>
            </motion.div>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default NavBar
