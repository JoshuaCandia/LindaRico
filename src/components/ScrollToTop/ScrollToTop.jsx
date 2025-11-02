import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Componente que hace scroll al inicio en cada cambio de ruta
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // scroll instantáneo, sin animación
    })
  }, [pathname])

  return null
}

export default ScrollToTop

