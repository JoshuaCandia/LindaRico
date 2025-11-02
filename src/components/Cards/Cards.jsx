import { Card } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import LazyImage from '../LazyImage/LazyImage'
import { BiRightArrowAlt } from 'react-icons/bi'

const Cards = ({ url, img, title }) => {
  return (
    <Link to={url} className='group block'>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='h-full'
      >
        <Card className='relative md:w-[48vw] h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-100'>
          {/* Imagen con overlay */}
          <div className='relative h-full w-full overflow-hidden'>
            <LazyImage
              src={img}
              alt={`Servicios de ${title} - LR Consultora`}
              className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
            />
            
            {/* Overlay gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-blue-900/90 group-hover:via-blue-900/60 transition-all duration-500'></div>
            
            {/* Contenido */}
            <div className='absolute inset-0 flex flex-col justify-end p-6 md:p-8'>
              {/* Badge */}
              <motion.div
                className='mb-4'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className='inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full text-xs font-medium'>
                  Servicios Profesionales
                </span>
              </motion.div>

              {/* Título */}
              <h3 className='font-customFontInter uppercase font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-3 group-hover:text-blue-300 transition-colors duration-300'>
                {title}
              </h3>

              {/* Descripción corta */}
              <p className='text-gray-300 text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2'>
                {title === 'Higiene y Seguridad'
                  ? 'Asesoramiento integral en seguridad laboral, evaluaciones de riesgo y capacitaciones para tu empresa.'
                  : 'Gestión ambiental responsable, auditorías y cumplimiento normativo para tu industria.'}
              </p>

              {/* CTA */}
              <div className='flex items-center gap-2 text-white font-semibold group-hover:text-blue-300 transition-colors duration-300'>
                <span className='text-sm md:text-base'>Ver más</span>
                <BiRightArrowAlt className='text-2xl transform group-hover:translate-x-2 transition-transform duration-300' />
              </div>

              {/* Barra decorativa */}
              <div className='absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-500'></div>
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
