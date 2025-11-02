import { useState } from 'react'
import { motion } from 'framer-motion'
import { BsWhatsapp, BsFillTelephoneFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
import { siteConfig } from '../../config/siteConfig'

const ContactContainerCards = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const validateForm = () => {
    const newErrors = {}

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres'
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    // Validar teléfono (opcional pero si se ingresa debe ser válido)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/
      if (!phoneRegex.test(formData.phone) || formData.phone.length < 8) {
        newErrors.phone = 'Teléfono inválido'
      }
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
      return
    }

    // Aquí iría la lógica para enviar el formulario
    // Por ahora simulamos el envío exitoso
    try {
      // Simulación de envío
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <div className='w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='container mx-auto px-6'>
        {/* Tarjetas de contacto */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto'>
          {/* Teléfono */}
          <motion.a
            href={`tel:${siteConfig.contact.phone}`}
            custom={0}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <motion.article
              className='bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-center gap-6 border border-gray-100'
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className='bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg'>
                <BsFillTelephoneFill className='text-4xl text-white' />
              </div>
              <h4 className='text-2xl font-bold text-gray-800'>Teléfono</h4>
              <p className='text-gray-600 font-medium'>
                {siteConfig.contact.phoneFormatted}
              </p>
            </motion.article>
          </motion.a>

          {/* Email */}
          <motion.a
            href={`mailto:${siteConfig.contact.email}`}
            custom={1}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <motion.article
              className='bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-center gap-6 border border-gray-100'
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className='bg-gradient-to-br from-pink-400 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg'>
                <AiTwotoneMail className='text-4xl text-white' />
              </div>
              <h4 className='text-2xl font-bold text-gray-800'>Correo</h4>
              <p className='text-gray-600 font-medium break-all text-center'>
                {siteConfig.contact.email}
              </p>
            </motion.article>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={`https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsapp.number}&text=${encodeURIComponent(siteConfig.contact.whatsapp.defaultMessage)}`}
            target='_blank'
            rel='noopener noreferrer'
            custom={2}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <motion.article
              className='bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center justify-center gap-6 border border-gray-100'
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className='bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg'>
                <BsWhatsapp className='text-4xl text-white' />
              </div>
              <h4 className='text-2xl font-bold text-gray-800'>WhatsApp</h4>
              <p className='text-gray-600 font-medium'>Chateá con nosotros</p>
            </motion.article>
          </motion.a>
        </div>

        {/* Formulario de contacto */}
        <motion.div
          className='max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className='text-3xl md:text-4xl font-bold text-center mb-8 text-BlueNormal'>
            Envianos tu consulta
          </h3>

          {/* Mensajes de estado */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className='mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'
            >
              ✓ ¡Mensaje enviado con éxito! Te contactaremos pronto.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className='mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg'
            >
              ✗ Por favor, corregí los errores en el formulario.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Nombre */}
            <div>
              <label
                htmlFor='name'
                className='block text-gray-700 font-semibold mb-2'
              >
                Nombre completo *
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-BlueNormal focus:ring-2 focus:ring-BlueLight focus:outline-none transition-all`}
                placeholder='Tu nombre'
              />
              {errors.name && (
                <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='block text-gray-700 font-semibold mb-2'
              >
                Email *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-BlueNormal focus:ring-2 focus:ring-BlueLight focus:outline-none transition-all`}
                placeholder='tu@email.com'
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <label
                htmlFor='phone'
                className='block text-gray-700 font-semibold mb-2'
              >
                Teléfono (opcional)
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-BlueNormal focus:ring-2 focus:ring-BlueLight focus:outline-none transition-all`}
                placeholder='+54 11 1234 5678'
              />
              {errors.phone && (
                <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <label
                htmlFor='message'
                className='block text-gray-700 font-semibold mb-2'
              >
                Mensaje *
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='5'
                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-BlueNormal focus:ring-2 focus:ring-BlueLight focus:outline-none transition-all resize-none`}
                placeholder='Contanos sobre tu consulta...'
              ></textarea>
              {errors.message && (
                <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
              )}
            </div>

            {/* Botón de envío */}
            <motion.button
              type='submit'
              className='w-full py-4 bg-gradient-to-r from-BlueNormal to-BlueSemiLight text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Consulta
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactContainerCards
