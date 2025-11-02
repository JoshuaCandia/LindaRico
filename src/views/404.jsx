import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOHead from '../components/SEO/SEOHead'

const Error404 = () => {
  const navigate = useNavigate()

  return (
    <>
      <SEOHead
        title='Página no encontrada | LR Consultora'
        description='La página que buscas no existe'
      />
      <section className='bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center'>
        <div className='container flex items-center px-6 py-12 mx-auto'>
          <motion.div
            className='flex flex-col items-center max-w-lg mx-auto text-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icono de error */}
            <motion.div
              className='p-4 text-BlueNormal rounded-full bg-blue-50 shadow-lg'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                className='w-12 h-12'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                />
              </svg>
            </motion.div>

            {/* Título 404 */}
            <motion.h1
              className='mt-8 text-8xl font-bold text-BlueNormal'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              404
            </motion.h1>

            {/* Mensaje */}
            <motion.h2
              className='mt-4 text-3xl font-semibold text-gray-800'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Página no encontrada
            </motion.h2>

            <motion.p
              className='mt-4 text-gray-600 text-lg'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Lo sentimos, la página que estás buscando no existe o fue movida.
            </motion.p>

            {/* Botones de acción */}
            <motion.div
              className='flex flex-col sm:flex-row items-center w-full mt-8 gap-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => window.history.back()}
                className='flex items-center justify-center w-full sm:w-auto px-6 py-3 text-gray-700 bg-white border-2 border-gray-300 rounded-lg gap-2 hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                  />
                </svg>
                <span className='font-semibold'>Volver Atrás</span>
              </motion.button>

              <motion.button
                onClick={() => navigate('/')}
                className='w-full sm:w-auto px-6 py-3 font-semibold text-white bg-gradient-to-r from-BlueNormal to-BlueSemiLight rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ir al Inicio
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Error404
