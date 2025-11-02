import { motion } from 'framer-motion'
import { BiShield, BiTime, BiCheck, BiAward } from 'react-icons/bi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { MdOutlineVerifiedUser } from 'react-icons/md'

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <BiShield className='text-5xl' />,
      title: '+10 Años',
      description: 'De experiencia en el sector',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <BiTime className='text-5xl' />,
      title: '24-48hs',
      description: 'Tiempo de respuesta garantizado',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <HiOutlineDocumentText className='text-5xl' />,
      title: '100%',
      description: 'Cumplimiento normativo',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <MdOutlineVerifiedUser className='text-5xl' />,
      title: 'Certificado',
      description: 'Profesionales matriculados',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <BiAward className='text-5xl' />,
      title: 'Calidad',
      description: 'Servicio personalizado',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: <BiCheck className='text-5xl' />,
      title: 'Soporte',
      description: 'Asesoramiento continuo',
      color: 'from-cyan-500 to-cyan-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-6'>
        {/* Header */}
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className='inline-block bg-blue-500/10 border border-blue-400/30 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4'>
            ¿Por qué elegirnos?
          </span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 font-customFontInter mb-4'>
            Tu socio de confianza
          </h2>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Comprometidos con la excelencia y el cumplimiento normativo
          </p>
        </motion.div>

        {/* Grid de beneficios */}
        <motion.div
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className='relative group'
            >
              <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center'>
                {/* Icono con gradiente */}
                <div
                  className={`bg-gradient-to-br ${benefit.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {benefit.icon}
                </div>

                {/* Título */}
                <h3 className='text-2xl font-bold text-gray-900 mb-2 font-customFontInter'>
                  {benefit.title}
                </h3>

                {/* Descripción */}
                <p className='text-sm text-gray-600'>{benefit.description}</p>

                {/* Barra decorativa */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs

