import { motion } from 'framer-motion'
import { BiCheck } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import ButtonContact from '../Buttons/ButtonContact'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'

const ServicesPages = ({ title, image, description, services }) => {
  const navigate = useNavigate()

  // Dividir servicios en 2 columnas
  const midPoint = Math.ceil(services.length / 2)
  const firstColumn = services.slice(0, midPoint)
  const secondColumn = services.slice(midPoint)

  return (
    <main className='min-h-screen'>
      {/* Hero Section con imagen de fondo */}
      <motion.div
        className='relative h-[400px] w-full bg-cover bg-center flex flex-col justify-center items-center'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className='font-customFontInter text-4xl md:text-5xl font-bold text-white mb-6 text-center px-4'
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <ButtonContact />
        </motion.div>
      </motion.div>

      {/* Sección de descripción */}
      <section className='bg-white py-16 md:py-20'>
        <div className='container mx-auto px-6 md:px-12 max-w-5xl'>
          <motion.article
            className='text-gray-700 text-lg md:text-xl leading-relaxed font-light'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className='mb-6'>{description}</p>
            <div className='mt-8 flex justify-center'>
              <motion.button
                onClick={() => navigate('/contacto')}
                className='px-8 py-3 bg-gradient-to-r from-BlueNormal to-BlueSemiLight text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Cotización
              </motion.button>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Sección "Por qué elegirnos" */}
      <WhyChooseUs />

      {/* Sección de lista de servicios - MEJORADA con 2 columnas */}
      <section className='bg-gradient-to-br from-BlueSemiLight to-BlueNormal py-16 md:py-20'>
        <div className='container mx-auto px-6 md:px-12'>
          <motion.h2
            className='text-4xl md:text-5xl text-white text-center mb-4 font-bold font-customFontInter'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nuestros Servicios
          </motion.h2>
          
          <motion.p
            className='text-white/80 text-center mb-12 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Soluciones completas y profesionales para tu empresa
          </motion.p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto'>
            {/* Primera columna */}
            <motion.div
              className='space-y-4'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {firstColumn.map((service) => (
                <motion.div
                  key={service.id}
                  className='flex gap-4 items-start bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300 group'
                  whileHover={{ x: 5 }}
                >
                  <div className='flex-shrink-0 mt-1'>
                    <div className='bg-white rounded-full p-1.5 shadow-lg group-hover:scale-110 transition-transform duration-200'>
                      <BiCheck className='text-xl text-BlueNormal' />
                    </div>
                  </div>
                  <p className='font-medium text-white text-sm md:text-base leading-relaxed'>
                    {service.msg}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Segunda columna */}
            <motion.div
              className='space-y-4'
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {secondColumn.map((service) => (
                <motion.div
                  key={service.id}
                  className='flex gap-4 items-start bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300 group'
                  whileHover={{ x: 5 }}
                >
                  <div className='flex-shrink-0 mt-1'>
                    <div className='bg-white rounded-full p-1.5 shadow-lg group-hover:scale-110 transition-transform duration-200'>
                      <BiCheck className='text-xl text-BlueNormal' />
                    </div>
                  </div>
                  <p className='font-medium text-white text-sm md:text-base leading-relaxed'>
                    {service.msg}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA final */}
          <motion.div
            className='mt-16 text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className='text-white text-xl mb-6 font-light'>
              ¿Necesitás más información?
            </p>
            <motion.button
              onClick={() => navigate('/contacto')}
              className='px-10 py-4 bg-white text-BlueNormal font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-lg'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactanos Ahora
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPages
