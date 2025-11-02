import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

/**
 * Componente de imagen con lazy loading y placeholder
 * @param {string} src - URL de la imagen
 * @param {string} alt - Texto alternativo para accesibilidad
 * @param {string} className - Clases CSS personalizadas
 * @param {string} placeholderColor - Color del placeholder (default: bg-gray-200)
 */
const LazyImage = ({
  src,
  alt,
  className = '',
  placeholderColor = 'bg-gray-200',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px', // Cargar imagen 50px antes de que entre en el viewport
      },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${placeholderColor} ${className}`}
    >
      {!isLoaded && (
        <div className='absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200'></div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          loading='lazy'
          {...props}
        />
      )}
    </div>
  )
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholderColor: PropTypes.string,
}

export default LazyImage

