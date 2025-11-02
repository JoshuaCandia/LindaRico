import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Carousel, Typography, Button } from '@material-tailwind/react'
import ButtonArrowDown from '../Buttons/ButtonArrowDown'
//assets
import habilitaciones from '../../assets/mujer-plano.jpg'
import hombresTrabajando from '../../assets/hombres-carpeta.jpg'
import medioAmbiente from '../../assets/medio-ambiente.jpg'

const CarouselHeader = () => {
  const navigate = useNavigate()

  function scrollToServices() {
    const section = document.getElementById('servicios')
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const slideVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.5,
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
  }

  return (
    <Carousel
      autoplay={true}
      autoplayDelay={7000}
      loop={true}
      navigation={false}
      className='h-full'
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      {/* Slide 1 - Hero Principal */}
      <div className='relative h-full w-full'>
        <img
          src={habilitaciones}
          alt='Profesional de LR Consultora revisando planos de seguridad e higiene'
          className='h-full w-full object-cover'
          loading='eager'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent'>
          <div className='container mx-auto h-full flex items-center'>
            <motion.div
              className='max-w-3xl px-8 md:px-16 lg:px-24 py-12'
              initial='hidden'
              animate='visible'
              variants={slideVariants}
            >
              {/* Badge */}
              <motion.div
                className='inline-block mb-6'
                variants={badgeVariants}
              >
                <span className='bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium'>
                  Consultora Especializada
                </span>
              </motion.div>

              {/* Título Principal */}
              <Typography
                variant='h1'
                color='white'
                className='font-customFontInter mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'
              >
                Protegemos a tu empresa
                <br />
                <span className='text-blue-400'>con soluciones integrales</span>
              </Typography>

              {/* Descripción */}
              <Typography
                color='white'
                className='mb-8 text-base md:text-lg lg:text-xl opacity-90 font-light max-w-2xl leading-relaxed'
              >
                Asesoramiento profesional en{' '}
                <strong className='text-blue-300'>
                  Higiene y Seguridad Laboral
                </strong>{' '}
                y{' '}
                <strong className='text-green-300'>Medio Ambiente</strong>.
                Cumplimos con todas las normativas vigentes para que tu empresa
                opere de manera segura y responsable.
              </Typography>

              {/* Features list */}
              <motion.div
                className='mb-8 grid grid-cols-2 gap-4'
                variants={badgeVariants}
              >
                {[
                  '✓ Evaluaciones de Riesgo',
                  '✓ Capacitaciones',
                  '✓ Auditorías Ambientales',
                  '✓ Certificaciones',
                ].map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 text-white/90 text-sm md:text-base'
                  >
                    {item}
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                className='flex flex-col sm:flex-row gap-4'
                variants={buttonVariants}
                initial='hidden'
                animate='visible'
              >
                <Button
                  onClick={scrollToServices}
                  size='lg'
                  className='bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 px-8'
                >
                  Ver Servicios
                </Button>
                <Button
                  onClick={() => navigate('/contacto')}
                  size='lg'
                  className='bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 px-8'
                >
                  Contactar
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
            <ButtonArrowDown />
          </div>
        </div>
      </div>

      {/* Slide 2 - Higiene y Seguridad */}
      <div className='relative h-full w-full'>
        <img
          src={hombresTrabajando}
          alt='Equipo de trabajo en industria con medidas de seguridad'
          className='h-full w-full object-cover'
          loading='lazy'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90'>
          <div className='container mx-auto h-full flex items-center justify-center'>
            <motion.div
              className='text-center max-w-4xl px-8'
              initial='hidden'
              animate='visible'
              variants={slideVariants}
            >
              {/* Badge */}
              <motion.div
                className='inline-block mb-6'
                variants={badgeVariants}
              >
                <span className='bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-300 px-4 py-2 rounded-full text-sm font-medium'>
                  Higiene y Seguridad Laboral
                </span>
              </motion.div>

              <Typography
                variant='h1'
                color='white'
                className='font-customFontInter mb-6 text-4xl md:text-5xl lg:text-6xl font-bold'
              >
                Tu Seguridad,
                <br />
                <span className='text-orange-400'>Nuestra Prioridad</span>
              </Typography>

              <Typography
                color='white'
                className='mb-8 text-lg md:text-xl opacity-90 font-light leading-relaxed'
              >
                Evaluaciones de riesgo, capacitaciones, y cumplimiento de la{' '}
                <strong>Ley 19.587</strong> y <strong>Dec. 351/79</strong>.
                Protegemos a tu personal y reducimos accidentes laborales.
              </Typography>

              <motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center'
                variants={buttonVariants}
                initial='hidden'
                animate='visible'
              >
                <Button
                  onClick={() => navigate('/higiene-y-seguridad')}
                  size='lg'
                  className='bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 px-8'
                >
                  Ver Servicios
                </Button>
                <Button
                  onClick={() => navigate('/contacto')}
                  size='lg'
                  className='bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold hover:bg-white hover:text-orange-900 transition-all duration-300 px-8'
                >
                  Solicitar Cotización
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
            <ButtonArrowDown />
          </div>
        </div>
      </div>

      {/* Slide 3 - Medio Ambiente */}
      <div className='relative h-full w-full'>
        <img
          src={medioAmbiente}
          alt='Gestión ambiental y sustentabilidad'
          className='h-full w-full object-cover'
          loading='lazy'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/80'>
          <div className='container mx-auto h-full flex items-end pb-24'>
            <motion.div
              className='max-w-3xl px-8 md:px-16 lg:px-24'
              initial='hidden'
              animate='visible'
              variants={slideVariants}
            >
              {/* Badge */}
              <motion.div
                className='inline-block mb-6'
                variants={badgeVariants}
              >
                <span className='bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium'>
                  Gestión Ambiental
                </span>
              </motion.div>

              <Typography
                variant='h1'
                color='white'
                className='font-customFontInter mb-6 text-4xl md:text-5xl lg:text-6xl font-bold'
              >
                Cuidamos el planeta
                <br />
                <span className='text-green-400'>y tu empresa</span>
              </Typography>

              <Typography
                color='white'
                className='mb-8 text-lg md:text-xl opacity-90 font-light leading-relaxed'
              >
                Categorización industrial, auditorías ambientales, gestión de
                residuos y obtención del <strong>CAA</strong>. Cumplimiento de
                la <strong>Ley 11.459</strong> y normativas ambientales.
              </Typography>

              <motion.div
                className='flex flex-col sm:flex-row gap-4'
                variants={buttonVariants}
                initial='hidden'
                animate='visible'
              >
                <Button
                  onClick={() => navigate('/area-medio-ambiente')}
                  size='lg'
                  className='bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold shadow-2xl hover:shadow-green-500/50 transition-all duration-300 px-8'
                >
                  Servicios Ambientales
                </Button>
                <Button
                  onClick={() => navigate('/contacto')}
                  size='lg'
                  className='bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold hover:bg-white hover:text-green-900 transition-all duration-300 px-8'
                >
                  Consultar
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
            <ButtonArrowDown />
          </div>
        </div>
      </div>
    </Carousel>
  )
}

export default CarouselHeader
