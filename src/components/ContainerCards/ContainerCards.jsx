import { motion } from 'framer-motion'
import { services } from '../../lib/data'
import Cards from '../Cards/Cards'

const ContainerCards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className='w-full max-w-7xl mx-auto'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4 md:px-0 auto-rows-fr'>
        {services.map((service) => (
          <motion.div key={service.id} variants={itemVariants} className='h-full'>
            <Cards url={service.url} img={service.img} title={service.title} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ContainerCards
