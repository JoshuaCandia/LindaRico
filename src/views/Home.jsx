//components
import ContainerCards from '../components/ContainerCards/ContainerCards'
import Header from '../components/Header/Header'
import Slogan from '../components/Slogan/Slogan'
import SEOHead from '../components/SEO/SEOHead'
//hooks
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { siteConfig } from '../config/siteConfig'

const Home = () => {
  return (
    <div className='scroll-smooth'>
      <SEOHead
        title={siteConfig.seo.home.title}
        description={siteConfig.seo.home.description}
        keywords={siteConfig.seo.home.keywords}
      />
      <Header />
      <main>
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Slogan />
            </motion.div>
          )}
        </InView>
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.section
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              id='servicios'
              className='py-16 md:py-24 bg-gradient-to-b from-white to-gray-50'
            >
              <div className='container mx-auto px-6'>
                {/* Header de sección */}
                <div className='text-center mb-12 md:mb-16'>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                  >
                    <span className='inline-block bg-blue-500/10 border border-blue-400/30 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4'>
                      Nuestros Servicios
                    </span>
                  </motion.div>
                  
                  <motion.h2
                    className='font-customFontInter text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    Soluciones Integrales para tu Empresa
                  </motion.h2>
                  
                  <motion.p
                    className='text-gray-600 text-lg md:text-xl max-w-3xl mx-auto'
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    Protegemos a tu personal y al medio ambiente con servicios
                    profesionales de{' '}
                    <strong className='text-blue-600'>
                      Higiene y Seguridad
                    </strong>{' '}
                    y{' '}
                    <strong className='text-green-600'>Medio Ambiente</strong>
                  </motion.p>
                </div>

                {/* Cards de servicios */}
                <ContainerCards />
              </div>
            </motion.section>
          )}
        </InView>
      </main>
    </div>
  )
}

export default Home
