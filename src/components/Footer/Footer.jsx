import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SiCountingworkspro } from 'react-icons/si'
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { siteConfig } from '../../config/siteConfig'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-gradient-to-b from-BlueSemiDark to-BlueDark text-white'>
      {/* Sección principal del footer */}
      <div className='container mx-auto px-6 py-16 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Columna 1: Sobre nosotros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex items-center gap-3 mb-6'>
              <SiCountingworkspro className='text-4xl text-BlueLight' />
              <h3 className='font-bold text-2xl'>{siteConfig.company.name}</h3>
            </div>
            <p className='text-gray-300 text-sm leading-relaxed mb-6'>
              {siteConfig.footer.sections.about.description}
            </p>
            <p className='text-BlueLight font-semibold text-lg'>
              {siteConfig.company.tagline}
            </p>
          </motion.div>

          {/* Columna 2: Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className='font-bold text-xl mb-6 text-BlueLight'>Servicios</h4>
            <ul className='space-y-3'>
              {siteConfig.footer.sections.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className='text-gray-300 hover:text-white transition-colors duration-200 flex items-center group'
                  >
                    <span className='mr-2 text-BlueLight group-hover:translate-x-1 transition-transform duration-200'>
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to='/contacto'
                  className='text-gray-300 hover:text-white transition-colors duration-200 flex items-center group'
                >
                  <span className='mr-2 text-BlueLight group-hover:translate-x-1 transition-transform duration-200'>
                    →
                  </span>
                  Contacto
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Columna 3: Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className='font-bold text-xl mb-6 text-BlueLight'>Contacto</h4>
            <ul className='space-y-4'>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group'
                >
                  <AiOutlinePhone className='text-2xl text-BlueLight group-hover:scale-110 transition-transform duration-200' />
                  <span className='text-sm'>
                    {siteConfig.contact.phoneFormatted}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group'
                >
                  <AiOutlineMail className='text-2xl text-BlueLight group-hover:scale-110 transition-transform duration-200' />
                  <span className='text-sm break-all'>
                    {siteConfig.contact.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsapp.number}&text=${encodeURIComponent(siteConfig.contact.whatsapp.defaultMessage)}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group'
                >
                  <BsWhatsapp className='text-2xl text-BlueLight group-hover:scale-110 transition-transform duration-200' />
                  <span className='text-sm'>WhatsApp</span>
                </a>
              </li>
              <li className='flex items-start gap-3 text-gray-300'>
                <AiOutlineEnvironment className='text-2xl text-BlueLight mt-1' />
                <span className='text-sm'>
                  {siteConfig.contact.address.city},{' '}
                  {siteConfig.contact.address.country}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Columna 4: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className='font-bold text-xl mb-6 text-BlueLight'>
              ¿Necesitás ayuda?
            </h4>
            <p className='text-gray-300 text-sm mb-6 leading-relaxed'>
              Contactanos para recibir asesoramiento profesional en Higiene,
              Seguridad y Medio Ambiente.
            </p>
            <Link to='/contacto'>
              <motion.button
                className='w-full px-6 py-3 bg-gradient-to-r from-BlueLight to-BlueSemiLight text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactar Ahora
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Barra de copyright */}
      <div className='bg-BlueDark border-t border-gray-700'>
        <div className='container mx-auto px-6 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex flex-col items-center md:items-start gap-2'>
              <p className='text-gray-400 text-sm text-center md:text-left'>
                © {currentYear} {siteConfig.company.name}.{' '}
                {siteConfig.footer.rights}
              </p>
              <a
                href='https://www.wonkai.com.ar/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 text-xs hover:text-white transition-colors duration-200 flex items-center gap-1'
              >
                Powered by{' '}
                <span className='font-semibold text-blue-400'>Wonkai</span>
              </a>
            </div>
            <p className='text-gray-400 text-sm'>
              Higiene, Seguridad y Medio Ambiente
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
