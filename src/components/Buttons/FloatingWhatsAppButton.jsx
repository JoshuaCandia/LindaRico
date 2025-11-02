import { useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '../../config/siteConfig'

/**
 * Botón flotante moderno de WhatsApp con tooltip y animaciones
 */
const FloatingWhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false)
  const { whatsapp } = siteConfig.contact

  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsapp.number}&text=${encodeURIComponent(whatsapp.defaultMessage)}`

  return (
    <motion.div
      className='fixed bottom-6 right-6 z-50'
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 260 }}
    >
      <div className='relative'>
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className='absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap'
            >
              <div className='bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium'>
                Hablemos por WhatsApp
                <div className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-full'>
                  <div className='border-8 border-transparent border-l-gray-900'></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button with pulse animation */}
        <a
          href={whatsappLink}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className='relative block'
          aria-label='Contactar por WhatsApp'
        >
          {/* Pulse rings */}
          <span className='absolute inset-0 animate-ping bg-green-400 rounded-full opacity-75'></span>
          <span className='absolute inset-0 animate-pulse bg-green-500 rounded-full opacity-75'></span>

          {/* Main button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-2xl hover:shadow-green-400/50 transition-all duration-300'
          >
            <BsWhatsapp className='text-white text-3xl' />
          </motion.div>
        </a>
      </div>
    </motion.div>
  )
}

export default FloatingWhatsAppButton

