import { Card } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import LazyImage from '../LazyImage/LazyImage'
import { BiRightArrowAlt } from 'react-icons/bi'
import { HiOutlineShieldCheck, HiOutlineGlobeAlt } from 'react-icons/hi'

const Cards = ({ url, img, title }) => {
  // Determinar el icono y color según el servicio
  const serviceInfo =
    title === 'Higiene y Seguridad'
      ? {
          icon: <HiOutlineShieldCheck className='text-4xl' />,
          gradient: 'from-orange-500 to-red-600',
          badge: 'Seguridad Laboral',
        }
      : {
          icon: <HiOutlineGlobeAlt className='text-4xl' />,
          gradient: 'from-green-500 to-emerald-600',
          badge: 'Gestión Ambiental',
        }

  return (
    <Link to={url} className='group block h-full'>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='h-full'
      >
        <Card className='relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-100'>
          {/* Imagen con overlay */}
          <div className='relative h-full w-full overflow-hidden'>
            <LazyImage
              src={img}
              alt={`Servicios de ${title} - LR Consultora`}
              className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
            />

            {/* Overlay gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent group-hover:from-blue-900/95 group-hover:via-blue-900/70 transition-all duration-500'></div>

            {/* Contenido */}
            <div className='absolute inset-0 flex flex-col justify-between p-8'>
              {/* Badge superior */}
              <div className='flex justify-start'>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className='inline-block'
                >
                  <span className='bg-white/10 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider'>
                    {serviceInfo.badge}
                  </span>
                </motion.div>
              </div>

              {/* Contenido principal centrado */}
              <div className='flex flex-col items-center text-center'>
                {/* Icono grande */}
                <motion.div
                  className={`bg-gradient-to-br ${serviceInfo.gradient} p-6 rounded-2xl mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <div className='text-white'>{serviceInfo.icon}</div>
                </motion.div>

                {/* Título */}
                <h3 className='font-customFontInter uppercase font-bold text-3xl md:text-4xl text-white mb-4 group-hover:text-blue-300 transition-colors duration-300'>
                  {title}
                </h3>

                {/* Separador */}
                <div className='w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent mb-6'></div>

                {/* CTA */}
                <div className='inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold group-hover:bg-white group-hover:text-blue-900 transition-all duration-300'>
                  <span className='text-sm md:text-base'>Ver Servicios</span>
                  <BiRightArrowAlt className='text-2xl transform group-hover:translate-x-2 transition-transform duration-300' />
                </div>
              </div>

              {/* Barra decorativa inferior */}
              <div className='flex justify-center'>
                <div
                  className={`h-1 w-0 bg-gradient-to-r ${serviceInfo.gradient} group-hover:w-full transition-all duration-500 rounded-full`}
                ></div>
              </div>
            </div>

            {/* Efecto de brillo */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              <div className='absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000'></div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  )
}

export default Cards
